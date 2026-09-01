from django.urls import path

from .views import InquiryCreateView

urlpatterns = [
    path('inquiries/', InquiryCreateView.as_view(), name='inquiry-create'),
]
