import LegalLayout from "@/components/LegalLayout";
import Fill from "@/components/Fill";
import Link from "next/link";

export const metadata = { title: "Shipping & Returns — La Capitana" };

export default function ShippingPage() {
  return (
    <LegalLayout
      title="Shipping & Returns"
      intro="How we pack, ship and handle returns for orders from the La Capitana online shop."
      updated="27 August 2026"
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-ink">Where we ship</h2>
        <p>
          We ship from our store at the Valencia Mar marina to mainland Spain, the Balearic
          Islands, and across the European Union. We also ship to the United Kingdom and selected
          non-EU destinations. If your country is not offered at checkout, contact us and we will
          quote it.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-ink">Shipping costs</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-navy/15 text-left text-navy">
                <th className="py-2 pr-4 font-semibold">Destination</th>
                <th className="py-2 pr-4 font-semibold">Standard rate</th>
                <th className="py-2 font-semibold">Free over</th>
              </tr>
            </thead>
            <tbody className="text-navy/75">
              <tr className="border-b border-navy/10">
                <td className="py-2 pr-4">Mainland Spain</td>
                <td className="py-2 pr-4"><Fill>€5,95</Fill></td>
                <td className="py-2">€75</td>
              </tr>
              <tr className="border-b border-navy/10">
                <td className="py-2 pr-4">Balearic Islands</td>
                <td className="py-2 pr-4"><Fill>€9,95</Fill></td>
                <td className="py-2"><Fill>€120</Fill></td>
              </tr>
              <tr className="border-b border-navy/10">
                <td className="py-2 pr-4">Rest of the EU</td>
                <td className="py-2 pr-4"><Fill>€12,95</Fill></td>
                <td className="py-2"><Fill>€150</Fill></td>
              </tr>
              <tr className="border-b border-navy/10">
                <td className="py-2 pr-4">Canary Islands, Ceuta & Melilla</td>
                <td className="py-2 pr-4">Quoted at checkout</td>
                <td className="py-2">—</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">United Kingdom & other non-EU</td>
                <td className="py-2 pr-4">Quoted at checkout</td>
                <td className="py-2">—</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-navy/60">
          Orders to the Canary Islands, Ceuta, Melilla, the UK and other non-EU destinations are
          sent without Spanish VAT. Local import VAT, duties and handling fees may be charged on
          delivery and are the responsibility of the customer.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-ink">Dispatch & delivery times</h2>
        <p>
          In-stock orders are dispatched within 1 to 2 working days. Typical delivery once shipped:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Mainland Spain: <Fill>1 to 3 working days</Fill></li>
          <li>Balearic Islands: <Fill>2 to 5 working days</Fill></li>
          <li>Rest of the EU: <Fill>3 to 7 working days</Fill></li>
          <li>UK & non-EU: <Fill>5 to 10 working days</Fill>, plus any customs clearance</li>
        </ul>
        <p className="text-sm text-navy/60">
          Delivery times are estimates and are not guaranteed. Orders placed on weekends or public
          holidays are processed the next working day.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-ink">Dangerous goods</h2>
        <p>
          Some marine products are classed as dangerous goods, including flares, aerosols, lithium
          batteries, and certain paints, solvents and adhesives. These items cannot be sent by air,
          may carry a handling surcharge, and are not available to every destination. Any
          restriction is shown at checkout.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-ink">Returns and the 14-day right of withdrawal</h2>
        <p>
          As an EU consumer you have the right to withdraw from your purchase within 14 days of
          receiving your order, without giving a reason. To do so, tell us within those 14 days
          (an email is enough). You then have a further 14 days to send the goods back.
        </p>
        <p>
          Returned items must be unused, complete and in their original packaging, in a condition
          we can resell. You are responsible for the cost of return shipping unless the item is
          faulty or we sent the wrong product.
        </p>
        <p>The right of withdrawal does not apply to:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Made-to-order or cut-to-length goods, such as rope, chain or cable cut to your length.</li>
          <li>Sealed goods that are not suitable for return once opened for health or safety reasons.</li>
          <li>Special orders placed for you that we do not normally stock.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-ink">How to return an item</h2>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Email <Fill>info@lacapitana.es</Fill> with your order number and the items you want to return.</li>
          <li>We reply with the return address and instructions.</li>
          <li>Pack the goods securely and send them back within 14 days.</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-ink">Refunds</h2>
        <p>
          Once we receive and check the returned goods we refund you within 14 days, using the same
          payment method you used to order. We may withhold the refund until the goods reach us. If
          you chose a more expensive delivery option than our standard service, we refund the
          standard delivery cost only.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-ink">Faulty, damaged or wrong items</h2>
        <p>
          All goods come with the legal guarantee of conformity. Under Spanish law you have up to
          three years from delivery to report a fault that was present at purchase. If an item
          arrives damaged, is faulty, or is not what you ordered, contact us within a reasonable
          time and we will arrange a repair, replacement or refund at no cost to you, including
          return shipping.
        </p>
        <p>
          Please check your delivery on arrival and report visible transport damage within
          <Fill>48 hours</Fill> so we can raise it with the carrier.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-ink">Questions</h2>
        <p>
          For anything about an order, shipping or a return, see our{" "}
          <Link href="/faq" className="font-medium text-brass-dark hover:underline">FAQ</Link>{" "}
          or{" "}
          <Link href="/contact" className="font-medium text-brass-dark hover:underline">contact us</Link>.
        </p>
      </section>
    </LegalLayout>
  );
}
