from django.db import models
from django.utils.text import slugify

def upload_to_program(instance, filename):
    return f'programs/{instance.slug}/{filename}'

class TimestampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

class Program(TimestampedModel):
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=220, unique=True, blank=True)
    summary = models.TextField()
    age_min = models.PositiveSmallIntegerField(null=True, blank=True)
    age_max = models.PositiveSmallIntegerField(null=True, blank=True)
    duration_weeks = models.PositiveSmallIntegerField(default=12)
    price = models.PositiveIntegerField(null=True, blank=True)
    features = models.JSONField(default=list, blank=True)
    hero_image = models.ImageField(upload_to=upload_to_program, null=True, blank=True)
    is_published = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['slug']),
            models.Index(fields=['is_published']),
        ]

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)[:150]
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

class Instructor(TimestampedModel):
    full_name = models.CharField(max_length=120)
    bio = models.TextField(blank=True)
    photo = models.ImageField(upload_to='instructors/', blank=True, null=True)
    title = models.CharField(max_length=80, blank=True)

    def __str__(self):
        return self.full_name

class Registration(TimestampedModel):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('confirmed', 'Confirmed'),
        ('paid', 'Paid'),
        ('cancelled', 'Cancelled'),
    ]
    parent_name = models.CharField(max_length=120)
    parent_email = models.EmailField()
    parent_phone = models.CharField(max_length=32)
    child_name = models.CharField(max_length=120)
    child_age = models.PositiveSmallIntegerField()
    program = models.ForeignKey(Program, on_delete=models.PROTECT, related_name='registrations')
    preferred_schedule = models.CharField(max_length=100, blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending', db_index=True)
    notes = models.TextField(blank=True)

    class Meta:
        ordering = ['-created_at']
        indexes = [models.Index(fields=['status']), models.Index(fields=['parent_phone'])]

    def __str__(self):
        return f'{self.child_name} ({self.program})'

class Booking(TimestampedModel):
    school_name = models.CharField(max_length=220)
    contact_person = models.CharField(max_length=120)
    phone = models.CharField(max_length=32)
    email = models.EmailField()
    preferred_date = models.DateField(null=True, blank=True)
    message = models.TextField(blank=True)
    is_confirmed = models.BooleanField(default=False)

    def __str__(self):
        return f'Booking: {self.school_name} - {self.preferred_date}'

class GalleryItem(TimestampedModel):
    title = models.CharField(max_length=200, blank=True)
    description = models.TextField(blank=True)
    media = models.FileField(upload_to='gallery/')
    is_video = models.BooleanField(default=False)
    is_public = models.BooleanField(default=True)

    def __str__(self):
        return self.title or self.media.name

class BlogPost(TimestampedModel):
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=220, unique=True, blank=True)
    excerpt = models.TextField(blank=True)
    content = models.TextField()
    hero = models.ImageField(upload_to='blog/', null=True, blank=True)
    is_published = models.BooleanField(default=False)
    published_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        ordering = ['-published_at']

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)[:200]
        super().save(*args, **kwargs)
