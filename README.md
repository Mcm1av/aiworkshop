# Aslan Maleki — Personal Resume Website

Single-page personal resume website for **Aslan Maleki**, built with Next.js
(App Router), TypeScript, and Tailwind CSS. Ready to deploy on Vercel.

## Live site

- Live URL: *pending Vercel deployment — see Deployment notes below*
- Source: https://github.com/Mcm1av/aiworkshop

## Content

All content is drawn from Aslan Maleki's resume. Professional summary,
experience, skills, and education mirror the resume exactly.

## Privacy

- No residential or street address is published.
- No phone number is published.
- Only the email that appears on the resume (`aslanmaleki@gmail.com`) is shown.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build & lint

```bash
npm run build
npm run lint
```

## Deliberately skipped

- Contact form (out of scope for phase 1)
- Additional routes / pages
- Analytics (intentionally excluded)
- Component/animation libraries (kept minimal per requirements)
- Vercel deployment could not be completed from this environment because no
  `VERCEL_TOKEN` is available (connecting requires an interactive `vercel login`
  or a token). The repo is public and push-ready.

To deploy:
1. Import `github.com/Mcm1av/aiworkshop` at https://vercel.com/new
2. Framework preset: Next.js (defaults apply)
3. Deploy — the project builds clean with `npm run build` and passes `npm run lint`.

## Stack

- Next.js 16 (App Router, static prerender)
- TypeScript
- Tailwind CSS
- Light/dark theme toggle honoring system preference, persisted in localStorage