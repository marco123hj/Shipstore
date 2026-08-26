import Link from "next/link";
import { getCategories } from "@/lib/data";
import type { Dict } from "@/lib/i18n";

export default function Footer({ locale, dict }: { locale: string; dict: Dict }) {
  const cats = getCategories(locale).slice(0, 6);
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 bg-navy text-white/70">
      <div className="container-c grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="text-xl font-bold text-white">La Capitana</div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/55">{dict.footer.blurb}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">{dict.footer.shop}</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {cats.map((c) => (
              <li key={c.slug}>
                <Link href={`/${locale}/category/${c.slug}`} className="transition hover:text-brass">
                  {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href={`/${locale}/shop`} className="text-brass transition hover:text-brass-dark">
                {dict.common.allCategories}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">{dict.footer.info}</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href={`/${locale}/about`} className="transition hover:text-brass">{dict.footer.about}</Link></li>
            <li><Link href={`/${locale}/contact`} className="transition hover:text-brass">{dict.footer.contact}</Link></li>
            <li><Link href={`/${locale}/faq`} className="transition hover:text-brass">{dict.footer.faq}</Link></li>
            <li><Link href={`/${locale}/shipping`} className="transition hover:text-brass">{dict.footer.shipping}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">{dict.footer.legal}</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href={`/${locale}/terms`} className="transition hover:text-brass">{dict.footer.terms}</Link></li>
            <li><Link href={`/${locale}/privacy`} className="transition hover:text-brass">{dict.footer.privacy}</Link></li>
            <li><Link href={`/${locale}/cookies`} className="transition hover:text-brass">{dict.footer.cookies}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">{dict.footer.address}</h4>
          <address className="mt-3 space-y-1 text-sm not-italic text-white/60">
            <div>Valencia Mar marina</div>
            <div>46012 València</div>
            <div>España</div>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-c py-4 text-xs text-white/40">© {year} La Capitana</div>
      </div>
    </footer>
  );
}
