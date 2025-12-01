# backend/academy/models.py - Updated Instructor Model
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
    # Category choices
    CATEGORY_CHOICES = [
        ('bootstrap', 'Bootstrap (Free)'),
        ('beginner', 'Beginner'),
        ('intermediate', 'Intermediate'),
        ('advanced', 'Advanced'),
        ('elite', 'Elite'),
    ]

    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=220, unique=True, blank=True)
    summary = models.TextField()
    category = models.CharField(
        max_length=20, 
        choices=CATEGORY_CHOICES, 
        default='intermediate',
        db_index=True
    )
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
            models.Index(fields=['category']),
        ]

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)[:150]
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.title} ({self.get_category_display()})"

class Instructor(TimestampedModel):
    full_name = models.CharField(max_length=120)
    bio = models.TextField(blank=True)
    photo = models.ImageField(upload_to='instructors/', blank=True, null=True)
    title = models.CharField(max_length=80, blank=True)
    
    # NEW FIELDS - Add these
    expertise = models.JSONField(
        default=list, 
        blank=True,
        help_text="List of skills/expertise areas (e.g., ['Python', 'Machine Learning', 'AI'])"
    )
    experience = models.CharField(
        max_length=50, 
        blank=True,
        help_text="Years of experience (e.g., '12+ years')"
    )
    education = models.CharField(
        max_length=150, 
        blank=True,
        help_text="Education background (e.g., 'PhD Computer Science - MIT')"
    )
    email = models.EmailField(blank=True)
    location = models.CharField(
        max_length=100, 
        blank=True,
        default='Nairobi, Kenya'
    )

    class Meta:
        ordering = ['full_name']

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

# Add to backend/academy/models.py

class Payment(TimestampedModel):
    """
    Track M-Pesa payments for registrations
    """
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('completed', 'Completed'),
        ('failed', 'Failed'),
        ('cancelled', 'Cancelled'),
    ]
    
    registration = models.ForeignKey(
        Registration, 
        on_delete=models.PROTECT, 
        related_name='payments'
    )
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    phone_number = models.CharField(max_length=15)
    
    # M-Pesa transaction details
    checkout_request_id = models.CharField(max_length=100, unique=True, db_index=True)
    merchant_request_id = models.CharField(max_length=100, blank=True)
    mpesa_receipt_number = models.CharField(max_length=50, blank=True, null=True)
    
    # Status tracking
    status = models.CharField(
        max_length=20, 
        choices=STATUS_CHOICES, 
        default='pending',
        db_index=True
    )
    result_desc = models.TextField(blank=True)
    
    # Metadata
    callback_received_at = models.DateTimeField(null=True, blank=True)
    
    class Meta:
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['checkout_request_id']),
            models.Index(fields=['status']),
            models.Index(fields=['registration', 'status']),
        ]
    
    def __str__(self):
        return f'Payment {self.id} - {self.registration.child_name} - {self.status}'
    
    @property
    def is_successful(self):
        return self.status == 'completed'