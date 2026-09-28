// -----------------------------------------------------------------------------
// Shipstore — data layer
// -----------------------------------------------------------------------------
// This is the ONE swap-in point for the commerce backend. Right now the getters
// return curated placeholder data (English canonical + Dutch overlay). When the
// Logic4 catalogue has been imported into Shopify, switch these getters to the
// Shopify Storefront client in lib/shopify.ts — every page and component just
// calls getProducts(), getCategory(), etc. and never talks to a backend
// directly, so nothing in the UI has to be rebuilt. See lib/shopify.ts for the
// ready-to-use client and the mapper that turns a Shopify product into the
// Product shape below.
// -----------------------------------------------------------------------------

export type Tone = "ink" | "rust" | "sea" | "brass";

export type Category = {
  slug: string;
  name: string;
  tagline: string;
  icon: string; // Icon component key (see components/Icon.tsx)
  tone: Tone;
  blurb: string;
  image?: string; // e.g. "/categories/maintenance.jpg" (drop file in public/categories/)
};

export type Product = {
  slug: string;
  name: string;
  brand: string;
  category: string; // category slug
  price: number;
  oldPrice?: number;
  unit?: string;
  blurb: string;
  featured?: boolean;
  specs?: Record<string, string>;
};

export type Brand = { slug: string; name: string; note: string; description: string; logo?: string };

// Own-brand label. House-supplier stock (e.g. Hoenderop from the Logic4 export)
// is shown under this name so the sourcing channel stays private.
export const OWN_BRAND = "Shipstore";

// --- Categories (curated for the Dutch leisure boat & yacht market) ----------

export const categories: Category[] = [
  { slug: "onderhoud", name: "Maintenance", tagline: "Keep her looking new", icon: "droplet", tone: "sea", blurb: "Cleaners, polishes, antifouling and varnish from Hempel, Epifanes and Yachticon." },
  { slug: "elektro", name: "Electrical", tagline: "Power and light aboard", icon: "bolt", tone: "brass", blurb: "Marine cabling, shore power, navigation lighting and electrics." },
  { slug: "gereedschap", name: "Tools", tagline: "For jobs on the water", icon: "wrench", tone: "sea", blurb: "Marine tool kits, brushes, straps and lifting gear." },
  { slug: "machinekamer", name: "Engine Room", tagline: "Keep her running", icon: "gear", tone: "ink", blurb: "Pumps, hoses, clamps, oils and engine-room essentials." },
  { slug: "scheeps-benodigdheden", name: "Ship Supplies", tagline: "Everything for on board", icon: "anchor", tone: "rust", blurb: "Fenders, mooring lines, rope, blocks, flags and deck hardware." },
  { slug: "technisch", name: "Technical", tagline: "Systems & communication", icon: "radio", tone: "sea", blurb: "Nautic Talk hands-free headsets and onboard technical gear." },
  { slug: "veiligheid", name: "Safety", tagline: "Everyone home safe", icon: "buoy", tone: "rust", blurb: "Life jackets, fire safety, gloves and rescue equipment." },
];

// --- Brands ------------------------------------------------------------------

export const brands: Brand[] = [
  { slug: "hempel", name: "Hempel", note: "Antifouling & coatings", logo: "/brands/hempel.jpg", description: "Hempel is one of the world's leading marine coatings manufacturers. From self-polishing antifouling to primers, fillers and topside enamels, their range keeps a hull protected season after season in North Sea and inland waters." },
  { slug: "epifanes", name: "Epifanes", note: "Varnish & paint", logo: "/brands/epifanes.png", description: "Epifanes is a Dutch family manufacturer famous for the finest marine varnishes and paints. Their clear gloss varnish is the reference for teak and brightwork, prized for depth of shine and strong UV protection." },
  { slug: "sigma-coatings", name: "Sigma Coatings", note: "Coatings & antifouling", logo: "/brands/sigma.webp", description: "Sigma Coatings supplies durable marine and protective paints, from antifouling to primers and finishes. A trusted name for keeping steel, aluminium and GRP hulls protected against the water." },
  { slug: "sika", name: "Sika", note: "Sealants & adhesives", logo: "/brands/sika.avif", description: "Sika is a global leader in sealants and adhesives. Their marine-grade Sikaflex products bond and seal decks, fittings and joints with a flexible, waterproof hold that stands up to salt, sun and constant movement." },
  { slug: "zettex", name: "Zettex", note: "Sealants & cleaning", logo: "/brands/zettex.png", description: "Zettex is a Dutch manufacturer of high-performance sealants, MS-polymer adhesives and boat cleaning products. Reliable, professional-grade chemistry for building, bonding and maintaining a boat." },
  { slug: "3m", name: "3M", note: "Tapes & abrasives", logo: "/brands/3m.webp", description: "3M needs little introduction. On board it means dependable masking and mounting tapes, sanding abrasives, polishing compounds and adhesives, the finishing products professionals reach for." },
  { slug: "yachticon", name: "Yachticon", note: "Cleaning & care", logo: "/brands/yachticon.png", description: "Yachticon is a German specialist in boat care and cleaning. Cleaners, polishes, tank treatments and maintenance products made specifically for life on the water, keeping a boat fresh inside and out." },
  { slug: "americol", name: "Americol", note: "Cleaners & degreasers", logo: "/brands/americol.webp", description: "Americol makes powerful cleaning agents and degreasers for the toughest jobs on deck and in the engine room. Concentrated, effective and built for marine and industrial use." },
  { slug: "vikan", name: "Vikan", note: "Brushes & cleaning tools", logo: "/brands/vikan.png", description: "Vikan is a Danish maker of professional cleaning brushes and tools. Deck brushes, handles and accessories built to a hard-wearing standard that lasts far longer than supermarket gear." },
  { slug: "talamex", name: "Talamex", note: "Chandlery & hardware", logo: "/brands/talamex.png", description: "Talamex is a broad chandlery brand covering fenders, mooring lines, stainless hardware, lighting, pumps and inflatables. Solid, fair-priced equipment for the everyday jobs on any leisure boat." },
  { slug: "besto", name: "Besto", note: "Life jackets & safety", logo: "/brands/besto.webp", description: "Besto is a Dutch maker of life jackets and marine safety equipment with over a century of experience. Automatic and manual inflatables, buoyancy aids and safety gear, trusted kit for keeping everyone aboard safe." },
  { slug: "nautic-talk", name: "Nautic Talk", note: "Onboard communication", logo: "/brands/nautic-talk.jpg", description: "Nautic Talk builds wireless Bluetooth headset systems so skipper and crew can talk clearly and hands-free while docking, mooring and manoeuvring. A favourite for taking the stress out of coming alongside." },
];

// --- Products ----------------------------------------------------------------
// Curated real stock from the Logic4 export, the leisure/yacht-relevant items
// across the range. House-supplier items are shown under the Shipstore own
// brand. The full catalogue lands with the Shopify (Logic4-imported) backend.

export const products: Product[] = [
  // Onderhoud (Maintenance)
  { slug: "zettex-ship-cleaner-10l", name: "Zettex Ship Cleaner 10L", brand: "Zettex", category: "onderhoud", price: 33.73, unit: "per can", blurb: "Concentrated heavy-duty cleaner that lifts grime from hull, deck and waterline.", featured: true },
  { slug: "flat-brush-2in", name: "Flat Paint Brush 2\"", brand: OWN_BRAND, category: "onderhoud", price: 4.57, blurb: "A hard-wearing flat brush for varnish, primer and antifouling." },
  { slug: "foam-roller-10cm", name: "Foam Paint Roller 10cm (10 pcs)", brand: OWN_BRAND, category: "onderhoud", price: 1.09, unit: "per pack", blurb: "Fine foam mini-rollers for a smooth finish on small areas." },

  // Elektro (Electrical)
  { slug: "nav-bulb-bay15d-28v", name: "Navigation Bulb BAY15D 25W 28V", brand: OWN_BRAND, category: "elektro", price: 3.15, blurb: "Replacement bayonet bulb for navigation lights, 24 to 28V." },
  { slug: "dhr-sealed-beam-par64", name: "DHR Sealed Beam PAR64 230V 1000W", brand: "DHR", category: "elektro", price: 70.85, blurb: "High-output sealed-beam lamp for searchlights and deck floods.", featured: true },
  { slug: "cee-shore-plug-16a", name: "CEE Shore Power Plug 16A", brand: OWN_BRAND, category: "elektro", price: 13.79, blurb: "IP44 CEE connector for shore-power hook-up at the marina." },

  // Gereedschap (Tools)
  { slug: "lifting-sling-1t-3m", name: "Round Lifting Sling 1T 3m", brand: "Pro lift", category: "gereedschap", price: 16.52, blurb: "One-tonne round sling for lifting, recovery and mast work." },
  { slug: "ratchet-strap-9m", name: "Ratchet Tie-Down Strap 25mm x 9m", brand: OWN_BRAND, category: "gereedschap", price: 27.71, blurb: "Ratchet strap for securing gear, tenders and deck cargo." },
  { slug: "wire-cup-brush-115", name: "Wire Cup Brush 115mm", brand: OWN_BRAND, category: "gereedschap", price: 17.41, blurb: "Twist-knot cup brush for angle grinders, for rust and paint prep." },

  // Machinekamer (Engine Room)
  { slug: "pvc-suction-hose-25", name: "PVC Suction Hose 25mm", brand: OWN_BRAND, category: "machinekamer", price: 3.63, unit: "per m", blurb: "Reinforced suction hose for bilge, water and transfer pumps." },
  { slug: "jerrycan-siphon-pump", name: "Jerrycan Siphon Pump", brand: OWN_BRAND, category: "machinekamer", price: 5.75, blurb: "Simple hand siphon for moving fuel or water from a jerrycan." },
  { slug: "ss-hose-clamp-25-40", name: "Stainless Hose Clamp 25-40mm", brand: OWN_BRAND, category: "machinekamer", price: 2.53, blurb: "A4 stainless worm-drive clamp that stands up to salt air." },

  // Scheeps benodigdheden (Ship Supplies)
  { slug: "orka-hmpe-rope-24mm", name: "Orka HMPE Rope 24mm", brand: "Orka", category: "scheeps-benodigdheden", price: 22.02, unit: "per m", blurb: "High-strength HMPE line, rated to 486 kN, for halyards, sheets and heavy loads." },
  { slug: "ss316-carabiner-120", name: "Stainless 316 Carabiner Hook 120mm", brand: OWN_BRAND, category: "scheeps-benodigdheden", price: 10.89, blurb: "Marine-grade A4 stainless carabiner for gear, lines and safety clips." },
  { slug: "nylon-block-single-25", name: "Single Nylon Block 25mm", brand: OWN_BRAND, category: "scheeps-benodigdheden", price: 2.24, blurb: "Light single-sheave block for control lines and small tackle." },
  { slug: "talamex-mooring-line-10", name: "Talamex Mooring Line 10mm", brand: "Talamex", category: "scheeps-benodigdheden", price: 1.0, unit: "per m", blurb: "Black PPM mooring line, sold by the metre, soft and easy on the hands." },
  { slug: "talamex-mooring-line-12", name: "Talamex Mooring Line 12mm", brand: "Talamex", category: "scheeps-benodigdheden", price: 1.35, unit: "per m", blurb: "Heavier 12mm black PPM mooring line for larger boats, sold by the metre." },
  { slug: "fender-12x100", name: "Fender 12x11x100cm", brand: OWN_BRAND, category: "scheeps-benodigdheden", price: 13.85, blurb: "Compact hanging fender that protects the topsides at the quay.", featured: true },
  { slug: "orka-fender-rope-18", name: "Orka Fender Rope 18mm x 50m", brand: "Orka", category: "scheeps-benodigdheden", price: 61.23, unit: "per roll", blurb: "Traditional fender rope for making up your own fenders and rubbing gear." },
  { slug: "dutch-ensign-30x45", name: "Dutch Ensign 30x45cm", brand: OWN_BRAND, category: "scheeps-benodigdheden", price: 4.3, blurb: "Woven courtesy ensign for Dutch-flagged boats." },
  { slug: "dressing-line-10m", name: "Dressing Line 10m", brand: OWN_BRAND, category: "scheeps-benodigdheden", price: 9.14, blurb: "Red-white-blue dressing line to dress ship on a special day." },

  // Technisch (Technical / Communication)
  { slug: "nautic-talk-duo", name: "Nautic Talk Duo Headset System", brand: "Nautic Talk", category: "technisch", price: 258.26, oldPrice: 312.49, unit: "set", blurb: "Hands-free Bluetooth headset pair for stress-free communication when mooring and manoeuvring.", featured: true },
  { slug: "nautic-talk-solo", name: "Nautic Talk Solo Headset", brand: "Nautic Talk", category: "technisch", price: 179.0, blurb: "Single-headset add-on for the Nautic Talk system." },

  // Veiligheid (Safety)
  { slug: "besto-lifejacket-165n", name: "Besto Automatic Life Jacket 165N", brand: "Besto", category: "veiligheid", price: 114.22, blurb: "Automatic inflatable life jacket with 165N of buoyancy, comfortable all day.", featured: true },
  { slug: "marinepool-300n-offshore", name: "MarinePool Automatic Life Jacket 300N Offshore", brand: "MarinePool", category: "veiligheid", price: 216.95, blurb: "Heavy-duty 300N offshore life jacket with harness, for serious passages." },
  { slug: "besto-dog-lifejacket-m", name: "Besto Dog Life Jacket M (8-15kg)", brand: "Besto", category: "veiligheid", price: 27.47, blurb: "Buoyancy aid for dogs, with a grab handle to lift them back aboard." },
  { slug: "fire-extinguisher-powder-2kg", name: "Fire Extinguisher Powder 2kg", brand: OWN_BRAND, category: "veiligheid", price: 44.04, blurb: "Compact 2kg ABC powder extinguisher with a mounting bracket." },
  { slug: "fire-blanket-100", name: "Fire Blanket 100x100cm", brand: OWN_BRAND, category: "veiligheid", price: 30.49, blurb: "Galley fire blanket for smothering flames fast." },
  { slug: "winter-pvc-gloves", name: "Winter PVC Gloves", brand: OWN_BRAND, category: "veiligheid", price: 16.58, unit: "per pair", blurb: "Warm, waterproof PVC gloves for cold, wet work on deck." },
  { slug: "nitrile-grip-gloves", name: "Nitrile Grip Gloves", brand: "Psp", category: "veiligheid", price: 3.15, unit: "per pair", blurb: "All-round nitrile-coated gloves with a secure grip for lines and tools." },
];

// --- Dutch overrides ---------------------------------------------------------
// English arrays above stay the canonical data (and the shape a real backend
// will fill). These maps translate the visible fields for the "nl" locale.
// Product model numbers / brand product names are left as-is.

const nlCategory: Record<string, { name: string; tagline: string; blurb: string }> = {
  onderhoud: { name: "Onderhoud", tagline: "Houd haar als nieuw", blurb: "Reinigers, poetsmiddelen, antifouling en lak van Hempel, Epifanes en Yachticon." },
  elektro: { name: "Elektro", tagline: "Stroom en licht aan boord", blurb: "Scheepskabel, walstroom, navigatieverlichting en elektra." },
  gereedschap: { name: "Gereedschap", tagline: "Voor klussen op het water", blurb: "Scheepsgereedschap, borstels, spanbanden en hijsmiddelen." },
  machinekamer: { name: "Machinekamer", tagline: "Houd haar draaiend", blurb: "Pompen, slangen, klemmen, oliën en essentials voor de machinekamer." },
  "scheeps-benodigdheden": { name: "Scheeps benodigdheden", tagline: "Alles voor aan boord", blurb: "Stootwillen, meerlijnen, touw, blokken, vlaggen en dekbeslag." },
  technisch: { name: "Technisch", tagline: "Systemen & communicatie", blurb: "Nautic Talk handsfree headsets en technische uitrusting aan boord." },
  veiligheid: { name: "Veiligheid", tagline: "Iedereen veilig thuis", blurb: "Reddingsvesten, brandbeveiliging, handschoenen en reddingsmateriaal." },
};

const nlBrandNote: Record<string, string> = {
  Hempel: "Antifouling & coatings",
  Epifanes: "Lak & verf",
  "Sigma Coatings": "Coatings & antifouling",
  Sika: "Kit & lijmen",
  Zettex: "Kit & reiniging",
  "3M": "Tape & schuurmiddelen",
  Yachticon: "Reiniging & verzorging",
  Americol: "Reinigers & ontvetters",
  Vikan: "Borstels & schoonmaakgerei",
  Talamex: "Scheepsartikelen & beslag",
  Besto: "Reddingsvesten & veiligheid",
  "Nautic Talk": "Communicatie aan boord",
};

const nlBrandDescription: Record<string, string> = {
  Hempel: "Hempel is een van 's werelds toonaangevende fabrikanten van scheepscoatings. Van zelfslijpende antifouling tot primers, plamuur en aflakken houdt hun assortiment de romp seizoen na seizoen beschermd op de Noordzee en het binnenwater.",
  Epifanes: "Epifanes is een Nederlandse familiefabrikant, beroemd om de fijnste scheepslakken en -verven. Hun blanke glanslak is de referentie voor teak en brightwork, geliefd om de diepe glans en sterke uv-bescherming.",
  "Sigma Coatings": "Sigma Coatings levert duurzame scheeps- en beschermingsverven, van antifouling tot primers en aflakken. Een vertrouwde naam om stalen, aluminium en polyester rompen beschermd te houden tegen het water.",
  Sika: "Sika is wereldleider in kit en lijmen. De Sikaflex-producten in marinekwaliteit lijmen en dichten dekken, beslag en naden met een flexibele, waterdichte hechting die bestand is tegen zout, zon en constante beweging.",
  Zettex: "Zettex is een Nederlandse fabrikant van hoogwaardige kitten, MS-polymeerlijmen en bootreinigingsproducten. Betrouwbare chemie van professionele kwaliteit voor het bouwen, lijmen en onderhouden van een boot.",
  "3M": "3M heeft weinig introductie nodig. Aan boord betekent het betrouwbare afplak- en montagetape, schuurmiddelen, polijstpasta's en lijmen, de afwerkproducten waar professionals naar grijpen.",
  Yachticon: "Yachticon is een Duitse specialist in bootverzorging en reiniging. Reinigers, poetsmiddelen, tankbehandelingen en onderhoudsproducten speciaal gemaakt voor het leven op het water, om een boot van binnen en buiten fris te houden.",
  Americol: "Americol maakt krachtige reinigingsmiddelen en ontvetters voor de zwaarste klussen op dek en in de motorruimte. Geconcentreerd, effectief en gebouwd voor maritiem en industrieel gebruik.",
  Vikan: "Vikan is een Deense maker van professionele schoonmaakborstels en -gereedschap. Dekborstels, stelen en accessoires die veel langer meegaan dan spullen uit de supermarkt.",
  Talamex: "Talamex is een breed scheepsartikelenmerk met stootwillen, meerlijnen, rvs-beslag, verlichting, pompen en rubberboten. Solide, eerlijk geprijsde uitrusting voor de dagelijkse klussen op elke pleziervaart.",
  Besto: "Besto maakt al meer dan een eeuw reddingsvesten en maritieme veiligheidsuitrusting. Automatische en handmatige opblaasbare vesten, zwemhulpmiddelen en veiligheidsspullen, vertrouwd om iedereen aan boord veilig te houden.",
  "Nautic Talk": "Nautic Talk bouwt draadloze Bluetooth-headsetsystemen zodat schipper en bemanning helder en handsfree kunnen praten tijdens het afmeren en manoeuvreren. Een favoriet om het langszij komen stressvrij te maken.",
};

const nlUnit: Record<string, string> = {
  "per tin": "per blik",
  "per can": "per can",
  "per m": "per m",
  "per pack": "per pak",
  "per roll": "per rol",
  set: "set",
  "per pair": "per paar",
};

const nlProduct: Record<string, { name: string; blurb: string }> = {
  "zettex-ship-cleaner-10l": { name: "Zettex Scheepsreiniger 10L", blurb: "Geconcentreerde krachtreiniger die vuil van romp, dek en waterlijn tilt." },
  "flat-brush-2in": { name: "Platte kwast 2\"", blurb: "Een stevige platte kwast voor lak, primer en antifouling." },
  "foam-roller-10cm": { name: "Schuimroller 10cm (10 st)", blurb: "Fijne schuim-minirollers voor een gladde afwerking op kleine vlakken." },
  "orka-hmpe-rope-24mm": { name: "Orka HMPE touw 24mm", blurb: "Hoogsterk HMPE-lijn, tot 486 kN, voor vallen, schoten en zware lasten." },
  "ss316-carabiner-120": { name: "RVS 316 karabijnhaak 120mm", blurb: "A4 rvs karabijnhaak in marinekwaliteit voor uitrusting, lijnen en veiligheidsklemmen." },
  "nylon-block-single-25": { name: "Enkel nylon blok 25mm", blurb: "Licht enkelschijfs blok voor controlelijnen en klein takelwerk." },
  "talamex-mooring-line-10": { name: "Talamex meerlijn 10mm", blurb: "Zwarte PPM-meerlijn, per meter, soepel en prettig in de hand." },
  "talamex-mooring-line-12": { name: "Talamex meerlijn 12mm", blurb: "Zwaardere 12mm zwarte PPM-meerlijn voor grotere boten, per meter." },
  "fender-12x100": { name: "Stootwil 12x11x100cm", blurb: "Compacte hangende stootwil die de gangboorden beschermt aan de kade." },
  "orka-fender-rope-18": { name: "Orka stootwiltouw 18mm x 50m", blurb: "Traditioneel stootwiltouw om zelf stootwillen en schavielijnen te maken." },
  "nav-bulb-bay15d-28v": { name: "Navigatielamp BAY15D 25W 28V", blurb: "Vervangende bajonetlamp voor navigatielichten, 24 tot 28V." },
  "dhr-sealed-beam-par64": { name: "DHR Sealed Beam PAR64 230V 1000W", blurb: "Krachtige sealed-beam lamp voor zoeklichten en deklampen." },
  "cee-shore-plug-16a": { name: "CEE walstroomstekker 16A", blurb: "IP44 CEE-connector voor walstroomaansluiting in de haven." },
  "pvc-suction-hose-25": { name: "PVC zuigslang 25mm", blurb: "Versterkte zuigslang voor bilge-, water- en overpompen." },
  "jerrycan-siphon-pump": { name: "Jerrycan hevelpomp", blurb: "Eenvoudige handhevel om brandstof of water uit een jerrycan te pompen." },
  "ss-hose-clamp-25-40": { name: "RVS slangklem 25-40mm", blurb: "A4 rvs wormschroefklem die bestand is tegen zilte lucht." },
  "besto-lifejacket-165n": { name: "Besto Automatisch Reddingsvest 165N", blurb: "Automatisch opblaasbaar reddingsvest met 165N drijfvermogen, de hele dag comfortabel." },
  "marinepool-300n-offshore": { name: "MarinePool Automatisch Vest 300N Offshore", blurb: "Zwaar 300N offshore-vest met harnas, voor serieuze overtochten." },
  "besto-dog-lifejacket-m": { name: "Besto Hondenreddingsvest M (8-15kg)", blurb: "Zwemhulp voor honden, met handvat om ze weer aan boord te tillen." },
  "fire-extinguisher-powder-2kg": { name: "Poederblusser 2kg", blurb: "Compacte 2kg ABC-poederblusser met montagebeugel." },
  "fire-blanket-100": { name: "Blusdeken 100x100cm", blurb: "Blusdeken voor de kombuis om vlammen snel te doven." },
  "nautic-talk-duo": { name: "Nautic Talk Duo headsetsysteem", blurb: "Handsfree Bluetooth-headsetpaar voor stressvrije communicatie bij afmeren en manoeuvreren." },
  "nautic-talk-solo": { name: "Nautic Talk Solo headset", blurb: "Losse headset als uitbreiding op het Nautic Talk-systeem." },
  "winter-pvc-gloves": { name: "Winter PVC-handschoenen", blurb: "Warme, waterdichte PVC-handschoenen voor koud, nat werk op dek." },
  "nitrile-grip-gloves": { name: "Nitril grip-handschoenen", blurb: "Allround nitril-gecoate handschoenen met stevige grip voor lijnen en gereedschap." },
  "dutch-ensign-30x45": { name: "Nederlandse vlag 30x45cm", blurb: "Geweven vlag voor boten onder Nederlandse vlag." },
  "dressing-line-10m": { name: "Pavoiseerlijn 10m", blurb: "Rood-wit-blauwe vlaggenlijn om te pavoiseren op een bijzondere dag." },
  "lifting-sling-1t-3m": { name: "Rondstrop 1T 3m", blurb: "Rondstrop van 1 ton voor hijsen, bergen en mastwerk." },
  "ratchet-strap-9m": { name: "Spanband met ratel 25mm x 9m", blurb: "Spanband met ratel voor het vastzetten van uitrusting, bijboot en deklading." },
  "wire-cup-brush-115": { name: "Draadkomstaalborstel 115mm", blurb: "Getwiste komborstel voor haakse slijpers, voor roest en verfvoorbereiding." },
};

const productSpecs: Record<string, Record<string, string>> = {
  "besto-lifejacket-165n": { Buoyancy: "165 N", Type: "Automatic", Fit: "Adult" },
  "marinepool-300n-offshore": { Buoyancy: "300 N", Type: "Automatic offshore", Harness: "Integrated" },
  "dhr-sealed-beam-par64": { Voltage: "230 V", Power: "1000 W", Fitting: "PAR64" },
  "orka-hmpe-rope-24mm": { Diameter: "24 mm", "Break load": "486 kN", Material: "HMPE" },
  "nautic-talk-duo": { Range: "up to 1000 m", "Talk time": "10 h", Users: "2", Rating: "Waterproof" },
  "zettex-ship-cleaner-10l": { Volume: "10 L", Form: "Concentrate" },
  "talamex-mooring-line-10": { Diameter: "10 mm", Material: "PPM", Colour: "Black" },
  "besto-dog-lifejacket-m": { Size: "M", "Dog weight": "8 to 15 kg", Handle: "Yes" },
};

const nlSpecLabel: Record<string, string> = {
  Buoyancy: "Drijfvermogen",
  Type: "Type",
  Fit: "Maat",
  Harness: "Harnas",
  Voltage: "Spanning",
  Power: "Vermogen",
  Fitting: "Fitting",
  Diameter: "Diameter",
  "Break load": "Breeklast",
  Material: "Materiaal",
  Range: "Bereik",
  "Talk time": "Spreektijd",
  Users: "Gebruikers",
  Rating: "Bescherming",
  Volume: "Inhoud",
  Form: "Vorm",
  Colour: "Kleur",
  Size: "Maat",
  "Dog weight": "Gewicht hond",
  Handle: "Handvat",
};

const nlSpecValue: Record<string, string> = {
  Automatic: "Automatisch",
  "Automatic offshore": "Automatisch offshore",
  Adult: "Volwassene",
  Integrated: "Geïntegreerd",
  Concentrate: "Concentraat",
  Black: "Zwart",
  Waterproof: "Waterdicht",
  Yes: "Ja",
  "up to 1000 m": "tot 1000 m",
  "8 to 15 kg": "8 tot 15 kg",
};

function localizeSpecs(specs: Record<string, string>, locale?: string): Record<string, string> {
  if (locale !== "nl") return specs;
  return Object.fromEntries(
    Object.entries(specs).map(([k, v]) => [nlSpecLabel[k] ?? k, nlSpecValue[v] ?? v])
  );
}

function localizeCategory(c: Category, locale?: string): Category {
  if (locale !== "nl") return c;
  const o = nlCategory[c.slug];
  return o ? { ...c, name: o.name, tagline: o.tagline, blurb: o.blurb } : c;
}

function localizeProduct(p: Product, locale?: string): Product {
  const rawSpecs = productSpecs[p.slug];
  const specs = rawSpecs ? localizeSpecs(rawSpecs, locale) : undefined;
  if (locale !== "nl") return specs ? { ...p, specs } : p;
  const o = nlProduct[p.slug];
  const unit = p.unit ? nlUnit[p.unit] ?? p.unit : p.unit;
  const base = o ? { ...p, name: o.name, blurb: o.blurb, unit } : { ...p, unit };
  return specs ? { ...base, specs } : base;
}

// -----------------------------------------------------------------------------
// Data access — the ONLY functions the UI calls. Swap these for the Shopify
// Storefront client (lib/shopify.ts) once the Logic4 catalogue is imported; the
// rest of the site does not change. Pass the active locale to get localized
// names, blurbs and units.
// -----------------------------------------------------------------------------

export function getCategories(locale?: string): Category[] {
  return categories.map((c) => localizeCategory(c, locale));
}

export function getCategory(slug: string, locale?: string): Category | undefined {
  const c = categories.find((c) => c.slug === slug);
  return c ? localizeCategory(c, locale) : undefined;
}

export function getProducts(locale?: string): Product[] {
  return products.map((p) => localizeProduct(p, locale));
}

export function getProductsByCategory(slug: string, locale?: string): Product[] {
  return products.filter((p) => p.category === slug).map((p) => localizeProduct(p, locale));
}

export function getProductsByBrand(brand: string, locale?: string): Product[] {
  return products.filter((p) => p.brand === brand).map((p) => localizeProduct(p, locale));
}

// Bilingual search index for a product: combines EN + NL name/blurb, brand,
// and both category names, so search works regardless of the active language.
function buildSearchText(p: Product): string {
  const nl = nlProduct[p.slug];
  const catEn = categories.find((c) => c.slug === p.category)?.name ?? "";
  const catNl = nlCategory[p.category]?.name ?? "";
  return [p.name, p.brand, p.blurb, nl?.name, nl?.blurb, catEn, catNl]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

export function searchProducts(query: string, locale?: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return products.filter((p) => buildSearchText(p).includes(q)).map((p) => localizeProduct(p, locale));
}

// Lightweight list for the header search dropdown: localized display fields
// plus a bilingual search string to filter against.
export type SearchItem = { slug: string; name: string; brand: string; price: number; search: string };

export function getSearchItems(locale?: string): SearchItem[] {
  return products.map((p) => {
    const l = localizeProduct(p, locale);
    return { slug: p.slug, name: l.name, brand: l.brand, price: l.price, search: buildSearchText(p) };
  });
}

export function getProduct(slug: string, locale?: string): Product | undefined {
  const p = products.find((p) => p.slug === slug);
  return p ? localizeProduct(p, locale) : undefined;
}

export function getFeaturedProducts(locale?: string): Product[] {
  return products.filter((p) => p.featured).map((p) => localizeProduct(p, locale));
}

function localizeBrand(b: Brand, locale?: string): Brand {
  if (locale !== "nl") return b;
  return {
    ...b,
    note: nlBrandNote[b.name] ?? b.note,
    description: nlBrandDescription[b.name] ?? b.description,
  };
}

export function getBrands(locale?: string): Brand[] {
  return brands.map((b) => localizeBrand(b, locale));
}

export function getBrand(slug: string, locale?: string): Brand | undefined {
  const b = brands.find((x) => x.slug === slug);
  return b ? localizeBrand(b, locale) : undefined;
}

export function toneBg(tone: Tone): string {
  switch (tone) {
    case "rust":
      return "bg-rust";
    case "sea":
      return "bg-sea";
    case "brass":
      return "bg-brass";
    default:
      return "bg-ink";
  }
}

export function formatPrice(value: number, locale?: string): string {
  const n = value.toFixed(2).replace(".", ",");
  return `€${n}`;
}
