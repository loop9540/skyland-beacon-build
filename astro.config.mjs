// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Published via GitHub Pages on the apex custom domain skylandranch.org.
// public/CNAME pins the domain; the build serves from the site root (no base path).
// `site` sets absolute URLs for canonicals/OG/sitemap. Update it if the domain changes.
export default defineConfig({
  site: "https://skylandranch.org",
  base: undefined,
  trailingSlash: "ignore",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: "auto",
  },
});
