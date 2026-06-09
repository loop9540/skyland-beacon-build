import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { NAV, SECTION_IDS, SITE } from "@/lib/site";
import { SectionLink } from "@/components/SectionLink";
import logoAsset from "@/assets/skyland-logo.png.asset.json";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("top");
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Scroll-spy: highlight the nav item for the section currently crossing the viewport.
  useEffect(() => {
    if (!onHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [onHome]);

  const desktopBase = "px-4 py-2 text-sm transition-colors relative";
  const mobileBase = "py-3 text-lg font-display transition-colors";
  const activeCls = "text-forest font-medium";
  const idleCls = "text-foreground/80 hover:text-forest";

  const isActive = (item: (typeof NAV)[number]) =>
    "id" in item ? onHome && activeId === item.id : pathname.startsWith(item.to);

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20 md:h-24">
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
          {NAV.map((item) =>
            "id" in item ? (
              <SectionLink
                key={item.id}
                id={item.id}
                className={`${desktopBase} ${isActive(item) ? activeCls : idleCls}`}
              >
                {item.label}
              </SectionLink>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className={`${desktopBase} ${isActive(item) ? activeCls : idleCls}`}
              >
                {item.label}
              </Link>
            ),
          )}
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
            {NAV.map((item) =>
              "id" in item ? (
                <SectionLink
                  key={item.id}
                  id={item.id}
                  onNavigate={() => setOpen(false)}
                  className={`${mobileBase} ${isActive(item) ? activeCls : idleCls}`}
                >
                  {item.label}
                </SectionLink>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`${mobileBase} ${isActive(item) ? activeCls : idleCls}`}
                >
                  {item.label}
                </Link>
              ),
            )}
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
