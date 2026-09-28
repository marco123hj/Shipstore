import Link from "next/link";
import Icon from "@/components/Icon";
import AddToCartButton from "@/components/AddToCartButton";
import WishlistButton from "@/components/WishlistButton";
import { Product, formatPrice, getCategory } from "@/lib/data";
import type { Dict } from "@/lib/i18n";

export default function ProductCard({
  product,
  locale,
  dict,
}: {
  product: Product;
  locale: string;
  dict: Dict;
}) {
  const cat = getCategory(product.category, locale);
  const href = `/${locale}/product/${product.slug}`;
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-navy/10 bg-white transition hover:border-navy/40">
      <WishlistButton slug={product.slug} addLabel={dict.product.wishlistAdd} removeLabel={dict.product.wishlistRemove} />
      <Link href={href} className="relative flex aspect-[4/3] items-center justify-center bg-sand">
        <Icon name={cat?.icon ?? "anchor"} className="h-12 w-12 text-navy/25" />
        {product.oldPrice && (
          <span className="absolute left-2 top-2 rounded bg-brass px-2 py-0.5 text-[11px] font-semibold text-navy">
            {dict.common.sale}
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <span className="text-xs text-navy/50">{product.brand}</span>
        <Link
          href={href}
          className="mt-0.5 line-clamp-2 min-h-[2.6em] text-sm font-medium text-ink transition group-hover:text-brass-dark"
        >
          {product.name}
        </Link>
        <div className="mt-auto flex items-center justify-between pt-3">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-bold text-navy">{formatPrice(product.price, locale)}</span>
            {product.oldPrice && (
              <span className="text-xs text-navy/40 line-through">{formatPrice(product.oldPrice, locale)}</span>
            )}
          </div>
          <AddToCartButton
            item={{
              slug: product.slug,
              name: product.name,
              brand: product.brand,
              price: product.price,
              unit: product.unit,
              iconName: cat?.icon ?? "anchor",
            }}
            label={dict.common.add}
            addedLabel={dict.cart.added}
          />
        </div>
      </div>
    </div>
  );
}
