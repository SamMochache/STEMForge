# backend/core/__init__.py

# Import Celery app for auto-discovery
from .celery import app as celery_app

__all__ = ('celery_app',)