import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Phone, Check, Loader2 } from "lucide-react";
import barnImg from "@/assets/barn-dawn-v3.jpg.asset.json";
import valleyAsset from "@/assets/admissions-valley.jpg.asset.json";
import { SITE } from "@/lib/site";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/referrals")({
  head: () => ({
    meta: [
      { title: "Referrals for Clinicians — Aftercare Placement | Skyland Ranch" },
      {
        name: "description",
        content:
          "Rehab clinicians and case managers: refer a client to Skyland Ranch for long-term aftercare on a working horse ranch near Seattle, WA.",
      },
      { property: "og:title", content: "Clinician Referrals — Skyland Ranch" },
      {
        property: "og:description",
        content:
          "A simple, confidential way for clinicians to refer clients to Skyland Ranch for aftercare placement.",
      },
      { property: "og:url", content: "/referrals" },
      { property: "og:image", content: valleyAsset.url },
    ],
    links: [{ rel: "canonical", href: "/referrals" }],
  }),
  component: ReferralsPage,
});

const referralSchema = z.object({
  clinician_name: z.string().trim().min(1, "Your name is required").max(200),
  clinician_title: z.string().trim().max(200).optional().or(z.literal("")),
  facility_name: z.string().trim().min(1, "Facility name is required").max(200),
  clinician_phone: z.string().trim().min(7, "A phone number we can reach you at").max(50),
  clinician_email: z.string().trim().email("Enter a valid email").max(320),
  estimated_discharge_date: z.string().optional().or(z.literal("")),
  notes: z
    .string()
    .trim()
    .min(10, "Tell us a little about the placement need")
    .max(4000, "Please keep notes under 4000 characters"),
});

function ReferralsPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setFieldErrors({});
    const fd = new FormData(e.currentTarget);
    const raw = {
      clinician_name: String(fd.get("clinician_name") ?? ""),
      clinician_title: String(fd.get("clinician_title") ?? ""),
      facility_name: String(fd.get("facility_name") ?? ""),
      clinician_phone: String(fd.get("clinician_phone") ?? ""),
      clinician_email: String(fd.get("clinician_email") ?? ""),
      estimated_discharge_date: String(fd.get("estimated_discharge_date") ?? ""),
      notes: String(fd.get("notes") ?? ""),
    };
    const parsed = referralSchema.safeParse(raw);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0];
        if (typeof k === "string" && !errs[k]) errs[k] = issue.message;
      }
      setFieldErrors(errs);
      return;
    }
    setSubmitting(true);
    const { error: insertError } = await supabase.from("referrals").insert({
      clinician_name: parsed.data.clinician_name,
      clinician_title: parsed.data.clinician_title || null,
      facility_name: parsed.data.facility_name,
      clinician_phone: parsed.data.clinician_phone,
      clinician_email: parsed.data.clinician_email,
      estimated_discharge_date: parsed.data.estimated_discharge_date || null,
      notes: parsed.data.notes,
    });
    setSubmitting(false);
    if (insertError) {
      setError("Something went wrong submitting the referral. Please call us instead.");
      return;
    }
    setSubmitted(true);
  }

  return (
    <>
      <PageHeader
        eyebrow="For Clinicians"
        title={<>Referrals for<br /> aftercare placement.</>}
        intro="If you're a clinician or case manager at a treatment center and you have a client whose next step is long-term sober living, we'd like to talk. The fastest way is a phone call — or use the form below and we'll be in touch the same day."
        image={undefined}
        imageAlt={undefined}
        light
        bottomImage={barnImg.url}
        bottomImageAlt="A weathered barn at dawn on the ranch"
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 grid gap-12 md:grid-cols-2 items-start">
          <Reveal>
            <div className="rounded-3xl bg-gradient-dawn p-10 md:p-12 text-mist shadow-lift">
              <div className="eyebrow text-sage">What we offer</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight font-light text-balance">
                Long-term aftercare on a working ranch.
              </h2>
              <ul className="mt-8 space-y-4 text-mist/90">
                {[
                  "Men only, ages 18+, post-detox and stable",
                  "Drug- and alcohol-free residence in the Cascade foothills",
                  "Structured days with work, equine care, and recovery support",
                  "Open-ended length of stay — most residents stay 6 to 18 months",
                  "45 minutes from Seattle; we coordinate transport from SeaTac",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-sage" />
                    <span className="text-pretty">{line}</span>
                  </li>
                ))}
              </ul>
              <div className="hairline my-10 opacity-30" />
              <div className="eyebrow text-sage">Prefer to talk?</div>
              <a
                href={SITE.phoneHref}
                className="mt-4 inline-flex items-center gap-3 rounded-full bg-mist text-forest px-6 py-3 text-base font-medium hover:-translate-y-0.5 transition-transform"
              >
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
              <p className="mt-6 text-sm text-mist/80 text-pretty">
                Calls are answered daily. We're happy to talk through a placement before any paperwork.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-2xl bg-card border border-border/60 p-8 md:p-10 shadow-soft">
              <div className="eyebrow text-moss">Referral form</div>
              <h3 className="mt-3 font-display text-3xl leading-tight text-foreground">
                Tell us about the placement.
              </h3>
              <p className="mt-3 text-sm text-foreground/70 text-pretty">
                Please <strong>do not include identifying client information</strong> (no name, DOB, or
                record numbers). A short description of the placement need is enough — we'll follow up by
                phone for anything further.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-xl bg-forest/5 border border-forest/20 p-6">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest text-primary-foreground">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-display text-xl text-foreground">Thank you.</div>
                      <p className="mt-2 text-sm text-foreground/75 text-pretty">
                        Your referral has been received. Someone from Skyland Ranch will reach out within
                        one business day. If it's urgent, please call {SITE.phone}.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <form className="mt-8 space-y-5" onSubmit={onSubmit} noValidate>
                  <Field
                    label="Your name"
                    name="clinician_name"
                    required
                    error={fieldErrors.clinician_name}
                  />
                  <Field
                    label="Your title / role"
                    name="clinician_title"
                    placeholder="e.g. Case Manager, LMHC"
                    error={fieldErrors.clinician_title}
                  />
                  <Field
                    label="Treatment center / facility"
                    name="facility_name"
                    required
                    error={fieldErrors.facility_name}
                  />
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Phone"
                      name="clinician_phone"
                      type="tel"
                      required
                      error={fieldErrors.clinician_phone}
                    />
                    <Field
                      label="Email"
                      name="clinician_email"
                      type="email"
                      required
                      error={fieldErrors.clinician_email}
                    />
                  </div>
                  <Field
                    label="Estimated discharge date"
                    name="estimated_discharge_date"
                    type="date"
                    error={fieldErrors.estimated_discharge_date}
                  />
                  <div>
                    <label className="block text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                      About the placement
                    </label>
                    <textarea
                      name="notes"
                      rows={5}
                      required
                      maxLength={4000}
                      placeholder="Level of care completed, substances of concern, support needs, insurance/funding situation — no client identifiers please."
                      className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-forest/40"
                    />
                    {fieldErrors.notes && (
                      <p className="mt-1 text-xs text-destructive">{fieldErrors.notes}</p>
                    )}
                  </div>

                  {error && (
                    <div className="rounded-lg bg-destructive/10 text-destructive px-4 py-3 text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-forest text-primary-foreground px-6 py-3 text-sm font-medium shadow-soft hover:bg-moss transition-all hover:shadow-lift disabled:opacity-60"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                      </>
                    ) : (
                      <>Send referral</>
                    )}
                  </button>
                  <p className="text-xs text-muted-foreground text-pretty">
                    By submitting, you confirm no protected health information about the client is
                    included in this form. All client details will be discussed by phone.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
        {required && <span className="text-destructive"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-forest/40"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}