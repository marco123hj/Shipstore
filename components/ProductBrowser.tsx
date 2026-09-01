"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import Icon from "@/components/Icon";
import { Product, formatPrice } from "@/lib/data";
import type { Dict } from "@/lib/i18n";

const selectClass =
  "rounded-md border border-navy/15 bg-white px-3 py-2 text-sm text-navy outline-none transition focus:border-brass";

export default function ProductBrowser({
  products,
  locale,
  dict,
}: {
  products: Product[];
  locale: string;
  dict: Dict;
}) {
  const t = dict.browse;

  const brandCounts = useMemo(() => {
    const m: Record<string, number> = {};
    products.forEach((p) => {
      m[p.brand] = (m[p.brand] || 0) + 1;
    });
    return m;
  }, [products]);
  const brands = useMemo(() => Object.keys(brandCounts).sort(), [brandCounts]);

  const bounds = useMemo(() => {
    const prices = products.map((p) => p.price);
    return { min: Math.floor(Math.min(...prices)), max: Math.ceil(Math.max(...prices)) };
  }, [products]);

  const [activeBrands, setActiveBrands] = useState<string[]>([]);
  const [priceMin, setPriceMin] = useState(bounds.min);
  const [priceMax, setPriceMax] = useState(bounds.max);
  const [sort, setSort] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const toggleBrand = (b: string) =>
    setActiveBrands((a) => (a.includes(b) ? a.filter((x) => x !== b) : [...a, b]));

  const clearAll = () => {
    setActiveBrands([]);
    setPriceMin(bounds.min);
    setPriceMax(bounds.max);
  };

  const dirty = activeBrands.length > 0 || priceMin > bounds.min || priceMax < bounds.max;

  const filtered = useMemo(() => {
    let list = products.filter(
      (p) =>
        (activeBrands.length === 0 || activeBrands.includes(p.brand)) &&
        p.price >= priceMin &&
        p.price <= priceMax
    );
    const s = [...list];
    if (sort === "priceAsc") s.sort((a, b) => a.price - b.price);
    else if (sort === "priceDesc") s.sort((a, b) => b.price - a.price);
    else if (sort === "name") s.sort((a, b) => a.name.localeCompare(b.name));
    return s;
  }, [products, activeBrands, priceMin, priceMax, sort]);

  const pct = (v: number) => ((v - bounds.min) / (bounds.max - bounds.min || 1)) * 100;

  return (
    <div>
      {/* Top controls */}
      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setShowFilters((s) => !s)}
          className="flex items-center gap-2 rounded-md border border-navy/15 bg-white px-3 py-2 text-sm font-medium text-navy lg:hidden"
        >
          <Icon name="filter" className="h-4 w-4" />
          {t.filters}
        </button>
        <span className="hidden text-sm text-navy/50 lg:block">
          {filtered.length} {t.items}
        </span>
        <select value={sort} onChange={(e) => setSort(e.target.value)} className={selectClass} aria-label={t.sort}>
          <option value="featured">{t.sort}: {t.featured}</option>
          <option value="priceAsc">{t.priceAsc}</option>
          <option value="priceDesc">{t.priceDesc}</option>
          <option value="name">{t.name}</option>
        </select>
      </div>

      <div className="mt-4 grid gap-8 lg:grid-cols-[220px_1fr]">
        {/* Sidebar */}
        <aside className={`${showFilters ? "block" : "hidden"} lg:block`}>
          <div className="space-y-6 rounded-lg border border-navy/10 bg-white p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-ink">{t.filters}</h3>
              {dirty && (
                <button type="button" onClick={clearAll} className="text-xs font-medium text-brass-dark hover:underline">
                  {t.clearAll}
                </button>
              )}
            </div>

            {/* Price */}
            <div>
              <h4 className="text-sm font-semibold text-navy">{t.price}</h4>
              <div className="relative mt-4 flex h-4 items-center">
                <div className="absolute h-1 w-full rounded bg-navy/15" />
                <div
                  className="absolute h-1 rounded bg-navy"
                  style={{ left: `${pct(priceMin)}%`, right: `${100 - pct(priceMax)}%` }}
                />
                <input
                  type="range"
                  className="range-thumb"
                  min={bounds.min}
                  max={bounds.max}
                  value={priceMin}
                  onChange={(e) => setPriceMin(Math.min(Number(e.target.value), priceMax - 1))}
                  aria-label={`${t.price} min`}
                />
                <input
                  type="range"
                  className="range-thumb"
                  min={bounds.min}
                  max={bounds.max}
                  value={priceMax}
                  onChange={(e) => setPriceMax(Math.max(Number(e.target.value), priceMin + 1))}
                  aria-label={`${t.price} max`}
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-sm text-navy/70">
                <span>{formatPrice(priceMin, locale)}</span>
                <span className="text-navy/40">{t.to}</span>
                <span>{formatPrice(priceMax, locale)}</span>
              </div>
            </div>

            {/* Brands */}
            {brands.length > 1 && (
              <div>
                <h4 className="text-sm font-semibold text-navy">{t.brand}</h4>
                <div className="mt-3 space-y-2">
                  {brands.map((b) => (
                    <label key={b} className="flex cursor-pointer items-center gap-2 text-sm text-navy/75">
                      <input
                        type="checkbox"
                        checked={activeBrands.includes(b)}
                        onChange={() => toggleBrand(b)}
                        className="h-4 w-4 rounded border-navy/30 text-navy accent-navy"
                      />
                      <span className="flex-1">{b}</span>
                      <span className="text-navy/40">({brandCounts[b]})</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* Results */}
        <div>
          {filtered.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((p) => (
                <ProductCard key={p.slug} product={p} locale={locale} dict={dict} />
              ))}
            </div>
          ) : (
            <p className="text-navy/60">{t.none}</p>
          )}
        </div>
      </div>
    </div>
  );
}
