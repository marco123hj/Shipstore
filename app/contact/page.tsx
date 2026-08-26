export const metadata = { title: "Contact — La Capitana" };

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="container-c py-14">
          <h1 className="text-3xl font-bold sm:text-4xl">Contact</h1>
        </div>
      </section>

      <div className="container-c grid gap-10 py-14 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold text-navy">Address</h2>
          <address className="mt-3 space-y-1 not-italic text-navy/75">
            <div className="font-semibold text-navy">La Capitana</div>
            <div>Valencia Mar marina (El Saler side)</div>
            <div>Next to Plan B</div>
            <div>46012 València, España</div>
          </address>

          <dl className="mt-6 space-y-2 text-sm">
            <div className="flex gap-3">
              <dt className="w-20 font-semibold text-navy">Email</dt>
              <dd className="text-navy/70">info@lacapitana.es</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-20 font-semibold text-navy">Hours</dt>
              <dd className="text-navy/70">Opening soon.</dd>
            </div>
          </dl>
        </div>

        <form className="rounded-lg border border-navy/10 bg-white p-6">
          <h2 className="text-xl font-bold text-navy">Send a message</h2>
          <div className="mt-4 space-y-3">
            <input placeholder="Name" className="w-full rounded-md border border-navy/15 px-4 py-2.5 text-sm outline-none focus:border-brass" />
            <input placeholder="Email" className="w-full rounded-md border border-navy/15 px-4 py-2.5 text-sm outline-none focus:border-brass" />
            <textarea placeholder="Message" rows={4} className="w-full rounded-md border border-navy/15 px-4 py-2.5 text-sm outline-none focus:border-brass" />
            <button type="button" className="btn-brass w-full">Send</button>
          </div>
        </form>
      </div>
    </>
  );
}
