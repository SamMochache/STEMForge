# STEMForge Website Handbook

**Repository:** [github.com/SamMochache/STEMForge](https://github.com/SamMochache/STEMForge)
**Purpose:** Public website and inquiry system for STEMForge Academy, an in-school STEM education provider for students aged 14–18 in Westlands, Nairobi, Kenya.

> This handbook is written so a school partner, business owner, new developer, or hired freelancer can understand, run, maintain, and troubleshoot the website without needing the original builder. It explains the system in plain language first, then provides the technical details needed to change or deploy it.

## 1. Start Here

### What visitors use

The website explains STEMForge's programs, philosophy, age groups, resources, journal, FAQs, press information, and legal policies. Visitors can request a partnership discovery session or request the free STEM Partnership Starter Guide.

### How submissions work

This is a two-part system:

1. **Frontend:** a React website visitors see.
2. **Backend:** a Django service that receives forms, stores submissions, and sends notification emails.

For a partnership inquiry, the backend validates the form and saves it to the database before attempting email delivery. A temporary email failure therefore does not erase the inquiry. Staff can review all records in the Django admin panel, and each record says whether its notification email was sent.

The free-resource form stores a lead, emails the requested guide, and attempts a staff notification. It records email success or failure as well.

### Access and secrets

Keep these outside the repository and share them with at least two trusted administrators:

- GitHub, frontend hosting, backend hosting, and domain access.
- Django admin, database, and SMTP credentials.
- Access to `admissions@stemforge.co.ke` and `support@stemforge.co.ke`.

Never commit passwords, API keys, database URLs, or real `.env` contents.

## 2. Technology Overview

| Area | Technology | Location |
|---|---|---|
| Public site | React 18 and TypeScript | `frontend/src/` |
| Build and local server | Vite | `frontend/vite.config.ts` |
| Routing | `react-router-dom` v7 | `frontend/src/App.tsx` |
| Styling | Tailwind CSS and global CSS | `frontend/src/index.css` |
| Icons | `lucide-react` | Frontend components |
| Inquiry API | Django 6.1 and Django REST Framework | `stemforge-backend/` |
| Database | SQLite locally; PostgreSQL supported | Backend settings |
| Email | Console locally; SMTP in production | Backend settings |
| Admin | Django admin | Backend `/admin/` |
| Hosting configuration | Vercel files | Each project root |

The frontend was originally scaffolded with [Magic Patterns](https://magicpatterns.com), then adapted with STEMForge content and features. The backend is part of this repository; this is not a frontend-only project.

## 3. Repository Map

```text
STEMForge/
├── README.md                         This handbook
├── Intellectual Property.md          Intellectual property notes
├── Licence.md                        Repository licence
├── frontend/                         Public React/Vite website
│   ├── .env                          Frontend API URLs (keep deployment values private)
│   ├── package.json                  JavaScript dependencies and scripts
│   ├── index.html                    Browser HTML shell
│   ├── public/                       Images and static assets
│   └── src/
│       ├── App.tsx                   Routes and shared page shell
│       ├── index.tsx                 React entry point
│       ├── index.css                 Global styles
│       ├── components/               Shared navigation, footer, sections, and forms
│       ├── contexts/                 Shared state, including theme mode
│       ├── data/                     Editable programs, FAQs, journal, legal, and age content
│       ├── hooks/                    Reusable React hooks
│       ├── pages/                    Route-level page components
│       └── types/                    Shared TypeScript types
└── stemforge-backend/                Django inquiry and lead API
    ├── .env.example                  Environment-variable placeholder
    ├── manage.py                     Django command-line entry point
    ├── requirements.txt              Python dependencies
    ├── config/                       Settings, URLs, WSGI, and ASGI
    └── inquiries/                    Models, serializers, views, and admin
```

Most public copy lives in `frontend/src/data/`. The backend's form behavior lives in `stemforge-backend/inquiries/`.

## 4. Local Setup

### Prerequisites

- Node.js 18 or later; Node.js 20 or newer is recommended.
- npm.
- Python 3.11 or later, using a version supported by Django 6.1.
- Git.

### Start the backend

From the repository root:

```bash
cd stemforge-backend
python -m venv .venv
source .venv/bin/activate          # Windows PowerShell: .venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

Create `stemforge-backend/.env`. The committed `.env.example` is intentionally empty; for local development use:

```dotenv
DJANGO_SECRET_KEY=replace-with-a-random-development-value
DJANGO_DEBUG=True
DJANGO_ALLOWED_HOSTS=localhost,127.0.0.1
CORS_ALLOWED_ORIGINS=http://localhost:5173
```

Initialize the database and run Django:

```bash
python manage.py migrate
python manage.py createsuperuser       # one time, for /admin/
python manage.py runserver
```

The API is at `http://127.0.0.1:8000/api/inquiries/`, the lead endpoint is at `http://127.0.0.1:8000/api/leads/`, and the admin is at `http://127.0.0.1:8000/admin/`. Without SMTP settings, Django prints emails in the backend terminal instead of sending them.

### Start the frontend

In a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the Vite URL, normally `http://localhost:5173`. For local end-to-end form testing, set these values in `frontend/.env`:

```dotenv
VITE_API_URL=http://127.0.0.1:8000/api/inquiries/
VITE_LEADS_API_URL=http://127.0.0.1:8000/api/leads/
```

Restart Vite after changing `.env`. Only `VITE_` variables are exposed to browser code, so never put private secrets there.

## 5. Common Commands

Run frontend commands from `frontend/`:

```bash
npm run dev       # Development server
npm run build     # Production build in frontend/dist/
npm run preview   # Preview the production build
npm run lint      # ESLint
```

Run backend commands from `stemforge-backend/` with its virtual environment active:

```bash
python manage.py runserver
python manage.py migrate
python manage.py makemigrations
python manage.py collectstatic --noinput
python manage.py createsuperuser
```

Do not use `runserver` in production. Use the configured WSGI application with Gunicorn or the hosting provider's supported Django runtime.

## 6. Public Routes

| Path | Page | Purpose |
|---|---|---|
| `/` | Home | Main introduction and calls to action |
| `/about` | About | Organization story and credibility |
| `/age` | Age groups | Offerings by student age band |
| `/programs` | Programs | Program summaries |
| `/programs/:slug` | Program detail | One program selected by slug |
| `/resources` | Resources | Resources and lead magnet |
| `/journal` | Journal | Article listing |
| `/journal/:slug` | Journal post | Individual article |
| `/contact` | Contact | Partnership inquiry form |
| `/faq` | FAQ | Frequently asked questions |
| `/press` | Press | Press and media information |
| `/terms`, `/privacy`, `/cookies` | Legal | Legal policies |
| `/report-abuse` | Report Abuse | Safeguarding contact page |
| `/report` | Redirect | Redirects to `/report-abuse` |
| `/sitemap` | Sitemap | Human-readable site map |
| Other paths | 404 | Not-found page |

The frontend Vercel rewrite sends browser routes to `index.html`, allowing React Router to handle direct links and refreshes.

## 7. Forms, API, and Email

### Partnership inquiry endpoint

`frontend/src/pages/ContactPage.tsx` sends JSON to the URL in `VITE_API_URL`:

```text
POST /api/inquiries/
```

The request contains school information, contact details, STEM interests, partnership intent, preferred time, notes, and a hidden `website` honeypot field. The backend:

1. Validates required fields and email format.
2. Rejects a filled honeypot as spam.
3. Saves the inquiry to the database.
4. Attempts to notify configured staff recipients.
5. Records `email_sent` and `email_error`.
6. Returns HTTP `201` and `{"status":"received","id":...}` when saving succeeds.

The endpoint allows 10 anonymous submissions per hour per server instance. A failed email does not remove a saved inquiry; check admin for records where `email_sent` is false.

### Lead endpoint

`frontend/src/components/LeadMagnet.tsx` sends JSON to `VITE_LEADS_API_URL`:

```text
POST /api/leads/
```

It stores the email, optional name, and resource source, sends the starter guide to the lead, and attempts a staff notification. Email success or failure is recorded on the lead.

### Backend environment variables

| Variable | Purpose | Example |
|---|---|---|
| `DJANGO_SECRET_KEY` | Django security key | Long random value |
| `DJANGO_DEBUG` | Debug mode | `False` in production |
| `DJANGO_ALLOWED_HOSTS` | Accepted backend hosts | `stemforge-backend.vercel.app` |
| `CORS_ALLOWED_ORIGINS` | Allowed frontend origins | `https://stemforge.co.ke,http://localhost:5173` |
| `DATABASE_URL` | Optional production database | PostgreSQL connection string |
| `EMAIL_BACKEND` | Real email switch | `smtp` |
| `EMAIL_HOST` | SMTP server | Provider-specific |
| `EMAIL_PORT` | SMTP port | `587` |
| `EMAIL_USE_TLS` | Secure SMTP connection | `True` |
| `EMAIL_HOST_USER` | SMTP username | Provider-specific |
| `EMAIL_HOST_PASSWORD` | SMTP password/API key | Secret |
| `DEFAULT_FROM_EMAIL` | Sender address | `no-reply@stemforge.co.ke` |
| `INQUIRY_NOTIFICATION_RECIPIENTS` | Staff recipients | `admissions@stemforge.co.ke,support@stemforge.co.ke` |

Omit `EMAIL_BACKEND` locally to use Django's console backend. Configure a real SMTP provider such as SendGrid, Resend, Mailgun, Zoho, or an app-password-based mailbox in production.

## 8. Admin and Data

Log in at the backend's `/admin/` URL with a Django superuser. The two records are:

- **Inquiry:** full school partnership request, timestamp, email status, and error details.
- **Lead:** free-resource signup, timestamp, email status, and error details.

The local database is `stemforge-backend/db.sqlite3`. Production should use managed PostgreSQL when the host has an ephemeral filesystem or the data is business-critical. Arrange regular backups with the database provider and never commit a database file.

## 9. Deployment

The frontend and backend are deployed separately.

### Frontend

1. From `frontend/`, run `npm install` and `npm run build`.
2. Deploy the `frontend/` project to the selected static host.
3. Set `VITE_API_URL` and `VITE_LEADS_API_URL` in the host's build environment.
4. Keep the SPA fallback from `frontend/vercel.json` or add the equivalent rule on another host.

### Backend

The included `stemforge-backend/vercel.json` targets Vercel's Python runtime. Railway, Render, PythonAnywhere, and other Django-compatible hosts are also possible.

Before going live:

1. Set all required environment variables in the provider dashboard.
2. Use managed PostgreSQL if local files are not persistent.
3. Run migrations and `collectstatic`.
4. Use `config.wsgi:application` with a production server where required.
5. Add the real frontend domain to `CORS_ALLOWED_ORIGINS`.
6. Set `DJANGO_DEBUG=False` and verify `DJANGO_ALLOWED_HOSTS`.
7. Configure SMTP and authorize the sender domain with the provider.

### Go-live test

Verify a direct refresh of nested frontend routes, both themes, inquiry success and error states, lead delivery, inquiry visibility in admin, staff delivery at both recipient addresses, and the behavior of a deliberately failed SMTP configuration. Do not promise a 48-hour response until the production form, database, mailbox, and admin panel have been tested.

## 10. Editing Content

| Content | File |
|---|---|
| Programs | `frontend/src/data/programs.ts` |
| Age groups | `frontend/src/data/ageGroups.ts` |
| FAQs | `frontend/src/data/faqs.ts` |
| Journal | `frontend/src/data/blogPosts.ts` |
| Legal policies | `frontend/src/data/legal.ts` |
| Shared solution content | `frontend/src/data/solutionContent.ts` |
| Page layouts and routes | `frontend/src/pages/`, `frontend/src/App.tsx` |
| Shared UI | `frontend/src/components/` |

After content changes, run `npm run lint` and `npm run build`, then inspect the affected page on desktop and mobile. The legal last-updated date is static and must be changed manually whenever legal text changes.

## 11. Troubleshooting

### The contact form fails

Check the frontend API URL, backend availability, `CORS_ALLOWED_ORIGINS`, browser network errors, backend logs, honeypot value, and the 10-per-hour throttle.

### Success appears but no email arrives

Find the record in Django admin. If `email_sent` is false, inspect `email_error`, then check SMTP host, port, TLS, credentials, sender authorization, and recipient addresses. The inquiry should still exist because it is saved first.

### Admin styling is missing

Run `python manage.py collectstatic --noinput` during deployment and confirm WhiteNoise is installed and enabled. It serves admin and REST framework assets when debug mode is off.

### A direct frontend URL returns 404

Configure the static host to rewrite unknown paths to `index.html`; check `frontend/vercel.json`.

### Local frontend cannot reach Django

Run both servers, use ports 5173 and 8000, set both local `VITE_*_API_URL` values, add `http://localhost:5173` to CORS, and restart Vite.

## 12. Limitations and Future Improvements

- There is no automated frontend or backend test suite yet. Manual browser testing and the `curl` check below are the minimum verification.
- Anonymous submission is intentional. Protection currently consists of a honeypot and basic rate limiting, not user authentication or CAPTCHA.
- Rate limiting uses the server's local cache; multi-instance hosting should use shared Redis or another shared store.
- Email is sent during the request; higher volume may justify background jobs, retries, and monitoring.
- Legal dates and some generated project metadata require manual maintenance.

## 13. Quick Backend Check

With Django running, submit a valid inquiry:

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

Expected result: HTTP `201` and a response similar to `{"status":"received","id":1}`. With the console email backend, the notification appears in the backend terminal.

## 14. Handover Checklist

Give the incoming maintainer the repository and deployment URLs, environment-variable names without secret values, hosting/domain/database/SMTP contacts, the admin URL, a secure account-creation process, the date of the latest successful form test, and the database backup arrangement.

The Git repository is the source of truth for code and content. Hosting, domain, email, database, and credential records must be maintained separately and kept current.

---

*Maintained as the operational documentation for STEMForge. Update this handbook whenever routes, form behavior, environment variables, hosting, email, or the technology stack changes.*
