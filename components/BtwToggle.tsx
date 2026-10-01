"use client";

import { useBtwInclusive, setBtwInclusive } from "@/context/BtwContext";

const labels: Record<string, { excl: string; incl: string }> = {
  nl: { excl: "Excl. BTW", incl: "Incl. BTW" },
  en: { excl: "Excl. VAT", incl: "Incl. VAT" },
};

export default function BtwToggle({ locale }: { locale: string }) {
  const inc = useBtwInclusive();
  const t = labels[locale] ?? labels.nl;

  return (
    <div className="inline-flex items-center overflow-hidden rounded-full border border-white/25 text-[11px] font-semibold">
      <button
        type="button"
        onClick={() => setBtwInclusive(false)}
        aria-pressed={!inc}
        className={`px-2.5 py-1 transition ${!inc ? "bg-white text-navy" : "text-white/80 hover:text-white"}`}
      >
        {t.excl}
      </button>
      <button
        type="button"
        onClick={() => setBtwInclusive(true)}
        aria-pressed={inc}
        className={`px-2.5 py-1 transition ${inc ? "bg-white text-navy" : "text-white/80 hover:text-white"}`}
      >
        {t.incl}
      </button>
    </div>
  );
}
