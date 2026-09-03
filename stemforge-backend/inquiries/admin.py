from django.contrib import admin

from .models import Inquiry, Lead


@admin.register(Inquiry)
class InquiryAdmin(admin.ModelAdmin):
    list_display = (
        'school_name', 'contact_name', 'email', 'phone',
        'submitted_at', 'email_sent',
    )
    list_filter = ('email_sent', 'school_type', 'submitted_at')
    search_fields = ('school_name', 'contact_name', 'email', 'phone')
    readonly_fields = [f.name for f in Inquiry._meta.fields]

    def has_add_permission(self, request):
        # Inquiries only ever come in through the public form.
        return False


@admin.register(Lead)
class LeadAdmin(admin.ModelAdmin):
    list_display = ('email', 'name', 'source', 'submitted_at', 'email_sent')
    list_filter = ('source', 'email_sent', 'submitted_at')
    search_fields = ('email', 'name')
    readonly_fields = [f.name for f in Lead._meta.fields]

    def has_add_permission(self, request):
        return False