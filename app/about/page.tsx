import Link from "next/link";

export const metadata = { title: "About — La Capitana" };

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="container-c py-16">
          <span className="eyebrow text-brass-light">Our story</span>
          <h1 className="mt-3 max-w-2xl font-serif text-4xl font-bold sm:text-5xl">
            A chandlery built by people who are actually on the water.
          </h1>
        </div>
      </section>

      <div className="container-c grid gap-12 py-16 lg:grid-cols-3">
        <div className="space-y-5 leading-relaxed text-navy/80 lg:col-span-2">
          <p>
            La Capitana grew out of a marine business with decades behind it — sourcing, importing
            and supplying everything a boat needs, from antifouling to navigation lights. Now that
            experience sits right on the water at the Valencia Mar marina.
          </p>
          <p>
            We carry a curated range for the Spanish Mediterranean: the leisure boat and yacht side
            of the trade, with the trusted names — Hempel, Epifanes, Sika, Talamex, Besto and more —
            and none of the heavy inland-shipping gear you will never use down here.
          </p>
          <p>
            And because we sit a minute from the Turia river mouth, the most popular fishing spot in
            Valencia, we run a proper fishing section too: shore, boat and Mediterranean tackle,
            chosen by anglers who actually fish these waters.
          </p>
        </div>
        <aside className="space-y-6">
          <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
            <div className="text-3xl">⚓</div>
            <h3 className="mt-2 font-serif text-lg font-bold text-navy">Marine &amp; yacht</h3>
            <p className="mt-1 text-sm text-navy/65">
              Maintenance, hardware, safety, electronics and engine-room essentials.
            </p>
          </div>
          <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
            <div className="text-3xl">🎣</div>
            <h3 className="mt-2 font-serif text-lg font-bold text-navy">Fishing</h3>
            <p className="mt-1 text-sm text-navy/65">
              Right at the Turia mouth — lubina, boat and big-game tackle.
            </p>
          </div>
          <Link href="/contact" className="btn-brass w-full">Visit the shop</Link>
        </aside>
      </div>
    </>
  );
}
