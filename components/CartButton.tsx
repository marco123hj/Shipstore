"use client";

import Icon from "@/components/Icon";
import { useCart } from "@/context/CartContext";

export default function CartButton({ label }: { label: string }) {
  const { count, open } = useCart();
  return (
    <button type="button" onClick={open} aria-label={label} className="relative text-navy transition hover:text-ink">
      <Icon name="cart" className="h-5 w-5" />
      {count > 0 && (
        <span className="absolute -right-2 -top-2 grid h-4 min-w-[16px] place-items-center rounded-full bg-brass px-1 text-[10px] font-bold text-navy">
          {count}
        </span>
      )}
    </button>
  );
}
