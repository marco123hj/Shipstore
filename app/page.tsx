import Link from "next/link";
import Icon from "@/components/Icon";
import { getCategories, getFeaturedProducts, getBrands } from "@/lib/data";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";

const usps = [
  { icon: "compass", label: "Expert advice" },
  { icon: "layers", label: "Wide range" },
  { icon: "anchor", label: "On the marina" },
  { icon: "truck", label: "Delivery across Spain" },
];

export default function HomePage() {
  const categories = getCategories();
  const featured = getFeaturedProducts();
  const brands = getBrands();

  return (
    <>
      <section className="bg-navy text-white">
        <div className="container-c py-16 sm:py-20">
          <h1 className="max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
            Marine and yacht supplies at the Valencia Mar marina.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/75">
            Maintenance, hardware, safety, electronics and fishing gear for boats and yachts, on the
            water in Valencia.
          </p>
          <div className="mt-7">
            <Link href="/shop" className="btn-brass">Shop all products</Link>
          </div>
        </div>
      </section>

      <section className="border-b border-navy/10 bg-white">
        <div className="container-c grid grid-cols-2 gap-4 py-6 lg:grid-cols-4">
          {usps.map((u) => (
            <div key={u.label} className="flex items-center gap-3">
              <Icon name={u.icon} className="h-5 w-5 text-brass-dark" />
              <span className="text-sm font-medium text-navy">{u.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container-c py-14">
        <h2 className="text-2xl font-bold text-navy">Shop by category</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <CategoryCard key={c.slug} category={c} index={i + 1} />
          ))}
        </div>
      </section>

      <section className="border-y border-navy/10 bg-sand-dark py-14">
        <div className="container-c">
          <h2 className="text-2xl font-bold text-navy">Featured products</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-c py-14">
        <h2 className="text-2xl font-bold text-navy">Brands</h2>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {brands.map((b) => (
            <div key={b.name} className="rounded-lg border border-navy/10 bg-white px-4 py-4">
              <div className="font-semibold text-navy">{b.name}</div>
              <div className="mt-0.5 text-xs text-navy/50">{b.note}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-navy/10 bg-white">
        <div className="container-c py-14">
          <h2 className="text-2xl font-bold text-navy">Visit us</h2>
          <p className="mt-3 max-w-lg text-navy/70">
            Valencia Mar marina, El Saler side, next to Plan B. 46012 València.
          </p>
          <Link href="/contact" className="mt-5 inline-block text-sm font-semibold text-brass-dark hover:underline">
            Contact &amp; opening hours
          </Link>
        </div>
      </section>
    </>
  );
}
