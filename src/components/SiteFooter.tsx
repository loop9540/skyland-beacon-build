import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-forest text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="eyebrow text-sage">{SITE.tagline}</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-balance leading-[1.1]">
              A quiet place to begin again.
            </h2>
            <p className="mt-5 text-sage/90 max-w-md text-pretty">
              For {SITE.yearsOfService} years, Skyland Ranch has offered men a working-ranch home
              where sobriety can take root — slowly, honestly, and with dignity.
            </p>
            <a
              href={SITE.phoneHref}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-dawn text-accent-foreground px-6 py-3 text-base font-medium hover:translate-y-[-1px] transition-transform"
            >
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow text-sage/70">Visit</div>
            <ul className="mt-4 space-y-3 text-sage/90 text-sm">
              <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> {SITE.location}</li>
              <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 shrink-0" /> {SITE.phone}</li>
              <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 shrink-0" /> {SITE.email}</li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="eyebrow text-sage/70">Pages</div>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sage/90 hover:text-mist transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-mist/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-sage/70">
          <div>© {new Date().getFullYear()} Skyland Ranch. All rights reserved.</div>
          <div>A 501(c)(3) nonprofit · Sober living for men since {SITE.established}</div>
        </div>
      </div>
    </footer>
  );
}