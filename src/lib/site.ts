export const SITE = {
  name: "Skyland Ranch",
  tagline: "There is hope.",
  phone: "360-793-2611",
  phoneHref: "tel:+13607932611",
  location: "Gold Bar, Washington · 45 minutes from Seattle",
  email: "info@skylandranch.org",
  established: 1986,
  yearsOfService: new Date().getFullYear() - 1986,
} as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/program", label: "The Program" },
  { to: "/residence", label: "Residence" },
  { to: "/admissions", label: "Admissions" },
  { to: "/referrals", label: "Referrals" },
  { to: "/contact", label: "Contact" },
] as const;