"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Dict } from "@/lib/i18n";

const KEY = "lc-cookie-consent";

export default function CookieBanner({ locale, dict }: { locale: string; dict: Dict }) {
  const [show, setShow] = useState(false);
  const t = dict.cookieBanner;

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      // storage blocked (private mode etc.) — do not nag on every load
    }
  }, []);

  const choose = (value: "all" | "essential") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      // ignore
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-4">
      <div className="container-c">
        <div className="flex flex-col gap-4 rounded-xl border border-navy/15 bg-white p-4 shadow-lg sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <p className="text-sm text-navy/75">
            {t.text}{" "}
            <Link href={`/${locale}/cookies`} className="font-medium text-brass-dark hover:underline">
              {t.policy}
            </Link>
          </p>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => choose("essential")}
              className="rounded-md border border-navy/20 px-4 py-2 text-sm font-semibold text-navy transition hover:border-navy hover:text-ink"
            >
              {t.reject}
            </button>
            <button
              type="button"
              onClick={() => choose("all")}
              className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-ink-soft"
            >
              {t.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
