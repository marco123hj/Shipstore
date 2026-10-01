"use client";

import { formatPrice } from "@/lib/data";
import { useBtwInclusive, displayAmount } from "@/context/BtwContext";

const noteLabel: Record<string, { incl: string; excl: string }> = {
  nl: { incl: "incl. BTW", excl: "excl. BTW" },
  en: { incl: "incl. VAT", excl: "excl. VAT" },
};

export default function Price({
  value,
  locale,
  className,
  note = false,
  strike = false,
}: {
  value: number;
  locale: string;
  className?: string;
  note?: boolean;
  strike?: boolean;
}) {
  const inc = useBtwInclusive();
  const amount = displayAmount(value, inc);
  const labels = noteLabel[locale] ?? noteLabel.nl;

  if (strike) {
    return <span className={className}>{formatPrice(amount, locale)}</span>;
  }

  return (
    <span className={className}>
      {formatPrice(amount, locale)}
      {note && (
        <span className="ml-1 text-[11px] font-normal text-navy/50">
          {inc ? labels.incl : labels.excl}
        </span>
      )}
    </span>
  );
}
