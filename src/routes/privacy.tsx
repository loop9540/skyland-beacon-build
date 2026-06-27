import { createFileRoute } from "@tanstack/react-router";
import { Check, HeartHandshake, Home, Mail, Phone, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import trailImg from "@/assets/forest-trail.jpg";
import { SITE, SITE_URL, canonicalUrl, sectionHref, url } from "@/lib/site";

const description =
  "A plain-language privacy and non-clinical notice for Skyland Ranch inquiries, email boundaries, emergencies, and outside clinical care.";

const notes: Array<{ icon: LucideIcon; title: string; body: string }> = [
  {
    icon: Home,
    title: "What Skyland Ranch is",
    body: "Skyland Ranch is a sober living residence and nonprofit ranch community for men. We offer a stable, drug- and alcohol-free home shaped by daily structure, ranch work, and peer community.",
  },
  {
    icon: HeartHandshake,
    title: "What we are not",
    body: "Skyland Ranch is not a medical, clinical, detox, counseling, therapy, or behavioral-health treatment provider. We do not diagnose, treat, or manage medical or mental health conditions.",
  },
  {
    icon: Mail,
    title: "Email boundaries",
    body: "Email is not a secure way to send medical records, treatment records, or protected health information (PHI). Please keep email inquiries to fit, housing, availability, travel, fees, and other logistics.",
  },
  {
    icon: Phone,
    title: "Urgent situations",
    body: "If someone may be in immediate danger or needs urgent medical, mental health, or substance-use crisis support, call 911, call or text 988, or contact local crisis resources.",
  },
];

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy & Non-Clinical Notice | Skyland Ranch" },
      { name: "description", content: description },
      { property: "og:title", content: "Privacy & Non-Clinical Notice | Skyland Ranch" },
      { property: "og:description", content: description },
      { property: "og:url", content: canonicalUrl("/privacy") },
      { property: "og:image", content: new URL(url("/media/og-image.jpg"), SITE_URL).href },
      { name: "twitter:title", content: "Privacy & Non-Clinical Notice | Skyland Ranch" },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: new URL(url("/media/og-image.jpg"), SITE_URL).href },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/privacy") }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest text-mist">
        <div className="absolute inset-0">
          <img
            src={trailImg}
            alt=""
            className="h-full w-full object-cover opacity-35"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/85 via-forest/80 to-forest" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-36 pb-20 md:pt-44 md:pb-28 lg:px-10">
          <Reveal className="max-w-4xl">
            <div className="eyebrow text-sage">Privacy & non-clinical notice</div>
            <h1 className="mt-4 text-balance font-display text-5xl font-light leading-[1.02] md:text-7xl">
              A clear way to talk with the ranch.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg text-mist/90">
              We welcome calls and practical questions about sober living at Skyland Ranch. This
              notice keeps that conversation clear, respectful, and focused on whether the ranch may
              be the right housing fit.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-forest text-mist">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h2 className="mt-6 text-balance font-display text-4xl leading-tight md:text-5xl">
                Plain-language boundaries.
              </h2>
              <p className="mt-5 text-pretty text-lg text-foreground/75">
                Skyland Ranch is a home and ranch community, not a treatment center. We can talk
                through daily life, fit, housing, logistics, and next steps. Clinical decisions stay
                with each resident and the licensed providers they choose outside the ranch.
              </p>
            </Reveal>

            <div className="grid gap-5 md:grid-cols-2">
              {notes.map((note, index) => {
                const Icon = note.icon;
                return (
                  <Reveal
                    key={note.title}
                    delay={index * 80}
                    className="rounded-2xl border border-border/60 bg-card p-7 shadow-soft"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-forest/10 text-forest">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-display text-xl text-foreground">{note.title}</h3>
                    <p className="mt-3 text-pretty text-sm leading-6 text-foreground/75">
                      {note.body}
                    </p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="rounded-2xl border border-border/60 bg-card p-8 shadow-soft md:p-10">
            <div className="eyebrow text-moss">Outside care</div>
            <h2 className="mt-3 text-balance font-display text-3xl leading-tight md:text-4xl">
              Residents arrange clinical care independently.
            </h2>
            <div className="mt-6 grid gap-5 text-foreground/75 md:grid-cols-2">
              <p className="text-pretty">
                Residents who want or need medical care, counseling, therapy, medication management,
                detox, or other clinical support arrange that care with outside licensed providers
                independently.
              </p>
              <p className="text-pretty">
                Families, loved ones, and referral partners are welcome to contact us about whether
                sober living at the ranch may be a good fit. Please keep inquiry details practical
                and avoid sending medical or treatment records by email.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-forest px-6 py-3 font-medium text-mist transition-colors hover:bg-moss"
              >
                <Phone className="h-4 w-4" /> Call {SITE.phone}
              </a>
              <a
                href={sectionHref("contact")}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-forest/30 px-6 py-3 font-medium text-forest transition-colors hover:border-forest"
              >
                <Check className="h-4 w-4" /> Contact the ranch
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
