from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    ProgramViewSet, RegistrationCreateView, BookingCreateView,
    GalleryViewSet, BlogViewSet, InstructorViewSet
)
from .views import (
    InitiatePaymentView, 
    check_payment_status, 
    mpesa_callback,
    query_payment_status
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
    # Payment endpoints
    path('payments/initiate/', InitiatePaymentView.as_view(), name='initiate-payment'),
    path('payments/status/<str:checkout_request_id>/', check_payment_status, name='payment-status'),
    path('payments/mpesa/callback/', mpesa_callback, name='mpesa-callback'),
    path('payments/query/', query_payment_status, name='query-payment'),
]
