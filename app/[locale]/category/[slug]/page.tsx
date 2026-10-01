import { notFound } from "next/navigation";
import Link from "next/link";
import Icon from "@/components/Icon";
import { getCategory, getCategories, getProductsByCategory } from "@/lib/data";
import ProductBrowser from "@/components/ProductBrowser";
import { getDict, locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getCategories().map((c) => ({ locale, slug: c.slug }))
  );
}

export function generateMetadata({ params }: { params: { locale: string; slug: string } }) {
  const cat = getCategory(params.slug, params.locale);
  return { title: cat ? `${cat.name} — Shipstore` : "Shipstore" };
}

export default async function CategoryPage({ params }: { params: { locale: string; slug: string } }) {
  const { locale, slug } = params;
  const dict = getDict(locale);
  const cat = getCategory(slug, locale);
  if (!cat) notFound();
  const products = await getProductsByCategory(slug, locale);

  return (
    <>
      <section className="border-b border-navy/10 bg-sand-dark">
        <div className="container-c py-10">
          <nav className="flex items-center gap-2 text-sm text-navy/50">
            <Link href={`/${locale}`} className="transition hover:text-orange-dark">{dict.common.home}</Link>
            <span className="text-navy/30">/</span>
            <Link href={`/${locale}/shop`} className="transition hover:text-orange-dark">{dict.common.shop}</Link>
            <span className="text-navy/30">/</span>
            <span className="text-ink">{cat.name}</span>
          </nav>
          <div className="mt-4 flex items-center gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-md bg-orange/10 text-orange-dark">
              <Icon name={cat.icon} className="h-6 w-6" />
            </span>
            <div>
              <h1 className="text-3xl font-bold text-ink">{cat.name}</h1>
              <p className="mt-1 max-w-xl text-navy/60">{cat.blurb}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container-c py-10">
        {products.length ? (
          <ProductBrowser products={products} locale={locale} dict={dict} />
        ) : (
          <p className="text-navy/60">{dict.category.coming}</p>
        )}
      </div>
    </>
  );
}
