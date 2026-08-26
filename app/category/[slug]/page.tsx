import { notFound } from "next/navigation";
import Link from "next/link";
import { getCategory, getCategories, getProductsByCategory } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return getCategories().map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const cat = getCategory(params.slug);
  return { title: cat ? `${cat.name} — La Capitana` : "La Capitana" };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const cat = getCategory(params.slug);
  if (!cat) notFound();
  const products = getProductsByCategory(cat.slug);

  return (
    <>
      <section className="bg-navy text-white">
        <div className="container-c py-14">
          <Link href="/shop" className="text-xs uppercase tracking-[0.2em] text-brass hover:underline">
            ← Shop
          </Link>
          <div className="mt-4 flex items-center gap-4">
            <span className="text-5xl">{cat.icon}</span>
            <div>
              <h1 className="font-serif text-4xl font-bold">{cat.name}</h1>
              <p className="mt-1 max-w-xl text-white/70">{cat.blurb}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container-c py-12">
        {products.length ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        ) : (
          <p className="text-navy/60">Products in this category are coming soon.</p>
        )}
      </div>
    </>
  );
}
