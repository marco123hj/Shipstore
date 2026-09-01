"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDict } from "@/lib/i18n";

export default function NotFound() {
  const path = usePathname() || "/en";
  const locale = path.split("/")[1] === "es" ? "es" : "en";
  const t = getDict(locale).notFound;

  return (
    <div className="container-c flex flex-col items-center justify-center py-24 text-center">
      <span className="text-7xl font-bold text-navy/15">404</span>
      <h1 className="mt-4 text-2xl font-bold text-ink sm:text-3xl">{t.title}</h1>
      <p className="mt-3 max-w-md text-navy/60">{t.body}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href={`/${locale}`} className="btn-primary">
          {t.home}
        </Link>
        <Link
          href={`/${locale}/shop`}
          className="rounded-md border border-navy/20 px-5 py-2.5 text-sm font-semibold text-navy transition hover:border-navy"
        >
          {t.shop}
        </Link>
      </div>
    </div>
  );
}
