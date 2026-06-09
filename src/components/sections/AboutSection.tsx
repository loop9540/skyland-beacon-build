import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import barnImg from "@/assets/barn-dawn-v3.jpg.asset.json";
import valleyImg from "@/assets/river-valley.jpg.asset.json";
import trailImg from "@/assets/forest-trail.jpg";
import { SITE } from "@/lib/site";

export function AboutSection() {
  return (
    <>
      <PageHeader
        as="h2"
        eyebrow="About the ranch"
        title={<>A working ranch.<br /> A patient kind of recovery.</>}
        intro="Skyland Ranch has been a quiet, honest home for men in recovery since 1986 — shaped by the land, by horses, and by the men who chose to begin again here."
        image={barnImg.url}
        imageAlt="A weathered barn at dawn on the ranch"
        light
        bottomImage={valleyImg.url}
        bottomImageAlt="The river valley below the ranch at golden hour"
      />

      {/* Mission */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-16 md:grid-cols-12 md:gap-20 items-start">
          <Reveal className="md:col-span-5">
            <div className="eyebrow text-moss">Our mission</div>
            <h3 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-balance">
              Male drug and alcohol addiction recovery — with dignity.
            </h3>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-7 space-y-6 text-lg text-foreground/80 text-pretty">
            <p>
              At Skyland Ranch, we take great care to foster an atmosphere of mutual respect and
              honesty. Over the past {SITE.yearsOfService} years the ranch has helped hundreds of
              men overcome drug, alcohol, and other addiction issues.
            </p>
            <p>
              We are a small, intentional community — not a clinical facility, and not a treatment
              center in the conventional sense. We are a working horse ranch where sobriety is
              practiced one quiet day at a time, supported by structure, by chores, by horses, and by
              the company of other men who understand.
            </p>
            <div className="hairline" />
            <p className="text-base text-muted-foreground">
              Many residents arrive after multiple short-term programs. The ranch's pace — slow,
              steady, and grounded in real work — is often what allows recovery to finally take.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/40 border-y border-border/60 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="eyebrow text-moss">What we believe</div>
            <h3 className="mt-4 font-display text-4xl md:text-5xl leading-tight max-w-2xl text-balance">
              The values that shape every day on the ranch.
            </h3>
          </Reveal>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="rounded-2xl bg-card p-8 border border-border/60 shadow-soft h-full">
                  <div className="font-display text-2xl text-forest">{v.title}</div>
                  <p className="mt-3 text-foreground/75 text-pretty">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Track record */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-12 md:grid-cols-3">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="text-center md:text-left">
                <div className="font-display text-6xl md:text-7xl text-forest font-light">{s.value}</div>
                <div className="mt-3 text-foreground/70 max-w-xs mx-auto md:mx-0">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Closing line */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={trailImg} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-mist/85" />
        </div>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <blockquote className="font-display text-3xl md:text-5xl leading-tight text-foreground font-light text-balance">
              "The land doesn't rush.<br />
              <span className="text-moss">Neither does the work of becoming new.</span>"
            </blockquote>
          </Reveal>
        </div>
      </section>
    </>
  );
}

const VALUES = [
  { title: "Honesty", body: "We meet every man where he is, and we ask him to do the same. Pretense doesn't survive long around horses." },
  { title: "Mutual respect", body: "Recovery is hard. The ranch is a place where that hardness is held with dignity, not judgment." },
  { title: "Quiet structure", body: "Days have rhythm — chores, meals, work, rest. The structure carries men when willpower can't." },
  { title: "Time", body: "We honor the truth that lasting sobriety is built slowly. Short stays are welcome; long stays are often what works." },
];

const STATS = [
  { value: `${SITE.yearsOfService}+`, label: "Years helping men reclaim their lives" },
  { value: "100s", label: "Of residents supported through sustained recovery" },
  { value: "45 min", label: "From downtown Seattle to a different kind of quiet" },
];
