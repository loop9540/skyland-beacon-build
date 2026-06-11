# Skyland Ranch

Static marketing site for Skyland Ranch — long-term sober living for men near Seattle, WA.

Built for speed and simplicity: **Astro** static output, **zero JavaScript framework**, no database, no server, no third-party services. Deploys to **GitHub Pages**.

## Stack

| Concern        | Choice                                              |
| -------------- | --------------------------------------------------- |
| Framework      | [Astro](https://astro.build) (static, SSG)          |
| Styling        | Tailwind CSS v4 (`@tailwindcss/vite`)               |
| Icons          | `@lucide/astro` (inlined SVG, no JS)                |
| Fonts          | Self-hosted via `@fontsource-variable` (Sora, Manrope) |
| Images         | `astro:assets` — auto WebP, responsive, lazy        |
| Interactivity  | ~2.4 KB of hand-written vanilla JS (`src/scripts/site.ts`) |
| Hosting        | GitHub Pages (via GitHub Actions)                   |

No React, no `framer-motion`, no Supabase, no Vercel. The whole client ships a single small inlined script for scroll reveals, the mobile menu, scroll-spy, and the video lightbox.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321/skyland-beacon-build
npm run build    # static output -> dist/
npm run preview  # serve the production build locally
```

## Content

Everything is plain code — edit and rebuild:

- **Site data** (phone, email, location, nav): `src/lib/site.ts`
- **Page sections**: `src/components/sections/*.astro`
- **Pages**: `src/pages/` (`index.astro`, `referrals.astro`, `404.astro`)
- **Images**: `src/assets/` (optimized at build) and `public/media/` (video, OG image)
- **Design tokens / colors**: `src/styles/global.css`

There is no form and no database. The referral and contact flows are a phone number and an email address by design.

## Deploy (GitHub Pages)

1. Push to `main` — `.github/workflows/deploy.yml` builds and publishes automatically.
2. One-time: repo **Settings → Pages → Build and deployment → Source → GitHub Actions**.

The site is served at `https://<owner>.github.io/skyland-beacon-build/`. If you attach a
custom domain, set `site` to it and `base` to `"/"` in `astro.config.mjs` (and update the
`Sitemap:` line in `public/robots.txt`).
