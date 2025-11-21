from rest_framework import serializers
from .models import Program, Registration, Booking, GalleryItem, BlogPost, Instructor

class ProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = Program
        fields = [
            'id','title','slug','summary','age_min','age_max','duration_weeks',
            'price','features','hero_image','is_published'
        ]
        read_only_fields = ['slug']

class InstructorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instructor
        fields = '__all__'

class RegistrationSerializer(serializers.ModelSerializer):
    program = serializers.PrimaryKeyRelatedField(queryset=Program.objects.filter(is_published=True))
    class Meta:
        model = Registration
        fields = [
            'id','parent_name','parent_email','parent_phone','child_name','child_age',
            'program','preferred_schedule','notes','status','created_at'
        ]
        read_only_fields = ['status','created_at','id']

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
        read_only_fields = ['is_confirmed','created_at']

class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryItem
        fields = '__all__'

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = ['id','title','slug','excerpt','content','hero','is_published','published_at']
