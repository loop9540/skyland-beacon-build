import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import barnImg from "@/assets/barn-dawn-v3.jpg.asset.json";
import heroImg from "@/assets/hero-ranch.jpg";
import trailImg from "@/assets/forest-trail.jpg";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Skyland Ranch — A Working Horse Ranch for Recovery" },
      {
        name: "description",
        content:
          "Since 1986, Skyland Ranch has provided men with a drug and alcohol-free home in the Cascade foothills. Our story, our values, and the people behind the ranch.",
      },
      { property: "og:title", content: "About Skyland Ranch" },
      { property: "og:description", content: "A working horse ranch helping men recover since 1986, near Seattle, WA." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: barnImg.url },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About the ranch"
        title={<>A working ranch.<br /> A patient kind of recovery.</>}
        intro="Skyland Ranch has been a quiet, honest home for men in recovery since 1986. Our story is shaped by the land, by horses, and by the men who chose to begin again here."
        image={barnImg.url}
        imageAlt="A weathered barn at dawn on the ranch"
        light
        bottomImage={heroImg}
        bottomImageAlt="The ranch at golden hour with horses grazing"
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 space-y-12 text-lg text-foreground/85 text-pretty">
          <Reveal>
            <div className="eyebrow text-moss">Our story</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-foreground leading-tight text-balance">
              {SITE.yearsOfService} years of helping men come home to themselves.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              Skyland Ranch was founded in 1986 in the foothills of the Cascade Mountains, on land
              that has always asked for honest work. From the beginning, the ranch has been a place
              where men struggling with drug and alcohol addiction could find more than a bed and a
              program — they could find a way of living.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p>
              We are a small, intentional community. We are not a clinical facility, and we are not a
              treatment center in the conventional sense. We are a working horse ranch where sobriety
              is practiced one quiet day at a time, supported by structure, by chores, by horses, and
              by the company of other men who understand.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              Many of our residents arrive after multiple short-term programs. The ranch's pace —
              slow, steady, and grounded in real work — is often what allows recovery to finally take.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border/60 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="eyebrow text-moss">What we believe</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight max-w-2xl text-balance">
              The values that shape every day on the ranch.
            </h2>
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