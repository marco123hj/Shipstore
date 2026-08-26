import LegalLayout from "@/components/LegalLayout";
import { Blocks } from "@/components/RichText";
import { getDict } from "@/lib/i18n";
import type { LegalDoc } from "@/lib/i18n/types";

export default function LegalDocView({ doc, locale }: { doc: LegalDoc; locale: string }) {
  return (
    <LegalLayout
      title={doc.title}
      intro={doc.intro}
      updated={doc.updated}
      updatedLabel={getDict(locale).common.updated}
    >
      {doc.sections.map((section, i) => (
        <section key={i} className="space-y-3">
          <h2 className="text-xl font-bold text-ink">{section.h}</h2>
          <Blocks blocks={section.blocks} locale={locale} />
        </section>
      ))}
    </LegalLayout>
  );
}
