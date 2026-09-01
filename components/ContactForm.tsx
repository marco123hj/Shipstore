"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import type { Dict } from "@/lib/i18n";

const inputClass =
  "w-full rounded-md border border-navy/15 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-brass";

export default function ContactForm({ t }: { t: Dict["contact"] }) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-lg border border-navy/10 bg-white p-8 text-center">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-green/10 text-green">
          <Icon name="check" className="h-6 w-6" />
        </span>
        <h2 className="mt-4 text-xl font-bold text-ink">{t.formTitle}</h2>
        <p className="mt-2 text-navy/70">{t.sent}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-lg border border-navy/10 bg-white p-6"
    >
      <h2 className="text-xl font-bold text-ink">{t.formTitle}</h2>
      <div className="mt-4 space-y-3">
        <input className={inputClass} placeholder={t.fName} required autoComplete="name" />
        <input className={inputClass} type="email" placeholder={t.fEmail} required autoComplete="email" />
        <textarea className={inputClass} placeholder={t.fMessage} rows={4} required />
        <button type="submit" className="btn-brass w-full">
          {t.fSend}
        </button>
      </div>
    </form>
  );
}
