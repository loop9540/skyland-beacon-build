import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import horseImg from "@/assets/horse-portrait.jpg";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Skyland Ranch — Call 360-793-2611" },
      {
        name: "description",
        content:
          "Speak with Skyland Ranch about sober living for men near Seattle, WA. Call 360-793-2611 for a confidential conversation. Located in Sultan, Washington.",
      },
      { property: "og:title", content: "Contact Skyland Ranch" },
      { property: "og:description", content: "Call 360-793-2611 to speak with us about sober living for men." },
      { property: "og:url", content: "/contact" },
      { property: "og:image", content: horseImg },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={<>Call us.<br /> We're real people on the other end.</>}
        intro="The fastest way to talk about whether Skyland Ranch is right for you — or for someone you love — is a phone call. No forms, no automated systems."
        image={horseImg}
        imageAlt="A horse standing in a misty pasture"
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 grid gap-12 md:grid-cols-2 items-start">
          <Reveal>
            <div className="rounded-3xl bg-gradient-dawn p-10 md:p-12 text-mist shadow-lift">
              <div className="eyebrow text-sage">Best way to reach us</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight font-light text-balance">
                Pick up the phone.
              </h2>
              <a
                href={SITE.phoneHref}
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-mist text-forest px-7 py-4 text-lg font-medium hover:-translate-y-0.5 transition-transform"
              >
                <Phone className="h-5 w-5" /> {SITE.phone}
              </a>
              <p className="mt-6 text-mist/85 text-pretty">
                Calls are confidential. We listen first, then answer questions. There is never any pressure.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-2xl bg-card border border-border/60 p-10 shadow-soft">
              <div className="eyebrow">Reach the ranch</div>
              <ul className="mt-6 space-y-6">
                <ContactRow Icon={Phone} label="Phone" value={SITE.phone} href={SITE.phoneHref} />
                <ContactRow Icon={Mail} label="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
                <ContactRow Icon={MapPin} label="Location" value={SITE.location} />
                <ContactRow Icon={Clock} label="Hours" value="Calls answered daily" />
              </ul>
              <div className="hairline mt-10" />
              <p className="mt-6 text-sm text-muted-foreground text-pretty">
                If you're calling on behalf of a loved one — a son, a brother, a friend — that's a
                conversation we have often, and we welcome it.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  Icon,
  label,
  value,
  href,
}: {
  Icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
        <div className="mt-0.5 text-foreground font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <li>
      <a href={href} className="block hover:opacity-80 transition-opacity">{content}</a>
    </li>
  ) : (
    <li>{content}</li>
  );
}