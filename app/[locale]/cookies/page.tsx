import LegalDocView from "@/components/LegalDocView";
import { getDict } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }) {
  return { title: `${getDict(params.locale).cookies.title} — La Capitana` };
}

export default function CookiesPage({ params }: { params: { locale: string } }) {
  return <LegalDocView doc={getDict(params.locale).cookies} locale={params.locale} />;
}
