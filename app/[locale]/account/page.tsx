import AccountHub from "@/components/account/AccountHub";
import { getProducts } from "@/lib/data";
import { getDict } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }) {
  return { title: `${getDict(params.locale).account.title} — Shipstore` };
}

export default async function AccountPage({ params }: { params: { locale: string } }) {
  const products = await getProducts(params.locale);
  return (
    <AccountHub
      locale={params.locale}
      dict={getDict(params.locale)}
      products={products}
    />
  );
}
