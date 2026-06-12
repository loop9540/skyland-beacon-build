// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Deployed on Vercel at the site root (custom domain skylandranch.org).
// `site` sets absolute URLs for canonicals/OG/sitemap; no base path on Vercel.
// If the production domain changes, update `site` here.
// GITHUB_PAGES=true (set by .github/workflows/deploy-pages.yml) builds for
// https://loop9540.github.io/skyland-beacon-build/ instead.
const ghPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  site: ghPages ? "https://loop9540.github.io" : "https://skylandranch.org",
  base: ghPages ? "/skyland-beacon-build" : undefined,
  trailingSlash: "ignore",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: "auto",
  },
});
