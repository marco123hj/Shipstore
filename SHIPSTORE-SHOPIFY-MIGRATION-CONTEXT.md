# Context handoff: migrating Shipstore into Shopify (La Capitana / Power Maritima)

Paste this whole file into the new Claude session as background. It is a briefing written from an earlier session that has all the history; the new session starts with zero context.

---

## 1. Who's who (the businesses)

- **Shipstore B.V.** = the family's existing Dutch marine company and its webshop **shipstore.nl** (currently built on **ASP.NET**; splits "Watersport" vs "Scheepvaart"). Legal entity: **KvK 71395318, Kadijk 2B, 8531 XD Lemmer, info@shipstore.nl, +31 514-856718**. It is also the temporary legal entity Marco's side-business Hooked Japan currently runs under. Shipstore is NL-based and will wind down as the family relocates to Spain.
- **La Capitana** = the family's **new physical** marine/yacht store, at the smaller **southern Valencia Mar marina** (valenciamar.com, near El Saler / the Turia river outflow / Pinedo). Opening imminently. Marco (18) leads the **fishing section**.
- **Power Maritima** = the likely **online/webshop brand** name (vs "La Capitana" the physical store). "Power" is a family name. NOT finalised, so don't hard-bake either name; keep the wordmark swappable until the logo arrives.
- The family is **relocating NL → Spain**. Shipstore B.V. (NL) is expected to be replaced by a **Spanish entity (S.L.)** over time.

## 2. The goal for the new session

**Migrate / clone the Shipstore marine webshop into Shopify.** The Spain-facing storefront is La Capitana / Power Maritima (boats/yachts + a fishing section). Decide headless-vs-native early (see section 5).

## 3. Product source = Logic4 (critical)

- All products live in **Logic4** (Dutch ERP/webshop platform, logic4.nl). Do NOT re-enter products by hand.
- The full export is **~20,974 rows = the ENTIRE inventory**, mostly internal components, raw rope/hose by the metre, PPE, industrial/inland gear, much with no brand/category/image. **Only ~1,869 rows are webshop-ready** (photo + price + category). Dutch. Dominated by the house-supplier brand **"Hoenderop"**.
- For a real Shopify import, get TWO things **straight from Logic4, NOT via Google Sheets** (a Sheets round-trip corrupted the CSV last time — everything crammed into one column, broken quoting, only ~2,300 rows parsed): **(a) a clean structured export**, and **(b) the actual product image files** (the export only carries a has-image yes/no flag, not the images).
- **Source anonymity:** relabel **"Hoenderop"** (and "Merk X" / "Onbekend") to the La Capitana / Power Maritima own brand before publishing. Showing "Hoenderop" reveals a sourcing channel.
- The raw stock skews **commercial/inland**; a premium leisure storefront needs a **curated leisure range**, not the raw dump. Drop inland-commercial gear (Storz/Kamlok couplings, bunker parts, ADN, cargo-hold, big commercial fenders).
- Leisure brands to keep: **Hempel, Epifanes, Sika, 3M, Yachticon, Talamex, Besto, Nautic Talk**. ~11 categories including a **Fishing** section.

## 4. Hero product = Nautic Talk

- Third-party brand they **resell** (not their own): **Bluetooth hands-free marine intercom headsets**. Was **Shipstore's #1 bestseller** — feature it prominently.
- Verified specs: full-duplex hands-free (no push-to-talk), ~1000 m range between headsets, waterproof/dustproof, DSP noise suppression, ~10 h talk / ~1000 h standby, pairs with a phone, Bluetooth. Range: **Duo** (2 people), **Trio** (3); catalogue has Duo + a single Solo headset.

## 5. What already exists (the La Capitana Next.js front-end) — a big head start

A full bilingual front-end is already built at **`C:\Users\gerri\la-capitana`** (Next.js 14 + Tailwind). Runs via preview name **"la-capitana"** (port 3020). It was built **backend-agnostic on purpose**, deferring the commerce backend (Shopify / Odoo / both) to "decide later."

- **Bilingual EN/ES:** `[locale]` routing + `middleware.ts`, dictionaries in `lib/i18n/` (`en.ts` + `es.ts`), `components/RichText.tsx` parses tokens `{{l:/path|label}}` (internal link, auto locale-prefix), `{{a:url|label}}` (external), `{{f:text}}` (a brass "Fill" placeholder). Locale-aware price format (`89,95 €` es / `€89,95` en). `LangSwitcher.tsx`. Default locale = en (one-line switch in `lib/i18n/index.ts`). **Every internal link must be `/${locale}/...`**.
- **Design identity:** single font **Work Sans**; palette **navy #0b2238 + brass #c8a24c + sand #f6f2ea + ink/black #141414**; custom SVG icons (`components/Icon.tsx`), **no emoji**. Hard rule from Marco: **it must NOT look AI-generated** (plain direct copy, decluttered).
- **Product page** mirrors Hooked Japan's layout: sticky gallery, brand/title/price (+Sale badge), quantity stepper, full-width add-to-cart, wishlist heart, trust strip, Description/Specifications/Shipping accordions, "More in [category]" row.
- **Legal pages** (`/faq`, `/shipping`, `/terms`, `/privacy`, `/cookies`) with real EU/Spain consumer-law content (14-day withdrawal, 3-year guarantee under RDL 1/2007, GDPR/AEPD, ODR). They use a **`<Fill>` placeholder** (`components/Fill.tsx`) for values only Marco can supply. Cookie consent = `components/CookieBanner.tsx` (localStorage `lc-cookie-consent`).
- **Front-end commerce = PROTOTYPES only (client-side/localStorage, NOT production):** search (`/search`), cart (`context/CartContext.tsx`, `useSyncExternalStore`, slide-in basket), checkout (`/checkout`, ship-or-pickup form, VAT 21% breakdown, places an "order request", **no payment gateway**), accounts (`context/AuthContext.tsx`, SHA-256 localStorage passwords, `/account`). These are placeholders to be replaced by the real backend; the cart/checkout/order shapes were built to hand off cleanly.
- **Backend-agnostic data layer:** ALL products/categories come from ONE file **`lib/data.ts`** (getters like `getProducts`/`getCategory` take a `locale` arg). Swap that file for the real backend and the UI never changes. ~33 real leisure products are curated in there now; the rest are placeholders.
- **Nautic Talk** has a dedicated bilingual landing page (`/nautic-talk`) + nav link + home feature band.

### The key Shopify decision for the new session
Two clean paths:
1. **Headless:** keep this Next.js front-end and wire `lib/data.ts` + cart/checkout to **Shopify's Storefront API** (products imported from Logic4). This reuses everything above. The proven reference for headless Shopify + Next.js is **Hooked Japan at `C:\Users\gerri\japanhooked`** (Next.js 16 App Router, Storefront API, next-intl, Vercel ISR, Google Merchant feed, sitemap, SEO structured data) — copy its patterns.
2. **Native Shopify theme:** build the store on a Shopify theme instead, and treat the Next.js site as design reference only.
Either way the product data flows **Logic4 → Shopify → storefront**.

## 6. Legal / entity

- If it launches **before** the Spanish entity exists, it runs under **Shipstore B.V. (NL)** — use NL law / BTW / KvK on the legal pages. When the **Spanish S.L.** is ready, flip: company name, KvK→**CIF**, BTW→**IVA**, address→**Valencia**, jurisdiction→Spanish court, data authority→**AEPD**. **Do not pre-emptively switch** — the correct legal identity must stand until the transfer is legally complete.
- Values still needed before launch (the `<Fill>` placeholders): legal/trader name, **NIF/CIF, EU VAT, registered address, phone**, and confirmed **shipping rates / thresholds / delivery days**. Have a **gestor/lawyer** glance at it before going live.

## 7. Email

- La Capitana's contact form + newsletter are wired to **Resend** (`app/api/contact/route.ts` + `app/api/newsletter/route.ts`, dependency-free REST). **Pending:** Marco adds `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `RESEND_AUDIENCE_ID` to `.env.local`. Until then forms only log, they don't deliver. Until the domain is verified in Resend, `CONTACT_TO_EMAIL` must be the signup email and mail sends from `onboarding@resend.dev`.

## 8. Standards + open items on the La Capitana side

- **Production-quality bar.** This webshop is meant to become the **family's main income**, so no cut corners: end-to-end tested flows, real responsive/mobile, honest about what's still a prototype (payment, auth).
- Build was **paused** waiting on: **(1) the logo** (mom sending), **(2) connecting real Logic4 products**. Design/legal/i18n/cookies otherwise in good shape.

---

*Prepared from the Hooked Japan working session, 2026-09-28. Private family matters intentionally excluded.*
