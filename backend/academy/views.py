from rest_framework import viewsets, generics
from rest_framework.permissions import AllowAny
from rest_framework.throttling import AnonRateThrottle, UserRateThrottle

from .models import Program, Registration, Booking, GalleryItem, BlogPost, Instructor
from .serializers import (
    ProgramSerializer, RegistrationSerializer, BookingSerializer,
    GallerySerializer, BlogSerializer, InstructorSerializer
)

class PublicAnonThrottle(AnonRateThrottle):
    rate = '20/hour'

class PublicUserThrottle(UserRateThrottle):
    rate = '200/hour'

class ProgramViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Program.objects.filter(is_published=True).order_by('-created_at')
    serializer_class = ProgramSerializer
    permission_classes = [AllowAny]
    throttle_classes = [PublicAnonThrottle, PublicUserThrottle]
    lookup_field = 'slug'
    lookup_value_regex = '[^/]+'  # Allow any characters in slug except forward slash

class RegistrationCreateView(generics.CreateAPIView):
    queryset = Registration.objects.all()
    serializer_class = RegistrationSerializer
    permission_classes = [AllowAny]
    throttle_classes = [PublicAnonThrottle]

class BookingCreateView(generics.CreateAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [AllowAny]
    throttle_classes = [PublicAnonThrottle]

class GalleryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = GalleryItem.objects.filter(is_public=True).order_by('-created_at')
    serializer_class = GallerySerializer
    permission_classes = [AllowAny]

class BlogViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = BlogPost.objects.filter(is_published=True).order_by('-published_at')
    serializer_class = BlogSerializer
    permission_classes = [AllowAny]
    throttle_classes = [PublicAnonThrottle, PublicUserThrottle]
    lookup_field = 'slug'
    lookup_value_regex = '[^/]+'  # Allow any characters in slug except forward slash

class InstructorViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Instructor.objects.all()
    serializer_class = InstructorSerializer
    permission_classes = [AllowAny]