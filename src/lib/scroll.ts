// Smooth-scroll helpers for the single-page layout. The home route (`/`) renders
// every section; nav items and in-page links scroll to a section's anchor id
// instead of navigating to a separate route.

export function scrollToSection(id: string, behavior: ScrollBehavior = "smooth") {
  if (typeof document === "undefined") return;

  if (id === "top" || id === "") {
    window.scrollTo({ top: 0, behavior });
    history.replaceState(null, "", "/");
    return;
  }

  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior, block: "start" });
  history.replaceState(null, "", `/#${id}`);
}

/** The href a section link points at, so it works as a real link from other routes (e.g. /referrals). */
export function sectionHref(id: string) {
  return id === "top" ? "/" : `/#${id}`;
}
