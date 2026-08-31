import Link from "next/link";
import Icon from "@/components/Icon";
import LangSwitcher from "@/components/LangSwitcher";
import CartButton from "@/components/CartButton";
import SearchBar from "@/components/SearchBar";
import AuthNav from "@/components/AuthNav";
import type { Dict } from "@/lib/i18n";

export default function Header({ locale, dict }: { locale: string; dict: Dict }) {
  const nav = [
    { href: `/${locale}/shop`, label: dict.nav.shop },
    { href: `/${locale}/nautic-talk`, label: dict.nav.nauticTalk },
    { href: `/${locale}/category/fishing`, label: dict.nav.fishing },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-sand/95 backdrop-blur">
      <div className="container-c flex h-16 items-center justify-between gap-4">
        <Link href={`/${locale}`} className="flex items-center gap-2 text-navy">
          <Icon name="anchor" className="h-6 w-6 text-brass-dark" />
          <span className="text-xl font-bold text-ink">La Capitana</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-navy/80 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="transition hover:text-brass-dark">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 text-navy">
          <SearchBar locale={locale} placeholder={dict.search.placeholder} />
          <LangSwitcher locale={locale} label={dict.switchLabel} title={dict.switchTo} />
          <AuthNav locale={locale} label={dict.auth.account} />
          <CartButton label={dict.a11y.cart} />
        </div>
      </div>
    </header>
  );
}
