from django.db import models


class Inquiry(models.Model):
    """
    A partnership inquiry submitted through the STEMForge contact form.

    This table is the durable backup: every submission is saved here
    BEFORE the notification email is attempted, so an inquiry is never
    lost even if the email step fails (e.g. SMTP is misconfigured or
    temporarily down). `email_sent` records whether the notification
    email successfully went out, so staff can spot and manually follow
    up on any that didn't.
    """

    # School information
    school_name = models.CharField(max_length=255)
    contact_name = models.CharField(max_length=255)
    contact_title = models.CharField(max_length=255)
    school_type = models.CharField(max_length=100)
    student_population = models.CharField(max_length=100, blank=True)

    # Contact information
    phone = models.CharField(max_length=50)
    email = models.EmailField()

    # STEM interest
    current_stem = models.TextField(blank=True)
    interested_solutions = models.JSONField(default=list, blank=True)

    # Partnership intent
    why_partner = models.TextField()
    preferred_time = models.CharField(max_length=100, blank=True)
    additional_notes = models.TextField(blank=True)

    # Bookkeeping
    submitted_at = models.DateTimeField(auto_now_add=True)
    email_sent = models.BooleanField(default=False)
    email_error = models.TextField(blank=True)

    class Meta:
        ordering = ['-submitted_at']

    def __str__(self):
        return f'{self.school_name} — {self.contact_name} ({self.submitted_at:%Y-%m-%d})'


class Lead(models.Model):
    """
    A low-commitment lead: someone who gave just their email (and
    optionally a name) in exchange for a free resource, rather than
    filling out the full partnership inquiry form.

    This exists deliberately as an easier first step than Inquiry —
    asking a stranger for their institution's budget commitment in one
    move is a big ask; asking for an email in exchange for something
    useful is a much smaller one, and warms them up for the bigger ask
    later.
    """
    email = models.EmailField()
    name = models.CharField(max_length=255, blank=True)
    # Which lead magnet / free resource they signed up for. Lets you
    # track which offer is actually converting.
    source = models.CharField(max_length=100, default='starter_guide')

    submitted_at = models.DateTimeField(auto_now_add=True)
    email_sent = models.BooleanField(default=False)
    email_error = models.TextField(blank=True)

    class Meta:
        ordering = ['-submitted_at']

    def __str__(self):
        return f'{self.email} — {self.source} ({self.submitted_at:%Y-%m-%d})'
