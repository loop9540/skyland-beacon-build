// Single source of truth for site-wide content and navigation.
// No database, no CMS — edit values here and rebuild.

export const SITE = {
  name: "Skyland Ranch",
  tagline: "There is hope.",
  phone: "360-793-2611",
  phoneHref: "tel:+13607932611",
  location: "Gold Bar, Washington · 45 minutes from Seattle",
  email: "Skylandranch2611@gmail.com",
  established: 1986,
  acres: 140,
  youtubeId: "13ERTGWCvH4",
  get yearsOfService() {
    return new Date().getFullYear() - this.established;
  },
  get filmEmbed() {
    return `https://www.youtube-nocookie.com/embed/${this.youtubeId}?autoplay=1&rel=0`;
  },
} as const;

export const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "base-uri 'self'",
  "connect-src 'self'",
  "font-src 'self'",
  "form-action 'self'",
  "frame-src https://www.youtube-nocookie.com",
  "img-src 'self' data: blob: https://img.youtube.com",
  "media-src 'self'",
  "object-src 'none'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "upgrade-insecure-requests",
].join("; ");

export type NavItem =
  | { id: string; label: string }
  | { href: string; label: string };

// Items with `id` scroll to an on-page section; items with `href` are real pages.
export const NAV: NavItem[] = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "program", label: "Daily Life" },
  { id: "residence", label: "Residence" },
  { id: "admissions", label: "Admissions" },
  { id: "referrals", label: "Inquiries" },
  { id: "contact", label: "Contact" },
];

/** Prefix an internal path with the configured base so links work under /<repo>/ on GitHub Pages. */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  if (!path.startsWith("/")) path = "/" + path;
  return base + path;
}

/** Href for an in-page section anchor (works from any page — falls back to home + hash). */
export function sectionHref(id: string): string {
  return id === "top" ? url("/") : `${url("/")}#${id}`;
}
