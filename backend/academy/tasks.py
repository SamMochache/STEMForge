from celery import shared_task
from django.core.mail import send_mail
from django.conf import settings
import logging
logger = logging.getLogger(__name__)

@shared_task(bind=True, max_retries=3, default_retry_delay=30)
def send_registration_emails(self, registration_id):
    from .models import Registration
    try:
        reg = Registration.objects.get(pk=registration_id)
    except Registration.DoesNotExist:
        return
    subject = f"New registration: {reg.child_name} for {reg.program.title}"
    body = f"""
Parent: {reg.parent_name}
Phone: {reg.parent_phone}
Program: {reg.program.title}
"""
    try:
        send_mail(subject, body, settings.DEFAULT_FROM_EMAIL, [settings.ADMIN_EMAIL])
        send_mail(f"Thanks for registering with STEMForge", f"Hi {reg.parent_name}, we received your registration for {reg.child_name}. We'll be in touch shortly.", settings.DEFAULT_FROM_EMAIL, [reg.parent_email])
    except Exception as exc:
        logger.exception("Failed to send registration emails")
        raise self.retry(exc=exc)
