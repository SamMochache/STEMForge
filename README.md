# STEMForge Academy

Elite STEM education platform for Africa's brightest young minds. Nairobi, Kenya.

## Features

- **Program catalog** — tiered from free Bootstrap pathways to elite 1-on-1 mentorship
- **Online applications** — parent/student registration form with admin notifications
- **M-Pesa payments** — STK Push (Lipa Na M-Pesa) with real-time status polling
- **School bookings** — field trip / group visit scheduling
- **Blog/Journal** — content managed via Django admin
- **Instructor profiles** — team page with admin-managed data
- **Email notifications** — async via Celery (registration confirmations, payment receipts)

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite, Tailwind CSS, React Router v7 |
| Backend | Django 5, Django REST Framework |
| Database | PostgreSQL 15 |
| Task queue | Celery 5 + Redis 7 |
| Payments | Safaricom M-Pesa Daraja API (STK Push) |
| Frontend host | Vercel |
| Backend host | Railway / Render / Fly.io |

## Architecture decision — why the backend is kept

The backend cannot be replaced with a frontend-only solution because:

1. **M-Pesa secrets must stay server-side.** The consumer key, consumer secret, and passkey cannot be in browser-accessible code. Safaricom also rejects requests from browser origins.
2. **M-Pesa callback webhook.** Safaricom POSTs payment results to a public HTTPS URL — this must be a server endpoint.
3. **Persistent data.** Registrations, bookings, and blog content are managed by staff via Django admin and stored in PostgreSQL.
4. **Email delivery.** SMTP credentials must stay server-side; Celery handles async queuing so registrations don't block.

## Local Development

### Prerequisites

- Node 22+ (frontend)
- Python 3.11+ (backend)
- Docker + Docker Compose (recommended)

### With Docker Compose (recommended)

```bash
# Clone the repo
git clone https://github.com/your-org/stemforge.git && cd stemforge

# Create backend environment file
cp backend.env.example .env
# Edit .env and fill in your values

# Start all services (postgres, redis, backend, celery)
docker compose up

# In a separate terminal — seed data
docker compose exec backend python manage.py seed_programs
docker compose exec backend python manage.py seed_blogs

# Frontend (in another terminal)
cd frontend
cp .env.example .env          # VITE_API_URL=http://localhost:8000/api
npm install
npm run dev
```

Open http://localhost:5173

### Without Docker

**Backend:**
```bash
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt

# Set environment variables (or export manually)
cp ../backend.env.example .env
# Edit .env — set DEBUG=True, point POSTGRES_* to a local DB

python manage.py migrate
python manage.py createsuperuser
python manage.py seed_programs
python manage.py seed_blogs
python manage.py runserver
```

**Celery worker (separate terminal):**
```bash
cd backend && source .venv/bin/activate
celery -A core worker --loglevel=info
```

**Frontend (separate terminal):**
```bash
cd frontend
npm install
npm run dev
```

## Deployment

### Frontend → Vercel

1. Push the repo to GitHub
2. Import the project in Vercel → set **Root Directory** to `frontend`
3. Build settings (auto-detected by Vite):
   - Build command: `npm run build`
   - Output directory: `dist`
4. Add environment variable:
   - `VITE_API_URL` = `https://your-backend.railway.app/api`
5. Deploy. The `vercel.json` at the frontend root handles SPA routing automatically.

### Backend → Railway (or Render / Fly.io)

Railway is the simplest option as it supports Docker and managed add-ons natively.

```bash
# Install Railway CLI
npm install -g @railway/cli && railway login

# Create project and link
railway init && railway link

# Add managed PostgreSQL and Redis from the Railway dashboard
# Then set all env vars from backend.env.example in the Railway UI

# Deploy
railway up
```

For Render: create a Web Service from the `backend/` directory with start command:
```
gunicorn core.wsgi:application --bind 0.0.0.0:8000
```
Add a Background Worker service with command:
```
celery -A core worker --loglevel=info
```

### M-Pesa callback URL

After deploying the backend, update `MPESA_CALLBACK_URL` to:
```
https://your-backend-domain.com/api/payments/mpesa/callback/
```

For local testing of the callback, use [ngrok](https://ngrok.com):
```bash
ngrok http 8000
# Use the https forwarding URL as MPESA_CALLBACK_URL during sandbox testing
```

### CORS

Add your Vercel frontend URL to Django's `CORS_ALLOWED_ORIGINS` in settings.py (or via env var):
```python
CORS_ALLOWED_ORIGINS = [
    "https://your-app.vercel.app",
    "https://stemforge.co.ke",  # custom domain if configured
]
```

## Admin

Django admin is available at `/admin/`. Create a superuser:
```bash
python manage.py createsuperuser
```

From admin you can manage: Programs, Blog Posts, Instructors, Registrations, Bookings, Payments, Gallery items.

## Environment Variables

See `backend.env.example` (backend) and `frontend/.env.example` (frontend) for all required variables with descriptions.