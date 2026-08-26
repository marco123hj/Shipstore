import Link from "next/link";
import Icon from "@/components/Icon";

export const metadata = { title: "About — La Capitana" };

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="container-c py-14">
          <h1 className="text-3xl font-bold sm:text-4xl">About La Capitana</h1>
        </div>
      </section>

      <div className="container-c grid gap-10 py-14 lg:grid-cols-3">
        <div className="space-y-4 leading-relaxed text-navy/80 lg:col-span-2">
          <p>
            La Capitana is a marine and yacht chandlery at the Valencia Mar marina, built on a family
            business with decades of experience sourcing and supplying boat equipment.
          </p>
          <p>
            We stock a curated range for the Spanish Mediterranean, the leisure boat and yacht side
            of the trade, with brands like Hempel, Epifanes, Sika, Talamex and Besto. We leave out
            the heavy inland-shipping gear that is not used down here.
          </p>
          <p>
            We are a minute from the Turia river mouth, the busiest fishing spot in Valencia, so we
            also run a fishing section for shore, boat and Mediterranean fishing.
          </p>
        </div>
        <aside className="space-y-4">
          <div className="rounded-lg border border-navy/10 bg-white p-5">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-navy/5 text-navy">
              <Icon name="anchor" className="h-5 w-5" />
            </span>
            <h3 className="mt-3 text-base font-semibold text-ink">Marine &amp; yacht</h3>
            <p className="mt-1 text-sm text-navy/65">
              Maintenance, hardware, safety, electronics and engine parts.
            </p>
          </div>
          <div className="rounded-lg border border-navy/10 bg-white p-5">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-navy/5 text-navy">
              <Icon name="fish" className="h-5 w-5" />
            </span>
            <h3 className="mt-3 text-base font-semibold text-ink">Fishing</h3>
            <p className="mt-1 text-sm text-navy/65">Rods, reels and lures for the Mediterranean.</p>
          </div>
          <Link href="/contact" className="btn-primary w-full">Visit the shop</Link>
        </aside>
      </div>
    </>
  );
}
