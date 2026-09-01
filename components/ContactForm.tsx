"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import type { Dict } from "@/lib/i18n";

const inputClass =
  "w-full rounded-md border border-navy/15 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-brass";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm({ t }: { t: Dict["contact"] }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
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

  const sending = status === "sending";

  return (
    <form onSubmit={onSubmit} className="rounded-lg border border-navy/10 bg-white p-6">
      <h2 className="text-xl font-bold text-ink">{t.formTitle}</h2>
      <div className="mt-4 space-y-3">
        <input name="name" className={inputClass} placeholder={t.fName} required autoComplete="name" />
        <input name="email" className={inputClass} type="email" placeholder={t.fEmail} required autoComplete="email" />
        <textarea name="message" className={inputClass} placeholder={t.fMessage} rows={4} required />
        {status === "error" && <p className="text-sm font-medium text-red-600">{t.error}</p>}
        <button type="submit" disabled={sending} className="btn-brass w-full disabled:opacity-60">
          {sending ? t.sending : t.fSend}
        </button>
      </div>
    </form>
  );
}
