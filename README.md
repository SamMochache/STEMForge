# STEMForge Academy

Frontend-only STEM education site for STEMForge Academy in Nairobi, Kenya.

## What Is Included

- Program catalog seeded from the former `seed_programs.py`
- Journal posts seeded from the former `seed_blogs.py`
- Program detail pages and journal article pages
- Local application and booking forms stored in browser `localStorage`
- No Django backend, database, Celery worker, or M-Pesa integration required

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite, Tailwind CSS, React Router v7 |
| Data | Local JavaScript modules in `frontend/src/data` |
| Hosting | Vercel or any static host |

## Local Development

```bash
cd frontend
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Build

```bash
cd frontend
npm run build
```

The production build is written to `frontend/dist`.

## Content

Program data lives in `frontend/src/data/programs.js`.

Journal data lives in `frontend/src/data/blogPosts.js`.

Application and booking submissions are saved locally in the visitor's browser. To collect real submissions later, connect the form methods in `frontend/src/services/api.js` to a form provider or another backend service.
