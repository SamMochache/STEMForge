from django.contrib import admin
from django.urls import path, include
from academy import payments

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('academy.urls')),
    path('api/payments/mpesa/webhook/', payments.mpesa_webhook, name='mpesa-webhook'),
]
