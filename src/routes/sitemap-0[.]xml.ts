import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

import { SITE_URL } from "@/lib/site";

const ENTRIES = [
  { path: "/", changefreq: "monthly", priority: "1.0" },
  { path: "/privacy/", changefreq: "yearly", priority: "0.8" },
];

export const Route = createFileRoute("/sitemap-0.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = ENTRIES.map((entry) =>
          [
            `  <url>`,
            `    <loc>${SITE_URL}${entry.path}</loc>`,
            `    <changefreq>${entry.changefreq}</changefreq>`,
            `    <priority>${entry.priority}</priority>`,
            `  </url>`,
          ].join("\n"),
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
