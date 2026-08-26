import Link from "next/link";
import Icon from "@/components/Icon";
import { getCategories } from "@/lib/data";

export default function Footer() {
  const cats = getCategories().slice(0, 6);
  return (
    <footer className="mt-24 bg-ink-deep text-paper/75">
      <div className="rope-rule text-rust" />
      <div className="container-c grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <Icon name="anchor" className="h-5 w-5 text-rust" />
            <span className="font-display text-2xl font-semibold text-paper">La Capitana</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/55">
            Marine and yacht chandlery on the water at the Valencia Mar marina, by the Turia river
            mouth. Expert advice, and everything for your boat.
          </p>
          <div className="mt-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-rust">
            <Icon name="compass" className="h-4 w-4" /> 39.44°N · 0.32°W
          </div>
        </div>

        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-[0.22em] text-paper/45">Shop</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {cats.map((c) => (
              <li key={c.slug}>
                <Link href={`/category/${c.slug}`} className="transition hover:text-rust">
                  {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/shop" className="font-semibold text-rust transition hover:text-rust-light">
                All categories →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-[0.22em] text-paper/45">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about" className="transition hover:text-rust">About La Capitana</Link></li>
            <li><Link href="/contact" className="transition hover:text-rust">Contact &amp; location</Link></li>
            <li><Link href="/category/fishing" className="transition hover:text-rust">Fishing section</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-[0.22em] text-paper/45">Visit us</h4>
          <address className="mt-4 space-y-1 text-sm not-italic text-paper/65">
            <div className="text-paper">La Capitana</div>
            <div>Valencia Mar marina</div>
            <div>next to Plan B, El Saler side</div>
            <div>46012 València, España</div>
          </address>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="container-c flex flex-col items-center justify-between gap-2 py-5 text-xs text-paper/40 sm:flex-row">
          <span>© {new Date().getFullYear()} La Capitana · Shipstore</span>
          <span>Marine &amp; yacht supplies · Mediterranean</span>
        </div>
      </div>
    </footer>
  );
}
