#!/bin/bash

echo "Waiting for Postgres..."
while ! nc -z $POSTGRES_HOST $POSTGRES_PORT; do
  sleep 0.2
done
echo "Postgres is available!"

echo "Waiting for Redis..."
while ! nc -z ${REDIS_HOST:-redis} ${REDIS_PORT:-6379}; do
  sleep 0.2
done
echo "Redis is available!"

python manage.py makemigrations --noinput
python manage.py migrate --noinput
python manage.py collectstatic --noinput

gunicorn core.wsgi:application --bind 0.0.0.0:8000
