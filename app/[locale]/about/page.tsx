import Link from "next/link";
import Icon from "@/components/Icon";
import { getDict } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }) {
  return { title: `${getDict(params.locale).about.title} — Shipstore` };
}

export default function AboutPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const t = getDict(locale).about;

  return (
    <>
      <section className="bg-navy text-white">
        <div className="container-c py-14">
          <h1 className="text-3xl font-bold sm:text-4xl">{t.title}</h1>
        </div>
      </section>

      <div className="container-c grid gap-10 py-14 lg:grid-cols-3">
        <div className="space-y-4 leading-relaxed text-navy/80 lg:col-span-2">
          {t.paras.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <aside className="space-y-4">
          <div className="rounded-lg border border-navy/10 bg-white p-5">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-navy/5 text-navy">
              <Icon name="anchor" className="h-5 w-5" />
            </span>
            <h3 className="mt-3 text-base font-semibold text-ink">{t.card1Title}</h3>
            <p className="mt-1 text-sm text-navy/65">{t.card1Body}</p>
          </div>
          <div className="rounded-lg border border-navy/10 bg-white p-5">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-navy/5 text-navy">
              <Icon name="fish" className="h-5 w-5" />
            </span>
            <h3 className="mt-3 text-base font-semibold text-ink">{t.card2Title}</h3>
            <p className="mt-1 text-sm text-navy/65">{t.card2Body}</p>
          </div>
          <Link href={`/${locale}/contact`} className="btn-primary w-full">{t.cta}</Link>
        </aside>
      </div>
    </>
  );
}
