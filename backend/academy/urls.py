from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    ProgramViewSet, RegistrationCreateView, BookingCreateView,
    GalleryViewSet, BlogViewSet, InstructorViewSet
)

router = DefaultRouter()
router.register('programs', ProgramViewSet, basename='programs')
router.register('gallery', GalleryViewSet, basename='gallery')
router.register('blog', BlogViewSet, basename='blog')
router.register('instructors', InstructorViewSet, basename='instructors')

urlpatterns = [
    path('', include(router.urls)),
    path('registrations/', RegistrationCreateView.as_view(), name='registrations'),
    path('bookings/', BookingCreateView.as_view(), name='bookings'),
]
