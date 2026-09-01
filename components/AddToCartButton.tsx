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
        className={`flex h-12 flex-1 items-center justify-center gap-2 rounded-md px-5 text-sm font-bold uppercase tracking-wide transition active:scale-[0.98] ${
          added
            ? "bg-brass text-navy shadow-sm"
            : "bg-green text-white shadow-md shadow-green/30 hover:bg-green-dark hover:shadow-lg hover:shadow-green/40"
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
      className={`flex items-center gap-1.5 rounded-md px-3 py-2 text-xs font-bold shadow-sm transition active:scale-95 ${
        added ? "bg-brass text-navy" : "bg-green text-white shadow-green/30 hover:bg-green-dark"
      }`}
    >
      <Icon name={added ? "check" : "cart"} className="h-3.5 w-3.5" />
      {added ? addedLabel : label}
    </button>
  );
}
