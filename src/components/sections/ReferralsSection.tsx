import { Check, Mail, Phone } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SITE, url } from "@/lib/site";

const offers = [
  "Men only, ages 18+, stable and ready for sober living",
  "Drug- and alcohol-free residence in the Cascade foothills",
  "Structured days with ranch work, horse care, and peer community",
  "Open-ended length of stay — most residents stay 6 to 18 months",
  "45 minutes from Seattle; we coordinate transport from SeaTac",
];

export function ReferralsSection() {
  return (
    <section className="border-y border-border/60 bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-3xl">
          <div className="eyebrow text-moss">For families and providers</div>
          <h2 className="mt-4 text-balance font-display text-4xl font-light leading-[1.04] md:text-6xl">
            A sober living next step.
          </h2>
          <p className="mt-6 text-pretty text-lg text-foreground/80">
            If you're helping someone look for a long-term, drug- and alcohol-free place to live
            after a short-term program, a hospital stay, or another transition, we'd like to talk.
            The fastest way is a single phone call — no forms, no portals.
          </p>
        </Reveal>

        <div className="mt-16 grid items-start gap-12 md:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl bg-gradient-dawn p-10 text-mist shadow-lift md:p-12">
              <div className="eyebrow text-sage">What we offer</div>
              <h3 className="mt-3 text-balance font-display text-3xl font-light leading-tight md:text-4xl">
                Long-term sober living on a working ranch.
              </h3>
              <ul className="mt-8 space-y-4 text-mist/90">
                {offers.map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-sage" />
                    <span className="text-pretty">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-2xl border border-border/60 bg-card p-8 shadow-soft md:p-10">
              <div className="eyebrow text-moss">Start a conversation</div>
              <h3 className="mt-3 font-display text-3xl leading-tight text-foreground">
                One call, and we'll take it from there.
              </h3>
              <p className="mt-4 text-pretty text-foreground/75">
                We've kept this deliberately simple: no intake forms, no application portal. Call or
                email and we'll talk through whether the ranch may be a fit. Please{" "}
                <strong>do not send medical records, treatment records, or PHI</strong> by email — a
                short description of the housing need is enough, and we'll follow up by phone.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-4 rounded-xl border border-border/70 bg-background px-5 py-4 transition-colors hover:border-forest/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest text-mist">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                      Call us
                    </span>
                    <span className="mt-0.5 block text-lg font-medium text-foreground">
                      {SITE.phone}
                    </span>
                  </span>
                </a>
                <a
                  href={`mailto:${SITE.email}?subject=Sober%20living%20inquiry`}
                  className="flex items-center gap-4 rounded-xl border border-border/70 bg-background px-5 py-4 transition-colors hover:border-forest/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest text-mist">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                      Email us
                    </span>
                    <span className="mt-0.5 block break-all text-lg font-medium text-foreground">
                      {SITE.email}
                    </span>
                  </span>
                </a>
              </div>

              <p className="mt-6 text-pretty text-xs text-muted-foreground">
                Calls are answered daily. Skyland Ranch is a sober living residence, not a detox,
                medical, counseling, or behavioral health treatment provider. Read our{" "}
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
