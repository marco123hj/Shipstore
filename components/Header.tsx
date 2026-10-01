import Link from "next/link";
import Icon from "@/components/Icon";
import { getSearchItems, getCategories } from "@/lib/data";
import LangSwitcher from "@/components/LangSwitcher";
import CartButton from "@/components/CartButton";
import SearchBar from "@/components/SearchBar";
import AuthNav from "@/components/AuthNav";
import WishlistNav from "@/components/WishlistNav";
import MobileMenu from "@/components/MobileMenu";
import BtwToggle from "@/components/BtwToggle";
import type { Dict } from "@/lib/i18n";

const topbar: Record<string, { shop: string; business: string }> = {
  nl: { shop: "Winkel", business: "Zakelijke klant" },
  en: { shop: "Store", business: "Business customer" },
};

export default function Header({ locale, dict }: { locale: string; dict: Dict }) {
  const categories = getCategories(locale);
  const tb = topbar[locale] ?? topbar.nl;

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="bg-navy text-white/80">
        <div className="container-c flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-4">
            <Link href={`/${locale}/about`} className="flex items-center gap-1.5 transition hover:text-white">
              <Icon name="anchor" className="h-3.5 w-3.5" /> {tb.shop}
            </Link>
            <Link href={`/${locale}/contact`} className="hidden items-center gap-1.5 transition hover:text-white sm:flex">
              <Icon name="compass" className="h-3.5 w-3.5" /> {tb.business}
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+31514856718" className="hidden transition hover:text-white sm:inline">
              +31 514-856718
            </a>
            <BtwToggle locale={locale} />
            <LangSwitcher locale={locale} label={dict.switchLabel} title={dict.switchTo} />
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-navy/10 bg-white">
        <div className="container-c flex h-16 items-center gap-4">
          <div className="flex items-center gap-2">
            <MobileMenu locale={locale} dict={dict} items={getSearchItems(locale)} />
            <Link href={`/${locale}`} className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/shipstore/logo.svg" alt="Shipstore" className="h-10 w-auto" />
            </Link>
          </div>

          <div className="hidden flex-1 justify-center px-4 md:flex">
            <div className="w-full max-w-xl">
              <SearchBar locale={locale} items={getSearchItems(locale)} search={dict.search} />
            </div>
          </div>

          <div className="flex flex-1 items-center justify-end gap-3 text-navy md:flex-none">
            <div className="md:hidden">
              <SearchBar locale={locale} items={getSearchItems(locale)} search={dict.search} />
            </div>
            <WishlistNav locale={locale} label={dict.wishlist.title} />
            <AuthNav locale={locale} label={dict.auth.account} />
            <CartButton label={dict.a11y.cart} />
          </div>
        </div>
      </div>

      {/* Category nav (orange) */}
      <nav className="bg-orange text-white shadow-sm">
        <div className="container-c flex h-11 items-center gap-6 overflow-x-auto text-sm font-semibold">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/${locale}/category/${c.slug}`}
              className="whitespace-nowrap py-3 transition hover:text-white/80"
            >
              {c.name}
            </Link>
          ))}
          <Link
            href={`/${locale}/contact`}
            className="whitespace-nowrap py-3 transition hover:text-white/80"
          >
            {dict.nav.contact}
          </Link>
        </div>
      </nav>
    </header>
  );
}
