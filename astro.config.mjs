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
  // Serve and link every page with a trailing slash so canonicals, the sitemap,
  // and what GitHub Pages actually serves all agree (avoids duplicate-URL signals).
  trailingSlash: "always",
  integrations: [
    sitemap({
      // Drop the spurious base-without-slash entry; keep the canonical "…/" root.
      filter: (page) => page !== "https://accubotai.github.io/skyland-beacon-build",
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: "auto",
  },
});
