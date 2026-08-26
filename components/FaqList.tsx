"use client";

import { useState, ReactNode } from "react";
import Link from "next/link";
import Fill from "@/components/Fill";

const items: { q: string; a: ReactNode }[] = [
  {
    q: "Are you an online shop or a physical store?",
    a: (
      <>
        Both. We are a chandlery at the Valencia Mar marina and we ship online across Spain and the
        European Union.
      </>
    ),
  },
  {
    q: "Where are you located?",
    a: (
      <>
        Valencia Mar marina, on the El Saler side, next to Plan B, 46012 València. See our{" "}
        <Link href="/contact" className="font-medium text-brass-dark hover:underline">contact page</Link>{" "}
        for directions.
      </>
    ),
  },
  {
    q: "What are your opening hours?",
    a: <><Fill>Monday to Saturday, 09:00 to 19:00. Closed Sundays.</Fill></>,
  },
  {
    q: "Do you ship internationally?",
    a: (
      <>
        Yes. We ship to mainland Spain, the Balearic Islands, across the EU, the United Kingdom and
        selected non-EU destinations. Full details are on our{" "}
        <Link href="/shipping" className="font-medium text-brass-dark hover:underline">Shipping & Returns</Link>{" "}
        page.
      </>
    ),
  },
  {
    q: "How long will my order take?",
    a: (
      <>
        In-stock orders are dispatched within 1 to 2 working days. Delivery time depends on the
        destination, see{" "}
        <Link href="/shipping" className="font-medium text-brass-dark hover:underline">Shipping & Returns</Link>.
      </>
    ),
  },
  {
    q: "Are prices shown with VAT?",
    a: (
      <>
        Yes. Prices include Spanish IVA for consumers. Orders shipped outside Spanish VAT territory,
        such as the Canary Islands or non-EU countries, are billed without IVA and may be subject to
        local import taxes on delivery.
      </>
    ),
  },
  {
    q: "Which payment methods can I use?",
    a: <>We accept <Fill>major debit and credit cards, and Bizum</Fill>. Available methods are shown at checkout.</>,
  },
  {
    q: "Can I collect my order at the store?",
    a: <>Yes. Contact us to arrange collection at the Valencia Mar marina.</>,
  },
  {
    q: "Do you offer trade or wholesale pricing?",
    a: (
      <>
        Yes. We supply boats, clubs, professionals and other retailers.{" "}
        <Link href="/contact" className="font-medium text-brass-dark hover:underline">Contact us</Link>{" "}
        for trade terms.
      </>
    ),
  },
  {
    q: "Can you advise which product to choose?",
    a: <>Yes. We know the gear and the local waters. Ask us and we will point you to the right option.</>,
  },
  {
    q: "Do you sell fishing tackle?",
    a: (
      <>
        Yes. We run a fishing section for shore, boat and Mediterranean fishing, a minute from the
        Turia river mouth.
      </>
    ),
  },
  {
    q: "How do I return something?",
    a: (
      <>
        You have a 14-day right of withdrawal. See{" "}
        <Link href="/shipping" className="font-medium text-brass-dark hover:underline">Shipping & Returns</Link>{" "}
        for how to send an item back.
      </>
    ),
  },
  {
    q: "My order arrived damaged. What should I do?",
    a: (
      <>
        Contact us within 48 hours with a photo and your order number and we will sort out a
        replacement or refund. Full details on our{" "}
        <Link href="/shipping" className="font-medium text-brass-dark hover:underline">Shipping & Returns</Link>{" "}
        page.
      </>
    ),
  },
  {
    q: "Can you order an item that is not in the catalogue?",
    a: <>Often, yes. Tell us what you need and we will do our best to source it for you.</>,
  },
];

export default function FaqList() {
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
          {open === i && <div className="pb-5 text-navy/75">{item.a}</div>}
        </div>
      ))}
    </div>
  );
}
