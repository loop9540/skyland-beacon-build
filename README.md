# Skyland Ranch Lovable Branch

Lovable-compatible rebuild of the Skyland Ranch website.

The deployed production baseline is tagged as `v1` on `main`. This branch keeps the same site content, visual direction, and sober-living positioning while using Lovable's TanStack Start + React project shape.

## Stack

| Concern          | Choice                                                          |
| ---------------- | --------------------------------------------------------------- |
| Framework        | TanStack Start + React                                          |
| Lovable metadata | `.lovable/project.json` (`tanstack_start_ts_2026-05-29`)        |
| Build config     | `@lovable.dev/vite-tanstack-config`                             |
| Styling          | Tailwind CSS v4                                                 |
| Icons            | `lucide-react`                                                  |
| Fonts            | Self-hosted `@fontsource-variable` Sora + Manrope               |
| Hosting target   | Lovable-compatible app; production remains `main` until changed |

No database, no form backend, no Supabase requirement, and no server-side secrets are currently needed.

## Develop

```bash
npm install
npm run dev
npm run build
npm run typecheck
npm run lint
```

## Content

- Site data, navigation, CSP: `src/lib/site.ts`
- Page shell and metadata: `src/routes/__root.tsx`
- Home page: `src/routes/index.tsx`
- Privacy notice: `src/routes/privacy.tsx`
- Sections: `src/components/sections/*.tsx`
- Images: `src/assets/` and `public/media/`
- Design tokens: `src/styles.css`

## Branch Intent

`main` remains the deployed `v1` Astro site. `lovable` is the compatibility rebuild branch. Do not merge it into `main` until the branch has been audited for visual/content parity and the hosting plan has been chosen.
