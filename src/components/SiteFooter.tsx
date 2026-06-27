import { Mail, MapPin, Phone } from "lucide-react";

import { NAV, SITE, sectionHref, url } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 lg:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="eyebrow text-sage">{SITE.tagline}</div>
            <h2 className="mt-3 text-balance font-display text-3xl leading-[1.1] md:text-4xl">
              A quiet place to begin again.
            </h2>
            <p className="mt-5 max-w-md text-pretty text-sage">
              For {SITE.yearsOfService} years, Skyland Ranch has offered men a working-ranch home
              where sobriety can take root — slowly, honestly, and with dignity.
            </p>
            <a
              href={SITE.phoneHref}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-dawn px-6 py-3 text-base font-medium text-accent-foreground transition-transform hover:-translate-y-px"
            >
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow text-sage">Visit</div>
            <ul className="mt-4 space-y-3 text-sm text-sage">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" /> {SITE.location}
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <a href={SITE.phoneHref} className="transition-colors hover:text-mist">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="break-all transition-colors hover:text-mist"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="eyebrow text-sage">Pages</div>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {NAV.map((item) => (
                <li key={"id" in item ? item.id : item.href}>
                  <a
                    href={"id" in item ? sectionHref(item.id) : url(item.href)}
                    className="text-sage transition-colors hover:text-mist"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={url("/privacy")} className="text-sage transition-colors hover:text-mist">
                  Privacy notice
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-mist/15 pt-8 text-xs text-sage md:flex-row md:items-center">
          <div>© {year} Skyland Ranch. All rights reserved.</div>
          <div>A 501(c)(3) nonprofit · Sober living residence for men since {SITE.established}</div>
        </div>
      </div>
    </footer>
  );
}
