import WishlistClient from "@/components/WishlistClient";
import { getProducts } from "@/lib/data";
import { getDict } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }) {
  return { title: `${getDict(params.locale).wishlist.title} — Shipstore` };
}

export default function WishlistPage({ params }: { params: { locale: string } }) {
  return <WishlistClient products={getProducts(params.locale)} locale={params.locale} dict={getDict(params.locale)} />;
}
