import { ArrowRight, Check, MapPin, Play } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import valleyImg from "@/assets/admissions-valley.jpg";
import { SITE, sectionHref, url } from "@/lib/site";

const STEPS = [
  {
    title: "Call us",
    body: "Speak with someone who has done this conversation many times. We'll listen first, then answer questions.",
  },
  {
    title: "Visit, if you can",
    body: "When it makes sense, come see the ranch. Walk the property, meet the horses, get a feel for the place.",
  },
  {
    title: "Arrive",
    body: "Move in when you're ready. The community will help you find your footing in the first days.",
  },
];

const FITS = [
  "Wants a drug and alcohol-free environment to live in, short or long term.",
  "Is ready for sober living and looking for more time and more ground beneath it.",
  "Is open to honest work, ranch life, and being part of a community of sober men.",
  "May already be working with outside medical or counseling providers and wants a stable home base while continuing that care.",
  "Is stable and physically able to participate in ranch chores and daily life.",
];

export function AdmissionsSection({ onOpenVideo }: { onOpenVideo: () => void }) {
  return (
    <>
      <PageHeader
        headingLevel="h2"
        eyebrow="Admissions"
        title={
          <>
            The first call
            <br /> is the hardest one.
          </>
        }
        intro="There's no form to fill out before you can talk to a real person. Pick up the phone, and we'll walk through whether the ranch is the right sober living fit — honestly, thoughtfully, with no pressure."
        image={valleyImg}
        imageAlt="A green pasture at the ranch with the Cascade foothills rising behind"
        light
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="eyebrow text-moss">How it works</div>
            <h3 className="mt-4 text-balance font-display text-4xl leading-tight md:text-5xl">
              Three steps. No paperwork to begin.
            </h3>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {STEPS.map((step, index) => (
              <Reveal key={step.title} delay={index * 100}>
                <div className="relative h-full rounded-2xl border border-border/60 bg-card p-8 shadow-soft">
                  <div className="font-display text-7xl leading-none text-moss">0{index + 1}</div>
                  <h4 className="mt-4 font-display text-xl text-foreground">{step.title}</h4>
                  <p className="mt-3 text-pretty text-foreground/70">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-forest py-24 text-mist md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 lg:px-10">
          <Reveal>
            <div className="eyebrow text-sage">Can't visit yet?</div>
            <h3 className="mt-4 text-balance font-display text-4xl font-light leading-tight md:text-5xl">
              Take a virtual look at the ranch.
            </h3>
            <p className="mt-6 text-pretty text-lg text-mist/85">
              Skyland sits on more than {SITE.acres} acres in the Cascade foothills — pasture,
              second-growth forest, and quiet trails along the Skykomish River, with the mountains
              on every side. If you can't make the drive yet, watch the film and see the place for
              yourself.
            </p>
            <button
              type="button"
              onClick={onOpenVideo}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-dawn px-7 py-4 text-base font-medium text-accent-foreground shadow-lift transition-transform hover:-translate-y-0.5"
            >
              <Play className="h-5 w-5 fill-current" /> Watch the film
            </button>
            <p className="mt-5 inline-flex items-center gap-2 text-sm text-mist/70">
              <MapPin className="h-4 w-4" /> {SITE.location}
            </p>
          </Reveal>
          <Reveal delay={150}>
            <button
              type="button"
              onClick={onOpenVideo}
              aria-label="Play the Skyland Ranch film"
              className="group relative block w-full overflow-hidden rounded-2xl border-2 border-mist/30 shadow-lift transition-transform hover:-translate-y-1"
            >
              <img
                src={`https://img.youtube.com/vi/${SITE.youtubeId}/maxresdefault.jpg`}
                alt="A look across the Skyland Ranch property"
                width="1280"
                height="720"
                loading="lazy"
                className="aspect-video h-auto w-full object-cover"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-forest/25 transition-colors group-hover:bg-forest/35">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-mist/95 text-forest shadow-lift transition-transform group-hover:scale-110">
                  <Play className="ml-1 h-7 w-7 fill-current" />
                </span>
              </span>
            </button>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary/40 py-24 md:py-32">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-2">
          <Reveal>
            <div className="eyebrow text-moss">Who we serve</div>
            <h3 className="mt-4 text-balance font-display text-3xl leading-tight md:text-4xl">
              The ranch is a good fit for a man who:
            </h3>
            <p className="mt-5 text-pretty text-foreground/70">
              Many of the men who come to us are continuing work they began elsewhere. The ranch
              supports sober living through community, structure, and help staying connected with
              outside licensed medical, counseling, or behavioral health providers when needed.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <ul className="space-y-4">
              {FITS.map((fit) => (
                <li key={fit} className="flex gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest text-mist">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-pretty text-foreground/80">{fit}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-forest py-24 text-mist md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <div className="eyebrow text-sage">Cost & accessibility</div>
            <h3 className="mt-4 text-balance font-display text-3xl font-light leading-tight md:text-4xl">
              We work with families to make this accessible.
            </h3>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-mist/85">
              The ranch operates on a sliding scale based on circumstance. We encourage you to call
              and talk through what might work — no pressure, no obligation.
            </p>
            <a
              href={sectionHref("contact")}
              className="mt-8 inline-flex items-center gap-2 border-b border-dawn/40 pb-1 text-dawn transition-colors hover:border-dawn"
            >
              Talk to us about fees <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <div className="eyebrow text-moss">Ready when you are</div>
            <h3 className="mt-4 text-balance font-display text-4xl leading-tight md:text-5xl">
              Make the call.
              <br />
              We'll take it from there.
            </h3>
            <p className="mt-6 text-pretty text-foreground/70">
              Calls are handled personally, and there's no obligation. When you're ready, here's how
              to reach us. For email boundaries and non-clinical scope, read our{" "}
              <a
                href={url("/privacy")}
                className="text-forest underline underline-offset-4 hover:text-moss"
              >
                privacy and non-clinical notice
              </a>
              .
            </p>
            <a
              href={sectionHref("contact")}
              className="mt-8 inline-flex items-center gap-2 border-b border-forest/40 pb-1 text-forest transition-colors hover:border-forest"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
