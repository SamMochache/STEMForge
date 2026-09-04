import logging
import os

from django.conf import settings
from django.core.mail import send_mail, EmailMessage
from rest_framework import generics, status
from rest_framework.response import Response

from .models import Inquiry, Lead
from .serializers import InquirySerializer, LeadSerializer

logger = logging.getLogger(__name__)


# The PDF is bundled with the backend and attached directly to the email.
# This avoids requiring public file hosting or a separate download domain.
GUIDE_PDF_PATH = os.path.join(
    os.path.dirname(__file__), 'assets', 'stem-partnership-starter-guide.pdf'
)

GUIDE_EMAIL_BODY = """\
Hi {name},

Thanks for requesting the STEM Partnership Starter Guide — it's attached
as a PDF.

It covers what to actually look for in any STEM provider (not just us),
a realistic budget range for the Kenyan market, and how STEMForge
specifically answers the questions we tell you to ask.

If you'd like to talk through any of it for your specific school, no
obligation — just reply to this email, or book a free discovery call.

— STEMForge
Westlands, Nairobi, Kenya
"""


class InquiryCreateView(generics.CreateAPIView):
    """POST /api/inquiries/ — receive and persist a partnership inquiry."""
    queryset = Inquiry.objects.all()
    serializer_class = InquirySerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        validated_data = {k: v for k, v in serializer.validated_data.items() if k != 'website'}
        inquiry = Inquiry.objects.create(**validated_data)
        self._send_notification_email(inquiry)
        return Response(
            {'status': 'received', 'id': inquiry.id},
            status=status.HTTP_201_CREATED,
        )

    def _send_notification_email(self, inquiry: Inquiry) -> None:
        subject = f'New STEMForge partnership inquiry: {inquiry.school_name}'
        body = (
            f'A new partnership inquiry was submitted on the STEMForge website.\n\n'
            f'School: {inquiry.school_name} ({inquiry.school_type})\n'
            f'Contact: {inquiry.contact_name}, {inquiry.contact_title}\n'
            f'Phone: {inquiry.phone}\n'
            f'Email: {inquiry.email}\n'
            f'Student population: {inquiry.student_population or "—"}\n\n'
            f'Interested solutions: {", ".join(inquiry.interested_solutions) or "—"}\n'
            f'Current STEM activities: {inquiry.current_stem or "—"}\n\n'
            f'Why they want to partner:\n{inquiry.why_partner}\n\n'
            f'Preferred call time: {inquiry.preferred_time or "—"}\n'
            f'Additional notes: {inquiry.additional_notes or "—"}\n\n'
            f'Submitted at: {inquiry.submitted_at}\n'
            f'(Reference ID: {inquiry.id})'
        )
        try:
            send_mail(
                subject=subject,
                message=body,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=settings.INQUIRY_NOTIFICATION_RECIPIENTS,
                fail_silently=False,
            )
            inquiry.email_sent = True
            inquiry.email_error = ''
        except Exception as exc:  # noqa: BLE001
            logger.exception('Failed to send inquiry notification email for inquiry %s', inquiry.id)
            inquiry.email_sent = False
            inquiry.email_error = str(exc)
        inquiry.save(update_fields=['email_sent', 'email_error'])


class LeadCreateView(generics.CreateAPIView):
    """POST /api/leads/ — save a lead and email the bundled PDF guide."""
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        validated_data = {k: v for k, v in serializer.validated_data.items() if k != 'website'}
        lead = Lead.objects.create(**validated_data)

        self._send_guide_email(lead)
        self._notify_staff(lead)

        return Response({'status': 'received', 'id': lead.id}, status=status.HTTP_201_CREATED)

    def _send_guide_email(self, lead: Lead) -> None:
        try:
            if not os.path.isfile(GUIDE_PDF_PATH):
                raise FileNotFoundError(
                    f'STEM Partnership Starter Guide PDF not found at {GUIDE_PDF_PATH}'
                )

            email = EmailMessage(
                subject='Your STEM Partnership Starter Guide',
                body=GUIDE_EMAIL_BODY.format(name=lead.name or 'there'),
                from_email=settings.DEFAULT_FROM_EMAIL,
                to=[lead.email],
            )

            with open(GUIDE_PDF_PATH, 'rb') as guide_file:
                email.attach(
                    'STEMForge-Partnership-Starter-Guide.pdf',
                    guide_file.read(),
                    'application/pdf',
                )

            email.send(fail_silently=False)
            lead.email_sent = True
            lead.email_error = ''
        except Exception as exc:  # noqa: BLE001
            logger.exception('Failed to send starter guide email for lead %s', lead.id)
            lead.email_sent = False
            lead.email_error = str(exc)
        lead.save(update_fields=['email_sent', 'email_error'])

    def _notify_staff(self, lead: Lead) -> None:
        try:
            send_mail(
                subject=f'New lead: {lead.email}',
                message=f'{lead.name or "(no name given)"} <{lead.email}> requested "{lead.source}".',
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=settings.INQUIRY_NOTIFICATION_RECIPIENTS,
                fail_silently=True,
            )
        except Exception:  # noqa: BLE001
            logger.exception('Failed to send staff lead notification for lead %s', lead.id)
