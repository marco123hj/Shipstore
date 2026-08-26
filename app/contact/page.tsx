import Icon from "@/components/Icon";

export const metadata = { title: "Contact & Location — La Capitana" };

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink text-paper">
        <div className="container-c py-16">
          <span className="kicker text-rust-light">Come aboard</span>
          <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">Contact &amp; location</h1>
        </div>
      </section>

      <div className="container-c grid gap-10 py-16 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-semibold text-ink">Find us</h2>
          <address className="mt-4 space-y-1 not-italic text-ink/75">
            <div className="font-semibold text-ink">La Capitana</div>
            <div>Valencia Mar marina (El Saler side)</div>
            <div>Upstairs, next to Plan B</div>
            <div>46012 València, España</div>
          </address>

          <dl className="mt-8 space-y-3 text-sm">
            <div className="flex gap-3">
              <dt className="w-24 font-semibold text-ink">Phone</dt>
              <dd className="text-ink/70">+34 — — —</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-24 font-semibold text-ink">Email</dt>
              <dd className="text-ink/70">info@lacapitana.es</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-24 font-semibold text-ink">Hours</dt>
              <dd className="text-ink/70">Opening soon, check back for the launch.</dd>
            </div>
          </dl>

          <div className="mt-8 flex min-h-[180px] items-center justify-center bg-ink text-paper">
            <div className="text-center">
              <Icon name="pin" className="mx-auto h-10 w-10 text-rust-light" />
              <div className="mt-2 font-display">Valencia Mar marina</div>
              <div className="text-sm text-paper/60">by the Turia river mouth</div>
            </div>
          </div>
        </div>

        <form className="border border-ink/15 bg-paper-warm p-6">
          <h2 className="font-display text-2xl font-semibold text-ink">Send a message</h2>
          <div className="mt-5 space-y-4">
            <input placeholder="Your name" className="w-full border border-ink/15 bg-paper px-4 py-3 text-sm outline-none focus:border-rust" />
            <input placeholder="Email" className="w-full border border-ink/15 bg-paper px-4 py-3 text-sm outline-none focus:border-rust" />
            <textarea placeholder="How can we help?" rows={4} className="w-full border border-ink/15 bg-paper px-4 py-3 text-sm outline-none focus:border-rust" />
            <button type="button" className="btn-rust w-full">Send</button>
          </div>
          <p className="mt-3 text-xs text-ink/50">This form is a placeholder for now, no message is sent yet.</p>
        </form>
      </div>
    </>
  );
}
