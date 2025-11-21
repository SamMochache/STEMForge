# ---------- BASE PYTHON IMAGE ----------
FROM python:3.11-slim AS base

# Prevent python from writing pyc files
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# ---------- SYSTEM DEPENDENCIES ----------
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    gcc \
    netcat-openbsd \
    && rm -rf /var/lib/apt/lists/*

# ---------- WORK DIRECTORY ----------
WORKDIR /app

# ---------- COPY REQUIREMENTS ----------
COPY requirements.txt /app/
RUN pip install --upgrade pip && pip install -r requirements.txt

# ---------- COPY PROJECT ----------
COPY . /app/

# ---------- ENTRYPOINT FIX: WAIT FOR POSTGRES ----------
COPY ./docker-entrypoint.sh /app/docker-entrypoint.sh
RUN chmod +x /app/docker-entrypoint.sh

# ---------- EXPOSE PORT ----------
EXPOSE 8000

# ---------- START COMMAND ----------
ENTRYPOINT ["/app/docker-entrypoint.sh"]
