# STEMForge Backend — Inquiry API

A minimal Django backend with exactly one job: receive the "Request a Discovery Session" form from the STEMForge frontend, **email it to STEMForge staff**, and keep a durable backup copy in a database. This replaces the current frontend behavior of saving submissions only to the visitor's own browser `localStorage` (see the main site README, Section 6, for why that's a problem).

## What it does

`POST /api/inquiries/`

1. Validates the submitted form data.
2. Saves it to the database **first** — this is a durable backup, so a submission is never lost even if the email step below fails.
3. Sends a notification email to STEMForge staff with the full inquiry details.
4. Records on that saved record whether the email actually succeeded, so failures are visible (not silent) and can be manually followed up on.
5. Rejects obvious bot spam via a hidden honeypot field, and rate-limits the endpoint to 10 requests/hour per IP.

You can also log in at `/admin/` to browse every inquiry ever submitted — a second safety net beyond email.

## Project structure

```
stemforge-backend/
├── manage.py
├── requirements.txt
├── .env.example          # copy to .env and fill in real values
├── config/                # Django project settings/URLs
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── asgi.py
└── inquiries/             # the one app this project has
    ├── models.py            # Inquiry model (the backup table)
    ├── serializers.py       # validation + honeypot spam field
    ├── views.py              # save -> email -> record outcome
    ├── urls.py
    └── admin.py              # view submissions at /admin/
```

## Running it locally

**Prerequisites:** Python 3.11+

```bash
cd stemforge-backend
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt

cp .env.example .env
# Edit .env — at minimum set DJANGO_SECRET_KEY to a random string.
# Leave EMAIL_BACKEND unset (or set to anything other than "smtp") to
# just print emails to the terminal instead of actually sending them
# while you're developing locally.

python manage.py migrate
python manage.py createsuperuser   # so you can log into /admin/
python manage.py runserver
```

The API is now live at `http://127.0.0.1:8000/api/inquiries/`, and the admin panel at `http://127.0.0.1:8000/admin/`.

### Quick manual test

```bash
curl -X POST http://127.0.0.1:8000/api/inquiries/ \
  -H "Content-Type: application/json" \
  -d '{
    "school_name": "Test School",
    "contact_name": "Jane Doe",
    "contact_title": "Head Teacher",
    "school_type": "Public School",
    "phone": "+254700000000",
    "email": "jane@example.com",
    "why_partner": "Testing the API",
    "website": ""
  }'
```
You should get back `{"status": "received", "id": 1}`, and (with the console email backend) see the full notification email printed in your terminal.

## Sending real email in production

Set these in your production environment (or `.env` if you're not using a proper secrets manager):

```
EMAIL_BACKEND=smtp
EMAIL_HOST=smtp.sendgrid.net        # or your provider of choice
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=apikey
EMAIL_HOST_PASSWORD=your-real-api-key
DEFAULT_FROM_EMAIL=no-reply@stemforge.co.ke
INQUIRY_NOTIFICATION_RECIPIENTS=admissions@stemforge.co.ke,support@stemforge.co.ke
```

Any standard SMTP-compatible provider works — [SendGrid](https://sendgrid.com/), [Resend](https://resend.com/), [Mailgun](https://www.mailgun.com/), [Zoho Mail](https://www.zoho.com/mail/), or even a Gmail account with an [app password](https://support.google.com/accounts/answer/185833). Don't use your everyday personal inbox password — always use an API key or app-specific password.

## Deploying

This is a standard Django app — deploy it anywhere Django runs:

- **Simple/cheap options:** [Railway](https://railway.app/), [Render](https://render.com/), [PythonAnywhere](https://www.pythonanywhere.com/) — all support Django + Postgres out of the box with minimal config.
- **Run in production with gunicorn** (already in `requirements.txt`), not `manage.py runserver`:
  ```bash
  gunicorn config.wsgi:application --bind 0.0.0.0:8000
  ```
- **Database:** SQLite (the default here) is fine at small scale, but if your host wipes the filesystem on redeploy (common on Railway/Render's free tiers), switch to their managed Postgres — just point `DATABASES` in `config/settings.py` at a `DATABASE_URL` env var (the `dj-database-url` package makes this a one-line change).
- Set `DJANGO_DEBUG=False` and put your real domain in `DJANGO_ALLOWED_HOSTS` before going live.
- Put your real frontend domain(s) in `CORS_ALLOWED_ORIGINS` (e.g. `https://stemforge.co.ke`) — otherwise the browser will block the frontend from calling this API.

## Connecting the frontend

The existing `ContactPage.tsx` on the frontend currently only writes to `localStorage`. Replace the body of its `handleSubmit` function with a real call to this API:

```tsx
const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  setLoading(true);
  setError(null);

  try {
    const response = await fetch('https://api.stemforge.co.ke/api/inquiries/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, website: '' }), // 'website' is the honeypot, always sent empty
    });

    if (!response.ok) {
      throw new Error('Submission failed');
    }

    setSuccess(true);
    setForm(INITIAL_FORM);
  } catch {
    setError('Something went wrong. Please try again or contact us directly.');
  } finally {
    setLoading(false);
  }
};
```

Replace `https://api.stemforge.co.ke` with wherever you actually deploy this backend (or `http://127.0.0.1:8000` while developing locally).

### Adding the honeypot field to the form

For the spam protection in `views.py`/`serializers.py` to do anything, add a hidden field to the actual `<form>` in `ContactPage.tsx` that real visitors never see or fill in, but simple bots will:

```tsx
<input
  type="text"
  name="website"
  value={form.website || ''}
  onChange={handleChange}
  autoComplete="off"
  tabIndex={-1}
  aria-hidden="true"
  style={{ position: 'absolute', left: '-9999px' }}
/>
```
(Add `website: ''` to `INITIAL_FORM` and the `ContactForm` interface too.)

## Known limitations / what to add later if needed

- **No authentication on the API** — it's meant to be public (anyone can submit an inquiry), protected only by the honeypot + rate limit. Don't add sensitive endpoints to this same app without adding proper auth.
- **Rate limiting is per-server-instance** — fine for a single small deployment; if you ever scale to multiple backend instances behind a load balancer, switch to a shared cache (Redis) for the throttle to work correctly across instances.
- **No automated tests yet** — the manual `curl` test above is a good template to turn into a real `pytest`/Django test suite if this project grows.
