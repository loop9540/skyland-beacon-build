import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Phone, Check } from "lucide-react";
import trailImg from "@/assets/forest-trail.jpg";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions — Begin the Conversation | Skyland Ranch" },
      {
        name: "description",
        content:
          "How to apply to Skyland Ranch. A simple, confidential conversation about whether the ranch is the right next step for sober living and recovery.",
      },
      { property: "og:title", content: "Admissions — Skyland Ranch" },
      { property: "og:description", content: "Start a confidential conversation about coming to Skyland Ranch." },
      { property: "og:url", content: "/admissions" },
      { property: "og:image", content: trailImg },
    ],
    links: [{ rel: "canonical", href: "/admissions" }],
  }),
  component: AdmissionsPage,
});

function AdmissionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title={<>The first call<br /> is the hardest one.</>}
        intro="There's no form to fill out before you can talk to a real person. Pick up the phone, and we'll walk through it together — honestly, confidentially, with no pressure."
        image={trailImg}
        imageAlt="A misty trail through tall evergreen trees at sunrise"
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="eyebrow">How it works</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight text-balance">
              Three steps. No paperwork to begin.
            </h2>
          </Reveal>
          <Stagger className="mt-16 grid gap-6 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <StaggerItem key={s.title}>
                <div className="relative h-full rounded-2xl bg-card border border-border/60 p-8 shadow-soft">
                  <div className="font-display text-7xl text-sage leading-none">0{i + 1}</div>
                  <h3 className="mt-4 font-display text-xl text-foreground">{s.title}</h3>
                  <p className="mt-3 text-foreground/70 text-pretty">{s.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border/60 py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 grid gap-12 md:grid-cols-2">
          <Reveal>
            <div className="eyebrow">Who we serve</div>
            <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight text-balance">
              The ranch is a good fit for a man who:
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="space-y-4">
              {FITS.map((f) => (
                <li key={f} className="flex gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest text-mist">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-foreground/80 text-pretty">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <div className="eyebrow">Ready when you are</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight text-balance">
              Make the call.<br />We'll take it from there.
            </h2>
            <a
              href={SITE.phoneHref}
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-forest text-mist px-8 py-4 text-base font-medium shadow-lift hover:bg-moss transition-colors"
            >
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
            <p className="mt-6 text-sm text-muted-foreground">
              Calls are confidential. There's no obligation.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

const STEPS = [
  { title: "Call us", body: "Speak with someone who has done this conversation many times. We'll listen first, then answer questions." },
  { title: "Visit, if you can", body: "When it makes sense, come see the ranch. Walk the property, meet the horses, get a feel for the place." },
  { title: "Arrive", body: "Move in when you're ready. The community will help you find your footing in the first days." },
];

const FITS = [
  "Wants a drug and alcohol-free environment to live in, short or long term.",
  "Has tried other treatment and is looking for something with more time and more ground beneath it.",
  "Is open to honest work, ranch life, and being part of a community of men in recovery.",
  "Is medically and physically able to participate in ranch chores and daily life.",
];