import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";

import { VideoModal } from "@/components/VideoModal";
import { AboutSection } from "@/components/sections/AboutSection";
import { AdmissionsSection } from "@/components/sections/AdmissionsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProgramSection } from "@/components/sections/ProgramSection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { ReferralsSection } from "@/components/sections/ReferralsSection";
import { ResidenceSection } from "@/components/sections/ResidenceSection";
import { SITE, SITE_URL, canonicalUrl, url } from "@/lib/site";

const description =
  "A nonprofit working horse ranch offering long-term sober living for men near Seattle, Washington.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Skyland Ranch — Sober Living for Men Near Seattle, WA" },
      { name: "description", content: description },
      { property: "og:title", content: "Skyland Ranch — Sober Living for Men Near Seattle, WA" },
      { property: "og:description", content: description },
      { property: "og:url", content: canonicalUrl("/") },
      { property: "og:image", content: new URL(url("/media/og-image.jpg"), SITE_URL).href },
      { name: "twitter:title", content: "Skyland Ranch — Sober Living for Men Near Seattle, WA" },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: new URL(url("/media/og-image.jpg"), SITE_URL).href },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/") }],
  }),
  component: Index,
});

function Index() {
  const [videoOpen, setVideoOpen] = useState(false);
  const openVideo = useCallback(() => setVideoOpen(true), []);
  const closeVideo = useCallback(() => setVideoOpen(false), []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    requestAnimationFrame(() =>
      document.getElementById(hash)?.scrollIntoView({ behavior: "auto" }),
    );
  }, []);

  return (
    <>
      <HeroSection onOpenVideo={openVideo} />
      <VideoModal open={videoOpen} embedSrc={SITE.filmEmbed} onClose={closeVideo} />
      <QuoteSection />
      <div id="about" className="scroll-mt-24">
        <AboutSection />
      </div>
      <div id="program" className="scroll-mt-24">
        <ProgramSection />
      </div>
      <div id="residence" className="scroll-mt-24">
        <ResidenceSection />
      </div>
      <div id="admissions" className="scroll-mt-24">
        <AdmissionsSection onOpenVideo={openVideo} />
      </div>
      <div id="referrals" className="scroll-mt-24">
        <ReferralsSection />
      </div>
      <div id="contact" className="scroll-mt-24">
        <ContactSection />
      </div>
    </>
  );
}
