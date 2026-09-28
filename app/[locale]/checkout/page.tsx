import CheckoutClient from "@/components/CheckoutClient";
import { getDict } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }) {
  return { title: `${getDict(params.locale).checkout.title} — Shipstore` };
}

export default function CheckoutPage({ params }: { params: { locale: string } }) {
  return <CheckoutClient locale={params.locale} dict={getDict(params.locale)} />;
}
