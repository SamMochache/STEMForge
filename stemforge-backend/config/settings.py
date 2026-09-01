"""
Django settings for the STEMForge inquiry backend.

This backend has exactly one job: receive the partnership inquiry form
from the STEMForge frontend, email it to STEMForge staff, and keep a
durable backup copy in the database (so an inquiry is never silently
lost even if the email fails to send).

All secrets and environment-specific values are read from environment
variables (see .env.example) — never hardcode real credentials here.
"""
import os
from pathlib import Path

import dj_database_url
from dotenv import load_dotenv

load_dotenv()  # reads a local .env file in development; in production, set real env vars

BASE_DIR = Path(__file__).resolve().parent.parent

# --- Core security settings -------------------------------------------------
# --- Core security settings -------------------------------------------------

# ADD THESE TWO LINES RIGHT HERE:
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY')
DEBUG = os.environ.get('DJANGO_DEBUG', 'False') == 'True'

# --- ALLOWED HOSTS CONFIGURATION ---
# 1. Pull basic hosts from your environment variables
ALLOWED_HOSTS = [host.strip() for host in os.environ.get('DJANGO_ALLOWED_HOSTS', '').split(',') if host.strip()]

# 2. Add local testing fallback defaults if they aren't in the .env file
if 'localhost' not in ALLOWED_HOSTS:
    ALLOWED_HOSTS.extend(['127.0.0.1', 'localhost'])

# 3. CRITICAL: Automatically read Vercel's system domain if it exists
VERCEL_URL = os.environ.get('VERCEL_URL')
if VERCEL_URL:
    ALLOWED_HOSTS.append(VERCEL_URL)        # Catches the exact branch deployment URL
    ALLOWED_HOSTS.append('.vercel.app')     # Wildcard catches ANY subdomain on Vercel


# --- CSRF & CORS TRUSTED ORIGINS ---
# Extract base origins from your environment
CORS_ALLOWED_ORIGINS = [origin.strip() for origin in os.environ.get('CORS_ALLOWED_ORIGINS', '').split(',') if origin.strip()]

# Django requires CSRF trusted origins to be explicitly listed with protocols
CSRF_TRUSTED_ORIGINS = [origin for origin in CORS_ALLOWED_ORIGINS]

# If running on Vercel, trust the Vercel system-generated domains for API requests too
if VERCEL_URL:
    CSRF_TRUSTED_ORIGINS.append(f"https://{VERCEL_URL}")
    CSRF_TRUSTED_ORIGINS.append("https://*.vercel.app")
# --- Applications -------------------------------------------------------------

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'corsheaders',
    'inquiries',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'corsheaders.middleware.CorsMiddleware',  # must sit high, before CommonMiddleware
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'config.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'config.wsgi.application'

# --- Database -----------------------------------------------------------------
# If a DATABASE_URL env var is set (e.g. a Neon Postgres connection
# string), use it. Otherwise fall back to a local SQLite file — handy
# for quick local development without needing Postgres running.
#
# Neon connection strings look like:
#   postgresql://user:password@ep-xxxx.region.aws.neon.tech/dbname?sslmode=require
#
# `conn_max_age=600` keeps connections alive for 10 minutes instead of
# reopening one per request, which matters for Neon's connection limits.
# `ssl_require=True` enforces the TLS connection Neon requires.

DATABASE_URL = os.environ.get('DATABASE_URL')

if DATABASE_URL:
    DATABASES = {
        'default': dj_database_url.parse(
            DATABASE_URL,
            conn_max_age=600,
            ssl_require=True,
        )
    }
else:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }

# --- Password validation (kept default; only the admin site uses auth) -------

AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

# --- Internationalization -------------------------------------------------------

LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'Africa/Nairobi'
USE_I18N = True
USE_TZ = True

STATIC_URL = 'static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'  # The folder where Django will gather static files

# Optimized storage for WhiteNoise (compresses files for faster loads)
STORAGES = {
    "staticfiles": {
        "BACKEND": "whitenoise.storage.CompressedStaticFilesStorage",
    },
}



DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


# --- Django REST Framework ------------------------------------------------------

REST_FRAMEWORK = {
    'DEFAULT_THROTTLE_CLASSES': [
        'rest_framework.throttling.AnonRateThrottle',
    ],
    'DEFAULT_THROTTLE_RATES': {
        # Basic abuse protection: a given IP can only submit the public
        # inquiry endpoint a limited number of times per hour.
        'anon': '10/hour',
    },
}

# --- Email ------------------------------------------------------------------
# Configure a real SMTP provider in production (e.g. SendGrid, Resend,
# Gmail with an app password, Zoho Mail, etc). In development, emails
# are printed to the console instead of actually being sent.

if os.environ.get('EMAIL_BACKEND') == 'smtp':
    EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
    EMAIL_HOST = os.environ.get('EMAIL_HOST', '')
    EMAIL_PORT = int(os.environ.get('EMAIL_PORT', 587))
    EMAIL_USE_TLS = os.environ.get('EMAIL_USE_TLS', 'True') == 'True'
    EMAIL_HOST_USER = os.environ.get('EMAIL_HOST_USER', '')
    EMAIL_HOST_PASSWORD = os.environ.get('EMAIL_HOST_PASSWORD', '')
else:
    # Safe default for local development: prints emails to the terminal
    # instead of sending them, so nothing breaks if SMTP isn't configured yet.
    EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

DEFAULT_FROM_EMAIL = os.environ.get('DEFAULT_FROM_EMAIL', 'no-reply@stemforge.co.ke')

# Where inquiry notification emails get sent. Comma-separated list so you
# can send to admissions@ and support@ at once.
INQUIRY_NOTIFICATION_RECIPIENTS = [
    e.strip() for e in os.environ.get(
        'INQUIRY_NOTIFICATION_RECIPIENTS',
        'admissions@stemforge.co.ke'
    ).split(',') if e.strip()
]
