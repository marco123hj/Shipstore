import LegalDocView from "@/components/LegalDocView";
import { getDict } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }) {
  return { title: `${getDict(params.locale).privacy.title} — La Capitana` };
}

export default function PrivacyPage({ params }: { params: { locale: string } }) {
  return <LegalDocView doc={getDict(params.locale).privacy} locale={params.locale} />;
}
