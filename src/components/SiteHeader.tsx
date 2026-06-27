import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import logo from "@/assets/skyland-logo.png";
import { NAV, SECTION_IDS, SITE, sectionHref, url, type NavItem } from "@/lib/site";

function hrefFor(item: NavItem) {
  return "id" in item ? sectionHref(item.id) : url(item.href);
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean,
    ) as HTMLElement[];
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { threshold: [0.18, 0.32, 0.5], rootMargin: "-20% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      id="site-header"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-border/60 bg-background/85 backdrop-blur-xl" : ""
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:h-24 lg:px-10">
        <a href={url("/")} className="group flex items-center" aria-label="Skyland Ranch home">
          <img
            src={logo}
            alt="Skyland Ranch — men's sober living residence on a working horse ranch"
            className="h-16 w-auto transition-transform duration-500 group-hover:-translate-y-0.5 md:h-20"
          />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const id = "id" in item ? item.id : item.href;
            return (
              <a
                key={id}
                href={hrefFor(item)}
                className={`navlink px-4 py-2 text-sm transition-colors hover:text-forest ${
                  active === id ? "font-medium text-forest" : "text-foreground/80"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center md:flex">
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-forest py-2.5 pl-4 pr-5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:bg-moss hover:shadow-lift"
          >
            <Phone className="h-4 w-4" />
            {SITE.phone}
          </a>
        </div>

        <button
          type="button"
          className="-mr-2 p-2 text-foreground lg:hidden"
          aria-label="Menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen ? (
        <div
          id="mobile-menu"
          className="animate-reveal border-t border-border/60 bg-background/95 backdrop-blur-xl lg:hidden"
        >
          <div className="flex flex-col gap-1 px-6 py-6">
            {NAV.map((item) => {
              const id = "id" in item ? item.id : item.href;
              return (
                <a
                  key={id}
                  href={hrefFor(item)}
                  className="py-3 font-display text-lg text-foreground/80 transition-colors hover:text-forest"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href={SITE.phoneHref}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-forest px-5 py-3 text-base font-medium text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              Call {SITE.phone}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
