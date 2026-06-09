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

// Single-page nav: items with `id` scroll to a section on the home route.
// `referrals` stays a real route (it is auth/role-gated with server functions).
export const NAV = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "program", label: "The Program" },
  { id: "residence", label: "Residence" },
  { id: "admissions", label: "Admissions" },
  { to: "/referrals", label: "Referrals" },
  { id: "contact", label: "Contact" },
] as const;

// Section ids in document order, used for scroll-spy active highlighting.
export const SECTION_IDS = ["top", "about", "program", "residence", "admissions", "contact"] as const;