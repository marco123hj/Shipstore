"use client";

import { useState } from "react";
import { RichText } from "@/components/RichText";
import type { Faq } from "@/lib/i18n/types";

export default function FaqList({ items, locale }: { items: Faq[]; locale: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-navy/10">
      {items.map((item, i) => (
        <div key={i} className="border-b border-navy/10">
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 py-4 text-left"
          >
            <span className="font-medium text-ink">{item.q}</span>
            <svg
              className={`h-5 w-5 shrink-0 text-navy/50 transition-transform ${open === i ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {open === i && (
            <div className="pb-5 text-navy/75">
              <RichText text={item.a} locale={locale} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
