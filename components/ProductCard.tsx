import Link from "next/link";
import { Product, formatPrice, getCategory } from "@/lib/data";

export default function ProductCard({ product }: { product: Product }) {
  const cat = getCategory(product.category);
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm transition hover:shadow-md">
      <Link href={`/product/${product.slug}`} className="relative block aspect-[4/3] tile-gradient">
        <span className="absolute inset-0 flex items-center justify-center text-5xl opacity-90 transition group-hover:scale-110">
          {cat?.icon ?? "⚓"}
        </span>
        {product.oldPrice && (
          <span className="absolute left-3 top-3 rounded-full bg-brass px-2.5 py-1 text-[11px] font-bold text-navy">
            SALE
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <span className="eyebrow">{product.brand}</span>
        <Link
          href={`/product/${product.slug}`}
          className="mt-1 line-clamp-2 min-h-[2.6em] text-sm font-semibold text-navy transition group-hover:underline"
        >
          {product.name}
        </Link>
        <div className="mt-auto flex items-center justify-between pt-3">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-bold text-navy">{formatPrice(product.price)}</span>
            {product.oldPrice && (
              <span className="text-xs text-navy/40 line-through">{formatPrice(product.oldPrice)}</span>
            )}
          </div>
          <button
            type="button"
            className="rounded-full bg-navy px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-sea"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
