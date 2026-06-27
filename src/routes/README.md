# Routes

TanStack Start uses **file-based routing**. Every `.tsx` file in this directory
is a route. Do **not** create `src/pages/`, `src/routes/_app/index.tsx`, or
`app/layout.tsx` — those are Next.js / Remix conventions. The only root layout
is `src/routes/__root.tsx`.

## Conventions

| File                     | URL                                                 |
| ------------------------ | --------------------------------------------------- |
| `index.tsx`              | `/`                                                 |
| `privacy.tsx`            | `/privacy`                                          |
| `sitemap-index[.]xml.ts` | `/sitemap-index.xml`                                |
| `sitemap-0[.]xml.ts`     | `/sitemap-0.xml`                                    |
| `users/$id.tsx`          | `/users/:id` (dynamic — bare `$`, no curly braces)  |
| `files/$.tsx`            | `/files/*` (splat — read via `_splat`, never `*`)   |
| `_layout.tsx`            | layout route (renders children via `<Outlet />`)    |
| `__root.tsx`             | app shell — wraps every page; preserve `<Outlet />` |

`routeTree.gen.ts` is auto-generated. Don't edit it by hand.
