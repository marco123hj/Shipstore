import LegalLayout from "@/components/LegalLayout";
import Fill from "@/components/Fill";
import Link from "next/link";

export const metadata = { title: "Terms & Conditions — La Capitana" };

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      intro="The terms that apply when you use this website and buy from the La Capitana online shop."
      updated="27 August 2026"
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-ink">1. Who we are</h2>
        <p>
          This website and shop are operated by <Fill>[registered company / trader name]</Fill>,
          trading as La Capitana.
        </p>
        <ul className="list-none space-y-1">
          <li>Tax ID (NIF/CIF): <Fill>[NIF / CIF]</Fill></li>
          <li>VAT number: <Fill>[EU VAT number]</Fill></li>
          <li>Registered address: <Fill>[registered address]</Fill></li>
          <li>Trading address: Valencia Mar marina, El Saler side, next to Plan B, 46012 València, España</li>
          <li>Email: <Fill>info@lacapitana.es</Fill></li>
          <li>Phone: <Fill>[phone number]</Fill></li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-ink">2. These terms</h2>
        <p>
          By using this website or placing an order you accept these terms. Please read them before
          you order. We may update them from time to time; the version that applies to your order is
          the one published when you place it.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-ink">3. Products and availability</h2>
        <p>
          We describe our products as accurately as we can. Photos and specifications are for
          guidance and small variations can occur. All products are subject to availability. If an
          item you ordered is not available we will contact you and offer an alternative or a
          refund.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-ink">4. Prices and VAT</h2>
        <p>
          Prices are shown in euros and include Spanish IVA for consumers, unless stated otherwise.
          Shipping costs are added at checkout and shown before you confirm. Orders shipped outside
          Spanish VAT territory may be billed without IVA and can be subject to local import taxes
          and duties, which are the responsibility of the customer. We try to keep prices correct,
          but if an obvious pricing error occurs we will contact you before dispatch and you can
          confirm at the correct price or cancel.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-ink">5. Your order</h2>
        <p>
          When you place an order we send an acknowledgement by email. The contract is formed when
          we confirm dispatch of the goods. We may decline or cancel an order, for example if the
          goods are unavailable, payment is not authorised, or we suspect fraud.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-ink">6. Payment</h2>
        <p>
          Payment is taken through our payment provider using the methods shown at checkout. Your
          card and payment details are handled by the provider and are not stored by us. Goods
          remain our property until paid for in full.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-ink">7. Shipping</h2>
        <p>
          Delivery costs, destinations and estimated times are set out in our{" "}
          <Link href="/shipping" className="font-medium text-brass-dark hover:underline">Shipping & Returns</Link>{" "}
          policy, which forms part of these terms. Risk in the goods passes to you on delivery.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-ink">8. Right of withdrawal and returns</h2>
        <p>
          As a consumer you have a 14-day right of withdrawal on most orders, and a longer legal
          guarantee for faulty goods. The full procedure, conditions and exceptions are set out in
          our{" "}
          <Link href="/shipping" className="font-medium text-brass-dark hover:underline">Shipping & Returns</Link>{" "}
          policy.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-ink">9. Legal guarantee</h2>
        <p>
          All goods sold to consumers come with the legal guarantee of conformity under Spanish law
          (Real Decreto Legislativo 1/2007), currently three years from delivery. This is in
          addition to any commercial warranty offered by a manufacturer.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-ink">10. Use of products</h2>
        <p>
          Marine, safety and electrical equipment must be selected, fitted and used correctly. Our
          product information and advice are given in good faith but do not replace professional
          fitting or your own checks. You are responsible for making sure a product is suitable for
          your boat and intended use.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-ink">11. Liability</h2>
        <p>
          Nothing in these terms limits our liability where the law does not allow it, including for
          death or personal injury caused by our negligence. Otherwise we are not liable for
          indirect or consequential loss. This does not affect your statutory rights as a consumer.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-ink">12. Intellectual property</h2>
        <p>
          The content of this website, including text, images and the La Capitana name and logo, is
          our property or used with permission and may not be reused without our consent.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-ink">13. Governing law and disputes</h2>
        <p>
          These terms are governed by Spanish law. If you are a consumer, mandatory consumer
          protections of your country of residence still apply. Disputes fall under the courts of{" "}
          <Fill>València, España</Fill>, subject to any consumer rights to bring proceedings
          elsewhere.
        </p>
        <p>
          The European Commission provides an online dispute resolution platform at{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brass-dark hover:underline"
          >
            ec.europa.eu/consumers/odr
          </a>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-ink">14. Contact</h2>
        <p>
          Questions about these terms? Email <Fill>info@lacapitana.es</Fill> or use our{" "}
          <Link href="/contact" className="font-medium text-brass-dark hover:underline">contact page</Link>.
        </p>
      </section>
    </LegalLayout>
  );
}
