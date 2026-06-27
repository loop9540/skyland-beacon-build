import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import barnImg from "@/assets/barn-dawn-v3.jpg";
import kcImg from "@/assets/kc-horseback.jpg";
import paImg from "@/assets/pa-horseback.jpg";
import trailImg from "@/assets/forest-trail.jpg";
import valleyImg from "@/assets/river-valley.jpg";
import { SITE } from "@/lib/site";

const VALUES = [
  {
    title: "Honesty",
    body: "We meet every man where he is, and we ask him to do the same. Pretense doesn't survive long around horses.",
  },
  {
    title: "Mutual respect",
    body: "Sobriety is hard. The ranch is a place where that work is held with dignity, not judgment.",
  },
  {
    title: "Quiet structure",
    body: "Days have rhythm — chores, meals, work, rest. The structure carries men when willpower can't.",
  },
  {
    title: "Time",
    body: "We honor the truth that lasting sobriety is built slowly. Short stays are welcome; long stays are often what works.",
  },
];

const STATS = [
  { value: `${SITE.yearsOfService}+`, label: "Years helping men reclaim their lives" },
  { value: "100s", label: "Of residents supported in sober daily life" },
  { value: "45 min", label: "From downtown Seattle to a different kind of quiet" },
];

export function AboutSection() {
  return (
    <>
      <PageHeader
        headingLevel="h2"
        eyebrow="About the ranch"
        title={
          <>
            A working ranch.
            <br /> A steady place to live sober.
          </>
        }
        intro="Skyland Ranch has been a quiet, honest home for men building sobriety since 1986 — shaped by the land, by horses, and by the men who chose to begin again here."
        image={barnImg}
        imageAlt="A weathered barn at dawn on the ranch"
        light
        bottomImage={valleyImg}
        bottomImageAlt="The river valley below the ranch at golden hour"
      />

      <section className="relative py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-start gap-16 px-6 md:grid-cols-12 md:gap-20 lg:px-10">
          <Reveal className="md:col-span-5">
            <div className="eyebrow text-moss">Our mission</div>
            <h3 className="mt-4 text-balance font-display text-4xl leading-[1.05] md:text-5xl">
              Long-term sober living for men — with dignity.
            </h3>
          </Reveal>
          <Reveal
            delay={150}
            className="space-y-6 text-pretty text-lg text-foreground/80 md:col-span-7"
          >
            <p>
              At Skyland Ranch, we take great care to foster an atmosphere of mutual respect and
              honesty. Over the past {SITE.yearsOfService} years the ranch has welcomed hundreds of
              men seeking a stable, drug- and alcohol-free place to rebuild daily life.
            </p>
            <p>
              We are a small, intentional community, not a medical or clinical provider. We do not
              provide detox, diagnosis, counseling, therapy, or behavioral health treatment on site.
              We are a working horse ranch where sobriety is practiced one quiet day at a time,
              supported by structure, by chores, by horses, and by the company of other men who
              understand.
            </p>
            <div className="hairline" />
            <p className="text-base text-muted-foreground">
              Many residents arrive after short-term programs or other life transitions. The ranch's
              pace — slow, steady, and grounded in real work — gives sobriety room to become
              ordinary daily life.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-stretch gap-12 px-6 md:grid-cols-12 md:gap-16 lg:px-10">
          <Reveal className="md:col-span-6">
            <div className="eyebrow text-moss">Our founders</div>
            <h3 className="mt-4 text-balance font-display text-4xl leading-[1.05] md:text-5xl">
              A judge who traded the courtroom for the pasture.
            </h3>
            <div className="mt-6 space-y-5 text-pretty text-lg text-foreground/80">
              <p>
                Skyland Ranch was founded by Mr. Pitkin — known to every resident simply as{" "}
                <strong>“Pa.”</strong> Formerly an attorney and judge in San Diego, he left the
                bench and moved to the Pacific Northwest with a single conviction: that men trying
                to live sober needed time, honest work, and the steady company of horses.
              </p>
              <p>
                From that idea grew a horse-centered sober living community built on mutual respect,
                honesty, and the one thing no quick fix can rush — time. It was never meant to be a
                clinical facility. It was meant to be a home, and a working ranch, where sobriety is
                something you live rather than something you complete.
              </p>
              <p>
                What Pa built has held: a community of men who understand one another, doing real
                work side by side, holding each other to honesty. That purpose still guides the
                ranch today — to offer this sober living home to men and families of all walks of
                life.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150} className="flex md:col-span-6">
            <FounderCard
              image={paImg}
              imageAlt="Pa on horseback at the ranch, mountains behind"
              quote="The horses take care of the residents, and the residents take care of the horses."
              attribution="— Pa, founder of Skyland Ranch"
            />
          </Reveal>
        </div>

        <div className="mx-auto mt-20 grid max-w-7xl items-stretch gap-12 px-6 md:mt-28 md:grid-cols-12 md:gap-16 lg:px-10">
          <Reveal delay={150} className="order-last flex md:order-first md:col-span-6">
            <FounderCard
              image={kcImg}
              imageAlt="KC Letterman on horseback at the ranch, mountains behind"
              quote="When people learn more about themselves through working with horses, that learning changes their lives."
              attribution="— KC Letterman"
            />
          </Reveal>
          <Reveal className="md:col-span-6">
            <h3 className="text-balance font-display text-4xl leading-[1.05] md:text-5xl">
              KC Letterman
            </h3>
            <p className="mt-3 eyebrow text-moss">Horseman · EMT &amp; firefighter</p>
            <div className="mt-6 space-y-5 text-pretty text-lg text-foreground/80">
              <p>
                “Having worked as an Emergency Medical Technician and firefighter, and enjoying
                being an outdoor enthusiast and natural people leader, I’ve always been driven to
                help others find better ways of living. Since my early days, I’ve turned this
                defense mechanism into a collaborative skill.
              </p>
              <p>
                I’ve also had incredible opportunities in the horse world that have expanded my
                knowledge. While many people stay at the hobby level, I’ve always been drawn to the
                positive impact that can happen at the ranch. When people learn more about
                themselves through working with horses, that learning changes their lives — and the
                lives of their families and the people close to them.
              </p>
              <p>
                When I mix all my strengths together in this special place, Skyland Ranch, the
                result is that I can help people live a better life by connecting them with horses
                in the most amazing ways.”
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary/40 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="eyebrow text-moss">What we believe</div>
            <h3 className="mt-4 max-w-2xl text-balance font-display text-4xl leading-tight md:text-5xl">
              The values that shape every day on the ranch.
            </h3>
          </Reveal>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {VALUES.map((value, index) => (
              <Reveal key={value.title} delay={index * 80}>
                <div className="h-full rounded-2xl border border-border/60 bg-card p-8 shadow-soft">
                  <div className="font-display text-2xl text-forest">{value.title}</div>
                  <p className="mt-3 text-pretty text-foreground/75">{value.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-3 lg:px-10">
          {STATS.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 100}>
              <div className="text-center md:text-left">
                <div className="font-display text-6xl font-light text-forest md:text-7xl">
                  {stat.value}
                </div>
                <div className="mx-auto mt-3 max-w-xs text-foreground/70 md:mx-0">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-32 md:py-40">
        <div className="absolute inset-0 -z-10">
          <img src={trailImg} alt="" loading="lazy" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-mist/85" />
        </div>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <blockquote className="text-balance font-display text-3xl font-light leading-tight text-foreground md:text-5xl">
              "The land doesn't rush.
              <br />
              <span className="text-moss">Neither does the work of becoming new.</span>"
            </blockquote>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function FounderCard({
  image,
  imageAlt,
  quote,
  attribution,
}: {
  image: string;
  imageAlt: string;
  quote: string;
  attribution: string;
}) {
  return (
    <div className="relative flex w-full flex-col justify-end overflow-hidden rounded-3xl shadow-lift">
      <img
        src={image}
        alt={imageAlt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/25 to-transparent" />
      <div className="relative p-10 text-mist md:p-12">
        <blockquote className="text-balance font-display text-3xl font-light leading-[1.15] md:text-4xl">
          “{quote}”
        </blockquote>
        <div className="mt-6 eyebrow text-sage">{attribution}</div>
      </div>
    </div>
  );
}
