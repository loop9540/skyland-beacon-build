import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Phone, Mountain, HeartHandshake, Sun, Quote, Play, X } from "lucide-react";
import heroImg from "@/assets/hero-ranch.jpg";
import horseImg from "@/assets/horse-portrait.jpg";
import barnImg from "@/assets/barn-dawn-v2.jpg.asset.json";
import equineImg from "@/assets/equine-therapy.jpg";
import trailImg from "@/assets/forest-trail.jpg";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Skyland Ranch — Sober Living for Men Near Seattle, WA" },
      {
        name: "description",
        content:
          "A working horse ranch offering long-term drug and alcohol-free recovery for men in the Cascade foothills near Seattle. Equine therapy, dignity, hope.",
      },
      { property: "og:title", content: "Skyland Ranch — There is hope." },
      {
        property: "og:description",
        content:
          "Long-term sober living for men on a working horse ranch near Seattle. Helping men rebuild their lives since 1986.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    if (!videoOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setVideoOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [videoOpen]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0">
          <img
            src={heroImg}
            alt="Sunrise over Skyland Ranch pastures with the Cascade foothills in the distance"
            className="h-full w-full object-cover animate-ken-burns"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/40 via-forest/20 to-mist" />
        </motion.div>

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-28 pb-24 lg:px-10 lg:pt-32 lg:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12"
          >
            <div>
              <div className="eyebrow text-white drop-shadow-sm">A 501(c)(3) nonprofit</div>
              <h1 className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.02] text-mist text-balance">
                There is <em className="not-italic font-normal text-dawn">hope</em> —<br />
                and a quiet place<br />to begin again.
              </h1>
              <p className="mt-7 max-w-xl text-lg text-mist/90 text-pretty">
                A working horse ranch in the Cascade foothills, 45 minutes from Seattle, where men
                recover their footing through honest work, mutual respect, and the steady company of horses.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={SITE.phoneHref}
                  className="group inline-flex items-center gap-3 rounded-full bg-dawn text-accent-foreground px-7 py-4 text-base font-medium shadow-lift hover:-translate-y-0.5 transition-transform"
                >
                  <Phone className="h-4 w-4" />
                  Call {SITE.phone}
                  <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                </a>
                <Link
                  to="/program"
                  className="inline-flex items-center gap-2 rounded-full border border-mist/40 text-mist px-6 py-4 text-base hover:bg-mist/10 transition-colors"
                >
                  Explore the program
                </Link>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="group relative overflow-hidden rounded-2xl border-2 border-mist/40 shadow-lift hover:shadow-2xl transition-all hover:-translate-y-1 w-full"
            >
              <img
                src="https://img.youtube.com/vi/13ERTGWCvH4/maxresdefault.jpg"
                alt="Watch the Skyland Ranch film"
                className="h-auto w-full object-cover aspect-video"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-forest/25 group-hover:bg-forest/35 transition-colors gap-2">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-mist/95 text-forest shadow-lift group-hover:scale-110 transition-transform">
                  <Play className="h-6 w-6 fill-current ml-1" />
                </span>
                <span className="text-mist font-medium drop-shadow-md">Watch the film</span>
              </div>
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-mist/70"
        >
          <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
          <div className="h-10 w-px bg-mist/40 animate-drift" />
        </motion.div>
      </section>

      {/* Video lightbox */}
      {videoOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-forest/95 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setVideoOpen(false)}
        >
          <button
            type="button"
            aria-label="Close video"
            onClick={() => setVideoOpen(false)}
            className="absolute top-5 right-5 md:top-8 md:right-8 flex h-11 w-11 items-center justify-center rounded-full bg-mist/10 border border-mist/30 text-mist hover:bg-mist/20 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-lift"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://www.youtube.com/embed/13ERTGWCvH4?autoplay=1&rel=0"
              title="Skyland Ranch — film"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </motion.div>
      )}

      {/* Quote */}
      <section className="relative bg-mist py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <Quote className="mx-auto h-10 w-10 text-sage" />
            <blockquote className="mt-6 font-display text-3xl md:text-4xl lg:text-5xl leading-[1.2] text-foreground text-balance font-light">
              "Whatever brought you here, you don't have to carry it alone.
              <span className="text-moss"> Begin your journey of living a new way.</span>"
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="relative py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-16 md:grid-cols-12 md:gap-20 items-center">
          <Reveal className="md:col-span-5">
            <div className="eyebrow text-moss">Our mission</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-balance">
              Male drug and alcohol addiction recovery — with dignity.
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-7 space-y-6 text-lg text-foreground/80 text-pretty">
            <p>
              At Skyland Ranch, we take great care to foster an atmosphere of mutual respect and
              honesty. Over the past {SITE.yearsOfService} years the ranch has helped hundreds of
              men overcome drug, alcohol, and other addiction issues.
            </p>
            <p>
              We're a place where men can live in a drug and alcohol-free environment for short
              or long-term recovery. As a functioning horse ranch, we offer a quality of life and
              self-esteem building opportunities perfectly suited to lasting sobriety.
            </p>
            <div className="hairline" />
            <p className="text-base text-muted-foreground">
              Many residents arrive after multiple short-term treatment programs. The ranch's pace,
              the work, and the equine therapy give recovery the time it needs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Three pillars */}
      <section className="relative bg-secondary/40 py-24 md:py-32 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="eyebrow text-moss">What sets the ranch apart</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] max-w-2xl text-balance">
              Three things that change a man's life here.
            </h2>
          </Reveal>
          <Stagger className="mt-16 grid gap-6 md:grid-cols-3">
            {PILLARS.map((p) => (
              <StaggerItem key={p.title}>
                <article className="group h-full rounded-2xl bg-card p-8 shadow-soft hover:shadow-lift transition-shadow border border-border/60">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest/10 text-forest group-hover:bg-forest group-hover:text-mist transition-colors">
                    <p.Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl text-foreground">{p.title}</h3>
                  <p className="mt-3 text-foreground/70 text-pretty">{p.body}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Image montage */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-6 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-7 md:row-span-2">
            <div className="overflow-hidden rounded-2xl aspect-[4/5] md:aspect-[4/5]">
              <img src={horseImg} alt="A bay horse in a misty Pacific Northwest pasture" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-[1600ms]" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5">
            <div className="overflow-hidden rounded-2xl aspect-[4/3]">
              <img src={equineImg} alt="Hands brushing a horse's mane" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-[1600ms]" />
            </div>
          </Reveal>
          <Reveal delay={0.2} className="md:col-span-5">
            <div className="overflow-hidden rounded-2xl aspect-[4/3]">
              <img src={barnImg} alt="A weathered barn at dawn" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-[1600ms]" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Equine therapy band */}
      <section className="relative py-24 md:py-36 bg-forest text-mist overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={trailImg} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/80 to-forest/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid gap-12 md:grid-cols-12 items-end">
          <Reveal className="md:col-span-7">
            <div className="eyebrow text-sage">Equine therapy</div>
            <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[1.05] text-balance text-mist font-light">
              A horse can't be lied to.
            </h2>
            <p className="mt-6 max-w-xl text-mist/85 text-lg text-pretty">
              Working with horses asks for presence, patience, and honesty — the same things sobriety
              asks for. Many of our residents discover that what shifts in the round pen begins to
              shift in the rest of their lives.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="md:col-span-5 md:text-right">
            <Link
              to="/program"
              className="inline-flex items-center gap-2 text-mist border-b border-dawn/60 pb-2 hover:border-dawn transition-colors"
            >
              Read about the program <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Numbers */}
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

      {/* CTA */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="rounded-3xl bg-gradient-dawn p-10 md:p-16 text-center border border-moss/20 shadow-lift">
              <div className="eyebrow text-sage">Reach out</div>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-mist leading-tight text-balance font-light">
                When you're ready, the ranch is here.
              </h2>
              <p className="mt-6 text-mist/85 max-w-xl mx-auto text-pretty">
                Speak with someone today. Calls are confidential and there's no pressure — just an
                honest conversation about whether the ranch might be the right next step.
              </p>
              <a
                href={SITE.phoneHref}
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-mist text-forest px-8 py-4 text-base font-medium hover:-translate-y-0.5 transition-transform shadow-lift"
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

const PILLARS = [
  {
    Icon: Mountain,
    title: "A setting that does the work with you",
    body:
      "Breathtaking Cascade scenery, fresh air, and the quiet rhythm of a working ranch. The land itself becomes part of recovery.",
  },
  {
    Icon: HeartHandshake,
    title: "Mutual respect, honest community",
    body:
      "An atmosphere of dignity and honesty among men who understand what it took to get here — and what it takes to stay.",
  },
  {
    Icon: Sun,
    title: "Time to actually change",
    body:
      "Short stays and long-term residency. The ranch gives recovery the time and the steady ground it needs to last.",
  },
];

const STATS = [
  { value: `${SITE.yearsOfService}+`, label: "Years helping men reclaim their lives" },
  { value: "100s", label: "Of residents supported through sustained recovery" },
  { value: "45 min", label: "From downtown Seattle to a different kind of quiet" },
];
