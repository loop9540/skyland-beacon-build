import { createFileRoute, redirect } from "@tanstack/react-router";

// The site is a single page; this former route now redirects to the matching section.
export const Route = createFileRoute("/about")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "about" });
  },
});
