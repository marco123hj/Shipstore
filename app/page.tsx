import Link from "next/link";
import { getCategories, getFeaturedProducts, getBrands } from "@/lib/data";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";

const usps = [
  { icon: "🧭", title: "Expert advice", text: "Real boaters and anglers behind the counter." },
  { icon: "📦", title: "Wide range", text: "Thousands of marine lines, curated for the Med." },
  { icon: "⚓", title: "On the marina", text: "At Valencia Mar, by the Turia river mouth." },
  { icon: "🚚", title: "Across Spain", text: "Collect at the shop or have it delivered." },
];

export default function HomePage() {
  const categories = getCategories();
  const featured = getFeaturedProducts();
  const brands = getBrands();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 tile-gradient opacity-90" />
        <div className="container-c relative py-20 sm:py-28">
          <span className="eyebrow text-brass-light">Marine &amp; yacht chandlery · Valencia</span>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Everything for your boat, right on the marina.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/80">
            La Capitana is your chandlery at the Valencia Mar marina — maintenance, hardware,
            safety, electronics and a proper fishing section, all in one place by the water.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/shop" className="btn-brass">Explore the shop</Link>
            <Link href="/category/fishing" className="btn-ghost">The fishing section</Link>
          </div>
        </div>
      </section>

      {/* USP bar */}
      <section className="border-b border-navy/10 bg-white">
        <div className="container-c grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {usps.map((u) => (
            <div key={u.title} className="flex items-start gap-3">
              <span className="text-2xl">{u.icon}</span>
              <div>
                <div className="text-sm font-semibold text-navy">{u.title}</div>
                <div className="text-xs text-navy/60">{u.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container-c py-16">
        <div className="flex items-end justify-between">
          <div>
            <span className="eyebrow">Browse the range</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-navy">Shop by category</h2>
          </div>
          <Link href="/shop" className="hidden text-sm font-semibold text-sea hover:underline sm:block">
            View all →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <CategoryCard key={c.slug} category={c} />
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-white py-16">
        <div className="container-c">
          <span className="eyebrow">Picked for you</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-navy">Featured products</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Fishing band */}
      <section className="bg-navy text-white">
        <div className="container-c grid items-center gap-8 py-16 lg:grid-cols-2">
          <div>
            <span className="eyebrow text-brass-light">🎣 At the Turia mouth</span>
            <h2 className="mt-3 font-serif text-3xl font-bold">
              A fishing section, at the best spot in Valencia.
            </h2>
            <p className="mt-4 max-w-lg text-white/75">
              We sit right by the Turia outflow, the most popular fishing spot in the city. From
              lubina lures to boat and big-game gear, we stock what actually catches here.
            </p>
            <Link href="/category/fishing" className="btn-brass mt-6">Shop fishing</Link>
          </div>
          <div className="rounded-3xl tile-gradient p-10 text-center">
            <div className="text-7xl">🎣</div>
            <div className="mt-3 font-serif text-xl">Rods · Reels · Lures</div>
            <div className="text-sm text-white/70">Shore, boat &amp; Mediterranean</div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="container-c py-16">
        <span className="eyebrow">Trusted brands</span>
        <h2 className="mt-2 font-serif text-3xl font-bold text-navy">The names you know</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {brands.map((b) => (
            <div key={b.name} className="rounded-2xl border border-navy/10 bg-white p-5 text-center shadow-sm">
              <div className="font-serif text-lg font-bold text-navy">{b.name}</div>
              <div className="mt-1 text-xs text-navy/55">{b.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Visit band */}
      <section className="bg-white">
        <div className="container-c grid items-center gap-8 py-16 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Come aboard</span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-navy">Find us on the water</h2>
            <p className="mt-4 max-w-lg text-navy/70">
              You will find La Capitana upstairs at the Valencia Mar marina, next to Plan B on the
              El Saler side, a minute from the boat ramp and the Turia mouth.
            </p>
            <Link href="/contact" className="mt-6 inline-block text-sm font-semibold text-sea hover:underline">
              Directions &amp; opening hours →
            </Link>
          </div>
          <div className="flex min-h-[220px] items-center justify-center rounded-3xl tile-gradient text-white">
            <div className="text-center">
              <div className="text-5xl">📍</div>
              <div className="mt-2 font-serif text-lg">Valencia Mar marina</div>
              <div className="text-sm text-white/70">València, España</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
