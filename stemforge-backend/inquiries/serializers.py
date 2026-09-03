from rest_framework import serializers

from .models import Inquiry, Lead


class InquirySerializer(serializers.ModelSerializer):
    # Honeypot field: a real visitor never sees or fills this in (it's
    # hidden via CSS on the frontend). Simple bots that auto-fill every
    # input on a form will fill it, and we silently reject the submission.
    # See README "Spam protection" section for the matching frontend change.
    website = serializers.CharField(required=False, allow_blank=True, write_only=True)

    class Meta:
        model = Inquiry
        fields = [
            'school_name', 'contact_name', 'contact_title', 'school_type',
            'student_population', 'phone', 'email', 'current_stem',
            'interested_solutions', 'why_partner', 'preferred_time',
            'additional_notes', 'website',
        ]

    def validate_website(self, value):
        if value:
            # Honeypot was filled in -> almost certainly a bot.
            raise serializers.ValidationError('Spam detected.')
        return value


class LeadSerializer(serializers.ModelSerializer):
    website = serializers.CharField(required=False, allow_blank=True, write_only=True)

    class Meta:
        model = Lead
        fields = ['email', 'name', 'source', 'website']

    def validate_website(self, value):
        if value:
            raise serializers.ValidationError('Spam detected.')
        return value