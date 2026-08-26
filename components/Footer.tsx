import Link from "next/link";
import { getCategories } from "@/lib/data";

export default function Footer() {
  const cats = getCategories().slice(0, 6);
  return (
    <footer className="mt-20 bg-navy-deep text-white/80">
      <div className="container-c grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="font-serif text-xl font-bold text-white">LA CAPITANA</div>
          <div className="mt-1 text-xs uppercase tracking-[0.28em] text-brass">Marina de València</div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Marine and yacht chandlery on the water at the Valencia Mar marina, by the Turia
            river mouth. Expert advice, a wide range, and everything for your boat.
          </p>
        </div>

        <div>
          <h4 className="eyebrow text-brass-light">Shop</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {cats.map((c) => (
              <li key={c.slug}>
                <Link href={`/category/${c.slug}`} className="transition hover:text-brass">
                  {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/shop" className="font-semibold text-brass transition hover:text-brass-light">
                All categories →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow text-brass-light">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about" className="transition hover:text-brass">About La Capitana</Link></li>
            <li><Link href="/contact" className="transition hover:text-brass">Contact & location</Link></li>
            <li><Link href="/category/fishing" className="transition hover:text-brass">Fishing section</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow text-brass-light">Visit us</h4>
          <address className="mt-4 space-y-1 text-sm not-italic text-white/70">
            <div>La Capitana</div>
            <div>Valencia Mar marina</div>
            <div>next to Plan B, El Saler side</div>
            <div>46012 València, España</div>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-c flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/40 sm:flex-row">
          <span>© {new Date().getFullYear()} La Capitana. All rights reserved.</span>
          <span>Marine &amp; yacht supplies · Mediterranean</span>
        </div>
      </div>
    </footer>
  );
}
