import { ArrowRight, Phone, Play } from "lucide-react";

import heroPoster from "@/assets/hero-ranch.jpg";
import { SITE, sectionHref } from "@/lib/site";

export function HeroSection({ onOpenVideo }: { onOpenVideo: () => void }) {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroPoster}
          alt=""
          width="1600"
          height="900"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/40 via-forest/20 to-mist" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-28 pb-24 lg:px-10 lg:pt-32 lg:pb-28">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
          <div className="animate-reveal">
            <div className="eyebrow text-white drop-shadow-sm">A 501(c)(3) nonprofit</div>
            <h1 className="mt-5 text-balance font-display text-5xl font-light leading-[1.02] text-mist sm:text-6xl lg:text-7xl">
              There is <em className="not-italic font-normal text-dawn">hope</em> —<br />
              and a quiet place
              <br />
              to begin again.
            </h1>
            <p className="mt-7 max-w-xl text-pretty text-lg text-mist/90">
              A working horse ranch in the Cascade foothills, 45 minutes from Seattle, where men
              rebuild sober daily life through honest work, mutual respect, and the steady company
              of horses.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={SITE.phoneHref}
                className="group inline-flex items-center gap-3 rounded-full bg-dawn px-7 py-4 text-base font-medium text-accent-foreground shadow-lift transition-transform hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4" />
                Call {SITE.phone}
                <ArrowRight className="h-4 w-4 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
              </a>
              <a
                href={sectionHref("program")}
                className="inline-flex items-center gap-2 rounded-full border border-mist/40 px-6 py-4 text-base text-mist transition-colors hover:bg-mist/10"
              >
                See daily life
              </a>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenVideo}
            aria-label="Play the Skyland Ranch film"
            className="group relative w-full overflow-hidden rounded-2xl border-2 border-mist/40 shadow-lift transition-all hover:-translate-y-1 hover:shadow-2xl"
          >
            <img
              src={`https://img.youtube.com/vi/${SITE.youtubeId}/maxresdefault.jpg`}
              alt="Watch the Skyland Ranch film"
              width="1280"
              height="720"
              className="aspect-video h-auto w-full object-cover"
            />
            <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-forest/25 transition-colors group-hover:bg-forest/35">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-mist/95 text-forest shadow-lift transition-transform group-hover:scale-110">
                <Play className="ml-1 h-6 w-6 fill-current" />
              </span>
              <span className="font-medium text-mist drop-shadow-md">Watch the film</span>
            </span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-mist/70">
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
        <div className="h-10 w-px bg-mist/40 animate-drift" />
      </div>
    </section>
  );
}
