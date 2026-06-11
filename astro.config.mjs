// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages project site is served at https://<user>.github.io/<repo>/.
// `site` + `base` make absolute URLs, the sitemap, and astro:assets paths correct.
// If you later attach a custom domain, set site to it and base to "/".
export default defineConfig({
  site: "https://accubotai.github.io",
  base: "/skyland-beacon-build",
  trailingSlash: "ignore",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: "auto",
  },
});
