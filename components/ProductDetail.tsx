"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import ProductCard from "@/components/ProductCard";
import AddToCartButton from "@/components/AddToCartButton";
import { Product, Category, formatPrice } from "@/lib/data";
import type { Dict } from "@/lib/i18n";

const trustIcons = ["shield", "truck", "refresh", "lock"];

export default function ProductDetail({
  product,
  category,
  related,
  locale,
  dict,
}: {
  product: Product;
  category?: Category;
  related: Product[];
  locale: string;
  dict: Dict;
}) {
  const t = dict.product;
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [open, setOpen] = useState<string | null>("description");

  const hasDiscount = product.oldPrice != null && product.oldPrice > product.price;

  const specs: [string, string][] = [
    [t.specBrand, product.brand],
    ...(category ? ([[t.specCategory, category.name]] as [string, string][]) : []),
    ...(product.unit ? ([[t.specSoldPer, product.unit]] as [string, string][]) : []),
  ];

  const toggle = (s: string) => setOpen(open === s ? null : s);

  const sections = [
    {
      id: "description",
      title: t.description,
      body: <p className="leading-relaxed text-navy/75">{product.blurb}</p>,
    },
    {
      id: "specifications",
      title: t.specifications,
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
      title: t.shipping,
      body: (
        <div className="space-y-2 text-sm text-navy/75">
          {t.shippingBody.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div>
      {/* Breadcrumb */}
      <div className="container-c pt-8 pb-4">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-navy/50">
          <Link href={`/${locale}`} className="transition hover:text-brass-dark">{dict.common.home}</Link>
          <span className="text-navy/30">/</span>
          <Link href={`/${locale}/shop`} className="transition hover:text-brass-dark">{dict.common.shop}</Link>
          {category && (
            <>
              <span className="text-navy/30">/</span>
              <Link href={`/${locale}/category/${category.slug}`} className="transition hover:text-brass-dark">
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
                <span className="text-2xl font-semibold text-ink">{formatPrice(product.price, locale)}</span>
                {hasDiscount && (
                  <>
                    <span className="text-lg text-navy/40 line-through">{formatPrice(product.oldPrice!, locale)}</span>
                    <span className="rounded bg-brass px-2 py-0.5 text-[11px] font-semibold text-navy">{dict.common.sale}</span>
                  </>
                )}
              </div>
              <p className="mt-1 text-[11px] text-navy/50">{t.priceNote}</p>
            </div>

            {/* Quantity + add + wishlist */}
            <div className="flex items-center gap-2">
              <div className="flex h-12 shrink-0 items-center rounded-lg border border-navy/20">
                <button
                  type="button"
                  aria-label={t.quantityDec}
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
                  aria-label={t.quantityInc}
                  onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                  disabled={quantity >= 10}
                  className="flex h-full w-10 items-center justify-center rounded-r-lg text-ink transition hover:bg-sand disabled:opacity-30"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                  </svg>
                </button>
              </div>

              <AddToCartButton
                item={{
                  slug: product.slug,
                  name: product.name,
                  brand: product.brand,
                  price: product.price,
                  unit: product.unit,
                  iconName: category?.icon ?? "anchor",
                }}
                quantity={quantity}
                label={t.addToCart}
                addedLabel={dict.cart.added}
                size="lg"
              />

              <button
                type="button"
                aria-label={wishlisted ? t.wishlistRemove : t.wishlistAdd}
                onClick={() => setWishlisted((w) => !w)}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-navy/20 bg-white transition hover:border-navy"
              >
                <Icon name="heart" className={`h-5 w-5 ${wishlisted ? "text-brass-dark" : "text-navy/60"}`} />
              </button>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-navy/10 pt-4">
              {t.trust.map((label, i) => (
                <div key={label} className="flex items-center gap-1.5 text-navy/60">
                  <Icon name={trustIcons[i] ?? "shield"} className="h-4 w-4" />
                  <span className="text-xs">{label}</span>
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
              {t.moreIn} {category?.name ?? t.moreInFallback}
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} locale={locale} dict={dict} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
