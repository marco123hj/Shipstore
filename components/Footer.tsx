import Link from "next/link";
import Icon from "@/components/Icon";
import { getCategories } from "@/lib/data";
import NewsletterForm from "@/components/NewsletterForm";
import type { Dict } from "@/lib/i18n";

const fl: Record<
  string,
  { service: string; account: string; register: string; signin: string; follow: string; ordering: string; payment: string }
> = {
  nl: {
    service: "Klantenservice",
    account: "Account",
    register: "Registreren",
    signin: "Inloggen",
    follow: "Volg ons",
    ordering: "Bestellen",
    payment: "Betaling",
  },
  en: {
    service: "Customer service",
    account: "Account",
    register: "Register",
    signin: "Sign in",
    follow: "Follow us",
    ordering: "Ordering",
    payment: "Payment",
  },
};

export default function Footer({ locale, dict }: { locale: string; dict: Dict }) {
  const cats = getCategories(locale).slice(0, 7);
  const year = new Date().getFullYear();
  const L = fl[locale] ?? fl.nl;

  return (
    <footer className="mt-16 bg-navy text-white/70">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="container-c py-10">
          <NewsletterForm t={dict.newsletter} />
        </div>
      </div>

      <div className="container-c grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        {/* Brand + contact */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2">
            <Icon name="anchor" className="h-6 w-6 text-orange" />
            <span className="text-xl font-bold text-white">Shipstore</span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/55">{dict.footer.blurb}</p>
          <address className="mt-4 space-y-1 text-sm not-italic text-white/60">
            <div>Kadijk 2B, 8531 XD Lemmer</div>
            <div>
              <a href="tel:+31514856718" className="transition hover:text-orange">+31 514-856718</a>
            </div>
            <div>
              <a href="mailto:info@shipstore.nl" className="transition hover:text-orange">info@shipstore.nl</a>
            </div>
          </address>
        </div>

        {/* Winkel / categories */}
        <div>
          <h4 className="text-sm font-semibold text-white">{dict.footer.shop}</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {cats.map((c) => (
              <li key={c.slug}>
                <Link href={`/${locale}/category/${c.slug}`} className="transition hover:text-orange">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Klantenservice */}
        <div>
          <h4 className="text-sm font-semibold text-white">{L.service}</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href={`/${locale}/about`} className="transition hover:text-orange">{dict.footer.about}</Link></li>
            <li><Link href={`/${locale}/faq`} className="transition hover:text-orange">{dict.footer.faq}</Link></li>
            <li><Link href={`/${locale}/shipping`} className="transition hover:text-orange">{dict.footer.shipping}</Link></li>
            <li><Link href={`/${locale}/contact`} className="transition hover:text-orange">{dict.footer.contact}</Link></li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h4 className="text-sm font-semibold text-white">{L.account}</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href={`/${locale}/account`} className="transition hover:text-orange">{L.signin}</Link></li>
            <li><Link href={`/${locale}/account`} className="transition hover:text-orange">{L.register}</Link></li>
            <li><Link href={`/${locale}/wishlist`} className="transition hover:text-orange">{dict.wishlist.title}</Link></li>
          </ul>
        </div>

        {/* Legal + follow */}
        <div>
          <h4 className="text-sm font-semibold text-white">{dict.footer.legal}</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href={`/${locale}/terms`} className="transition hover:text-orange">{dict.footer.terms}</Link></li>
            <li><Link href={`/${locale}/privacy`} className="transition hover:text-orange">{dict.footer.privacy}</Link></li>
            <li><Link href={`/${locale}/cookies`} className="transition hover:text-orange">{dict.footer.cookies}</Link></li>
          </ul>
          <h4 className="mt-6 text-sm font-semibold text-white">{L.follow}</h4>
          <div className="mt-3 flex gap-3">
            <a href="https://facebook.com" aria-label="Facebook" className="text-white/60 transition hover:text-orange">
              <Icon name="anchor" className="h-5 w-5" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="text-white/60 transition hover:text-orange">
              <Icon name="compass" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-c flex flex-col items-center justify-between gap-3 py-4 text-xs text-white/40 sm:flex-row">
          <span>© {year} Shipstore B.V. · KvK 71395318</span>
          <div className="flex gap-3 font-semibold tracking-wide">
            <span>iDEAL</span><span>VISA</span><span>MC</span><span>PAYPAL</span><span>BANCONTACT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
