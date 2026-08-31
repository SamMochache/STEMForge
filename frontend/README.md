# STEMForge — Website Documentation

**Repository:** [github.com/SamMochache/STEMForge](https://github.com/SamMochache/STEMForge)
**Live purpose:** Marketing and partner-inquiry website for STEMForge Academy, an in-school STEM education provider for students ages 14–18, based in Westlands, Nairobi, Kenya.

> This document exists so that anyone — a new developer, a hired freelancer, or a future business partner — can understand, run, maintain, and fix this website without needing the original builder present. It covers how the site was built, how to run it, and known issues with their fixes.

---

## 1. What This Project Is

STEMForge is a **single-page marketing/informational website**, not a full web application with a database or user accounts. It is built to:

- Explain STEMForge's programs and philosophy to schools and parents
- Let schools submit a **partnership inquiry form** (Contact page)
- Host supporting content: About, Programs, Age groups, Resources, Journal (blog), FAQ, Press, and legal pages (Terms, Privacy, Cookies, Report Abuse, Sitemap)

There is **no backend server, database, or CMS** in this repository. Everything is a static frontend site.

## 2. How the Site Was Built (Origin & Tech Stack)

The codebase was originally scaffolded using **[Magic Patterns](https://magicpatterns.com)** — a tool that generates a working React/Vite template from a design. The original template README (still present at `frontend/README.md`) confirms this origin. From that generated starting point, the STEMForge-specific pages, content, and branding were built out by hand.

**Tech stack:**

| Layer | Technology |
|---|---|
| Framework | [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Build tool / dev server | [Vite](https://vitejs.dev/) |
| Routing | [react-router-dom v7](https://reactrouter.com/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) (+ `@tailwindcss/typography`) |
| Icons | [lucide-react](https://lucide.dev/) |
| Animation helpers | `@emotion/react` |
| Linting | ESLint (`@typescript-eslint`) |

There is **no backend framework, no API, and no database** anywhere in this repo — confirmed by the repository containing only a single `frontend/` folder.

## 3. Repository Structure

```
STEMForge/
└── frontend/
    ├── index.html                 # HTML shell, page <title>
    ├── package.json                # Dependencies & npm scripts
    ├── vite.config.ts              # Vite build configuration
    ├── tailwind.config.js          # Tailwind design tokens
    ├── tsconfig.json               # TypeScript configuration
    ├── public/                     # Static assets (logo, images)
    └── src/
        ├── index.tsx                # React entry point
        ├── App.tsx                  # Route definitions (all pages)
        ├── index.css                # Global styles / Tailwind imports
        ├── components/              # Reusable UI: Navigation, Footer, Hero, CTA, etc.
        ├── contexts/
        │   └── ThemeContext.tsx     # Light/dark mode
        ├── data/                    # Site content as TypeScript data files
        │   ├── programs.ts           # STEM program listings
        │   ├── ageGroups.ts          # Age-band content
        │   ├── faqs.ts               # FAQ content
        │   ├── blogPosts.ts          # Journal/blog posts
        │   ├── legal.ts              # Terms, Privacy, Cookies text
        │   └── solutionContent.ts
        ├── hooks/
        │   └── useCounter.ts         # Animated stat counters
        ├── pages/                   # One file per route (see Section 5)
        └── types/
            └── content.ts            # Shared TypeScript types
```

**Important:** Almost all editable text on the site (programs, FAQs, legal copy, blog posts) lives in `src/data/*.ts` files, **not** hardcoded inside components. To update site content, edit these files rather than hunting through JSX.

## 4. How to Run the Site

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or later (v20+ recommended)
- npm (comes with Node.js)

### Run locally (development mode)
```bash
# 1. Clone the repository
git clone https://github.com/SamMochache/STEMForge.git
cd STEMForge/frontend

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```
This starts Vite's dev server (typically at `http://localhost:5173`) with hot-reload — changes to code appear instantly in the browser.

### Build for production
```bash
npm run build
```
This outputs a static, deployable site into `frontend/dist/`. Because the whole site is static HTML/CSS/JS, the `dist/` folder can be hosted on **any static host** — e.g. Netlify, Vercel, GitHub Pages, Cloudflare Pages, or a plain Nginx/Apache server.

### Preview a production build locally
```bash
npm run preview
```

### Lint the code
```bash
npm run lint
```

## 5. Site Map (Routes)

| URL Path | Page | Purpose |
|---|---|---|
| `/` | Home | Landing page |
| `/about` | About | Organization story |
| `/age` | Age groups | Age-band breakdown of offerings |
| `/programs` | Programs | List of STEM programs |
| `/programs/:slug` | Program Detail | Individual program page |
| `/resources` | Resources | Learning resources |
| `/journal` | Journal | Blog listing |
| `/journal/:slug` | Journal Post | Individual blog post |
| `/contact` | Contact | **Partnership inquiry form** (see bug below) |
| `/faq` | FAQ | Frequently asked questions |
| `/press` | Press | Press/media page |
| `/terms`, `/privacy`, `/cookies` | Legal | Legal documents |
| `/report-abuse` (alias: `/report`) | Report Abuse | Safeguarding contact page |
| `/sitemap` | Sitemap | Site sitemap |
| `*` | 404 | Not Found page |

## 6. Known Issues & Fixes

### 🔴 Critical: The contact/inquiry form does not send email

**Where:** `frontend/src/pages/ContactPage.tsx`, inside the `handleSubmit` function.

**What's actually happening:** When a school fills out the "Request a Discovery Session" form, the code does **not** send an email, does **not** call any API, and does **not** contact a server at all. It only does this:

```ts
const stored = window.localStorage.getItem('stemforge_inquiries');
const submissions = stored ? JSON.parse(stored) : [];
submissions.push({ ...form, submitted_at: new Date().toISOString(), id: Date.now() });
window.localStorage.setItem('stemforge_inquiries', JSON.stringify(submissions));

await new Promise((resolve) => setTimeout(resolve, 800)); // fake loading delay
setSuccess(true);
```

The form data is saved only to **`localStorage` in the visitor's own browser**. Nobody at STEMForge ever receives it — it isn't emailed, isn't stored in any shared database, and disappears if the visitor clears their browser data or uses a different device. Meanwhile, the page tells the visitor: *"We review every inquiry personally... within 48 hours."* That promise cannot currently be kept, because the inquiry never reaches STEMForge. This is almost certainly what's meant by "email doesn't work."

**Why it happened:** This is a static frontend site with no backend, so there is nothing on the server to receive and forward the form. The original Magic Patterns template likely stubbed this out with local storage as a placeholder, and it was never connected to a real email/notification service.

**How to fix it — pick one of these approaches:**

**Option A — Fastest fix, no backend needed (recommended for a small nonprofit/school-facing site):**
Use a form-to-email service. These are free or low-cost, require no server code, and typically take under 30 minutes to wire up:
- [Formspree](https://formspree.io/) — point the form's submit at their endpoint, emails go straight to `admissions@stemforge.co.ke`.
- [Web3Forms](https://web3forms.com/) — similar, free tier available.
- [EmailJS](https://www.emailjs.com/) — sends email directly from the browser via their JS SDK, no backend needed.

Example using Formspree, replacing the body of `handleSubmit`:
```ts
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  body: JSON.stringify(form),
});
if (!response.ok) throw new Error('Submission failed');
setSuccess(true);
```

**Option B — More control, requires a small backend:**
Build a minimal serverless function (e.g. a Netlify Function, Vercel Serverless Function, or AWS Lambda) that receives the POST request and sends an email via a transactional email provider like [SendGrid](https://sendgrid.com/), [Resend](https://resend.com/), or [AWS SES](https://aws.amazon.com/ses/). This is more work but gives full control over formatting, storage, and spam protection.

**Either way, also:**
- Add basic spam protection (a honeypot field, or a CAPTCHA like [hCaptcha](https://www.hcaptcha.com/)/reCAPTCHA) since the form is public.
- Confirm the destination address(es) — the site currently advertises `admissions@stemforge.co.ke` and `support@stemforge.co.ke` as contact emails (see `Footer.tsx` and `ContactPage.tsx`). Verify these mailboxes exist and are actively monitored.
- Consider also saving submissions somewhere durable (a Google Sheet via a service like Sheet.best, or a simple database) as a backup in case an email gets lost, so no inquiry is ever silently dropped.

### 🟡 Other things worth knowing (not necessarily bugs, but easy traps)

- **`package.json` name is generic.** It still reads `"name": "magic-patterns-vite-template"`, a leftover from the scaffolding tool. Harmless, but worth renaming to `"stemforge-frontend"` for clarity.
- **Legal pages have a static "last updated" date.** `src/data/legal.ts` hardcodes `LAST_UPDATED = 'December 1, 2024'` for Terms/Privacy/Cookies. If those documents are edited, remember to manually update this date — it will not update itself.
- **No automated tests.** There is no test suite in this repository. Any change to the contact form or routing should be manually tested in a browser (all major routes, dark/light mode, and the form's success/error states) before deploying.
- **No environment variables / secrets file.** There is currently no `.env` handling in the project. If you implement Option A or B above, you'll likely need to add an API key or endpoint ID — do **not** hardcode secrets directly in committed source files; use environment variables (Vite supports `import.meta.env` with a `.env` file, which should be added to `.gitignore`).

## 7. Deployment Checklist

1. `npm install`
2. `npm run build` → produces `frontend/dist/`
3. Deploy `dist/` to your static host of choice (Netlify/Vercel are simplest and both support automatic deploys from this GitHub repo on every push to `main`)
4. Point the domain (`stemforge.co.ke`) at the host
5. **Before going live with any change:** verify the contact form fix (Section 6) is in place and test-submit it yourself to confirm the email actually arrives.

## 8. Business Continuity Notes

This section exists so the organization is never dependent on one individual to keep the site running.

- **Source of truth:** This GitHub repository (`SamMochache/STEMForge`) is the single source of truth for the site's code and content. Anyone taking over should start by cloning it and following Section 4.
- **Content updates** (new programs, FAQs, blog posts, legal text changes) do not require a developer to touch page layout — they only require editing the relevant file in `src/data/`, then rebuilding and redeploying (Section 7).
- **Hosting & domain access:** Document separately (outside this file, for security) who has admin access to: the domain registrar for `stemforge.co.ke`, the hosting provider (Netlify/Vercel/other), the GitHub repository, and the contact-form service (once Section 6 is implemented) and the `admissions@` / `support@` mailboxes. Whoever runs this site day-to-day should keep that access list current and shared with at least one trusted backup person.
- **No database to back up** — since this is a static site, there is no database to lose. The only irreplaceable asset is the Git history and the content in `src/data/`, both of which live in this repository.

---

*Maintained as internal documentation for STEMForge. Update this file whenever the tech stack, routes, or known issues change.*