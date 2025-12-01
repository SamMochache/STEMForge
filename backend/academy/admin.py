from django.contrib import admin
from .models import Program, Registration, Booking, GalleryItem, BlogPost, Instructor

@admin.register(Program)
class ProgramAdmin(admin.ModelAdmin):
    list_display = ('title','is_published','price','duration_weeks','created_at')
    list_filter = ('is_published','duration_weeks')
    prepopulated_fields = {"slug": ("title",)}
    search_fields = ('title','summary')
    ordering = ('-created_at',)

@admin.register(Registration)
class RegistrationAdmin(admin.ModelAdmin):
    list_display = ('child_name','program','parent_name','parent_phone','status','created_at')
    list_filter = ('status','program')
    search_fields = ('child_name','parent_name','parent_phone')

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ('school_name','contact_person','preferred_date','is_confirmed','created_at')
    search_fields = ('school_name','contact_person')

@admin.register(GalleryItem)
class GalleryAdmin(admin.ModelAdmin):
    list_display = ('title','is_video','is_public','created_at')

@admin.register(BlogPost)
class BlogAdmin(admin.ModelAdmin):
    list_display = ('title','is_published','published_at')
    prepopulated_fields = {"slug": ("title",)}

@admin.register(Instructor)
class InstructorAdmin(admin.ModelAdmin):
    list_display = ('full_name','title')

# backend/academy/admin.py
from .models import Payment

@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
    list_display = ('id', 'registration', 'amount', 'phone_number', 'status', 'mpesa_receipt_number', 'created_at')
    list_filter = ('status', 'created_at')
    search_fields = ('phone_number', 'mpesa_receipt_number', 'checkout_request_id')
    readonly_fields = ('checkout_request_id', 'merchant_request_id', 'mpesa_receipt_number', 'created_at', 'callback_received_at')