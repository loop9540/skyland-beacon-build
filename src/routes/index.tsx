import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Phone, Play, X, Quote } from "lucide-react";
import heroImg from "@/assets/hero-ranch.jpg";
import heroVideo from "@/assets/hero-bg.mp4.asset.json";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";
import { SectionLink } from "@/components/SectionLink";
import { scrollToSection } from "@/lib/scroll";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProgramSection } from "@/components/sections/ProgramSection";
import { ResidenceSection } from "@/components/sections/ResidenceSection";
import { AdmissionsSection } from "@/components/sections/AdmissionsSection";
import { ContactSection } from "@/components/sections/ContactSection";

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

  // Arriving from a redirected old route (e.g. /about → /#about) or a deep link: scroll to the section.
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) requestAnimationFrame(() => scrollToSection(hash, "auto"));
  }, []);

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
      <section id="top" ref={heroRef} className="relative min-h-[100svh] overflow-hidden">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0">
          <video
            src={heroVideo.url}
            poster={heroImg}
            autoPlay
            muted
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
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
                <SectionLink
                  id="program"
                  className="inline-flex items-center gap-2 rounded-full border border-mist/40 text-mist px-6 py-4 text-base hover:bg-mist/10 transition-colors"
                >
                  Explore the program
                </SectionLink>
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

      {/* Folded one-page sections — each photo and topic appears once */}
      <div id="about" className="scroll-mt-24">
        <AboutSection />
      </div>
      <div id="program" className="scroll-mt-24">
        <ProgramSection />
      </div>
      <div id="residence" className="scroll-mt-24">
        <ResidenceSection />
      </div>
      <div id="admissions" className="scroll-mt-24">
        <AdmissionsSection />
      </div>
      <div id="contact" className="scroll-mt-24">
        <ContactSection />
      </div>
    </>
  );
}
