import Link from "next/link";
import Icon from "@/components/Icon";
import ProductCard from "@/components/ProductCard";
import { getProductsByBrand } from "@/lib/data";
import { getDict } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }) {
  return { title: `${getDict(params.locale).nauticTalk.title} — Shipstore` };
}

export default async function NauticTalkPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const dict = getDict(locale);
  const t = dict.nauticTalk;
  const products = await getProductsByBrand("Nautic Talk", locale);

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="container-c grid gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-brass">{t.kicker}</div>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{t.title}</h1>
            <p className="mt-4 max-w-lg text-lg text-white/75">{t.heroSub}</p>
            <div className="mt-7">
              <Link href="#products" className="btn-brass">{t.heroCta}</Link>
            </div>
            <p className="mt-4 text-sm text-white/50">{t.trust}</p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="grid h-48 w-48 place-items-center rounded-2xl border border-white/15 bg-white/5 sm:h-64 sm:w-64">
              <Icon name="headset" className="h-24 w-24 text-brass sm:h-32 sm:w-32" />
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="container-c py-14">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">{t.introTitle}</h2>
          <p className="mt-4 leading-relaxed text-navy/75">{t.intro}</p>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-navy/10 bg-sand-dark py-14">
        <div className="container-c">
          <h2 className="text-2xl font-bold text-ink">{t.featuresTitle}</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.features.map((f) => (
              <div key={f.title} className="rounded-lg border border-navy/10 bg-white p-5">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-navy/5 text-navy">
                  <Icon name={f.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-3 text-base font-semibold text-ink">{f.title}</h3>
                <p className="mt-1 text-sm text-navy/65">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In the box + use cases */}
      <section className="container-c grid gap-10 py-14 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold text-ink">{t.boxTitle}</h2>
          <ul className="mt-4 space-y-2">
            {t.box.map((item) => (
              <li key={item} className="flex items-start gap-3 text-navy/75">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass-dark" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold text-ink">{t.useTitle}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {t.use.map((u) => (
              <span key={u} className="rounded-full border border-navy/15 bg-white px-3 py-1.5 text-sm text-navy/75">
                {u}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="scroll-mt-20 border-t border-navy/10 bg-white">
        <div className="container-c py-14">
          <h2 className="text-2xl font-bold text-ink">{t.productsTitle}</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} locale={locale} dict={dict} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
