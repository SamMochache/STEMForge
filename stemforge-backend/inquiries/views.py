import logging

from django.conf import settings
from django.core.mail import send_mail
from rest_framework import generics, status
from rest_framework.response import Response

from .models import Inquiry
from .serializers import InquirySerializer

logger = logging.getLogger(__name__)


class InquiryCreateView(generics.CreateAPIView):
    """
    POST /api/inquiries/

    Receives a partnership inquiry from the frontend contact form.

    Flow, in order:
      1. Validate + save the submission to the database first. This is
         the durable backup — it happens before anything email-related,
         so a submission is captured even if the email step fails.
      2. Attempt to send a notification email to STEMForge staff.
      3. Record whether the email succeeded on the saved record, so
         failures are visible in the admin panel and can be followed up
         on manually rather than silently disappearing.

    The API always returns success to the visitor as long as step 1
    (saving) succeeded — a temporary email outage on our side shouldn't
    be shown to the visitor as "something went wrong."
    """
    queryset = Inquiry.objects.all()
    serializer_class = InquirySerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        # 'website' honeypot field is write_only and not a model field,
        # so drop it before saving.
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
        except Exception as exc:  # noqa: BLE001 - we want to catch any SMTP/network error here
            logger.exception('Failed to send inquiry notification email for inquiry %s', inquiry.id)
            inquiry.email_sent = False
            inquiry.email_error = str(exc)
        inquiry.save(update_fields=['email_sent', 'email_error'])
