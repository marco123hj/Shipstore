import { notFound } from "next/navigation";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getBrand, getBrands, getProductsByBrand } from "@/lib/data";
import { getDict, locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getBrands().map((b) => ({ locale, slug: b.slug }))
  );
}

export function generateMetadata({ params }: { params: { locale: string; slug: string } }) {
  const b = getBrand(params.slug, params.locale);
  return { title: b ? `${b.name} — Shipstore` : "Shipstore" };
}

export default function BrandPage({ params }: { params: { locale: string; slug: string } }) {
  const { locale, slug } = params;
  const dict = getDict(locale);
  const brand = getBrand(slug, locale);
  if (!brand) notFound();
  const products = getProductsByBrand(brand.name, locale);

  return (
    <>
      <section className="bg-navy text-white">
        <div className="container-c py-12">
          <Link href={`/${locale}#brands`} className="text-sm text-brass hover:underline">
            ← {dict.brand.back}
          </Link>
          <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-center">
            {brand.logo && (
              <div className="flex h-24 w-40 shrink-0 items-center justify-center rounded-xl bg-white p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={brand.logo} alt={brand.name} className="max-h-full max-w-full object-contain" />
              </div>
            )}
            <div>
              <h1 className="text-3xl font-bold sm:text-4xl">{brand.name}</h1>
              <p className="mt-1 text-white/70">{brand.note}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-c py-12">
        <div className="max-w-3xl">
          <p className="text-lg leading-relaxed text-navy/80">{brand.description}</p>
          {brand.slug === "nautic-talk" && (
            <Link href={`/${locale}/nautic-talk`} className="btn-brass mt-6 inline-flex">
              {dict.nauticTalk.heroCta}
            </Link>
          )}
        </div>
      </section>

      <section className="border-t border-navy/10 bg-sand-dark">
        <div className="container-c py-12">
          <h2 className="text-2xl font-bold text-ink">{dict.brand.products}</h2>
          {products.length ? (
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((p) => (
                <ProductCard key={p.slug} product={p} locale={locale} dict={dict} />
              ))}
            </div>
          ) : (
            <p className="mt-4 text-navy/60">{dict.brand.noProducts}</p>
          )}
        </div>
      </section>
    </>
  );
}
