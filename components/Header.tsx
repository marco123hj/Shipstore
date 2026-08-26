import Link from "next/link";
import Icon from "@/components/Icon";

const nav = [
  { href: "/shop", label: "Shop" },
  { href: "/category/fishing", label: "Fishing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-sand/95 backdrop-blur">
      <div className="container-c flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 text-navy">
          <Icon name="anchor" className="h-6 w-6 text-brass-dark" />
          <span className="text-xl font-bold">La Capitana</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-navy/80 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="transition hover:text-brass-dark">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-navy">
          <Icon name="search" className="hidden h-5 w-5 sm:block" />
          <Icon name="cart" className="h-5 w-5" />
        </div>
      </div>
    </header>
  );
}
