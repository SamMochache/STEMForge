from django.dispatch import receiver
from django.db.models.signals import post_save
from .models import Registration
from .tasks import send_registration_emails

@receiver(post_save, sender=Registration)
def on_registration_created(sender, instance, created, **kwargs):
    if created:
        try:
            send_registration_emails.delay(instance.id)
        except Exception:
            pass
