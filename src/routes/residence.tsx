import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Phone, Home, Trees, Flame, Bed } from "lucide-react";
import { SITE } from "@/lib/site";
import img5074 from "@/assets/housing-5074.jpg.asset.json";
import img5085 from "@/assets/housing-5085.jpg.asset.json";
import img5087 from "@/assets/housing-5087.jpg.asset.json";
import img5089 from "@/assets/housing-5089.jpg.asset.json";
import img5099 from "@/assets/housing-5099.jpg.asset.json";
import img5102 from "@/assets/housing-5102.jpg.asset.json";

export const Route = createFileRoute("/residence")({
  head: () => ({
    meta: [
      { title: "Residence — The Lodge at Skyland Ranch | Sober Living for Men" },
      {
        name: "description",
        content:
          "A warm cedar lodge above the river. Shared bedrooms, a long family table, a wood stove, and quiet land — the home where men in recovery live the program at Skyland Ranch.",
      },
      { property: "og:title", content: "Residence at Skyland Ranch" },
      {
        property: "og:description",
        content: "A cedar lodge on the river — the home where men live the program.",
      },
      { property: "og:url", content: "/residence" },
      { property: "og:image", content: img5089.url },
    ],
    links: [{ rel: "canonical", href: "/residence" }],
  }),
  component: ResidencePage,
});

function ResidencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Residence"
        title={<>A cedar lodge.<br /> A river below.</>}
        intro="Our residents live together in a warm wood-beamed lodge above the Skykomish River — shared bedrooms, a long family table, a wood stove, and a porch that opens onto the pasture."
        image={img5089.url}
        imageAlt="The main lodge living room at Skyland Ranch, with vaulted cedar ceilings and a wall of windows overlooking the forest"
        light
        bottomImage={img5074.url}
        bottomImageAlt="The Skykomish River winding past the property"
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-16 md:grid-cols-12 items-center">
            <Reveal className="md:col-span-6">
              <div className="eyebrow">The lodge</div>
              <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight text-balance">
                A home, not a facility.
              </h2>
              <div className="mt-6 space-y-5 text-foreground/75 text-lg text-pretty">
                <p>
                  Skyland's lodge was built by hand from local cedar and fir. Vaulted ceilings,
                  a wood-burning stove, leather chairs worn soft by years of conversation — the
                  kind of room where a man can finally exhale.
                </p>
                <p>
                  Meals are shared at a long farm table. Coffee is on by sunrise. The pace is
                  unhurried on purpose — recovery needs a place that feels like a place to live,
                  not a place to wait.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15} className="md:col-span-6">
              <div className="overflow-hidden rounded-2xl aspect-[4/3] shadow-lift">
                <img
                  src={img5087.url}
                  alt="The great room — a long dining table, leather recliners, and a wood stove under a vaulted cedar ceiling"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-forest text-mist py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="eyebrow text-sage">What's inside</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight font-light max-w-3xl text-balance">
              Built for shared life, quiet rest, and the long work of recovery.
            </h2>
          </Reveal>
          <Stagger className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <StaggerItem key={f.title}>
                <div className="h-full rounded-2xl border border-mist/15 bg-mist/[0.04] p-8 backdrop-blur-sm">
                  <f.Icon className="h-7 w-7 text-dawn" />
                  <h3 className="mt-5 font-display text-2xl">{f.title}</h3>
                  <p className="mt-3 text-mist/75 text-pretty">{f.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="eyebrow">A look around</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight text-balance max-w-2xl">
              Photographs from the lodge.
            </h2>
          </Reveal>

          <Stagger className="mt-16 grid gap-5 md:gap-6 md:grid-cols-6 auto-rows-[14rem] md:auto-rows-[18rem]">
            <StaggerItem className="md:col-span-4 md:row-span-2">
              <GalleryTile
                src={img5074.url}
                alt="The Skykomish River winding past the property, with a steel bridge in the distance and pasture in the foreground"
              />
            </StaggerItem>
            <StaggerItem className="md:col-span-2">
              <GalleryTile
                src={img5099.url}
                alt="A residents' bedroom with two twin beds, plaid bedding, and warm string lights along the cedar ceiling"
              />
            </StaggerItem>
            <StaggerItem className="md:col-span-2">
              <GalleryTile
                src={img5102.url}
                alt="Another shared bedroom with two log-frame beds and a sliding door opening to the pasture"
              />
            </StaggerItem>
            <StaggerItem className="md:col-span-3">
              <GalleryTile
                src={img5085.url}
                alt="The lodge kitchen and dining area, with a long farm table and a wood-clad island"
              />
            </StaggerItem>
            <StaggerItem className="md:col-span-3">
              <GalleryTile
                src={img5087.url}
                alt="The great room from a different angle — long table, leather seating, and the wood stove"
              />
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      <section className="pb-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <div className="eyebrow">Come see it</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight text-balance">
              The best way to know if Skyland is right is to call.
            </h2>
            <p className="mt-6 text-foreground/70 text-lg">
              We'll answer your questions, walk you through what life here looks like,
              and help you take the next step.
            </p>
            <div className="mt-10">
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-3 rounded-full bg-forest text-mist px-7 py-4 hover:bg-moss transition-colors shadow-soft hover:shadow-lift"
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

function GalleryTile({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="group relative h-full w-full overflow-hidden rounded-2xl shadow-soft">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </figure>
  );
}

const FEATURES = [
  {
    Icon: Home,
    title: "Shared bedrooms",
    body: "Comfortable twin-bed rooms with views of the forest and pasture. Built for rest and quiet company.",
  },
  {
    Icon: Flame,
    title: "Wood stove & great room",
    body: "A vaulted-ceiling living room with a wood stove, leather seating, and a wall of windows on the trees.",
  },
  {
    Icon: Bed,
    title: "Family-style meals",
    body: "A long farm table, a real kitchen, and meals cooked and shared together. Coffee on at sunrise.",
  },
  {
    Icon: Trees,
    title: "Riverfront land",
    body: "Direct access to the Skykomish River, pastures, and quiet trails through second-growth forest.",
  },
];
