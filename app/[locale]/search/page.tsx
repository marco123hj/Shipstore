import { searchProducts } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import { getDict } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }) {
  return { title: `${getDict(params.locale).search.title} — Shipstore` };
}

export default function SearchPage({
  params,
  searchParams,
}: {
  params: { locale: string };
  searchParams: { q?: string };
}) {
  const { locale } = params;
  const q = (searchParams.q ?? "").toString();
  const dict = getDict(locale);
  const results = searchProducts(q, locale);

  return (
    <div className="container-c py-12">
      <h1 className="text-2xl font-bold text-ink sm:text-3xl">
        {dict.search.resultsFor} “{q}”
      </h1>
      <p className="mt-1 text-sm text-navy/50">
        {results.length} {dict.search.results}
      </p>

      {results.length > 0 ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((p) => (
            <ProductCard key={p.slug} product={p} locale={locale} dict={dict} />
          ))}
        </div>
      ) : (
        <p className="mt-8 text-navy/60">
          {dict.search.noResults} “{q}”.
        </p>
      )}
    </div>
  );
}
