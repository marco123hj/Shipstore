export const metadata = { title: "Contact & Location — La Capitana" };

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="container-c py-16">
          <span className="eyebrow text-brass-light">Come aboard</span>
          <h1 className="mt-3 font-serif text-4xl font-bold sm:text-5xl">Contact &amp; location</h1>
        </div>
      </section>

      <div className="container-c grid gap-10 py-16 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl font-bold text-navy">Find us</h2>
          <address className="mt-4 space-y-1 not-italic text-navy/75">
            <div className="font-semibold text-navy">La Capitana</div>
            <div>Valencia Mar marina (El Saler side)</div>
            <div>Upstairs, next to Plan B</div>
            <div>46012 València, España</div>
          </address>

          <dl className="mt-8 space-y-3 text-sm">
            <div className="flex gap-3">
              <dt className="w-24 font-semibold text-navy">Phone</dt>
              <dd className="text-navy/70">+34 — — —</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-24 font-semibold text-navy">Email</dt>
              <dd className="text-navy/70">info@lacapitana.es</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-24 font-semibold text-navy">Hours</dt>
              <dd className="text-navy/70">Opening soon — check back for the launch.</dd>
            </div>
          </dl>

          <div className="mt-8 flex min-h-[180px] items-center justify-center rounded-3xl tile-gradient text-white">
            <div className="text-center">
              <div className="text-4xl">📍</div>
              <div className="mt-2 font-serif">Valencia Mar marina</div>
              <div className="text-sm text-white/70">by the Turia river mouth</div>
            </div>
          </div>
        </div>

        <form className="rounded-3xl border border-navy/10 bg-white p-6 shadow-sm">
          <h2 className="font-serif text-2xl font-bold text-navy">Send a message</h2>
          <div className="mt-5 space-y-4">
            <input placeholder="Your name" className="w-full rounded-xl border border-navy/15 px-4 py-3 text-sm outline-none focus:border-sea" />
            <input placeholder="Email" className="w-full rounded-xl border border-navy/15 px-4 py-3 text-sm outline-none focus:border-sea" />
            <textarea placeholder="How can we help?" rows={4} className="w-full rounded-xl border border-navy/15 px-4 py-3 text-sm outline-none focus:border-sea" />
            <button type="button" className="btn-brass w-full">Send</button>
          </div>
          <p className="mt-3 text-xs text-navy/50">
            This form is a placeholder for now — no message is sent yet.
          </p>
        </form>
      </div>
    </>
  );
}
