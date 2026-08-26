import Link from "next/link";

const nav = [
  { href: "/shop", label: "Shop" },
  { href: "/category/fishing", label: "Fishing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-navy text-white shadow-lg shadow-navy/20">
      <div className="container-c flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-serif text-xl font-bold tracking-wide">LA CAPITANA</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-brass">Marina de València</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-white/85 transition hover:text-brass"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-lg text-white/85">
          <span aria-hidden className="hidden sm:inline">🔍</span>
          <span aria-hidden>🛒</span>
        </div>
      </div>
    </header>
  );
}
