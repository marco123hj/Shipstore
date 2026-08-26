import { getCategories, getProducts } from "@/lib/data";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";

export const metadata = { title: "Shop — La Capitana" };

export default function ShopPage() {
  const categories = getCategories();
  const products = getProducts();

  return (
    <div className="container-c py-14">
      <span className="eyebrow">The full range</span>
      <h1 className="mt-2 font-serif text-4xl font-bold text-navy">Shop</h1>
      <p className="mt-3 max-w-xl text-navy/70">
        Curated marine and yacht supplies for the Spanish Mediterranean, plus our fishing section.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((c) => (
          <CategoryCard key={c.slug} category={c} />
        ))}
      </div>

      <h2 className="mt-16 font-serif text-2xl font-bold text-navy">All products</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
