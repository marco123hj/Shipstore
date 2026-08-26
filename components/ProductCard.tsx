import Link from "next/link";
import Icon from "@/components/Icon";
import { Product, formatPrice, getCategory } from "@/lib/data";

export default function ProductCard({ product }: { product: Product }) {
  const cat = getCategory(product.category);
  return (
    <div className="group flex flex-col border border-ink/15 bg-paper-warm transition hover:border-ink">
      <Link
        href={`/product/${product.slug}`}
        className="relative flex aspect-[4/3] items-center justify-center border-b border-ink/10 bg-ink/[0.05]"
      >
        <Icon name={cat?.icon ?? "anchor"} className="h-12 w-12 text-ink/25 transition group-hover:text-rust/60" />
        {product.oldPrice && (
          <span className="absolute left-0 top-0 bg-rust px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-paper">
            Sale
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-rust">
          {product.brand}
        </span>
        <Link
          href={`/product/${product.slug}`}
          className="mt-1 line-clamp-2 min-h-[2.6em] text-sm font-semibold text-ink transition group-hover:text-rust"
        >
          {product.name}
        </Link>
        <div className="mt-auto flex items-center justify-between border-t border-ink/10 pt-3">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-bold text-ink">{formatPrice(product.price)}</span>
            {product.oldPrice && (
              <span className="text-xs text-ink/40 line-through">{formatPrice(product.oldPrice)}</span>
            )}
          </div>
          <button
            type="button"
            className="h-8 bg-ink px-3 text-[11px] font-bold uppercase tracking-[0.1em] text-paper transition hover:bg-rust"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
