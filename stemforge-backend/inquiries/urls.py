from django.urls import path

from .views import InquiryCreateView, LeadCreateView

urlpatterns = [
    path('inquiries/', InquiryCreateView.as_view(), name='inquiry-create'),
    path('leads/', LeadCreateView.as_view(), name='lead-create'),
]
