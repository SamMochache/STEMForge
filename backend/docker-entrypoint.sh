#!/bin/bash

echo "Waiting for Postgres..."

# Poll database before starting Django
while ! nc -z $POSTGRES_HOST $POSTGRES_PORT; do
  sleep 0.2
done

echo "Postgres is available!"

# Run migrations automatically (optional)
python manage.py migrate --noinput

# Collect static files (optional)
python manage.py collectstatic --noinput

# Start Gunicorn server
gunicorn core.wsgi:application --bind 0.0.0.0:8000
