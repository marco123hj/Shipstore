import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getProduct,
  getProducts,
  getCategory,
  getProductsByCategory,
  formatPrice,
} from "@/lib/data";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return getProducts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = getProduct(params.slug);
  return { title: p ? `${p.name} — La Capitana` : "La Capitana" };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();
  const cat = getCategory(product.category);
  const related = getProductsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  return (
    <div className="container-c py-12">
      <nav className="text-xs text-navy/50">
        <Link href="/shop" className="hover:underline">Shop</Link>
        {cat && (
          <>
            {" / "}
            <Link href={`/category/${cat.slug}`} className="hover:underline">
              {cat.name}
            </Link>
          </>
        )}
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-3xl tile-gradient">
          <span className="absolute inset-0 flex items-center justify-center text-8xl opacity-90">
            {cat?.icon ?? "⚓"}
          </span>
        </div>
        <div>
          <span className="eyebrow">{product.brand}</span>
          <h1 className="mt-2 font-serif text-3xl font-bold text-navy">{product.name}</h1>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-3xl font-bold text-navy">{formatPrice(product.price)}</span>
            {product.oldPrice && (
              <span className="text-lg text-navy/40 line-through">{formatPrice(product.oldPrice)}</span>
            )}
            {product.unit && <span className="text-sm text-navy/50">/ {product.unit}</span>}
          </div>
          <p className="mt-5 leading-relaxed text-navy/75">{product.blurb}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button type="button" className="btn-brass">Add to cart</button>
            <button
              type="button"
              className="rounded-full border border-navy/20 px-6 py-3 text-sm font-semibold text-navy transition hover:bg-navy/5"
            >
              ♡ Save
            </button>
          </div>
          <p className="mt-6 text-xs text-navy/50">
            Prices include VAT. Online checkout opens with the shop — for now, visit us at the
            marina or get in touch to reserve.
          </p>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="font-serif text-2xl font-bold text-navy">More in {cat?.name}</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
