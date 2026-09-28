"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import type { Dict } from "@/lib/i18n";

type Status = "idle" | "sending" | "done" | "error";

export default function NewsletterForm({ t }: { t: Dict["newsletter"] }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setStatus("sending");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.get("email") }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
      <div>
        <h4 className="text-lg font-semibold text-white">{t.title}</h4>
        <p className="mt-1 max-w-md text-sm text-white/55">{t.subtitle}</p>
      </div>

      {status === "done" ? (
        <p className="flex items-center gap-2 text-sm font-medium text-brass lg:justify-self-end">
          <Icon name="check" className="h-5 w-5" />
          {t.done}
        </p>
      ) : (
        <form onSubmit={onSubmit} className="w-full max-w-sm lg:justify-self-end">
          <div className="flex gap-2">
            <input
              name="email"
              type="email"
              required
              placeholder={t.placeholder}
              autoComplete="email"
              className="min-w-0 flex-1 rounded-md border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-brass"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="shrink-0 rounded-md bg-brass px-4 py-2.5 text-sm font-semibold text-navy transition hover:bg-brass-dark disabled:opacity-60"
            >
              {t.cta}
            </button>
          </div>
          {status === "error" && <p className="mt-2 text-sm font-medium text-red-300">{t.error}</p>}
        </form>
      )}
    </div>
  );
}
