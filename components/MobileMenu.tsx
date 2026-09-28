"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Icon from "@/components/Icon";
import { SearchItem, formatPrice, getCategories } from "@/lib/data";
import type { Dict } from "@/lib/i18n";

export default function MobileMenu({
  locale,
  dict,
  items,
}: {
  locale: string;
  dict: Dict;
  items: SearchItem[];
}) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const router = useRouter();

  const nav = [
    ...getCategories(locale).map((c) => ({
      href: `/${locale}/category/${c.slug}`,
      label: c.name,
    })),
    { href: `/${locale}/nautic-talk`, label: dict.nav.nauticTalk },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/contact`, label: dict.nav.contact },
    { href: `/${locale}/wishlist`, label: dict.wishlist.title },
    { href: `/${locale}/account`, label: dict.auth.account },
  ];

  const matches = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (s.length < 2) return [];
    return items.filter((it) => it.search.includes(s)).slice(0, 6);
  }, [q, items]);

  const typing = q.trim().length >= 2;

  const close = () => {
    setOpen(false);
    setQ("");
  };

  const search = (e: React.FormEvent) => {
    e.preventDefault();
    const v = q.trim();
    if (v) {
      close();
      router.push(`/${locale}/search?q=${encodeURIComponent(v)}`);
    }
  };

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Menu"
        aria-expanded={open}
        className="flex items-center text-navy"
      >
        <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 top-16 z-30 bg-black/20" onClick={close} aria-hidden />
          <div className="absolute inset-x-0 top-16 z-40 max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-navy/10 bg-sand shadow-lg">
            <div className="container-c py-4">
              <form onSubmit={search} className="relative">
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder={dict.search.placeholder}
                  className="w-full rounded-md border border-navy/15 bg-white py-2.5 pl-9 pr-3 text-sm outline-none focus:border-brass"
                />
                <button type="submit" aria-label={dict.search.placeholder} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-navy/50">
                  <Icon name="search" className="h-4 w-4" />
                </button>
              </form>

              {typing ? (
                <div className="mt-2 overflow-hidden rounded-lg border border-navy/10 bg-white">
                  {matches.length > 0 ? (
                    <>
                      {matches.map((p) => (
                        <Link
                          key={p.slug}
                          href={`/${locale}/product/${p.slug}`}
                          onClick={close}
                          className="flex items-center justify-between gap-3 border-b border-navy/10 px-4 py-2.5 last:border-0"
                        >
                          <span className="min-w-0">
                            <span className="block text-xs text-navy/50">{p.brand}</span>
                            <span className="block truncate text-sm font-medium text-ink">{p.name}</span>
                          </span>
                          <span className="shrink-0 text-sm font-semibold text-navy">{formatPrice(p.price, locale)}</span>
                        </Link>
                      ))}
                      <button
                        type="button"
                        onClick={search}
                        className="block w-full px-4 py-2.5 text-left text-sm font-semibold text-brass-dark"
                      >
                        {dict.search.resultsFor} “{q.trim()}” →
                      </button>
                    </>
                  ) : (
                    <div className="px-4 py-3 text-sm text-navy/50">
                      {dict.search.noResults} “{q.trim()}”
                    </div>
                  )}
                </div>
              ) : (
                <nav className="mt-2 flex flex-col divide-y divide-navy/10">
                  {nav.map((n) => (
                    <Link
                      key={n.href}
                      href={n.href}
                      onClick={close}
                      className="py-3 text-base font-medium text-navy transition hover:text-brass-dark"
                    >
                      {n.label}
                    </Link>
                  ))}
                </nav>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
