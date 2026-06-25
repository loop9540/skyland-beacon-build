// All client-side interactivity for the site, in one small module.
// Replaces what previously needed React + framer-motion. No framework, no deps.

// Signal that JS is available (CSS uses .no-js as a safety fallback for reveals).
document.documentElement.classList.remove("no-js");

function onReady(fn: () => void) {
  if (document.readyState !== "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
}

onReady(() => {
  initSkipLink();
  initReveal();
  initHeader();
  initMobileMenu();
  initScrollSpy();
  initVideoLightbox();
});

/* Skip link: move keyboard focus to the main landmark after the anchor jump. */
function initSkipLink() {
  const skipLink = document.querySelector<HTMLAnchorElement>(".skip-link[href^='#']");
  if (!skipLink) return;

  skipLink.addEventListener("click", () => {
    const targetId = skipLink.hash.slice(1);
    const target = targetId ? document.getElementById(targetId) : null;
    if (!target) return;

    requestAnimationFrame(() => target.focus({ preventScroll: true }));
  });
}

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

  const setOpen = (open: boolean) => {
    panel.hidden = !open;
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };

  const close = (restoreFocus = false) => {
    panel.hidden = true;
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", "Open menu");
    if (restoreFocus) btn.focus();
  };

  setOpen(false);

  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") === "true";
    setOpen(!open);
  });
  panel.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => close()));
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape" || btn.getAttribute("aria-expanded") !== "true") return;
    e.preventDefault();
    close(true);
  });
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
  let activeTrigger: HTMLElement | null = null;

  const focusableSelector = [
    "button:not([disabled])",
    "[href]",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    '[tabindex]:not([tabindex="-1"])',
  ].join(",");

  const getFocusable = () =>
    Array.from(modal.querySelectorAll<HTMLElement>(focusableSelector)).filter(
      (el) => !el.hidden && el.offsetParent !== null,
    );

  const allowedEmbedUrl = (embed: string) => {
    try {
      const candidate = new URL(embed, window.location.href);
      const host = candidate.hostname.toLowerCase();
      const allowedHosts = new Set([
        "youtube.com",
        "www.youtube.com",
        "youtube-nocookie.com",
        "www.youtube-nocookie.com",
      ]);
      const videoMatch = candidate.pathname.match(/^\/embed\/([A-Za-z0-9_-]{11})$/);

      if (candidate.protocol !== "https:" || !allowedHosts.has(host) || !videoMatch) {
        return null;
      }

      const safeUrl = new URL(`https://${host}/embed/${videoMatch[1]}`);
      for (const param of ["autoplay", "rel", "start"]) {
        const value = candidate.searchParams.get(param);
        if (value !== null) safeUrl.searchParams.set(param, value);
      }
      return safeUrl.toString();
    } catch {
      return null;
    }
  };

  const open = (embed: string, trigger: HTMLElement) => {
    const src = allowedEmbedUrl(embed);
    if (!frameHost || !src) return;

    activeTrigger = trigger;
    frameHost.replaceChildren();
    const iframe = document.createElement("iframe");
    iframe.src = src;
    iframe.title = "Skyland Ranch film";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.tabIndex = -1;
    iframe.className = "absolute inset-0 h-full w-full border-0";
    frameHost.appendChild(iframe);

    modal.hidden = false;
    document.body.style.overflow = "hidden";
    (getFocusable()[0] || modal).focus();
  };

  const close = () => {
    if (modal.hidden) return;
    modal.hidden = true;
    document.body.style.overflow = "";
    if (frameHost) frameHost.replaceChildren(); // stop playback
    const trigger = activeTrigger;
    activeTrigger = null;
    if (trigger?.isConnected) trigger.focus();
  };

  const trapFocus = (e: KeyboardEvent) => {
    if (modal.hidden) return;

    if (e.key === "Escape") {
      e.preventDefault();
      close();
      return;
    }

    if (e.key !== "Tab") return;

    const focusable = getFocusable();
    if (!focusable.length) {
      e.preventDefault();
      modal.focus();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;

    if (e.shiftKey && (active === first || !modal.contains(active))) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
    }
  };

  triggers.forEach((btn) =>
    btn.addEventListener("click", () => open(btn.dataset.embed || "", btn)),
  );
  closeEls.forEach((el) => el.addEventListener("click", close));
  modal.addEventListener("keydown", trapFocus);
}
