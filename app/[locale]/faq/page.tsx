import LegalLayout from "@/components/LegalLayout";
import FaqList from "@/components/FaqList";
import { getDict } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }) {
  return { title: `${getDict(params.locale).faqPage.title} — La Capitana` };
}

export default function FaqPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const t = getDict(locale).faqPage;
  return (
    <LegalLayout title={t.title} intro={t.intro}>
      <FaqList items={t.items} locale={locale} />
    </LegalLayout>
  );
}
