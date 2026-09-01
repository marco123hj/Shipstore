"use client";

import ProductCard from "@/components/ProductCard";
import { useRecent } from "@/context/RecentlyViewed";
import { Product } from "@/lib/data";
import type { Dict } from "@/lib/i18n";

export default function RecentlyViewed({
  products,
  locale,
  dict,
  excludeSlug,
}: {
  products: Product[];
  locale: string;
  dict: Dict;
  excludeSlug?: string;
}) {
  const recent = useRecent();
  const items = recent
    .map((s) => products.find((p) => p.slug === s))
    .filter((p): p is Product => !!p && p.slug !== excludeSlug)
    .slice(0, 4);

  if (items.length === 0) return null;

  return (
    <section className="border-t border-navy/10 bg-white">
      <div className="container-c py-14">
        <h2 className="text-2xl font-bold text-ink">{dict.recentlyViewed}</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p) => (
            <ProductCard key={p.slug} product={p} locale={locale} dict={dict} />
          ))}
        </div>
      </div>
    </section>
  );
}
