"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LangSwitcher({
  locale,
  label,
  title,
}: {
  locale: string;
  label: string;
  title: string;
}) {
  const pathname = usePathname() || `/${locale}`;
  const other = locale === "en" ? "nl" : "en";
  const segs = pathname.split("/");
  segs[1] = other; // swap the leading /{locale} segment
  const href = segs.join("/") || `/${other}`;

  return (
    <Link
      href={href}
      title={title}
      className="rounded border border-navy/20 px-2 py-1 text-xs font-semibold text-navy transition hover:border-navy hover:text-ink"
    >
      {label}
    </Link>
  );
}
