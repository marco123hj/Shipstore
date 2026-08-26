import Link from "next/link";
import Icon from "@/components/Icon";
import { Product, formatPrice, getCategory } from "@/lib/data";

export default function ProductCard({ product }: { product: Product }) {
  const cat = getCategory(product.category);
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-navy/10 bg-white transition hover:border-navy/40">
      <Link
        href={`/product/${product.slug}`}
        className="relative flex aspect-[4/3] items-center justify-center bg-sand"
      >
        <Icon name={cat?.icon ?? "anchor"} className="h-12 w-12 text-navy/25" />
        {product.oldPrice && (
          <span className="absolute left-2 top-2 rounded bg-brass px-2 py-0.5 text-[11px] font-semibold text-navy">
            Sale
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <span className="text-xs text-navy/50">{product.brand}</span>
        <Link
          href={`/product/${product.slug}`}
          className="mt-0.5 line-clamp-2 min-h-[2.6em] text-sm font-medium text-navy transition group-hover:text-brass-dark"
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
            className="rounded-md bg-navy px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-navy-light"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
