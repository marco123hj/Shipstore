import { getCategories, getProducts } from "@/lib/data";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";

export const metadata = { title: "Shop — La Capitana" };

export default function ShopPage() {
  const categories = getCategories();
  const products = getProducts();

  return (
    <div className="container-c py-14">
      <span className="kicker text-rust">The full range</span>
      <h1 className="mt-3 font-display text-4xl font-semibold text-ink">Shop</h1>
      <p className="mt-3 max-w-xl text-ink/70">
        Curated marine and yacht supplies for the Spanish Mediterranean, plus our fishing section.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((c, i) => (
          <CategoryCard key={c.slug} category={c} index={i + 1} />
        ))}
      </div>

      <h2 className="mt-16 font-display text-2xl font-semibold text-ink">All products</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
