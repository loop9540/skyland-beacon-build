import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import logoAsset from "@/assets/skyland-logo.png.asset.json";

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
        <Link to="/" className="group flex items-center" aria-label="Skyland Ranch home">
          <img
            src={logoAsset.url}
            alt="Skyland Ranch — men's drug and alcohol therapeutic residence program"
            className="h-10 md:h-12 w-auto transition-transform duration-500 group-hover:-translate-y-0.5"
            width={300}
            height={120}
          />
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
