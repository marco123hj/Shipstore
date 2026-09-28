"use client";

import Link from "next/link";
import Icon from "@/components/Icon";
import ProductCard from "@/components/ProductCard";
import { useWishlist } from "@/context/WishlistContext";
import { Product } from "@/lib/data";
import type { Dict } from "@/lib/i18n";

export default function WishlistClient({
  products,
  locale,
  dict,
}: {
  products: Product[];
  locale: string;
  dict: Dict;
}) {
  const { slugs } = useWishlist();
  const items = products.filter((p) => slugs.includes(p.slug));

  return (
    <div className="container-c py-12">
      <h1 className="text-3xl font-bold text-ink">{dict.wishlist.title}</h1>

      {items.length > 0 ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p) => (
            <ProductCard key={p.slug} product={p} locale={locale} dict={dict} />
          ))}
        </div>
      ) : (
        <div className="mt-12 text-center">
          <Icon name="heart" className="mx-auto h-10 w-10 text-navy/25" />
          <p className="mt-4 text-navy/60">{dict.wishlist.empty}</p>
          <Link href={`/${locale}/shop`} className="btn-primary mt-5 inline-flex">
            {dict.wishlist.browse}
          </Link>
        </div>
      )}
    </div>
  );
}
