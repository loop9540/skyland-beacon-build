# Skyland Ranch

Single-page marketing site for Skyland Ranch — long-term sober living for men near Seattle, WA.

Built for speed and simplicity: **Astro** static output, **zero JavaScript framework**, no database, and no server. Production is published with **GitHub Pages** on the custom domain `skylandranch.org`; `vercel.json` remains available for Vercel-compatible static deployments.

## Stack

| Concern        | Choice                                              |
| -------------- | --------------------------------------------------- |
| Framework      | [Astro](https://astro.build) (static, SSG)          |
| Styling        | Tailwind CSS v4 (`@tailwindcss/vite`)               |
| Icons          | `@lucide/astro` (inlined SVG, no JS)                |
| Fonts          | Self-hosted via `@fontsource-variable` (Sora, Manrope) |
| Images         | `astro:assets` — auto WebP, responsive, lazy        |
| Interactivity  | ~2.5 KB of hand-written vanilla JS (`src/scripts/site.ts`) |
| Hosting        | GitHub Pages (static output); Vercel config retained |

No React, no `framer-motion`, no Supabase. The whole client ships a single small inlined script for scroll reveals, the mobile menu, scroll-spy, and the video lightbox.

The live page does use YouTube as a third-party media provider for video thumbnails and the lazily loaded video iframe. The iframe uses the privacy-enhanced `www.youtube-nocookie.com` embed host.

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

## Deploy

GitHub Pages builds the production site from `main` using the Pages workflow. Canonical URLs/sitemap use `site` in `astro.config.mjs` — set it to the production domain (currently `https://skylandranch.org`) and update the `Sitemap:` line in `public/robots.txt` if the domain changes.

GitHub Pages must have HTTPS enforcement enabled in the repository Pages settings or through the GitHub API. The Pages API endpoint is:

```bash
gh api repos/loop9540/skyland-beacon-build/pages
```

Changing `https_enforced` requires repository administrator, maintainer, or "manage GitHub Pages settings" permission. A token that can push but lacks those permissions may still read the public Pages metadata while update requests return `404 Not Found`.

GitHub Pages does not apply arbitrary custom response headers from the repository. The strongest repository-owned browser security policy GitHub Pages will serve is the CSP meta tag rendered by `src/layouts/Layout.astro`. Response headers such as HSTS, HTTP redirect behavior, `X-Frame-Options`, and CSP `frame-ancestors` still require platform or edge configuration outside this repository.

Additional browser security policy is committed in portable static-host formats for deployments that support response headers:

- `public/_headers` for hosts that honor the `_headers` convention.
- `vercel.json` for Vercel deployments.

Those header configs include Content Security Policy, HSTS, `X-Content-Type-Options`, Referrer Policy, Permissions Policy, and frame protection. When deployed only to GitHub Pages, verify HTTPS enforcement through the Pages API and check response headers at the edge instead of assuming these files are applied.
