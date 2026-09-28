import LegalDocView from "@/components/LegalDocView";
import { getDict } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }) {
  return { title: `${getDict(params.locale).terms.title} — Shipstore` };
}

export default function TermsPage({ params }: { params: { locale: string } }) {
  return <LegalDocView doc={getDict(params.locale).terms} locale={params.locale} />;
}
