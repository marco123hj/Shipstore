"use client";

import Icon from "@/components/Icon";
import { useWishlist } from "@/context/WishlistContext";

export default function WishlistButton({
  slug,
  addLabel,
  removeLabel,
  variant = "card",
}: {
  slug: string;
  addLabel: string;
  removeLabel: string;
  variant?: "card" | "detail";
}) {
  const { has, toggle } = useWishlist();
  const active = has(slug);

  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggle(slug);
  };

  if (variant === "detail") {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label={active ? removeLabel : addLabel}
        aria-pressed={active}
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-navy/20 bg-white transition hover:border-navy"
      >
        <Icon name="heart" className={`h-5 w-5 ${active ? "text-brass-dark" : "text-navy/60"}`} />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={active ? removeLabel : addLabel}
      aria-pressed={active}
      className="absolute right-2 top-2 z-10 grid h-8 w-8 place-items-center rounded-full bg-white/85 backdrop-blur transition hover:bg-white"
    >
      <Icon name="heart" className={`h-4 w-4 ${active ? "text-brass-dark" : "text-navy/50"}`} />
    </button>
  );
}
