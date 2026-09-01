import ContactForm from "@/components/ContactForm";
import { getDict } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }) {
  return { title: `${getDict(params.locale).contact.title} — La Capitana` };
}

export default function ContactPage({ params }: { params: { locale: string } }) {
  const t = getDict(params.locale).contact;

  return (
    <>
      <section className="bg-navy text-white">
        <div className="container-c py-14">
          <h1 className="text-3xl font-bold sm:text-4xl">{t.title}</h1>
        </div>
      </section>

      <div className="container-c grid gap-10 py-14 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold text-ink">{t.address}</h2>
          <address className="mt-3 space-y-1 not-italic text-navy/75">
            <div className="font-semibold text-navy">{t.addr[0]}</div>
            {t.addr.slice(1).map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </address>

          <dl className="mt-6 space-y-2 text-sm">
            <div className="flex gap-3">
              <dt className="w-20 font-semibold text-navy">{t.email}</dt>
              <dd className="text-navy/70">info@lacapitana.es</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-20 font-semibold text-navy">{t.hours}</dt>
              <dd className="text-navy/70">{t.hoursValue}</dd>
            </div>
          </dl>
        </div>

        <ContactForm t={t} />
      </div>
    </>
  );
}
