# aiworkshop – Personal Resume Website

Single-page resume website for **Makailav McLean**, built with Next.js (App Router), TypeScript, and Tailwind CSS, and deployed on Vercel.

- **Live site:** https://aiworkshop-mcm1av.vercel.app
- **Source:** https://github.com/Mcm1av/aiworkshop

## Content

All content is drawn from the attached resume (M. McLean's IT Resume). It includes a header with contact links, a summary, experience, skills, education, related coursework, certifications, and a footer. Nothing about the content was invented.

### Privacy notes

- **Removed:** phone number `(910) 729-8978` — the resume contained it, but the PRD only permits publishing a phone number if the attendee wrote `INCLUDE PHONE`, which was left blank.
- **Not present in resume:** no residential or street address was found in the resume, so nothing there needed removal. City/state (Fayetteville, NC) is shown.
- Email `mmcleanlav27@gmail.com` is included because it already appears in the resume.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Production build + lint:

```bash
npm run lint
npm run build
```

## Theme

The site has a light/dark toggle. On first visit it follows the visitor's system color preference; the toggle is remembered via `localStorage`. Tailwind's `dark:` variant is driven by a `.dark` class on `<html>` (see `tailwind.config.ts` and `src/components/theme-provider.tsx`).

## Deployment

The site is connected to Vercel from the GitHub repo, so every push to `main` triggers a build.

## Deliberately skipped / notes

- No contact form, CMS, analytics, authentication, or multi-page routes (all out of scope for phase 1).
- No LinkedIn, GitHub, or portfolio link was present on the attached resume, so the header only exposes the email link.
- The "Lead Remote Network Admin" bullet was lightly edited for spelling/grammar ("ethernet switches PDUs, and other network equipment in the lab") without changing its meaning.
- Styling uses Tailwind CSS v3 (`tailwindcss ^3.4.17`) with the class-based `dark` variant — same design tokens/utilities, chosen for deterministic native-postcss builds in the workshop sandbox.
- If a durable Vercel account token is provided later, the deployment can be re-linked to produce a custom alias.