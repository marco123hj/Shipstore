import Link from "next/link";
import { getCategories } from "@/lib/data";

export default function Footer() {
  const cats = getCategories().slice(0, 6);
  return (
    <footer className="mt-20 bg-navy text-white/70">
      <div className="container-c grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="text-xl font-bold text-white">La Capitana</div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/55">
            Marine and yacht supplies at the Valencia Mar marina, Valencia.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Shop</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {cats.map((c) => (
              <li key={c.slug}>
                <Link href={`/category/${c.slug}`} className="transition hover:text-brass">
                  {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/shop" className="text-brass transition hover:text-brass-dark">
                All categories
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Info</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/about" className="transition hover:text-brass">About</Link></li>
            <li><Link href="/contact" className="transition hover:text-brass">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Address</h4>
          <address className="mt-3 space-y-1 text-sm not-italic text-white/60">
            <div>Valencia Mar marina</div>
            <div>46012 València</div>
            <div>España</div>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-c py-4 text-xs text-white/40">
          © {new Date().getFullYear()} La Capitana
        </div>
      </div>
    </footer>
  );
}
