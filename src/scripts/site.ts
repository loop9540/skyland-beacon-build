// All client-side interactivity for the site, in one small module.
// Replaces what previously needed React + framer-motion. No framework, no deps.

// Signal that JS is available (CSS uses .no-js as a safety fallback for reveals).
document.documentElement.classList.remove("no-js");

function onReady(fn: () => void) {
  if (document.readyState !== "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
}

onReady(() => {
  initReveal();
  initHeader();
  initMobileMenu();
  initScrollSpy();
  initVideoLightbox();
});

/* Scroll-reveal: fade/slide elements in once as they enter the viewport. */
function initReveal() {
  const els = document.querySelectorAll<HTMLElement>(".reveal");
  if (!("IntersectionObserver" in window) || !els.length) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries, obs) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          obs.unobserve(e.target);
        }
      }
    },
    { rootMargin: "0px 0px -80px 0px", threshold: 0.05 },
  );
  els.forEach((el) => io.observe(el));
}

/* Header gets a solid background once the page is scrolled. */
function initHeader() {
  const header = document.getElementById("site-header");
  if (!header) return;
  const update = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
  update();
  window.addEventListener("scroll", update, { passive: true });
}

/* Mobile nav open/close. */
function initMobileMenu() {
  const btn = document.getElementById("menu-toggle");
  const panel = document.getElementById("mobile-menu");
  if (!btn || !panel) return;
  const close = () => {
    panel.hidden = true;
    btn.setAttribute("aria-expanded", "false");
  };
  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") === "true";
    if (open) {
      close();
    } else {
      panel.hidden = false;
      btn.setAttribute("aria-expanded", "true");
    }
  });
  panel.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
}

/* Scroll-spy: mark the nav link for the section currently in view. */
function initScrollSpy() {
  const links = Array.from(document.querySelectorAll<HTMLElement>("[data-spy]"));
  if (!links.length || !("IntersectionObserver" in window)) return;
  const setActive = (id: string) => {
    links.forEach((l) => l.classList.toggle("is-active", l.dataset.spy === id));
  };
  const io = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActive(visible[0].target.id);
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
  );
  links.forEach((l) => {
    const el = l.dataset.spy && document.getElementById(l.dataset.spy);
    if (el) io.observe(el);
  });
}

/* Video lightbox: lazy-loads the YouTube embed only when opened. Any element
   with [data-video-open] (and a data-embed URL) triggers the shared modal. */
function initVideoLightbox() {
  const modal = document.getElementById("video-modal");
  const triggers = document.querySelectorAll<HTMLElement>("[data-video-open]");
  if (!modal || !triggers.length) return;
  const frameHost = modal.querySelector<HTMLElement>("[data-frame]");
  const closeEls = modal.querySelectorAll("[data-close]");

  const open = (embed: string) => {
    if (frameHost && embed) {
      frameHost.innerHTML = "";
      const iframe = document.createElement("iframe");
      iframe.src = embed;
      iframe.title = "Skyland Ranch — film";
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      iframe.className = "absolute inset-0 h-full w-full border-0";
      frameHost.appendChild(iframe);
    }
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    modal.hidden = true;
    document.body.style.overflow = "";
    if (frameHost) frameHost.innerHTML = ""; // stop playback
  };

  triggers.forEach((btn) =>
    btn.addEventListener("click", () => open(btn.dataset.embed || "")),
  );
  closeEls.forEach((el) => el.addEventListener("click", close));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) close();
  });
}
