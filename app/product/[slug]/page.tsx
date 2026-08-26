import { notFound } from "next/navigation";
import Link from "next/link";
import Icon from "@/components/Icon";
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
      <nav className="text-xs text-ink/50">
        <Link href="/shop" className="hover:text-rust">Shop</Link>
        {cat && (
          <>
            {" / "}
            <Link href={`/category/${cat.slug}`} className="hover:text-rust">
              {cat.name}
            </Link>
          </>
        )}
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div className="flex aspect-square items-center justify-center border border-ink/15 bg-ink/[0.05]">
          <Icon name={cat?.icon ?? "anchor"} className="h-24 w-24 text-ink/25" />
        </div>
        <div>
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-rust">{product.brand}</span>
          <h1 className="mt-2 font-display text-3xl font-semibold text-ink">{product.name}</h1>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-3xl font-bold text-ink">{formatPrice(product.price)}</span>
            {product.oldPrice && (
              <span className="text-lg text-ink/40 line-through">{formatPrice(product.oldPrice)}</span>
            )}
            {product.unit && <span className="text-sm text-ink/50">/ {product.unit}</span>}
          </div>
          <p className="mt-5 leading-relaxed text-ink/75">{product.blurb}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button type="button" className="btn-rust">Add to cart</button>
            <button
              type="button"
              className="inline-flex items-center gap-2 border border-ink/25 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-ink transition hover:bg-ink hover:text-paper"
            >
              Save
            </button>
          </div>
          <p className="mt-6 text-xs text-ink/50">
            Prices include VAT. Online checkout opens with the shop, for now, visit us at the marina
            or get in touch to reserve.
          </p>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="font-display text-2xl font-semibold text-ink">More in {cat?.name}</h2>
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
