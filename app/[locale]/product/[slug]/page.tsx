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
import { getDict } from "@/lib/i18n";

// Rendered on demand (products live in Shopify); cached via fetch revalidate.
export const dynamicParams = true;
export function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: { params: { locale: string; slug: string } }) {
  const p = await getProduct(params.slug, params.locale);
  if (!p) return { title: "Shipstore" };
  return {
    title: `${p.name} — Shipstore`,
    description: p.blurb,
    openGraph: { title: `${p.name} — Shipstore`, description: p.blurb, type: "website" },
  };
}

export default async function ProductPage({ params }: { params: { locale: string; slug: string } }) {
  const { locale, slug } = params;
  const dict = getDict(locale);
  const product = await getProduct(slug, locale);
  if (!product) notFound();

  const category = getCategory(product.category, locale);
  const related = (await getProductsByCategory(product.category, locale))
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);
  const recent = await getProducts(locale);

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
      <RecentlyViewed products={recent} locale={locale} dict={dict} excludeSlug={slug} />
    </>
  );
}
