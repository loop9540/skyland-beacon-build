// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Outside a Lovable sandbox the config skips nitro by default, which produces a
  // client-only build with no SSR server — Vercel then has nothing to route and
  // serves 404 NOT_FOUND. Force nitro on and hard-pin the Vercel preset so the
  // build emits a Vercel Build Output (.vercel/output) with the SSR function.
  nitro: { preset: "vercel" },
});
