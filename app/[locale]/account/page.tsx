import AccountClient from "@/components/AccountClient";
import { getDict } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }) {
  return { title: `${getDict(params.locale).account.title} — La Capitana` };
}

export default function AccountPage({ params }: { params: { locale: string } }) {
  return <AccountClient locale={params.locale} dict={getDict(params.locale)} />;
}
