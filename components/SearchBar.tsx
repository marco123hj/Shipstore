"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Icon from "@/components/Icon";
import { Product, formatPrice } from "@/lib/data";

type SearchDict = { placeholder: string; resultsFor: string; noResults: string };

export default function SearchBar({
  locale,
  products,
  search,
}: {
  locale: string;
  products: Product[];
  search: SearchDict;
}) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [focused, setFocused] = useState(false);

  const matches = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (s.length < 2) return [];
    return products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(s) ||
          p.brand.toLowerCase().includes(s) ||
          p.blurb.toLowerCase().includes(s)
      )
      .slice(0, 6);
  }, [q, products]);

  const go = (v: string) => {
    const term = v.trim();
    if (term) {
      setFocused(false);
      router.push(`/${locale}/search?q=${encodeURIComponent(term)}`);
    }
  };

  const showDropdown = focused && q.trim().length >= 2;

  return (
    <div className="relative hidden md:block">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          go(q);
        }}
      >
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => window.setTimeout(() => setFocused(false), 150)}
          placeholder={search.placeholder}
          aria-label={search.placeholder}
          className="w-44 rounded-md border border-navy/15 bg-white/70 py-1.5 pl-8 pr-2 text-sm outline-none transition focus:w-64 focus:border-brass"
        />
        <button
          type="submit"
          aria-label={search.placeholder}
          className="absolute left-2 top-1/2 -translate-y-1/2 text-navy/50 hover:text-ink"
        >
          <Icon name="search" className="h-4 w-4" />
        </button>
      </form>

      {showDropdown && (
        <div className="absolute right-0 top-full z-50 mt-1.5 w-80 overflow-hidden rounded-lg border border-navy/15 bg-white shadow-xl">
          {matches.length > 0 ? (
            <>
              {matches.map((p) => (
                <Link
                  key={p.slug}
                  href={`/${locale}/product/${p.slug}`}
                  className="flex items-center justify-between gap-3 px-4 py-2.5 transition hover:bg-sand"
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
                onClick={() => go(q)}
                className="block w-full border-t border-navy/10 px-4 py-2.5 text-left text-sm font-semibold text-brass-dark transition hover:bg-sand"
              >
                {search.resultsFor} “{q.trim()}” →
              </button>
            </>
          ) : (
            <div className="px-4 py-3 text-sm text-navy/50">
              {search.noResults} “{q.trim()}”
            </div>
          )}
        </div>
      )}
    </div>
  );
}
