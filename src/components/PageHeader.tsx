import type { ReactNode } from "react";

import { Reveal } from "@/components/Reveal";

export function PageHeader({
  eyebrow,
  title,
  intro,
  image,
  imageAlt = "",
  light = false,
  bottomImage,
  bottomImageAlt = "",
  headingLevel = "h1",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  image?: string;
  imageAlt?: string;
  light?: boolean;
  bottomImage?: string;
  bottomImageAlt?: string;
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 -z-10">
        {image ? (
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="h-full w-full object-cover animate-ken-burns"
          />
        ) : null}
        {light ? (
          <div className={`absolute inset-0 ${image ? "bg-mist/80" : "bg-mist"}`} />
        ) : (
          <div
            className={`absolute inset-0 ${
              image ? "bg-gradient-to-b from-forest/90 via-forest/80 to-forest/70" : "bg-forest"
            }`}
          />
        )}
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-12 md:pt-20 lg:px-10">
        <Reveal>
          <div className={`eyebrow ${light ? "text-forest" : "text-white"}`}>{eyebrow}</div>
          <Heading
            className={`mt-4 max-w-4xl text-balance font-display text-5xl font-light leading-[1.02] md:text-7xl ${
              light ? "text-forest" : "text-white"
            }`}
          >
            {title}
          </Heading>
          {intro ? (
            <p
              className={`mt-6 max-w-2xl text-lg text-pretty ${light ? "text-forest/90" : "text-white/90"}`}
            >
              {intro}
            </p>
          ) : null}
        </Reveal>

        {bottomImage ? (
          <Reveal
            delay={150}
            className="mt-10 aspect-[4/3] overflow-hidden rounded-2xl shadow-lift md:mt-14 md:aspect-[16/9]"
          >
            <img
              src={bottomImage}
              alt={bottomImageAlt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
