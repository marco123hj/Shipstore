"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/lib/data";
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
  const brands = useMemo(() => [...new Set(products.map((p) => p.brand))].sort(), [products]);
  const [brand, setBrand] = useState("all");
  const [price, setPrice] = useState("any");
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    let list = products.filter((p) => brand === "all" || p.brand === brand);
    if (price === "under25") list = list.filter((p) => p.price < 25);
    else if (price === "mid") list = list.filter((p) => p.price >= 25 && p.price <= 100);
    else if (price === "over100") list = list.filter((p) => p.price > 100);

    const s = [...list];
    if (sort === "priceAsc") s.sort((a, b) => a.price - b.price);
    else if (sort === "priceDesc") s.sort((a, b) => b.price - a.price);
    else if (sort === "name") s.sort((a, b) => a.name.localeCompare(b.name));
    return s;
  }, [products, brand, price, sort]);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <label className="sr-only" htmlFor="f-sort">{t.sort}</label>
        <select id="f-sort" value={sort} onChange={(e) => setSort(e.target.value)} className={selectClass}>
          <option value="featured">{t.sort}: {t.featured}</option>
          <option value="priceAsc">{t.priceAsc}</option>
          <option value="priceDesc">{t.priceDesc}</option>
          <option value="name">{t.name}</option>
        </select>

        <label className="sr-only" htmlFor="f-brand">{t.brand}</label>
        <select id="f-brand" value={brand} onChange={(e) => setBrand(e.target.value)} className={selectClass}>
          <option value="all">{t.allBrands}</option>
          {brands.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>

        <label className="sr-only" htmlFor="f-price">{t.price}</label>
        <select id="f-price" value={price} onChange={(e) => setPrice(e.target.value)} className={selectClass}>
          <option value="any">{t.anyPrice}</option>
          <option value="under25">{t.under25}</option>
          <option value="mid">{t.mid}</option>
          <option value="over100">{t.over100}</option>
        </select>

        <span className="ml-auto text-sm text-navy/50">
          {filtered.length} {t.items}
        </span>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} locale={locale} dict={dict} />
          ))}
        </div>
      ) : (
        <p className="mt-6 text-navy/60">{t.none}</p>
      )}
    </div>
  );
}
