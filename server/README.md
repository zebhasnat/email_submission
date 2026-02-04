# Contact API (Express + Resend)

Sends contact form submissions to your email via [Resend](https://resend.com).

## Setup

1. **Resend:** Sign up at [resend.com](https://resend.com), create an API key, and add/verify your domain (or use `onboarding@resend.dev` for testing).
2. **Env:** Copy `.env.example` to `.env` and set:
   - `RESEND_API_KEY` – your Resend API key
   - `CONTACT_EMAIL` – email that receives submissions
   - `PORT` (optional) – default `3000`
3. **Run:** `npm install` then `npm start` (or `npm run dev` with `--watch`).

## Frontend

- **Dev:** Set `VITE_API_URL=http://localhost:3000` in the root `.env`. Run the React app (Vite) and this server. The form will `POST` to `http://localhost:3000/api/contact`. Configure CORS if needed (this server allows all origins by default).
- **Prod:** Deploy this API (e.g. Railway, Render), set `VITE_API_URL` to the deployed URL, and redeploy the React app.

## Endpoint

- `POST /api/contact`  
  Body: `{ "name": string, "email": string, "message": string }`  
  Returns `200 { "ok": true }` or `4xx/5xx { "message": string }`.
