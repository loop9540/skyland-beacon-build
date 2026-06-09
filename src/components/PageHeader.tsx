import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface Props {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: string;
  imageAlt?: string;
  light?: boolean;
  bottomImage?: string;
  bottomImageAlt?: string;
  /** Heading level. Defaults to h1; folded one-page sections pass "h2" so the page keeps a single h1. */
  as?: "h1" | "h2";
}

export function PageHeader({ eyebrow, title, intro, image, imageAlt, light, bottomImage, bottomImageAlt, as = "h1" }: Props) {
  const Heading = as;
  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {image && <img src={image} alt={imageAlt || ""} className="h-full w-full object-cover animate-ken-burns" loading="eager" />}
        {light ? (
          <div className={`absolute inset-0 ${image ? "bg-mist/80" : "bg-mist"}`} />
        ) : (
          <div className={`absolute inset-0 ${image ? "bg-gradient-to-b from-forest/90 via-forest/80 to-forest/70" : "bg-forest"}`} />
        )}
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-12 md:pt-20">
        <Reveal>
          <div className={`eyebrow ${light ? "!text-forest" : "!text-white"}`}>{eyebrow}</div>
          <Heading className={`mt-4 font-display text-5xl md:text-7xl font-light leading-[1.02] text-balance max-w-4xl ${light ? "text-forest" : "text-white"}`}>
            {title}
          </Heading>
          {intro && (
            <p className={`mt-6 max-w-2xl text-lg text-pretty ${light ? "text-forest/90" : "text-white/90"}`}>{intro}</p>
          )}
        </Reveal>
        {bottomImage && (
          <Reveal delay={0.15}>
            <div className="mt-10 md:mt-14 rounded-2xl overflow-hidden shadow-lift">
              <img src={bottomImage} alt={bottomImageAlt || ""} className="w-full h-auto object-cover" loading="eager" />
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}