import type { ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { scrollToSection, sectionHref } from "@/lib/scroll";

interface Props {
  /** Section anchor id (e.g. "about"); "top" scrolls to the top of the page. */
  id: string;
  className?: string;
  children: ReactNode;
  /** Fired after a click (e.g. to close the mobile menu). */
  onNavigate?: () => void;
}

/**
 * Links to an in-page section. On the home route it smooth-scrolls; from any other
 * route it falls back to a normal link to `/#id`, and the home route scrolls on load.
 */
export function SectionLink({ id, className, children, onNavigate }: Props) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <a
      href={sectionHref(id)}
      className={className}
      onClick={(e) => {
        if (pathname === "/") {
          e.preventDefault();
          scrollToSection(id);
        }
        onNavigate?.();
      }}
    >
      {children}
    </a>
  );
}
