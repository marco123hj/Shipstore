"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import { useCart } from "@/context/CartContext";
import type { CartItem } from "@/context/CartContext";

export default function AddToCartButton({
  item,
  quantity = 1,
  label,
  addedLabel,
  size = "sm",
}: {
  item: Omit<CartItem, "qty">;
  quantity?: number;
  label: string;
  addedLabel: string;
  size?: "sm" | "lg";
}) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  const onClick = () => {
    add(item, quantity);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
  };

  if (size === "lg") {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`flex h-12 flex-1 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition active:scale-[0.98] ${
          added ? "bg-navy text-white" : "bg-brass text-navy hover:bg-brass-dark"
        }`}
      >
        <Icon name={added ? "check" : "cart"} className="h-4 w-4" />
        {added ? addedLabel : label}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-semibold text-white transition active:scale-95 ${
        added ? "bg-navy" : "bg-ink hover:bg-ink-soft"
      }`}
    >
      <Icon name={added ? "check" : "cart"} className="h-3.5 w-3.5" />
      {added ? addedLabel : label}
    </button>
  );
}
