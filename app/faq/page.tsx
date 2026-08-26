import LegalLayout from "@/components/LegalLayout";
import FaqList from "@/components/FaqList";

export const metadata = { title: "FAQ — La Capitana" };

export default function FaqPage() {
  return (
    <LegalLayout
      title="Frequently asked questions"
      intro="Quick answers on the shop, shipping, payments and returns. If your question is not here, contact us."
    >
      <FaqList />
    </LegalLayout>
  );
}
