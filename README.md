# Skyland Ranch

Single-page marketing site for Skyland Ranch — long-term sober living for men near Seattle, WA.

Built for speed and simplicity: **Astro** static output, **zero JavaScript framework**, no database, no server, no third-party services. Deploys to **Vercel**.

## Stack

| Concern        | Choice                                              |
| -------------- | --------------------------------------------------- |
| Framework      | [Astro](https://astro.build) (static, SSG)          |
| Styling        | Tailwind CSS v4 (`@tailwindcss/vite`)               |
| Icons          | `@lucide/astro` (inlined SVG, no JS)                |
| Fonts          | Self-hosted via `@fontsource-variable` (Sora, Manrope) |
| Images         | `astro:assets` — auto WebP, responsive, lazy        |
| Interactivity  | ~2.5 KB of hand-written vanilla JS (`src/scripts/site.ts`) |
| Hosting        | Vercel (static output, auto-deploy on push)         |

No React, no `framer-motion`, no Supabase. The whole client ships a single small inlined script for scroll reveals, the mobile menu, scroll-spy, and the video lightbox.

## Single page

The entire site is **one page** (`src/pages/index.astro`) composed of sections — Hero, About (incl. founder), Program, Residence, Admissions (incl. virtual tour), Referrals, Contact. Nav links smooth-scroll to section anchors. The only other route is a `404` fallback.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output -> dist/
npm run preview  # serve the production build locally
```

## Content

Everything is plain code — edit and rebuild:

- **Site data** (phone, email, location, nav, film): `src/lib/site.ts`
- **Page sections**: `src/components/sections/*.astro`
- **Images**: `src/assets/` (optimized at build) and `public/media/` (video, OG image)
- **Design tokens / colors**: `src/styles/global.css`

There is no form and no database. The inquiry and contact flows are a phone number and an email address by design.

## Deploy (Vercel)

Vercel auto-builds and deploys on every push to `main` (build config in `vercel.json`).
Canonical URLs/sitemap use `site` in `astro.config.mjs` — set it to the production
domain (currently `https://skylandranch.org`) and update the `Sitemap:` line in
`public/robots.txt` if the domain changes.
