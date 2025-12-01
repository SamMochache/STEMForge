# backend/academy/serializers.py
from rest_framework import serializers
from .models import Payment, Program, Registration, Booking, GalleryItem, BlogPost, Instructor

class ProgramSerializer(serializers.ModelSerializer):
    category_display = serializers.CharField(source='get_category_display', read_only=True)
    
    class Meta:
        model = Program
        fields = [
            'id', 'title', 'slug', 'summary', 'category', 'category_display',
            'age_min', 'age_max', 'duration_weeks', 'price', 'features', 
            'hero_image', 'is_published'
        ]
        read_only_fields = ['slug', 'category_display']

class InstructorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instructor
        fields = [
            'id', 'full_name', 'title', 'bio', 'photo', 
            'expertise', 'experience', 'education', 'email', 'location'
        ]

class RegistrationSerializer(serializers.ModelSerializer):
    program = serializers.PrimaryKeyRelatedField(queryset=Program.objects.filter(is_published=True))
    
    class Meta:
        model = Registration
        fields = [
            'id', 'parent_name', 'parent_email', 'parent_phone', 'child_name', 'child_age',
            'program', 'preferred_schedule', 'notes', 'status', 'created_at'
        ]
        read_only_fields = ['status', 'created_at', 'id']

    def validate_parent_phone(self, value):
        digits = ''.join(ch for ch in value if ch.isdigit())
        if len(digits) < 9:
            raise serializers.ValidationError("Enter a valid phone number.")
        return digits

    def create(self, validated_data):
        from django.db import transaction
        with transaction.atomic():
            reg = Registration.objects.create(**validated_data)
            return reg

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'
        read_only_fields = ['is_confirmed', 'created_at']

class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryItem
        fields = '__all__'

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = ['id', 'title', 'slug', 'excerpt', 'content', 'hero', 'is_published', 'published_at']


# Add to backend/academy/serializers.py

class PaymentSerializer(serializers.ModelSerializer):
    registration_id = serializers.IntegerField(source='registration.id', read_only=True)
    program_title = serializers.CharField(source='registration.program.title', read_only=True)
    
    class Meta:
        model = Payment
        fields = [
            'id', 'registration_id', 'program_title', 'amount', 
            'phone_number', 'checkout_request_id', 'merchant_request_id',
            'mpesa_receipt_number', 'status', 'result_desc', 
            'created_at', 'callback_received_at'
        ]
        read_only_fields = ['id', 'created_at']