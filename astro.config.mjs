// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Deployed on Vercel at the site root (custom domain skylandranch.org).
// `site` sets absolute URLs for canonicals/OG/sitemap; no base path on Vercel.
// If the production domain changes, update `site` here.
export default defineConfig({
  site: "https://skylandranch.org",
  trailingSlash: "ignore",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: "auto",
  },
});
