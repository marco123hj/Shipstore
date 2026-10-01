import Link from "next/link";
import Icon from "@/components/Icon";
import { getCategories, getFeaturedProducts, getBrands, getProducts } from "@/lib/data";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import RecentlyViewed from "@/components/RecentlyViewed";
import JsonLd from "@/components/JsonLd";
import { organizationSchema } from "@/lib/seo";
import { getDict } from "@/lib/i18n";

const uspIcons = ["compass", "layers", "truck", "anchor"];

const heroTag: Record<string, string> = {
  nl: "Voor de watersport- en de scheepvaart",
  en: "For watersports and shipping",
};

const promo: Record<
  string,
  { heading: string; summerTitle: string; summerText: string; winterTitle: string; winterText: string; cta: string }
> = {
  nl: {
    heading: "Klaar voor elk seizoen",
    summerTitle: "Alles voor uw boot voor de zomer",
    summerText: "Onderhoud, reiniging en dek­uitrusting om varend het seizoen in te gaan.",
    winterTitle: "Boot winterklaar maken",
    winterText: "Antifouling, hoezen en conservering om veilig te overwinteren.",
    cta: "Bekijk producten",
  },
  en: {
    heading: "Ready for every season",
    summerTitle: "Everything for your boat this summer",
    summerText: "Maintenance, cleaning and deck gear to start the season right.",
    winterTitle: "Winterise your boat",
    winterText: "Antifouling, covers and conservation to lay up safely.",
    cta: "Shop products",
  },
};

const blog: Record<string, { heading: string; posts: { title: string; tag: string }[] }> = {
  nl: {
    heading: "Blogs & Nieuws",
    posts: [
      { title: "Online vernieuwde shop: shipstore.nl", tag: "Nieuws" },
      { title: "Handsfree aan boord met Nautic Talk", tag: "Product" },
      { title: "Checklist: je boot winterklaar", tag: "Gids" },
    ],
  },
  en: {
    heading: "Blog & News",
    posts: [
      { title: "Our renewed shop: shipstore.nl", tag: "News" },
      { title: "Hands-free on board with Nautic Talk", tag: "Product" },
      { title: "Checklist: winterise your boat", tag: "Guide" },
    ],
  },
};

export default function HomePage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const dict = getDict(locale);
  const t = dict.home;
  const categories = getCategories(locale);
  const featured = getFeaturedProducts(locale);
  const brands = getBrands(locale);

  return (
    <>
      <JsonLd data={organizationSchema()} />
      <section className="bg-white">
        <div className="container-c grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-orange/10 px-3 py-1 text-xs font-semibold text-orange-dark">
              <Icon name="anchor" className="h-3.5 w-3.5" /> {heroTag[locale] ?? heroTag.nl}
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl">
              {t.heroTitle}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-navy/70">{t.heroSub}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={`/${locale}/shop`} className="btn-primary">{t.heroCta}</Link>
              <Link href={`/${locale}/nautic-talk`} className="btn-outline">{dict.nauticTalk.title}</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Link href={`/${locale}/shop`} className="relative overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/shipstore/hero-watersport.webp" alt="Watersport" className="h-full w-full object-cover" />
              <span className="absolute bottom-3 left-3 rounded-md bg-navy/75 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                Watersport
              </span>
            </Link>
            <Link href={`/${locale}/shop`} className="relative overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/shipstore/hero-scheepvaart.webp" alt="Scheepvaart" className="h-full w-full object-cover" />
              <span className="absolute bottom-3 left-3 rounded-md bg-navy/75 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                Scheepvaart
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-navy/10 bg-white">
        <div className="container-c grid grid-cols-2 gap-4 py-6 lg:grid-cols-4">
          {t.usps.map((label, i) => (
            <div key={label} className="flex items-center gap-3">
              <Icon name={uspIcons[i] ?? "anchor"} className="h-5 w-5 text-brass-dark" />
              <span className="text-sm font-medium text-navy">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container-c py-14">
        <h2 className="text-2xl font-bold text-ink">{t.categories}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <CategoryCard key={c.slug} category={c} index={i + 1} locale={locale} />
          ))}
        </div>
      </section>

      <section className="border-y border-navy/10 bg-sand-dark py-14">
        <div className="container-c">
          <h2 className="text-2xl font-bold text-ink">{t.featured}</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} locale={locale} dict={dict} />
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal promo band */}
      <section className="container-c py-14">
        <h2 className="text-2xl font-bold text-ink">{(promo[locale] ?? promo.nl).heading}</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {[
            {
              title: (promo[locale] ?? promo.nl).summerTitle,
              text: (promo[locale] ?? promo.nl).summerText,
              img: "/shipstore/promo-zomer.webp",
              href: `/${locale}/category/onderhoud`,
            },
            {
              title: (promo[locale] ?? promo.nl).winterTitle,
              text: (promo[locale] ?? promo.nl).winterText,
              img: "/shipstore/promo-winter.webp",
              href: `/${locale}/category/onderhoud`,
            },
          ].map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="group relative flex min-h-[200px] flex-col justify-end overflow-hidden rounded-2xl p-6 text-white"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.img} alt="" className="absolute inset-0 h-full w-full object-cover transition group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/40 to-transparent" />
              <div className="relative">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="mt-1 max-w-sm text-sm text-white/80">{p.text}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-orange-light">
                  {(promo[locale] ?? promo.nl).cta} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="container-c grid items-center gap-8 py-14 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-brass">{dict.nauticTalk.kicker}</div>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{dict.nauticTalk.title}</h2>
            <p className="mt-3 max-w-xl text-white/75">{dict.nauticTalk.heroSub}</p>
            <Link href={`/${locale}/nautic-talk`} className="btn-brass mt-6 inline-flex">
              {dict.nauticTalk.heroCta}
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="grid h-40 w-40 place-items-center rounded-2xl border border-white/15 bg-white/5">
              <Icon name="headset" className="h-20 w-20 text-brass" />
            </div>
          </div>
        </div>
      </section>

      <section id="brands" className="container-c scroll-mt-20 py-14">
        <h2 className="text-2xl font-bold text-ink">{t.brands}</h2>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {brands.map((b) => (
            <Link
              key={b.name}
              href={`/${locale}/brand/${b.slug}`}
              className="group flex flex-col items-center rounded-lg border border-navy/10 bg-white px-4 py-5 text-center transition hover:border-navy/40"
            >
              <div className="flex h-10 w-full items-center justify-center">
                {b.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={b.logo} alt={b.name} className="max-h-9 max-w-full object-contain" />
                ) : (
                  <span className="text-lg font-semibold text-navy">{b.name}</span>
                )}
              </div>
              <div className="mt-2 text-xs text-navy/50 transition group-hover:text-brass-dark">{b.note}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-navy/10 bg-white">
        <div className="container-c py-14">
          <h2 className="text-2xl font-bold text-ink">{t.visit}</h2>
          <p className="mt-3 max-w-lg text-navy/70">{t.visitText}</p>
          <Link
            href={`/${locale}/contact`}
            className="mt-5 inline-block text-sm font-semibold text-brass-dark hover:underline"
          >
            {t.visitCta}
          </Link>
        </div>
      </section>

      {/* Blogs & Nieuws */}
      <section className="border-t border-navy/10 bg-sand-dark py-14">
        <div className="container-c">
          <h2 className="text-2xl font-bold text-ink">{(blog[locale] ?? blog.nl).heading}</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {(blog[locale] ?? blog.nl).posts.map((post, i) => (
              <div
                key={post.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-navy/10 bg-white"
              >
                <div className="flex aspect-[16/9] items-center justify-center bg-navy/5">
                  <Icon name={["anchor", "headset", "droplet"][i] ?? "anchor"} className="h-10 w-10 text-navy/20" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-orange-dark">{post.tag}</span>
                  <h3 className="mt-1 text-base font-semibold text-ink">{post.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RecentlyViewed products={getProducts(locale)} locale={locale} dict={dict} />
    </>
  );
}
