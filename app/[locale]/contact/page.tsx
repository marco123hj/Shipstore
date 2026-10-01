import ContactForm from "@/components/ContactForm";
import { getDict } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }) {
  return { title: `${getDict(params.locale).contact.title} — Shipstore` };
}

export default function ContactPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const t = getDict(locale).contact;

  return (
    <>
      <section className="border-b border-navy/10 bg-sand-dark">
        <div className="container-c py-8">
          <nav className="text-sm text-navy/50">{getDict(locale).common.home} / {t.title}</nav>
          <h1 className="mt-2 text-3xl font-bold text-ink sm:text-4xl">{t.title}</h1>
        </div>
      </section>

      <div className="container-c grid gap-12 py-12 lg:grid-cols-2">
        {/* Left: company info */}
        <div>
          <h2 className="text-xl font-bold text-ink">{t.company}</h2>
          <p className="mt-3 max-w-md leading-relaxed text-navy/75">{t.intro}</p>

          <h3 className="mt-8 text-lg font-bold text-ink">{t.hours}</h3>
          <p className="mt-2 text-navy/75">{t.hoursValue}</p>
          <p className="mt-1 text-navy/75">
            {t.phoneNote}{" "}
            <a href="tel:+31621100079" className="font-semibold text-orange-dark hover:underline">
              {t.phone}
            </a>
          </p>

          <h3 className="mt-8 text-lg font-bold text-ink">{t.infoTitle}</h3>
          <address className="mt-2 space-y-1 not-italic text-navy/75">
            {t.addr.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
            <div>
              <a href="mailto:info@shipstore.nl" className="text-orange-dark hover:underline">
                info@shipstore.nl
              </a>
            </div>
          </address>
        </div>

        {/* Right: form */}
        <ContactForm t={t} />
      </div>
    </>
  );
}
