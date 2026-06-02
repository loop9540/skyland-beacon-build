import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Phone, Sunrise, Hammer, Users, Leaf, Moon } from "lucide-react";
import equineAsset from "@/assets/equine-saddle.png.asset.json";
const equineImg = equineAsset.url;
import horseImg from "@/assets/horse-portrait.jpg";
import trailImg from "@/assets/equine-saddle.png.asset.json";
import arenaAsset from "@/assets/horseback-arena-v2.jpg.asset.json";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/program")({
  head: () => ({
    meta: [
      { title: "The Program — Equine Therapy & Sober Living | Skyland Ranch" },
      {
        name: "description",
        content:
          "Daily life at Skyland Ranch: honest work, equine therapy, and a structured drug and alcohol-free environment for short and long-term recovery for men.",
      },
      { property: "og:title", content: "The Skyland Ranch Program" },
      { property: "og:description", content: "Equine therapy, ranch work, and sober community for men in recovery." },
      { property: "og:url", content: "/program" },
      { property: "og:image", content: equineImg },
    ],
    links: [{ rel: "canonical", href: "/program" }],
  }),
  component: ProgramPage,
});

function ProgramPage() {
  return (
    <>
      <PageHeader
        eyebrow="The program"
        title={<>A day on the ranch.<br /> A life in recovery.</>}
        intro="Recovery here is built into the texture of an ordinary day — feeding horses at dawn, working the land, sharing a meal, walking the trails. The program is the rhythm of the place itself."
        image={equineImg}
        imageAlt="Hands gently brushing a horse's mane in soft natural light"
        light
        bottomImage={trailImg.url}
        bottomImageAlt="A resident riding horseback in the arena with mountains behind"
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="eyebrow text-moss">A day in the life</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight max-w-2xl text-balance">
              The structure that holds a man together while he changes.
            </h2>
            <div className="mt-8 overflow-hidden rounded-2xl aspect-[16/9] max-w-4xl">
              <img src={arenaAsset.url} alt="Residents riding horseback in the arena with mountain views" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Stagger className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {DAY.map((d) => (
              <StaggerItem key={d.title}>
                <article className="group h-full rounded-2xl bg-card p-8 border border-border/60 shadow-soft hover:shadow-lift transition-all hover:-translate-y-0.5">
                  <d.Icon className="h-7 w-7 text-moss" />
                  <div className="mt-5 eyebrow text-foreground/50">{d.when}</div>
                  <h3 className="mt-2 font-display text-2xl text-foreground">{d.title}</h3>
                  <p className="mt-3 text-foreground/70 text-pretty">{d.body}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-forest text-mist py-24 md:py-36 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-16 md:grid-cols-12 items-center">
          <Reveal className="md:col-span-6">
            <div className="overflow-hidden rounded-2xl aspect-[4/5] max-w-md mx-auto">
              <img src={horseImg} alt="A horse standing quietly at dawn" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-6">
            <div className="eyebrow text-sage">Equine therapy</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight text-balance font-light">
              Horses don't care what you used to be.
            </h2>
            <div className="mt-6 space-y-5 text-mist/85 text-lg text-pretty">
              <p>
                A horse responds to who you are, right now — your breath, your posture, your honesty.
                Working with horses asks a man to show up the way recovery asks him to show up.
              </p>
              <p>
                Many of our residents who had been through treatment many times before describe their
                time with the horses as the moment something finally moved inside them.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="eyebrow text-moss">Length of stay</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight text-balance">
              Short or long term. Whatever the work asks for.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal delay={0.05}>
              <div className="rounded-2xl border border-border bg-card p-8 h-full">
                <div className="font-display text-2xl text-forest">Short term</div>
                <p className="mt-3 text-foreground/75 text-pretty">
                  A reset. A stabilizing time away in a sober environment, with structure, fresh air, and
                  the steady company of horses.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="rounded-2xl border border-moss/30 bg-forest text-mist p-8 h-full">
                <div className="font-display text-2xl text-dawn">Long term</div>
                <p className="mt-3 text-mist/85 text-pretty">
                  For men who've been to treatment before. The deeper, slower work of building a life
                  that holds — sometimes a year or more. Often what finally works.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.25} className="mt-12 text-center">
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 text-forest border-b border-forest/40 pb-1 hover:border-forest transition-colors"
            >
              See admissions
            </Link>
            <div className="mt-8">
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-3 rounded-full bg-forest text-mist px-7 py-4 hover:bg-moss transition-colors"
              >
                <Phone className="h-4 w-4" /> Call {SITE.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

const DAY = [
  { Icon: Sunrise, when: "Dawn", title: "Morning chores", body: "The day begins early. Feed the horses, check the pasture, take in the quiet before the world wakes." },
  { Icon: Users, when: "Mid-morning", title: "Community", body: "Meals together, check-ins, and the simple accountability of being part of something working." },
  { Icon: Hammer, when: "Day", title: "Honest work", body: "Real chores on a real ranch. The kind of work that returns a man to his hands and out of his head." },
  { Icon: Leaf, when: "Afternoon", title: "Equine time", body: "Grooming, groundwork, and time with the horses — the heart of what changes here." },
  { Icon: Moon, when: "Evening", title: "Rest & reflection", body: "A quiet evening, the kind sobriety needs. Rest as a discipline. Reflection as a practice." },
  { Icon: Sunrise, when: "Every day", title: "Drug & alcohol-free", body: "An absolute, unwavering sober environment. The single most important condition for what happens here." },
];