import type { LegalDoc, Faq } from "./types";

const UPDATED = "27 August 2026";

const faq: Faq[] = [
  {
    q: "Are you an online shop or a physical store?",
    a: "Both. We are a chandlery at the Valencia Mar marina and we ship online across Spain and the European Union.",
  },
  {
    q: "Where are you located?",
    a: "Valencia Mar marina, on the El Saler side, next to Plan B, 46012 València. See our {{l:/contact|contact page}} for directions.",
  },
  {
    q: "What are your opening hours?",
    a: "{{f:Monday to Saturday, 09:00 to 19:00. Closed Sundays.}}",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes. We ship to mainland Spain, the Balearic Islands, across the EU, the United Kingdom and selected non-EU destinations. Full details are on our {{l:/shipping|Shipping & Returns}} page.",
  },
  {
    q: "How long will my order take?",
    a: "In-stock orders are dispatched within 1 to 2 working days. Delivery time depends on the destination, see {{l:/shipping|Shipping & Returns}}.",
  },
  {
    q: "Are prices shown with VAT?",
    a: "Yes. Prices include Spanish IVA for consumers. Orders shipped outside Spanish VAT territory, such as the Canary Islands or non-EU countries, are billed without IVA and may be subject to local import taxes on delivery.",
  },
  {
    q: "Which payment methods can I use?",
    a: "We accept {{f:major debit and credit cards, and Bizum}}. Available methods are shown at checkout.",
  },
  {
    q: "Can I collect my order at the store?",
    a: "Yes. Contact us to arrange collection at the Valencia Mar marina.",
  },
  {
    q: "Do you offer trade or wholesale pricing?",
    a: "Yes. We supply boats, clubs, professionals and other retailers. {{l:/contact|Contact us}} for trade terms.",
  },
  {
    q: "Can you advise which product to choose?",
    a: "Yes. We know the gear and the local waters. Ask us and we will point you to the right option.",
  },
  {
    q: "Do you sell fishing tackle?",
    a: "Yes. We run a fishing section for shore, boat and Mediterranean fishing, a minute from the Turia river mouth.",
  },
  {
    q: "How do I return something?",
    a: "You have a 14-day right of withdrawal. See {{l:/shipping|Shipping & Returns}} for how to send an item back.",
  },
  {
    q: "My order arrived damaged. What should I do?",
    a: "Contact us within 48 hours with a photo and your order number and we will sort out a replacement or refund. Full details on our {{l:/shipping|Shipping & Returns}} page.",
  },
  {
    q: "Can you order an item that is not in the catalogue?",
    a: "Often, yes. Tell us what you need and we will do our best to source it for you.",
  },
];

const shipping: LegalDoc = {
  title: "Shipping & Returns",
  intro: "How we pack, ship and handle returns for orders from the La Capitana online shop.",
  updated: UPDATED,
  sections: [
    {
      h: "Where we ship",
      blocks: [
        { t: "p", s: "We ship from our store at the Valencia Mar marina to mainland Spain, the Balearic Islands, and across the European Union. We also ship to the United Kingdom and selected non-EU destinations. If your country is not offered at checkout, contact us and we will quote it." },
      ],
    },
    {
      h: "Shipping costs",
      blocks: [
        {
          t: "table",
          head: ["Destination", "Standard rate", "Free over"],
          rows: [
            ["Mainland Spain", "{{f:€5,95}}", "€75"],
            ["Balearic Islands", "{{f:€9,95}}", "{{f:€120}}"],
            ["Rest of the EU", "{{f:€12,95}}", "{{f:€150}}"],
            ["Canary Islands, Ceuta & Melilla", "Quoted at checkout", "—"],
            ["United Kingdom & other non-EU", "Quoted at checkout", "—"],
          ],
        },
        { t: "note", s: "Orders to the Canary Islands, Ceuta, Melilla, the UK and other non-EU destinations are sent without Spanish VAT. Local import VAT, duties and handling fees may be charged on delivery and are the responsibility of the customer." },
      ],
    },
    {
      h: "Dispatch & delivery times",
      blocks: [
        { t: "p", s: "In-stock orders are dispatched within 1 to 2 working days. Typical delivery once shipped:" },
        {
          t: "ul",
          items: [
            "Mainland Spain: {{f:1 to 3 working days}}",
            "Balearic Islands: {{f:2 to 5 working days}}",
            "Rest of the EU: {{f:3 to 7 working days}}",
            "UK & non-EU: {{f:5 to 10 working days}}, plus any customs clearance",
          ],
        },
        { t: "note", s: "Delivery times are estimates and are not guaranteed. Orders placed on weekends or public holidays are processed the next working day." },
      ],
    },
    {
      h: "Dangerous goods",
      blocks: [
        { t: "p", s: "Some marine products are classed as dangerous goods, including flares, aerosols, lithium batteries, and certain paints, solvents and adhesives. These items cannot be sent by air, may carry a handling surcharge, and are not available to every destination. Any restriction is shown at checkout." },
      ],
    },
    {
      h: "Returns and the 14-day right of withdrawal",
      blocks: [
        { t: "p", s: "As an EU consumer you have the right to withdraw from your purchase within 14 days of receiving your order, without giving a reason. To do so, tell us within those 14 days (an email is enough). You then have a further 14 days to send the goods back." },
        { t: "p", s: "Returned items must be unused, complete and in their original packaging, in a condition we can resell. You are responsible for the cost of return shipping unless the item is faulty or we sent the wrong product." },
        { t: "p", s: "The right of withdrawal does not apply to:" },
        {
          t: "ul",
          items: [
            "Made-to-order or cut-to-length goods, such as rope, chain or cable cut to your length.",
            "Sealed goods that are not suitable for return once opened for health or safety reasons.",
            "Special orders placed for you that we do not normally stock.",
          ],
        },
      ],
    },
    {
      h: "How to return an item",
      blocks: [
        {
          t: "ol",
          items: [
            "Email {{f:info@lacapitana.es}} with your order number and the items you want to return.",
            "We reply with the return address and instructions.",
            "Pack the goods securely and send them back within 14 days.",
          ],
        },
      ],
    },
    {
      h: "Refunds",
      blocks: [
        { t: "p", s: "Once we receive and check the returned goods we refund you within 14 days, using the same payment method you used to order. We may withhold the refund until the goods reach us. If you chose a more expensive delivery option than our standard service, we refund the standard delivery cost only." },
      ],
    },
    {
      h: "Faulty, damaged or wrong items",
      blocks: [
        { t: "p", s: "All goods come with the legal guarantee of conformity. Under Spanish law you have up to three years from delivery to report a fault that was present at purchase. If an item arrives damaged, is faulty, or is not what you ordered, contact us within a reasonable time and we will arrange a repair, replacement or refund at no cost to you, including return shipping." },
        { t: "p", s: "Please check your delivery on arrival and report visible transport damage within {{f:48 hours}} so we can raise it with the carrier." },
      ],
    },
    {
      h: "Questions",
      blocks: [
        { t: "p", s: "For anything about an order, shipping or a return, see our {{l:/faq|FAQ}} or {{l:/contact|contact us}}." },
      ],
    },
  ],
};

const terms: LegalDoc = {
  title: "Terms & Conditions",
  intro: "The terms that apply when you use this website and buy from the La Capitana online shop.",
  updated: UPDATED,
  sections: [
    {
      h: "1. Who we are",
      blocks: [
        { t: "p", s: "This website and shop are operated by {{f:[registered company / trader name]}}, trading as La Capitana." },
        {
          t: "ul",
          items: [
            "Tax ID (NIF/CIF): {{f:[NIF / CIF]}}",
            "VAT number: {{f:[EU VAT number]}}",
            "Registered address: {{f:[registered address]}}",
            "Trading address: Valencia Mar marina, El Saler side, next to Plan B, 46012 València, España",
            "Email: {{f:info@lacapitana.es}}",
            "Phone: {{f:[phone number]}}",
          ],
        },
      ],
    },
    {
      h: "2. These terms",
      blocks: [
        { t: "p", s: "By using this website or placing an order you accept these terms. Please read them before you order. We may update them from time to time; the version that applies to your order is the one published when you place it." },
      ],
    },
    {
      h: "3. Products and availability",
      blocks: [
        { t: "p", s: "We describe our products as accurately as we can. Photos and specifications are for guidance and small variations can occur. All products are subject to availability. If an item you ordered is not available we will contact you and offer an alternative or a refund." },
      ],
    },
    {
      h: "4. Prices and VAT",
      blocks: [
        { t: "p", s: "Prices are shown in euros and include Spanish IVA for consumers, unless stated otherwise. Shipping costs are added at checkout and shown before you confirm. Orders shipped outside Spanish VAT territory may be billed without IVA and can be subject to local import taxes and duties, which are the responsibility of the customer. We try to keep prices correct, but if an obvious pricing error occurs we will contact you before dispatch and you can confirm at the correct price or cancel." },
      ],
    },
    {
      h: "5. Your order",
      blocks: [
        { t: "p", s: "When you place an order we send an acknowledgement by email. The contract is formed when we confirm dispatch of the goods. We may decline or cancel an order, for example if the goods are unavailable, payment is not authorised, or we suspect fraud." },
      ],
    },
    {
      h: "6. Payment",
      blocks: [
        { t: "p", s: "Payment is taken through our payment provider using the methods shown at checkout. Your card and payment details are handled by the provider and are not stored by us. Goods remain our property until paid for in full." },
      ],
    },
    {
      h: "7. Shipping",
      blocks: [
        { t: "p", s: "Delivery costs, destinations and estimated times are set out in our {{l:/shipping|Shipping & Returns}} policy, which forms part of these terms. Risk in the goods passes to you on delivery." },
      ],
    },
    {
      h: "8. Right of withdrawal and returns",
      blocks: [
        { t: "p", s: "As a consumer you have a 14-day right of withdrawal on most orders, and a longer legal guarantee for faulty goods. The full procedure, conditions and exceptions are set out in our {{l:/shipping|Shipping & Returns}} policy." },
      ],
    },
    {
      h: "9. Legal guarantee",
      blocks: [
        { t: "p", s: "All goods sold to consumers come with the legal guarantee of conformity under Spanish law (Real Decreto Legislativo 1/2007), currently three years from delivery. This is in addition to any commercial warranty offered by a manufacturer." },
      ],
    },
    {
      h: "10. Use of products",
      blocks: [
        { t: "p", s: "Marine, safety and electrical equipment must be selected, fitted and used correctly. Our product information and advice are given in good faith but do not replace professional fitting or your own checks. You are responsible for making sure a product is suitable for your boat and intended use." },
      ],
    },
    {
      h: "11. Liability",
      blocks: [
        { t: "p", s: "Nothing in these terms limits our liability where the law does not allow it, including for death or personal injury caused by our negligence. Otherwise we are not liable for indirect or consequential loss. This does not affect your statutory rights as a consumer." },
      ],
    },
    {
      h: "12. Intellectual property",
      blocks: [
        { t: "p", s: "The content of this website, including text, images and the La Capitana name and logo, is our property or used with permission and may not be reused without our consent." },
      ],
    },
    {
      h: "13. Governing law and disputes",
      blocks: [
        { t: "p", s: "These terms are governed by Spanish law. If you are a consumer, mandatory consumer protections of your country of residence still apply. Disputes fall under the courts of {{f:València, España}}, subject to any consumer rights to bring proceedings elsewhere." },
        { t: "p", s: "The European Commission provides an online dispute resolution platform at {{a:https://ec.europa.eu/consumers/odr|ec.europa.eu/consumers/odr}}." },
      ],
    },
    {
      h: "14. Contact",
      blocks: [
        { t: "p", s: "Questions about these terms? Email {{f:info@lacapitana.es}} or use our {{l:/contact|contact page}}." },
      ],
    },
  ],
};

const privacy: LegalDoc = {
  title: "Privacy Policy",
  intro: "How La Capitana collects, uses and protects your personal data, under the GDPR and Spanish data protection law.",
  updated: UPDATED,
  sections: [
    {
      h: "1. Who is responsible for your data",
      blocks: [
        { t: "p", s: "The data controller is:" },
        {
          t: "ul",
          items: [
            "{{f:[registered company / trader name]}}, trading as La Capitana",
            "Tax ID (NIF/CIF): {{f:[NIF / CIF]}}",
            "Address: {{f:[registered address]}}",
            "Email: {{f:info@lacapitana.es}}",
          ],
        },
      ],
    },
    {
      h: "2. What data we collect",
      blocks: [
        {
          t: "ul",
          items: [
            "Contact and account details: name, email, phone, billing and delivery address.",
            "Order details: what you bought, order value and history.",
            "Payment information, handled by our payment provider. We do not store full card numbers.",
            "Messages you send us through the contact form, email or phone.",
            "Technical and usage data: IP address, device and browser, and pages visited, collected through cookies.",
          ],
        },
      ],
    },
    {
      h: "3. How we use it and our legal basis",
      blocks: [
        {
          t: "ul",
          items: [
            "To process and deliver your orders and handle returns. Legal basis: performance of the contract.",
            "To answer your questions and provide customer service. Legal basis: performance of the contract or our legitimate interest.",
            "To meet accounting, tax and other legal duties. Legal basis: legal obligation.",
            "To send marketing emails, only if you have asked to receive them. Legal basis: consent, which you can withdraw at any time.",
            "To keep the website secure and improve it. Legal basis: our legitimate interest.",
          ],
        },
      ],
    },
    {
      h: "4. Who we share it with",
      blocks: [
        { t: "p", s: "We share personal data only with providers who help us run the shop, including:" },
        {
          t: "ul",
          items: [
            "Our payment provider: {{f:[payment provider]}}",
            "Delivery and courier companies: {{f:[carriers]}}",
            "Our shop, hosting and email providers: {{f:[platform / hosting / email tools]}}",
          ],
        },
        { t: "p", s: "These providers may only use your data to carry out their service for us. We do not sell your personal data." },
      ],
    },
    {
      h: "5. International transfers",
      blocks: [
        { t: "p", s: "Where a provider processes data outside the European Economic Area, we make sure an appropriate safeguard is in place, such as the European Commission's standard contractual clauses." },
      ],
    },
    {
      h: "6. Cookies",
      blocks: [
        { t: "p", s: "We use cookies that are needed for the website to work, and, with your consent, cookies for analytics and marketing. You can accept or refuse non-essential cookies through our cookie banner and change your choice at any time. For details see our {{l:/cookies|Cookie Policy}}." },
      ],
    },
    {
      h: "7. How long we keep it",
      blocks: [
        { t: "p", s: "We keep order and invoicing data for as long as tax and commercial law requires (generally several years). Other data is kept only as long as needed for the purpose it was collected, after which it is deleted or anonymised." },
      ],
    },
    {
      h: "8. Your rights",
      blocks: [
        { t: "p", s: "You can ask us to:" },
        {
          t: "ul",
          items: [
            "Access the data we hold about you.",
            "Correct data that is wrong or incomplete.",
            "Delete your data, where the law allows.",
            "Restrict or object to how we use it.",
            "Receive your data in a portable format.",
            "Withdraw consent at any time, without affecting past processing.",
          ],
        },
        { t: "p", s: "To use any of these rights, email {{f:info@lacapitana.es}}. You also have the right to complain to the Spanish Data Protection Agency (Agencia Española de Protección de Datos, AEPD) at {{a:https://www.aepd.es|aepd.es}}." },
      ],
    },
    {
      h: "9. Security",
      blocks: [
        { t: "p", s: "We take reasonable technical and organisational measures to protect your data against loss, misuse and unauthorised access." },
      ],
    },
    {
      h: "10. Changes",
      blocks: [
        { t: "p", s: "We may update this policy. The current version is always on this page, with the date it was last changed." },
      ],
    },
    {
      h: "11. Contact",
      blocks: [
        { t: "p", s: "Questions about your data? Email {{f:info@lacapitana.es}} or use our {{l:/contact|contact page}}." },
      ],
    },
  ],
};

const cookies: LegalDoc = {
  title: "Cookie Policy",
  intro: "How La Capitana uses cookies on this website.",
  updated: UPDATED,
  sections: [
    {
      h: "1. What are cookies",
      blocks: [
        { t: "p", s: "Cookies are small text files stored on your device when you visit a website. They help the site work, remember your choices, and understand how it is used." },
      ],
    },
    {
      h: "2. How we use cookies",
      blocks: [
        {
          t: "ul",
          items: [
            "Essential cookies that make the website work, including your language choice, cart and cookie preferences. These are always on.",
            "Analytics cookies that help us understand how the site is used, set only with your consent.",
            "Marketing cookies that measure and support our advertising, set only with your consent.",
          ],
        },
      ],
    },
    {
      h: "3. Managing your cookies",
      blocks: [
        { t: "p", s: "When you first visit, our cookie banner lets you accept all cookies or reject non-essential ones. You can change your choice at any time by clearing this site's cookies in your browser, which brings the banner back. You can also block or delete cookies in your browser settings, though the site may then not work as intended." },
      ],
    },
    {
      h: "4. The cookies we use",
      blocks: [
        { t: "p", s: "The specific analytics and marketing tools we use are: {{f:[analytics / marketing tools, e.g. Google Analytics]}}. They are listed together with how we handle your data in our {{l:/privacy|Privacy Policy}}." },
      ],
    },
    {
      h: "5. More information",
      blocks: [
        { t: "p", s: "For how we handle your personal data, see our {{l:/privacy|Privacy Policy}}. Questions? Email {{f:info@lacapitana.es}} or use our {{l:/contact|contact page}}." },
      ],
    },
  ],
};

const en = {
  code: "en",
  htmlLang: "en",
  localeName: "English",
  switchLabel: "ES",
  switchTo: "Cambiar a español",
  nav: { shop: "Shop", nauticTalk: "Nautic Talk", fishing: "Fishing", about: "About", contact: "Contact" },
  a11y: { search: "Search", cart: "Cart" },
  common: {
    add: "Add",
    addToCart: "Add to cart",
    sale: "Sale",
    home: "Home",
    shop: "Shop",
    allCategories: "All categories",
    updated: "Last updated",
  },
  footer: {
    blurb: "Marine and yacht supplies at the Valencia Mar marina, Valencia.",
    shop: "Shop",
    info: "Info",
    legal: "Legal",
    address: "Address",
    about: "About",
    contact: "Contact",
    faq: "FAQ",
    shipping: "Shipping & Returns",
    terms: "Terms & Conditions",
    privacy: "Privacy Policy",
    cookies: "Cookie Policy",
  },
  home: {
    heroTitle: "Marine and yacht supplies at the Valencia Mar marina.",
    heroSub: "Maintenance, hardware, safety, electronics and fishing gear for boats and yachts, on the water in Valencia.",
    heroCta: "Shop all products",
    usps: ["Expert advice", "Wide range", "On the marina", "Delivery across Spain"],
    categories: "Shop by category",
    featured: "Featured products",
    brands: "Brands",
    visit: "Visit us",
    visitText: "Valencia Mar marina, El Saler side, next to Plan B. 46012 València.",
    visitCta: "Contact & opening hours",
  },
  shop: { title: "Shop", all: "All products" },
  category: { back: "Shop", coming: "Products in this category are coming soon." },
  product: {
    priceNote: "Prices include VAT. Shipping calculated at checkout.",
    addToCart: "Add to cart",
    wishlistAdd: "Add to wishlist",
    wishlistRemove: "Remove from wishlist",
    quantityDec: "Decrease quantity",
    quantityInc: "Increase quantity",
    trust: ["Genuine stock", "Free shipping over €75", "14-day returns", "Secure payment"],
    description: "Description",
    specifications: "Specifications",
    shipping: "Shipping & returns",
    specBrand: "Brand",
    specCategory: "Category",
    specSoldPer: "Sold per",
    shippingBody: [
      "Free delivery across mainland Spain on orders over €75.",
      "Dispatched in 1 to 2 working days from the Valencia Mar marina.",
      "14-day returns on unused items in original packaging.",
    ],
    moreIn: "More in",
    moreInFallback: "the shop",
  },
  about: {
    title: "About La Capitana",
    paras: [
      "La Capitana is a marine and yacht chandlery at the Valencia Mar marina, built on a family business with decades of experience sourcing and supplying boat equipment.",
      "We stock a curated range for the Spanish Mediterranean, the leisure boat and yacht side of the trade, with brands like Hempel, Epifanes, Sika, Talamex and Besto. We leave out the heavy inland-shipping gear that is not used down here.",
      "We are a minute from the Turia river mouth, the busiest fishing spot in Valencia, so we also run a fishing section for shore, boat and Mediterranean fishing.",
    ],
    card1Title: "Marine & yacht",
    card1Body: "Maintenance, hardware, safety, electronics and engine parts.",
    card2Title: "Fishing",
    card2Body: "Rods, reels and lures for the Mediterranean.",
    cta: "Visit the shop",
  },
  contact: {
    title: "Contact",
    address: "Address",
    hours: "Hours",
    hoursValue: "Opening soon.",
    email: "Email",
    formTitle: "Send a message",
    fName: "Name",
    fEmail: "Email",
    fMessage: "Message",
    fSend: "Send",
    addr: ["La Capitana", "Valencia Mar marina (El Saler side)", "Next to Plan B", "46012 València, España"],
  },
  faqPage: {
    title: "Frequently asked questions",
    intro: "Quick answers on the shop, shipping, payments and returns. If your question is not here, contact us.",
    items: faq,
  },
  cookieBanner: {
    text: "We use cookies to run the shop and, with your consent, to measure and improve it.",
    policy: "Cookie Policy",
    accept: "Accept all",
    reject: "Reject non-essential",
  },
  nauticTalk: {
    kicker: "Hands-free onboard communication",
    title: "Nautic Talk",
    heroSub:
      "Wireless headset systems that keep skipper and crew talking clearly, hands free, from the helm to the bow.",
    heroCta: "See the systems",
    introTitle: "Talk to your crew without shouting",
    intro:
      "Docking, mooring, anchoring and sail handling go wrong the same way every time: someone can't hear the call. Nautic Talk puts a full-duplex headset on each person, so you talk normally with both hands on the job, no button to press and no shouting over the wind or the engine.",
    featuresTitle: "Why crews swear by it",
    features: [
      { icon: "radio", title: "Up to 1,000 m range", body: "Intercom between the headsets, independent of your phone, VHF or CB radio." },
      { icon: "wave", title: "Hands-free, full duplex", body: "Talk and listen at the same time, no push-to-talk. Keep both hands on the lines." },
      { icon: "droplet", title: "Waterproof & dustproof", body: "Keeps working through spray and weather, even if it ends up in the water." },
      { icon: "gear", title: "DSP noise suppression", body: "Smart software cuts wind and engine noise for crystal-clear speech." },
      { icon: "bolt", title: "Up to 10 hours talk time", body: "A full day of manoeuvres on a charge, around 1,000 hours on standby." },
      { icon: "link", title: "Pairs with your phone", body: "Bluetooth to a mobile too, wear it on either ear, auto-reconnects when you're back in range." },
    ],
    boxTitle: "In the Duo set",
    box: [
      "2 Nautic Talk headset modules",
      "2 chargers and charging cables",
      "2 ear-hook holders",
      "Helmet clamp and adhesive holders",
      "Quick manual",
    ],
    useTitle: "Made for the moments that matter",
    use: ["Docking & mooring", "Anchoring", "Sail handling", "Man-overboard & safety", "Big-boat crew coordination"],
    productsTitle: "Shop Nautic Talk",
    trust: "A proven favourite with skippers and yacht crews.",
  },
  shipping,
  terms,
  privacy,
  cookies,
};

export default en;
