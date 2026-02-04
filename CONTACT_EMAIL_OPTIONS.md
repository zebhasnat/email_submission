# Contact Form → Email: Options & Setup

You need the contact form to send you an email. Gmail OAuth and SendGrid can be painful. Here are **three practical approaches**, from fastest to more control.

---

## Option 1: Formspree (recommended to start) — **no backend**

- **How it works:** Your React form POSTs to Formspree’s endpoint. They forward submissions to your email.
- **Setup:** Sign up at [formspree.io](https://formspree.io) → create a form → copy the form ID (e.g. `abcdxyz`) → set `VITE_FORMSPREE_FORM_ID=abcdxyz` in `.env`.
- **Pros:** No backend, no SMTP, no API keys for email providers. Works in minutes.
- **Cons:** Third‑party handler; free tier ~50 submissions/month.
- **Deploy:** Your React app only. No server to run or deploy.

---

## Option 2: Express + Resend — **your own backend, simple API key**

- **How it works:** Small Express server with `POST /api/contact`. It receives `{ name, email, message }` and uses [Resend](https://resend.com) to send you an email. Single API key, no OAuth.
- **Setup:**
  1. Sign up at [resend.com](https://resend.com), create an API key, add and verify your domain (or use their sandbox domain for testing).
  2. In `server/`: copy `.env.example` → `.env`, set `RESEND_API_KEY` and `CONTACT_EMAIL`.
  3. Run `npm run server` (or `cd server && npm start`). React app uses Vite proxy to `/api` (see below).
- **Pros:** You own the backend; Resend is straightforward; free tier ~3,000 emails/month.
- **Cons:** You need to run and later deploy a Node server.
- **Deploy:** Deploy React (e.g. Vercel/Netlify) **and** the Express API (e.g. Railway, Render, Fly.io). Point frontend to your API URL in production.

---

## Option 3: EmailJS — **no backend, frontend sends via their service**

- **How it works:** You configure an email template in EmailJS. The React app calls their JS SDK with form data; they send the email.
- **Pros:** No backend.
- **Cons:** Config in their dashboard; keys in frontend (low risk for contact forms but still exposed); another third party.

---

## Recommendation

1. **Quick win:** Use **Formspree** (Option 1). Get emails working immediately, keep using your existing “Thanks for reaching out!” page.
2. **More control later:** Add **Express + Resend** (Option 2) when you want your own API and to avoid form limits. The repo includes a `server/` scaffold; you switch the frontend to `POST /api/contact` and deploy both app + API.

---

## Deploy, domain & hosting (later)

- **Frontend:** Vercel or Netlify (free tier). Connect your repo, build command `npm run build`, publish directory `dist`. Custom domain: add a CNAME in your DNS.
- **Backend (if you use Express + Resend):** Railway, Render, or Fly.io. Set `RESEND_API_KEY` and `CONTACT_EMAIL` in their env. Use their default URL (e.g. `https://your-app.up.railway.app`) or your own domain.
- **Domain:** Buy from Namecheap, Cloudflare, etc. Point DNS (A/CNAME) to your hosting. We can go step‑by‑step when you’re ready to deploy.

---

## What’s implemented in this repo

- **Formspree:** `Contact.tsx` submits via Formspree when `VITE_FORMSPREE_FORM_ID` is set. Success → redirect to `/submitted-form`.
- **Express + Resend:** `server/` with `POST /api/contact`. See `server/README.md` and `server/.env.example`. Use Vite proxy in dev; in production, set `VITE_API_URL` to your deployed API base URL.

Use Formspree first; switch to the backend when you’re ready.
