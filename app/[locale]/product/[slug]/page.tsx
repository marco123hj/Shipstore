import { notFound } from "next/navigation";
import {
  getProduct,
  getProducts,
  getCategory,
  getProductsByCategory,
} from "@/lib/data";
import ProductDetail from "@/components/ProductDetail";
import RecentlyViewed from "@/components/RecentlyViewed";
import JsonLd from "@/components/JsonLd";
import { productSchema } from "@/lib/seo";
import { getDict, locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getProducts().map((p) => ({ locale, slug: p.slug }))
  );
}

export function generateMetadata({ params }: { params: { locale: string; slug: string } }) {
  const p = getProduct(params.slug, params.locale);
  if (!p) return { title: "Shipstore" };
  return {
    title: `${p.name} — Shipstore`,
    description: p.blurb,
    openGraph: { title: `${p.name} — Shipstore`, description: p.blurb, type: "website" },
  };
}

export default function ProductPage({ params }: { params: { locale: string; slug: string } }) {
  const { locale, slug } = params;
  const dict = getDict(locale);
  const product = getProduct(slug, locale);
  if (!product) notFound();

  const category = getCategory(product.category, locale);
  const related = getProductsByCategory(product.category, locale)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  return (
    <>
      <JsonLd data={productSchema(product, locale)} />
      <ProductDetail
        product={product}
        category={category}
        related={related}
        locale={locale}
        dict={dict}
      />
      <RecentlyViewed products={getProducts(locale)} locale={locale} dict={dict} excludeSlug={slug} />
    </>
  );
}
