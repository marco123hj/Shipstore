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
      <nav className="text-xs text-navy/50">
        <Link href="/shop" className="hover:text-brass-dark">Shop</Link>
        {cat && (
          <>
            {" / "}
            <Link href={`/category/${cat.slug}`} className="hover:text-brass-dark">
              {cat.name}
            </Link>
          </>
        )}
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div className="flex aspect-square items-center justify-center rounded-lg border border-navy/10 bg-sand">
          <Icon name={cat?.icon ?? "anchor"} className="h-24 w-24 text-navy/25" />
        </div>
        <div>
          <div className="text-sm text-navy/50">{product.brand}</div>
          <h1 className="mt-1 text-2xl font-bold text-navy">{product.name}</h1>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-2xl font-bold text-navy">{formatPrice(product.price)}</span>
            {product.oldPrice && (
              <span className="text-lg text-navy/40 line-through">{formatPrice(product.oldPrice)}</span>
            )}
            {product.unit && <span className="text-sm text-navy/50">/ {product.unit}</span>}
          </div>
          <p className="mt-5 leading-relaxed text-navy/75">{product.blurb}</p>
          <div className="mt-6">
            <button type="button" className="btn-brass">Add to cart</button>
          </div>
          <p className="mt-5 text-xs text-navy/50">
            Prices include VAT. Online checkout opens with the shop.
          </p>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-14">
          <h2 className="text-xl font-bold text-navy">More in {cat?.name}</h2>
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
