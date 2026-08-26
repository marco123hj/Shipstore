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
    <header className="sticky top-0 z-50">
      <div className="bg-rust text-paper">
        <div className="container-c flex items-center justify-between py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em]">
          <span>Chandlery on the water · Valencia Mar marina</span>
          <span className="hidden sm:inline">Berth-side collection</span>
        </div>
      </div>

      <div className="border-b border-ink/15 bg-paper">
        <div className="container-c flex h-[68px] items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center bg-ink text-paper">
              <Icon name="anchor" className="h-5 w-5" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-2xl font-semibold text-ink">La Capitana</span>
              <span className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.34em] text-ink/50">
                Marine &amp; Yacht · València
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 text-[12px] font-semibold uppercase tracking-[0.16em] text-ink/75 md:flex">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="transition hover:text-rust">
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 text-ink">
            <Icon name="search" className="hidden h-5 w-5 sm:block" />
            <Icon name="cart" className="h-5 w-5" />
          </div>
        </div>
      </div>
    </header>
  );
}
