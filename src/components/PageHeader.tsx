import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface Props {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  image: string;
  imageAlt: string;
}

export function PageHeader({ eyebrow, title, intro, image, imageAlt }: Props) {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={image} alt={imageAlt} className="h-full w-full object-cover animate-ken-burns" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/90 via-forest/80 to-forest/70" />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-12 md:pt-20">
        <Reveal>
          <div className="eyebrow !text-white">{eyebrow}</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-light leading-[1.02] text-white text-balance max-w-4xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-lg text-white/90 text-pretty">{intro}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}