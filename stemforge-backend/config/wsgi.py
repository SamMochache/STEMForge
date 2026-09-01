import os
import sys
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

# --- AUTOMATIC STATIC COLLECTION ON VERCEL WAKEUP ---
if os.environ.get('VERCEL') == '1':
    from django.core.management import call_command
    print("=== Auto-running Collectstatic inside Vercel Container ===")
    try:
        call_command('collectstatic', '--noinput', '--clear')
    except Exception as e:
        print(f"Static collection warning: {e}", file=sys.stderr)

application = get_wsgi_application()
