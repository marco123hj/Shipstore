"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import ProductCard from "@/components/ProductCard";
import { Product, Category, formatPrice } from "@/lib/data";

const trust = [
  { icon: "shield", label: "Genuine stock" },
  { icon: "truck", label: "Free shipping over €75" },
  { icon: "refresh", label: "14-day returns" },
  { icon: "lock", label: "Secure payment" },
];

export default function ProductDetail({
  product,
  category,
  related,
}: {
  product: Product;
  category?: Category;
  related: Product[];
}) {
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [open, setOpen] = useState<string | null>("description");

  const hasDiscount = product.oldPrice != null && product.oldPrice > product.price;

  const specs: [string, string][] = [
    ["Brand", product.brand],
    ...(category ? ([["Category", category.name]] as [string, string][]) : []),
    ...(product.unit ? ([["Sold per", product.unit]] as [string, string][]) : []),
  ];

  const toggle = (s: string) => setOpen(open === s ? null : s);

  const sections = [
    {
      id: "description",
      title: "Description",
      body: <p className="leading-relaxed text-navy/75">{product.blurb}</p>,
    },
    {
      id: "specifications",
      title: "Specifications",
      body: (
        <ul className="space-y-1.5">
          {specs.map(([k, v]) => (
            <li key={k} className="flex gap-3 text-sm">
              <span className="w-28 shrink-0 text-navy/50">{k}</span>
              <span className="text-ink">{v}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      id: "shipping",
      title: "Shipping & returns",
      body: (
        <div className="space-y-2 text-sm text-navy/75">
          <p>Free delivery across mainland Spain on orders over €75.</p>
          <p>Dispatched in 1 to 2 working days from the Valencia Mar marina.</p>
          <p>14-day returns on unused items in original packaging.</p>
        </div>
      ),
    },
  ];

  return (
    <div>
      {/* Breadcrumb */}
      <div className="container-c pt-8 pb-4">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-navy/50">
          <Link href="/" className="transition hover:text-brass-dark">Home</Link>
          <span className="text-navy/30">/</span>
          <Link href="/shop" className="transition hover:text-brass-dark">Shop</Link>
          {category && (
            <>
              <span className="text-navy/30">/</span>
              <Link href={`/category/${category.slug}`} className="transition hover:text-brass-dark">
                {category.name}
              </Link>
            </>
          )}
          <span className="text-navy/30">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      {/* Product */}
      <div className="container-c pb-14">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="lg:sticky lg:top-24">
            <div className="flex aspect-square items-center justify-center rounded-xl border border-navy/10 bg-white">
              <Icon name={category?.icon ?? "anchor"} className="h-28 w-28 text-navy/20" />
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <div className="text-sm text-navy/50">{product.brand}</div>
              <h1 className="mt-1 text-3xl font-bold text-ink sm:text-4xl">{product.name}</h1>
            </div>

            {/* Price */}
            <div>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-semibold text-ink">{formatPrice(product.price)}</span>
                {hasDiscount && (
                  <>
                    <span className="text-lg text-navy/40 line-through">{formatPrice(product.oldPrice!)}</span>
                    <span className="rounded bg-brass px-2 py-0.5 text-[11px] font-semibold text-navy">Sale</span>
                  </>
                )}
              </div>
              <p className="mt-1 text-[11px] text-navy/50">Prices include VAT. Shipping calculated at checkout.</p>
            </div>

            {/* Quantity + add + wishlist */}
            <div className="flex items-center gap-2">
              <div className="flex h-12 shrink-0 items-center rounded-lg border border-navy/20">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                  className="flex h-full w-10 items-center justify-center rounded-l-lg text-ink transition hover:bg-sand disabled:opacity-30"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" d="M5 12h14" />
                  </svg>
                </button>
                <span className="w-8 select-none text-center text-sm font-medium text-ink">{quantity}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                  disabled={quantity >= 10}
                  className="flex h-full w-10 items-center justify-center rounded-r-lg text-ink transition hover:bg-sand disabled:opacity-30"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                  </svg>
                </button>
              </div>

              <button
                type="button"
                className="flex h-12 flex-1 items-center justify-center rounded-md bg-brass px-5 text-sm font-semibold text-navy transition hover:bg-brass-dark"
              >
                Add to cart
              </button>

              <button
                type="button"
                aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
                onClick={() => setWishlisted((w) => !w)}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-ink transition hover:bg-ink-soft"
              >
                <Icon name="heart" className={`h-5 w-5 ${wishlisted ? "text-brass" : "text-white"}`} />
              </button>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-navy/10 pt-4">
              {trust.map((b) => (
                <div key={b.label} className="flex items-center gap-1.5 text-navy/60">
                  <Icon name={b.icon} className="h-4 w-4" />
                  <span className="text-xs">{b.label}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="border-t border-navy/10">
              {sections.map((s) => (
                <div key={s.id} className="border-b border-navy/10">
                  <button
                    type="button"
                    onClick={() => toggle(s.id)}
                    className="flex w-full items-center justify-between py-4 text-left"
                  >
                    <span className="font-medium text-ink">{s.title}</span>
                    <svg
                      className={`h-5 w-5 text-navy/50 transition-transform ${open === s.id ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {open === s.id && <div className="pb-5">{s.body}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-navy/10 bg-sand-dark py-14">
          <div className="container-c">
            <h2 className="text-center text-2xl font-bold text-ink sm:text-3xl">
              More in {category?.name ?? "the shop"}
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
