import { notFound } from "next/navigation";
import Link from "next/link";
import Icon from "@/components/Icon";
import { getCategory, getCategories, getProductsByCategory, toneBg } from "@/lib/data";
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
      <section className="bg-ink text-paper">
        <div className="container-c py-14">
          <Link href="/shop" className="text-[11px] font-bold uppercase tracking-[0.2em] text-rust-light hover:text-rust">
            ← Shop
          </Link>
          <div className="mt-5 flex items-center gap-4">
            <span className={`grid h-14 w-14 place-items-center text-paper ${toneBg(cat.tone)}`}>
              <Icon name={cat.icon} className="h-6 w-6" />
            </span>
            <div>
              <h1 className="font-display text-4xl font-semibold">{cat.name}</h1>
              <p className="mt-1 max-w-xl text-paper/70">{cat.blurb}</p>
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
          <p className="text-ink/60">Products in this category are coming soon.</p>
        )}
      </div>
    </>
  );
}
