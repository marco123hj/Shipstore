import Link from "next/link";
import Icon from "@/components/Icon";
import { getCategories, getFeaturedProducts, getBrands } from "@/lib/data";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { getDict } from "@/lib/i18n";

const uspIcons = ["compass", "layers", "anchor", "truck"];

export default function HomePage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const dict = getDict(locale);
  const t = dict.home;
  const categories = getCategories(locale);
  const featured = getFeaturedProducts(locale);
  const brands = getBrands(locale);

  return (
    <>
      <section className="bg-navy text-white">
        <div className="container-c py-16 sm:py-20">
          <h1 className="max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">{t.heroTitle}</h1>
          <p className="mt-4 max-w-xl text-lg text-white/75">{t.heroSub}</p>
          <div className="mt-7">
            <Link href={`/${locale}/shop`} className="btn-brass">{t.heroCta}</Link>
          </div>
        </div>
      </section>

      <section className="border-b border-navy/10 bg-white">
        <div className="container-c grid grid-cols-2 gap-4 py-6 lg:grid-cols-4">
          {t.usps.map((label, i) => (
            <div key={label} className="flex items-center gap-3">
              <Icon name={uspIcons[i] ?? "anchor"} className="h-5 w-5 text-brass-dark" />
              <span className="text-sm font-medium text-navy">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container-c py-14">
        <h2 className="text-2xl font-bold text-ink">{t.categories}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <CategoryCard key={c.slug} category={c} index={i + 1} locale={locale} />
          ))}
        </div>
      </section>

      <section className="border-y border-navy/10 bg-sand-dark py-14">
        <div className="container-c">
          <h2 className="text-2xl font-bold text-ink">{t.featured}</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} locale={locale} dict={dict} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-c py-14">
        <h2 className="text-2xl font-bold text-ink">{t.brands}</h2>
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
          <h2 className="text-2xl font-bold text-ink">{t.visit}</h2>
          <p className="mt-3 max-w-lg text-navy/70">{t.visitText}</p>
          <Link
            href={`/${locale}/contact`}
            className="mt-5 inline-block text-sm font-semibold text-brass-dark hover:underline"
          >
            {t.visitCta}
          </Link>
        </div>
      </section>
    </>
  );
}
