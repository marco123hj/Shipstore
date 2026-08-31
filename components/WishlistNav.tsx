"use client";

import Link from "next/link";
import Icon from "@/components/Icon";
import { useWishlist } from "@/context/WishlistContext";

export default function WishlistNav({ locale, label }: { locale: string; label: string }) {
  const { count } = useWishlist();
  return (
    <Link
      href={`/${locale}/wishlist`}
      aria-label={label}
      title={label}
      className="relative hidden text-navy transition hover:text-ink sm:block"
    >
      <Icon name="heart" className="h-5 w-5" />
      {count > 0 && (
        <span className="absolute -right-2 -top-2 grid h-4 min-w-[16px] place-items-center rounded-full bg-brass px-1 text-[10px] font-bold text-navy">
          {count}
        </span>
      )}
    </Link>
  );
}
