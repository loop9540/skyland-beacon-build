import { Reveal } from "@/components/Reveal";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE } from "@/lib/site";

export function ContactSection() {
  return (
    <section className="pt-32 md:pt-40 pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="eyebrow text-moss">Contact</div>
          <h2 className="mt-4 font-display text-5xl md:text-7xl font-light leading-[1.02] text-balance max-w-4xl">
            Call us. We're real people on the other end.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-foreground/80 text-pretty">
            The fastest way to talk about whether Skyland Ranch is right for you — or for someone you
            love — is a phone call. No forms, no automated systems.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-2 items-start">
          <Reveal>
            <div className="rounded-3xl bg-gradient-dawn p-10 md:p-12 text-mist shadow-lift">
              <div className="eyebrow text-sage">Best way to reach us</div>
              <h3 className="mt-3 font-display text-4xl md:text-5xl leading-tight font-light text-balance">
                Pick up the phone.
              </h3>
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
              <div className="eyebrow text-moss">Reach the ranch</div>
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
      </div>
    </section>
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
