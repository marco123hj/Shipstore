import { notFound } from "next/navigation";

// Any path under /[locale] that doesn't match a real route lands here and
// renders the localized not-found UI (app/[locale]/not-found.tsx) inside the
// normal header/footer layout, instead of Next's bare built-in 404.
export default function CatchAll() {
  notFound();
}
