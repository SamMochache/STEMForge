# backend/academy/tasks.py - Complete with Payment Emails
from celery import shared_task
from django.core.mail import send_mail
from django.conf import settings
import logging

logger = logging.getLogger(__name__)


@shared_task(bind=True, max_retries=3, default_retry_delay=30)
def send_registration_emails(self, registration_id):
    """Send emails when a new registration is created"""
    from .models import Registration
    
    try:
        reg = Registration.objects.select_related('program').get(pk=registration_id)
    except Registration.DoesNotExist:
        logger.error(f"Registration {registration_id} not found")
        return
    
    # Email to admin
    admin_subject = f"New Registration: {reg.child_name} for {reg.program.title}"
    admin_body = f"""
New student registration received:

Parent: {reg.parent_name}
Email: {reg.parent_email}
Phone: {reg.parent_phone}

Child: {reg.child_name}
Age: {reg.child_age}

Program: {reg.program.title}
Preferred Schedule: {reg.preferred_schedule or 'Not specified'}

Notes: {reg.notes or 'None'}

Registration ID: {reg.id}
Status: {reg.status}
Created: {reg.created_at}
"""
    
    try:
        send_mail(
            admin_subject,
            admin_body,
            settings.DEFAULT_FROM_EMAIL,
            [settings.ADMIN_EMAIL],
            fail_silently=False,
        )
        logger.info(f"Admin notification sent for registration {reg.id}")
    except Exception as exc:
        logger.exception("Failed to send admin email")
        raise self.retry(exc=exc)
    
    # Email to parent
    parent_subject = f"Registration Received - {reg.program.title}"
    parent_body = f"""
Dear {reg.parent_name},

Thank you for registering {reg.child_name} with STEMForge Academy!

Program: {reg.program.title}
Duration: {reg.program.duration_weeks} weeks
Age Range: {reg.program.age_min}-{reg.program.age_max} years

Our admissions team will contact you within 48 hours to confirm your enrollment and provide next steps.

If you have any questions, please contact us:
Email: {settings.ADMIN_EMAIL}
Phone: +254 740 532 120

Best regards,
STEMForge Academy Team

---
This is an automated message. Please do not reply directly to this email.
"""
    
    try:
        send_mail(
            parent_subject,
            parent_body,
            settings.DEFAULT_FROM_EMAIL,
            [reg.parent_email],
            fail_silently=False,
        )
        logger.info(f"Parent confirmation sent for registration {reg.id}")
    except Exception as exc:
        logger.exception("Failed to send parent email")
        raise self.retry(exc=exc)


@shared_task(bind=True, max_retries=3, default_retry_delay=30)
def send_payment_confirmation_email(self, payment_id):
    """Send payment confirmation emails to parent and admin"""
    from .models import Payment
    
    try:
        payment = Payment.objects.select_related(
            'registration',
            'registration__program'
        ).get(pk=payment_id)
    except Payment.DoesNotExist:
        logger.error(f"Payment {payment_id} not found")
        return
    
    # Only send if payment is completed
    if payment.status != 'completed':
        logger.warning(f"Payment {payment_id} status is {payment.status}, not sending email")
        return
    
    reg = payment.registration
    
    # Email to parent
    parent_subject = f"Payment Confirmed - STEMForge Academy"
    parent_body = f"""
Dear {reg.parent_name},

Your payment has been successfully received!

PAYMENT DETAILS:
Amount Paid: KSh {payment.amount:,.2f}
M-Pesa Receipt: {payment.mpesa_receipt_number}
Payment Date: {payment.callback_received_at.strftime('%B %d, %Y at %I:%M %p')}

PROGRAM DETAILS:
Student: {reg.child_name}
Program: {reg.program.title}
Duration: {reg.program.duration_weeks} weeks

Your enrollment is now confirmed. Our team will contact you shortly with:
- Program start date and schedule
- Required materials list
- Access to student portal
- Orientation details

If you have any questions, please contact us:
Email: {settings.ADMIN_EMAIL}
Phone: +254 740 532 120

Thank you for choosing STEMForge Academy!

Best regards,
STEMForge Academy Team

---
Keep this email for your records.
"""
    
    try:
        send_mail(
            parent_subject,
            parent_body,
            settings.DEFAULT_FROM_EMAIL,
            [reg.parent_email],
            fail_silently=False,
        )
        logger.info(f"Payment confirmation sent to {reg.parent_email}")
    except Exception as exc:
        logger.exception("Failed to send payment confirmation to parent")
        raise self.retry(exc=exc)
    
    # Email to admin
    admin_subject = f"Payment Received: {reg.child_name} - KSh {payment.amount:,.2f}"
    admin_body = f"""
New payment received via M-Pesa!

PAYMENT DETAILS:
Amount: KSh {payment.amount:,.2f}
M-Pesa Receipt: {payment.mpesa_receipt_number}
Phone Number: {payment.phone_number}
Payment ID: {payment.id}
Callback Received: {payment.callback_received_at}

STUDENT DETAILS:
Student Name: {reg.child_name}
Age: {reg.child_age}
Parent: {reg.parent_name}
Email: {reg.parent_email}
Phone: {reg.parent_phone}

PROGRAM DETAILS:
Program: {reg.program.title}
Duration: {reg.program.duration_weeks} weeks
Registration ID: {reg.id}

NEXT STEPS:
1. Confirm enrollment via admin panel
2. Send program start details to parent
3. Provide student portal access

View in admin: http://localhost:8000/admin/academy/payment/{payment.id}/
"""
    
    try:
        send_mail(
            admin_subject,
            admin_body,
            settings.DEFAULT_FROM_EMAIL,
            [settings.ADMIN_EMAIL],
            fail_silently=False,
        )
        logger.info(f"Payment notification sent to admin for payment {payment.id}")
    except Exception as exc:
        logger.exception("Failed to send payment notification to admin")
        raise self.retry(exc=exc)


@shared_task(bind=True, max_retries=3, default_retry_delay=60)
def send_payment_failed_notification(self, payment_id):
    """Notify admin when payment fails"""
    from .models import Payment
    
    try:
        payment = Payment.objects.select_related(
            'registration',
            'registration__program'
        ).get(pk=payment_id)
    except Payment.DoesNotExist:
        return
    
    reg = payment.registration
    
    admin_subject = f"Payment Failed: {reg.child_name}"
    admin_body = f"""
A payment attempt has failed.

PAYMENT DETAILS:
Amount: KSh {payment.amount:,.2f}
Phone: {payment.phone_number}
Status: {payment.status}
Result: {payment.result_desc or 'No description'}
CheckoutRequestID: {payment.checkout_request_id}

STUDENT:
Name: {reg.child_name}
Parent: {reg.parent_name} ({reg.parent_email})
Program: {reg.program.title}

ACTION REQUIRED:
Contact parent to retry payment or arrange alternative payment method.
"""
    
    try:
        send_mail(
            admin_subject,
            admin_body,
            settings.DEFAULT_FROM_EMAIL,
            [settings.ADMIN_EMAIL],
            fail_silently=False,
        )
    except Exception as exc:
        logger.exception("Failed to send payment failure notification")
        raise self.retry(exc=exc)