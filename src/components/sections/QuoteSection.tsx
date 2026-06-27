import { Quote } from "lucide-react";

import { Reveal } from "@/components/Reveal";

export function QuoteSection() {
  return (
    <section className="relative bg-mist py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <Quote className="mx-auto h-10 w-10 text-sage" />
          <blockquote className="mt-6 text-balance font-display text-3xl font-light leading-[1.2] text-foreground md:text-4xl lg:text-5xl">
            "Whatever brought you here, you don't have to carry it alone.
            <span className="text-moss"> Begin your journey of living a new way.</span>"
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
