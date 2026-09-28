import LegalDocView from "@/components/LegalDocView";
import { getDict } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }) {
  return { title: `${getDict(params.locale).shipping.title} — Shipstore` };
}

export default function ShippingPage({ params }: { params: { locale: string } }) {
  return <LegalDocView doc={getDict(params.locale).shipping} locale={params.locale} />;
}
