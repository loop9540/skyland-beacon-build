import { Bed, Flame, Home, Trees } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import groundwork from "@/assets/groundwork.jpg";
import img5074 from "@/assets/housing-5074.jpg";
import img5085 from "@/assets/housing-5085.jpg";
import img5087 from "@/assets/housing-5087.jpg";
import img5089 from "@/assets/housing-5089.jpg";
import img5099 from "@/assets/housing-5099.jpg";
import img5102 from "@/assets/housing-5102.jpg";
import riderPortrait from "@/assets/rider-portrait.jpg";
import ridersGroup from "@/assets/riders-group.jpg";

const FEATURES: Array<{ icon: LucideIcon; title: string; body: string }> = [
  {
    icon: Home,
    title: "Shared bedrooms",
    body: "Comfortable twin-bed rooms with views of the forest and pasture. Built for rest and quiet company.",
  },
  {
    icon: Flame,
    title: "Wood stove & great room",
    body: "A vaulted-ceiling living room with a wood stove, leather seating, and a wall of windows on the trees.",
  },
  {
    icon: Bed,
    title: "Family-style meals",
    body: "A long farm table, a real kitchen, and meals cooked and shared together. Coffee on at sunrise.",
  },
  {
    icon: Trees,
    title: "Riverfront land",
    body: "Direct access to the Skykomish River, pastures, and quiet trails through second-growth forest.",
  },
];

const GALLERY = [
  {
    img: img5074,
    alt: "The Skykomish River winding past the property, with a steel bridge in the distance and pasture in the foreground",
    cls: "md:col-span-4 md:row-span-2",
  },
  {
    img: img5099,
    alt: "A residents' bedroom with two twin beds, plaid bedding, and warm string lights along the cedar ceiling",
    cls: "md:col-span-2",
  },
  {
    img: riderPortrait,
    alt: "A resident in a cowboy hat riding a chestnut horse, its mane flying, evergreens behind",
    cls: "md:col-span-2",
  },
  {
    img: groundwork,
    alt: "A resident doing groundwork with a grey horse on the ranch",
    cls: "md:col-span-2 md:row-span-2",
  },
  {
    img: ridersGroup,
    alt: "Five residents on horseback lined up along a forest trail at the ranch",
    cls: "md:col-span-4",
  },
  {
    img: img5102,
    alt: "Another shared bedroom with two log-frame beds and a sliding door opening to the pasture",
    cls: "md:col-span-2",
  },
  {
    img: img5085,
    alt: "The lodge kitchen and dining area, with a long farm table and a wood-clad island",
    cls: "md:col-span-2",
  },
];

export function ResidenceSection() {
  return (
    <>
      <PageHeader
        headingLevel="h2"
        eyebrow="Residence"
        title={
          <>
            A cedar lodge.
            <br /> A river below.
          </>
        }
        intro="Our residents live together in a warm wood-beamed lodge above the Skykomish River — shared bedrooms, a long family table, a wood stove, and a porch that opens onto the pasture."
        image={img5089}
        imageAlt="The main lodge living room at Skyland Ranch, with vaulted cedar ceilings and a wall of windows overlooking the forest"
        light
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-16 md:grid-cols-12">
            <Reveal className="md:col-span-6">
              <div className="eyebrow text-moss">The lodge</div>
              <h3 className="mt-4 text-balance font-display text-4xl leading-tight md:text-5xl">
                A home, not a facility.
              </h3>
              <div className="mt-6 space-y-5 text-pretty text-lg text-foreground/75">
                <p>
                  Skyland's lodge was built by hand from local cedar and fir. Vaulted ceilings, a
                  wood-burning stove, leather chairs worn soft by years of conversation — the kind
                  of room where a man can finally exhale.
                </p>
                <p>
                  Meals are shared at a long farm table. Coffee is on by sunrise. The pace is
                  unhurried on purpose — sobriety needs a place that feels like a place to live, not
                  a place to wait.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150} className="md:col-span-6">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lift">
                <img
                  src={img5087}
                  alt="The great room — a long dining table, leather recliners, and a wood stove under a vaulted cedar ceiling"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-forest py-24 text-mist md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="eyebrow text-sage">What's inside</div>
            <h3 className="mt-4 max-w-3xl text-balance font-display text-4xl font-light leading-tight md:text-5xl">
              Built for shared life, quiet rest, and the long work of sober living.
            </h3>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Reveal key={feature.title} delay={index * 90}>
                  <div className="h-full rounded-2xl border border-mist/15 bg-mist/[0.04] p-8 backdrop-blur-sm">
                    <Icon className="h-7 w-7 text-dawn" />
                    <h4 className="mt-5 font-display text-2xl">{feature.title}</h4>
                    <p className="mt-3 text-pretty text-mist/75">{feature.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="eyebrow text-moss">A look around</div>
            <h3 className="mt-4 max-w-2xl text-balance font-display text-4xl leading-tight md:text-5xl">
              Photographs from the lodge.
            </h3>
          </Reveal>

          <div className="mt-16 grid auto-rows-[14rem] gap-5 md:auto-rows-[18rem] md:grid-cols-6 md:gap-6">
            {GALLERY.map((item, index) => (
              <Reveal key={`${item.alt}-${index}`} delay={index * 90} className={item.cls}>
                <figure className="group relative h-full w-full overflow-hidden rounded-2xl shadow-soft">
                  <img
                    src={item.img}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
