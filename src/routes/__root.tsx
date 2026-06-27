import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CONTENT_SECURITY_POLICY, SITE, SITE_URL, canonicalUrl, url } from "@/lib/site";
import { reportLovableError } from "../lib/lovable-error-reporting";

const ogImage = new URL(url("/media/og-image.jpg"), SITE_URL).href;

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4 pt-24">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-light text-forest">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-forest px-5 py-3 text-sm font-medium text-mist transition-colors hover:bg-moss"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4 pt-24">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-forest px-4 py-2 text-sm font-medium text-mist transition-colors hover:bg-moss"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-forest/30 px-4 py-2 text-sm font-medium text-forest transition-colors hover:border-forest"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Skyland Ranch — Sober Living for Men Near Seattle, WA" },
      {
        name: "description",
        content:
          "A nonprofit working horse ranch offering long-term sober living for men near Seattle, Washington.",
      },
      { name: "author", content: "Skyland Ranch" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Skyland Ranch" },
      { property: "og:title", content: "Skyland Ranch — Sober Living for Men Near Seattle, WA" },
      {
        property: "og:description",
        content:
          "A nonprofit working horse ranch offering long-term sober living for men near Seattle, Washington.",
      },
      { property: "og:url", content: canonicalUrl("/") },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Skyland Ranch — Sober Living for Men Near Seattle, WA" },
      {
        name: "twitter:description",
        content:
          "A nonprofit working horse ranch offering long-term sober living for men near Seattle, Washington.",
      },
      { name: "twitter:image", content: ogImage },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: url("/favicon.png") },
      { rel: "apple-touch-icon", href: url("/favicon.png") },
      { rel: "canonical", href: canonicalUrl("/") },
      { rel: "sitemap", type: "application/xml", href: url("/sitemap-index.xml") },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Skyland Ranch",
          description:
            "A nonprofit working horse ranch offering long-term sober living for men near Seattle, Washington.",
          url: SITE_URL,
          telephone: SITE.phoneHref.replace("tel:", ""),
          email: SITE.email,
          image: ogImage,
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Gold Bar",
            addressRegion: "WA",
            addressCountry: "US",
          },
          foundingDate: "1986",
          founder: {
            "@type": "Person",
            name: "Mr. Pitkin",
            alternateName: "Pa",
          },
          areaServed: "Seattle, WA",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="no-js">
      <head>
        <meta httpEquiv="Content-Security-Policy" content={CONTENT_SECURITY_POLICY} />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
