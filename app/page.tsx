import Link from "next/link";
import Icon from "@/components/Icon";
import { getCategories, getFeaturedProducts, getBrands } from "@/lib/data";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";

const usps = [
  { icon: "compass", title: "Expert advice", text: "Boaters and anglers behind the counter." },
  { icon: "layers", title: "Wide range", text: "Thousands of marine lines, curated for the Med." },
  { icon: "anchor", title: "On the marina", text: "At Valencia Mar, by the Turia mouth." },
  { icon: "truck", title: "Across Spain", text: "Collect berth-side or have it delivered." },
];

export default function HomePage() {
  const categories = getCategories();
  const featured = getFeaturedProducts();
  const brands = getBrands();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-deep text-paper">
        <div className="absolute inset-0 chart-lines opacity-40" />
        <div className="container-c relative grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <span className="kicker text-rust-light">Marine &amp; yacht chandlery</span>
            <h1 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
              Everything your boat needs, tied up on the marina.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-paper/75">
              La Capitana is the chandlery on the water at Valencia Mar, maintenance, hardware,
              safety, electronics, and a proper fishing section by the Turia mouth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="btn-rust">Browse the shop</Link>
              <Link
                href="/category/fishing"
                className="inline-flex items-center gap-2 border border-paper/40 px-7 py-3 text-xs font-bold uppercase tracking-[0.14em] text-paper transition hover:bg-paper hover:text-ink"
              >
                The fishing section
              </Link>
            </div>
          </div>

          <aside className="hidden border border-paper/20 p-6 lg:block">
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.2em] text-paper/50">
              <span>Position</span>
              <Icon name="compass" className="h-4 w-4 text-rust-light" />
            </div>
            <div className="mt-3 font-display text-3xl font-semibold">Valencia Mar</div>
            <div className="mt-1 text-sm text-paper/60">El Saler · Turia river mouth</div>
            <div className="rope-rule mt-5 text-paper/25" />
            <dl className="mt-5 space-y-2 text-sm text-paper/70">
              <div className="flex justify-between"><dt>Latitude</dt><dd>39.44° N</dd></div>
              <div className="flex justify-between"><dt>Longitude</dt><dd>0.32° W</dd></div>
              <div className="flex justify-between"><dt>Moorings</dt><dd>450</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      {/* USP strip */}
      <section className="border-b border-ink/15 bg-paper">
        <div className="container-c grid divide-ink/10 sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
          {usps.map((u) => (
            <div key={u.title} className="flex items-start gap-3 py-6 sm:px-6 sm:first:pl-0">
              <Icon name={u.icon} className="mt-0.5 h-6 w-6 shrink-0 text-rust" />
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.1em] text-ink">{u.title}</div>
                <div className="mt-0.5 text-xs text-ink/60">{u.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container-c py-16">
        <div className="flex items-end justify-between">
          <div>
            <span className="kicker text-rust">The range</span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">Shop by category</h2>
          </div>
          <Link href="/shop" className="hidden text-xs font-bold uppercase tracking-[0.16em] text-ink/70 hover:text-rust sm:block">
            All →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <CategoryCard key={c.slug} category={c} index={i + 1} />
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="border-y border-ink/15 bg-paper-warm py-16">
        <div className="container-c">
          <span className="kicker text-rust">From the shelves</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">Chosen this week</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Fishing band */}
      <section className="bg-ink text-paper">
        <div className="container-c grid items-center gap-10 py-16 lg:grid-cols-2">
          <div>
            <span className="kicker text-rust-light">The fishing section</span>
            <h2 className="mt-3 max-w-md font-display text-3xl font-semibold sm:text-4xl">
              At the best fishing spot in Valencia.
            </h2>
            <p className="mt-5 max-w-lg text-paper/75">
              We sit right by the Turia outflow, where the city comes to fish. From lubina lures to
              boat and big-game tackle, we stock what actually catches these waters.
            </p>
            <Link href="/category/fishing" className="btn-rust mt-7">Shop fishing</Link>
          </div>
          <div className="flex items-center justify-center border border-paper/20 py-12">
            <div className="text-center">
              <Icon name="fish" className="mx-auto h-16 w-16 text-rust-light" />
              <div className="mt-4 font-display text-xl">Rods · Reels · Lures</div>
              <div className="text-sm text-paper/60">Shore, boat &amp; Mediterranean</div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="container-c py-16">
        <span className="kicker text-rust">Stocked brands</span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">The names you trust</h2>
        <div className="mt-8 grid grid-cols-2 border-l border-t border-ink/15 sm:grid-cols-4">
          {brands.map((b) => (
            <div key={b.name} className="border-b border-r border-ink/15 p-6">
              <div className="font-display text-xl font-semibold text-ink">{b.name}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.12em] text-ink/50">{b.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Visit band */}
      <section className="border-t border-ink/15 bg-paper-warm">
        <div className="container-c grid items-center gap-10 py-16 lg:grid-cols-2">
          <div>
            <span className="kicker text-rust">Come aboard</span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">Find us on the water</h2>
            <p className="mt-5 max-w-lg text-ink/70">
              Upstairs at the Valencia Mar marina, next to Plan B on the El Saler side, a minute from
              the boat ramp and the Turia mouth.
            </p>
            <Link href="/contact" className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-ink hover:text-rust">
              Directions &amp; hours →
            </Link>
          </div>
          <div className="flex min-h-[220px] items-center justify-center bg-ink text-paper">
            <div className="text-center">
              <Icon name="pin" className="mx-auto h-12 w-12 text-rust-light" />
              <div className="mt-3 font-display text-lg">Valencia Mar marina</div>
              <div className="text-sm text-paper/60">València, España</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
