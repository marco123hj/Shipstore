import Link from "next/link";
import Icon from "@/components/Icon";

export const metadata = { title: "About — La Capitana" };

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink text-paper">
        <div className="container-c py-16">
          <span className="kicker text-rust-light">Our story</span>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold sm:text-5xl">
            A chandlery built by people who are actually on the water.
          </h1>
        </div>
      </section>

      <div className="container-c grid gap-12 py-16 lg:grid-cols-3">
        <div className="space-y-5 leading-relaxed text-ink/80 lg:col-span-2">
          <p>
            La Capitana grew out of a marine business with decades behind it, sourcing, importing
            and supplying everything a boat needs, from antifouling to navigation lights. Now that
            experience sits right on the water at the Valencia Mar marina.
          </p>
          <p>
            We carry a curated range for the Spanish Mediterranean: the leisure boat and yacht side
            of the trade, with the trusted names, Hempel, Epifanes, Sika, Talamex, Besto and more,
            and none of the heavy inland-shipping gear you will never use down here.
          </p>
          <p>
            And because we sit a minute from the Turia river mouth, the most popular fishing spot in
            Valencia, we run a proper fishing section too: shore, boat and Mediterranean tackle,
            chosen by anglers who actually fish these waters.
          </p>
        </div>
        <aside className="space-y-4">
          <div className="border border-ink/15 bg-paper-warm p-6">
            <span className="grid h-11 w-11 place-items-center bg-ink text-paper">
              <Icon name="anchor" className="h-5 w-5" />
            </span>
            <h3 className="mt-3 font-display text-lg font-semibold text-ink">Marine &amp; yacht</h3>
            <p className="mt-1 text-sm text-ink/65">
              Maintenance, hardware, safety, electronics and engine-room essentials.
            </p>
          </div>
          <div className="border border-ink/15 bg-paper-warm p-6">
            <span className="grid h-11 w-11 place-items-center bg-rust text-paper">
              <Icon name="fish" className="h-5 w-5" />
            </span>
            <h3 className="mt-3 font-display text-lg font-semibold text-ink">Fishing</h3>
            <p className="mt-1 text-sm text-ink/65">
              Right at the Turia mouth, lubina, boat and big-game tackle.
            </p>
          </div>
          <Link href="/contact" className="btn-ink w-full">Visit the shop</Link>
        </aside>
      </div>
    </>
  );
}
