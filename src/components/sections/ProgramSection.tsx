import { Hammer, Leaf, Moon, Sunrise, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import equineImg from "@/assets/equine-saddle.png";
import arenaImg from "@/assets/horseback-arena-v2.jpg";
import leviImg from "@/assets/levi-horse.jpg";
import { sectionHref } from "@/lib/site";

const DAY: Array<{ icon: LucideIcon; when: string; title: string; body: string }> = [
  {
    icon: Sunrise,
    when: "Dawn",
    title: "Morning chores",
    body: "The day begins early. Feed the horses, check the pasture, take in the quiet before the world wakes.",
  },
  {
    icon: Users,
    when: "Mid-morning",
    title: "Community",
    body: "Meals together, check-ins, and the simple accountability of being part of something working.",
  },
  {
    icon: Hammer,
    when: "Day",
    title: "Honest work",
    body: "Real chores on a real ranch. The kind of work that returns a man to his hands and out of his head.",
  },
  {
    icon: Leaf,
    when: "Afternoon",
    title: "Equine time",
    body: "Grooming, groundwork, and time with the horses — the heart of what changes here.",
  },
  {
    icon: Moon,
    when: "Evening",
    title: "Rest & reflection",
    body: "A quiet evening, the kind sobriety needs. Rest as a discipline. Reflection as a practice.",
  },
  {
    icon: Sunrise,
    when: "Every day",
    title: "Drug & alcohol-free",
    body: "An absolute, unwavering sober environment. The single most important condition for what happens here.",
  },
];

export function ProgramSection() {
  return (
    <>
      <PageHeader
        headingLevel="h2"
        eyebrow="Daily life"
        title={
          <>
            A day on the ranch.
            <br /> A life built sober.
          </>
        }
        intro="Sobriety here is built into the texture of an ordinary day — feeding horses at dawn, working the land, sharing a meal, walking the trails. The rhythm of the ranch is the support."
        image={equineImg}
        imageAlt="Hands gently brushing a horse's mane in soft natural light"
        light
        bottomImage={arenaImg}
        bottomImageAlt="A resident riding horseback in the arena with mountains behind"
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="eyebrow text-moss">A day in the life</div>
            <h3 className="mt-4 max-w-2xl text-balance font-display text-4xl leading-tight md:text-5xl">
              The structure that makes sober daily life practical.
            </h3>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {DAY.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal
                  key={`${item.when}-${item.title}`}
                  delay={index * 90}
                  className="group h-full rounded-2xl border border-border/60 bg-card p-8 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <Icon className="h-7 w-7 text-moss" />
                  <div className="mt-5 eyebrow text-muted-foreground">{item.when}</div>
                  <h4 className="mt-2 font-display text-2xl text-foreground">{item.title}</h4>
                  <p className="mt-3 text-pretty text-foreground/70">{item.body}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-forest py-24 text-mist md:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-12 lg:px-10">
          <Reveal className="md:col-span-6">
            <div className="mx-auto aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={leviImg}
                alt="A resident riding a palomino horse in the arena, evergreens and mountains behind"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={150} className="md:col-span-6">
            <div className="eyebrow text-sage">Horses & ranch life</div>
            <h3 className="mt-4 text-balance font-display text-4xl font-light leading-tight md:text-5xl">
              A horse can't be lied to.
            </h3>
            <div className="mt-6 space-y-5 text-pretty text-lg text-mist/85">
              <p>
                A horse responds to who you are, right now — your breath, your posture, your
                honesty. Working with horses asks a man to show up the way sober living asks him to
                show up.
              </p>
              <p>
                Many residents describe their time with the horses as the moment daily life began to
                feel grounded again.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="eyebrow text-moss">Length of stay</div>
            <h3 className="mt-4 text-balance font-display text-4xl leading-tight md:text-5xl">
              Short or long term. Whatever the work asks for.
            </h3>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal delay={50}>
              <div className="h-full rounded-2xl border border-border bg-card p-8">
                <div className="font-display text-2xl text-forest">Short term</div>
                <p className="mt-3 text-pretty text-foreground/75">
                  A reset. A stabilizing time away in a sober environment, with structure, fresh
                  air, and the steady company of horses.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="h-full rounded-2xl border border-moss/30 bg-forest p-8 text-mist">
                <div className="font-display text-2xl text-dawn">Long term</div>
                <p className="mt-3 text-pretty text-mist/85">
                  For men who need more than a brief reset. The deeper, slower work of building a
                  life that holds — sometimes a year or more.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={250} className="mt-12 text-center">
            <a
              href={sectionHref("admissions")}
              className="inline-flex items-center gap-2 border-b border-forest/40 pb-1 text-forest transition-colors hover:border-forest"
            >
              See how to begin
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
