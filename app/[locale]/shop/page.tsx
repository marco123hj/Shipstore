import { getCategories, getProducts } from "@/lib/data";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { getDict } from "@/lib/i18n";

export default function ShopPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const dict = getDict(locale);
  const categories = getCategories(locale);
  const products = getProducts(locale);

  return (
    <div className="container-c py-12">
      <h1 className="text-3xl font-bold text-ink">{dict.shop.title}</h1>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((c, i) => (
          <CategoryCard key={c.slug} category={c} index={i + 1} locale={locale} />
        ))}
      </div>

      <h2 className="mt-14 text-2xl font-bold text-ink">{dict.shop.all}</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} locale={locale} dict={dict} />
        ))}
      </div>
    </div>
  );
}
