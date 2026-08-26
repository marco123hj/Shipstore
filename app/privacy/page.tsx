import LegalLayout from "@/components/LegalLayout";
import Fill from "@/components/Fill";
import Link from "next/link";

export const metadata = { title: "Privacy Policy — La Capitana" };

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      intro="How La Capitana collects, uses and protects your personal data, under the GDPR and Spanish data protection law."
      updated="27 August 2026"
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-ink">1. Who is responsible for your data</h2>
        <p>The data controller is:</p>
        <ul className="list-none space-y-1">
          <li><Fill>[registered company / trader name]</Fill>, trading as La Capitana</li>
          <li>Tax ID (NIF/CIF): <Fill>[NIF / CIF]</Fill></li>
          <li>Address: <Fill>[registered address]</Fill></li>
          <li>Email: <Fill>info@lacapitana.es</Fill></li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-ink">2. What data we collect</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>Contact and account details: name, email, phone, billing and delivery address.</li>
          <li>Order details: what you bought, order value and history.</li>
          <li>Payment information, handled by our payment provider. We do not store full card numbers.</li>
          <li>Messages you send us through the contact form, email or phone.</li>
          <li>Technical and usage data: IP address, device and browser, and pages visited, collected through cookies.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-ink">3. How we use it and our legal basis</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>To process and deliver your orders and handle returns. Legal basis: performance of the contract.</li>
          <li>To answer your questions and provide customer service. Legal basis: performance of the contract or our legitimate interest.</li>
          <li>To meet accounting, tax and other legal duties. Legal basis: legal obligation.</li>
          <li>To send marketing emails, only if you have asked to receive them. Legal basis: consent, which you can withdraw at any time.</li>
          <li>To keep the website secure and improve it. Legal basis: our legitimate interest.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-ink">4. Who we share it with</h2>
        <p>We share personal data only with providers who help us run the shop, including:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Our payment provider: <Fill>[payment provider]</Fill></li>
          <li>Delivery and courier companies: <Fill>[carriers]</Fill></li>
          <li>Our shop, hosting and email providers: <Fill>[platform / hosting / email tools]</Fill></li>
        </ul>
        <p>
          These providers may only use your data to carry out their service for us. We do not sell
          your personal data.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-ink">5. International transfers</h2>
        <p>
          Where a provider processes data outside the European Economic Area, we make sure an
          appropriate safeguard is in place, such as the European Commission&apos;s standard
          contractual clauses.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-ink">6. Cookies</h2>
        <p>
          We use cookies that are needed for the website to work, and, with your consent, cookies
          for analytics and marketing. You can accept or refuse non-essential cookies through our
          cookie banner and change your choice at any time. The specific tools we use are:{" "}
          <Fill>[analytics / marketing tools, e.g. Google Analytics]</Fill>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-ink">7. How long we keep it</h2>
        <p>
          We keep order and invoicing data for as long as tax and commercial law requires
          (generally several years). Other data is kept only as long as needed for the purpose it
          was collected, after which it is deleted or anonymised.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-ink">8. Your rights</h2>
        <p>You can ask us to:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Access the data we hold about you.</li>
          <li>Correct data that is wrong or incomplete.</li>
          <li>Delete your data, where the law allows.</li>
          <li>Restrict or object to how we use it.</li>
          <li>Receive your data in a portable format.</li>
          <li>Withdraw consent at any time, without affecting past processing.</li>
        </ul>
        <p>
          To use any of these rights, email <Fill>info@lacapitana.es</Fill>. You also have the right
          to complain to the Spanish Data Protection Agency (Agencia Española de Protección de
          Datos, AEPD) at{" "}
          <a
            href="https://www.aepd.es"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brass-dark hover:underline"
          >
            aepd.es
          </a>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-ink">9. Security</h2>
        <p>
          We take reasonable technical and organisational measures to protect your data against
          loss, misuse and unauthorised access.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-ink">10. Changes</h2>
        <p>
          We may update this policy. The current version is always on this page, with the date it
          was last changed.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-ink">11. Contact</h2>
        <p>
          Questions about your data? Email <Fill>info@lacapitana.es</Fill> or use our{" "}
          <Link href="/contact" className="font-medium text-brass-dark hover:underline">contact page</Link>.
        </p>
      </section>
    </LegalLayout>
  );
}
