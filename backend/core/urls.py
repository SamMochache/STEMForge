from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from academy import payments
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('academy.urls')),
    path('api/payments/mpesa/webhook/', payments.mpesa_webhook, name='mpesa-webhook'),
]
# Serve media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)