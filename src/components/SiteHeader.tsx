import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="group flex items-center gap-3">
          <Logo className="h-9 w-9 text-forest transition-transform duration-500 group-hover:rotate-[8deg]" />
          <div className="leading-tight">
            <div className="font-display font-semibold text-[1.05rem] text-foreground tracking-tight">
              Skyland Ranch
            </div>
            <div className="text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
              Est. {SITE.established}
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="px-4 py-2 text-sm text-foreground/80 hover:text-forest transition-colors relative"
              activeProps={{ className: "text-forest font-medium" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-forest text-primary-foreground pl-4 pr-5 py-2.5 text-sm font-medium shadow-soft hover:bg-moss transition-all hover:shadow-lift"
          >
            <Phone className="h-4 w-4" />
            {SITE.phone}
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2 text-foreground"
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/60 animate-reveal">
          <div className="px-6 py-6 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="py-3 text-lg font-display text-foreground/80 hover:text-forest"
                activeProps={{ className: "text-forest font-medium" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={SITE.phoneHref}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-forest text-primary-foreground px-5 py-3 text-base font-medium"
            >
              <Phone className="h-4 w-4" />
              Call {SITE.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
      <path
        d="M6 28 L14 18 L20 22 L28 12 L34 28 Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <circle cx="28" cy="11" r="2" fill="currentColor" />
    </svg>
  );
}