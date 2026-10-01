import WishlistClient from "@/components/WishlistClient";
import { getProducts } from "@/lib/data";
import { getDict } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }) {
  return { title: `${getDict(params.locale).wishlist.title} — Shipstore` };
}

export default async function WishlistPage({ params }: { params: { locale: string } }) {
  const products = await getProducts(params.locale);
  return <WishlistClient products={products} locale={params.locale} dict={getDict(params.locale)} />;
}
