import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SITE, url } from "@/lib/site";

const rows: Array<{ icon: LucideIcon; label: string; value: string; href: string | null }> = [
  { icon: Phone, label: "Phone", value: SITE.phone, href: SITE.phoneHref },
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: MapPin, label: "Location", value: SITE.location, href: null },
  { icon: Clock, label: "Hours", value: "Calls answered daily", href: null },
];

export function ContactSection() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="eyebrow text-moss">Contact</div>
          <h2 className="mt-4 max-w-4xl text-balance font-display text-5xl font-light leading-[1.02] md:text-7xl">
            Call us. We're real people on the other end.
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-lg text-foreground/80">
            The fastest way to talk about whether Skyland Ranch is right for you — or for someone
            you love — is a phone call. No forms, no automated systems.
          </p>
        </Reveal>

        <div className="mt-16 grid items-start gap-12 md:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl bg-gradient-dawn p-10 text-mist shadow-lift md:p-12">
              <div className="eyebrow text-sage">Best way to reach us</div>
              <h3 className="mt-3 text-balance font-display text-4xl font-light leading-tight md:text-5xl">
                Pick up the phone.
              </h3>
              <a
                href={SITE.phoneHref}
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-mist px-7 py-4 text-lg font-medium text-forest transition-transform hover:-translate-y-0.5"
              >
                <Phone className="h-5 w-5" /> {SITE.phone}
              </a>
              <p className="mt-6 text-pretty text-mist/85">
                Calls are handled personally. We listen first, then answer questions. There is never
                any pressure.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-2xl border border-border/60 bg-card p-10 shadow-soft">
              <div className="eyebrow text-moss">Reach the ranch</div>
              <ul className="mt-6 space-y-6">
                {rows.map((row) => {
                  const Icon = row.icon;
                  const inner = (
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                          {row.label}
                        </div>
                        <div className="mt-0.5 font-medium text-foreground">{row.value}</div>
                      </div>
                    </div>
                  );

                  return (
                    <li key={row.label}>
                      {row.href ? (
                        <a href={row.href} className="block transition-opacity hover:opacity-80">
                          {inner}
                        </a>
                      ) : (
                        inner
                      )}
                    </li>
                  );
                })}
              </ul>
              <div className="hairline mt-10" />
              <p className="mt-6 text-pretty text-sm text-muted-foreground">
                If you're calling on behalf of a loved one — a son, a brother, a friend — that's a
                conversation we have often, and we welcome it.
              </p>
              <p className="mt-4 text-pretty text-xs text-muted-foreground">
                Please use email for fit, housing, and logistics only. Do not email medical records,
                treatment records, or PHI. Read our{" "}
                <a
                  href={url("/privacy")}
                  className="text-forest underline underline-offset-4 hover:text-moss"
                >
                  privacy and non-clinical notice
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
