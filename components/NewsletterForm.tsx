"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import type { Dict } from "@/lib/i18n";

export default function NewsletterForm({ t }: { t: Dict["newsletter"] }) {
  const [done, setDone] = useState(false);

  return (
    <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
      <div>
        <h4 className="text-lg font-semibold text-white">{t.title}</h4>
        <p className="mt-1 max-w-md text-sm text-white/55">{t.subtitle}</p>
      </div>

      {done ? (
        <p className="flex items-center gap-2 text-sm font-medium text-brass lg:justify-self-end">
          <Icon name="check" className="h-5 w-5" />
          {t.done}
        </p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
          className="flex w-full max-w-sm gap-2 lg:justify-self-end"
        >
          <input
            type="email"
            required
            placeholder={t.placeholder}
            autoComplete="email"
            className="min-w-0 flex-1 rounded-md border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-brass"
          />
          <button
            type="submit"
            className="shrink-0 rounded-md bg-brass px-4 py-2.5 text-sm font-semibold text-navy transition hover:bg-brass-dark"
          >
            {t.cta}
          </button>
        </form>
      )}
    </div>
  );
}
