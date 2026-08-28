// -----------------------------------------------------------------------------
// La Capitana — data layer
// -----------------------------------------------------------------------------
// This is the ONE swap-in point for the commerce backend. Right now everything
// returns local placeholder data. When the backend is chosen (Shopify, Odoo, or
// both), only the functions at the bottom of this file need to change — every
// page and component just calls getProducts(), getCategory(), etc. and never
// talks to a backend directly. Nothing in the UI has to be rebuilt.
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
};

export type Brand = { name: string; note: string; logo?: string };

// --- Categories (curated for the Spain leisure boat & yacht market) ----------

export const categories: Category[] = [
  { slug: "maintenance", name: "Maintenance & Care", tagline: "Keep her looking new", icon: "droplet", tone: "sea", blurb: "Cleaners, polishes, antifouling and varnish from Hempel, Epifanes and Yachticon." },
  { slug: "deck-hardware", name: "Deck & Hardware", tagline: "Built to last at sea", icon: "link", tone: "ink", blurb: "Cleats, shackles, stainless fittings and rope for every deck." },
  { slug: "mooring-fenders", name: "Mooring & Fenders", tagline: "Come alongside easy", icon: "anchor", tone: "rust", blurb: "Yacht fenders, mooring lines and bollards sized for leisure boats." },
  { slug: "electrical-lighting", name: "Electrical & Lighting", tagline: "Power and visibility", icon: "bolt", tone: "brass", blurb: "Marine batteries, tinned cabling and navigation lighting." },
  { slug: "engine-bilge", name: "Engine & Bilge", tagline: "Keep her running", icon: "gear", tone: "ink", blurb: "Pumps, oils, grease, belts and engine-room essentials." },
  { slug: "safety-rescue", name: "Safety & Rescue", tagline: "Everyone home safe", icon: "buoy", tone: "rust", blurb: "Life jackets, flares, first aid and fire safety." },
  { slug: "electronics-comms", name: "Electronics & Comms", tagline: "Stay connected aboard", icon: "radio", tone: "sea", blurb: "Nautic Talk headset systems, binoculars and onboard electronics." },
  { slug: "clothing", name: "Foul-Weather & Kit", tagline: "Dress for the Med", icon: "umbrella", tone: "ink", blurb: "Sailing jackets, boots, gloves and rain gear." },
  { slug: "flags-accessories", name: "Flags & Accessories", tagline: "The finishing touches", icon: "flag", tone: "brass", blurb: "Courtesy flags, poles, cabin and decoration." },
  { slug: "tools", name: "Tools", tagline: "For jobs on the water", icon: "wrench", tone: "sea", blurb: "Marine tool kits, covers, tarpaulins and lifting straps." },
  { slug: "fishing", name: "Fishing", tagline: "Right at the Turia mouth", icon: "fish", tone: "rust", blurb: "Rods, reels and lures for lubina, boat and Mediterranean fishing." },
];

// --- Brands ------------------------------------------------------------------

export const brands: Brand[] = [
  { name: "Hempel", note: "Antifouling & coatings" },
  { name: "Epifanes", note: "Varnish & paint", logo: "/brands/epifanes.png" },
  { name: "Sika", note: "Sealants & adhesives" },
  { name: "3M", note: "Tapes & abrasives" },
  { name: "Yachticon", note: "Cleaning & care", logo: "/brands/yachticon.png" },
  { name: "Talamex", note: "Chandlery & hardware" },
  { name: "Besto", note: "Life jackets & safety" },
  { name: "Nautic Talk", note: "Onboard communication" },
];

// --- Products (placeholder catalogue) ----------------------------------------

export const products: Product[] = [
  // Maintenance & Care
  { slug: "hempel-cream-cleaner-500", name: "Hempel Cream Cleaner 500ml", brand: "Hempel", category: "maintenance", price: 14.95, blurb: "Gentle abrasive cream that lifts dirt and dull film from gelcoat without scratching." },
  { slug: "epifanes-clear-varnish-1l", name: "Epifanes Clear Gloss Varnish 1L", brand: "Epifanes", category: "maintenance", price: 39.5, blurb: "The benchmark high-gloss varnish for brightwork, with strong UV protection." },
  { slug: "hempel-mille-antifouling-25l", name: "Hempel Mille NCT Antifouling 2.5L", brand: "Hempel", category: "maintenance", price: 89.95, oldPrice: 99.95, unit: "per tin", blurb: "Self-polishing antifouling that keeps the hull clean through a Mediterranean season.", featured: true },
  { slug: "zettex-ship-cleaner-10l", name: "Zettex Ship Cleaner 10L", brand: "Zettex", category: "maintenance", price: 29.35, unit: "per can", blurb: "Heavy-duty concentrated cleaner for hull, deck and waterline." },

  // Deck & Hardware
  { slug: "talamex-ss-cleat-150", name: "Stainless Steel Cleat 150mm", brand: "Talamex", category: "deck-hardware", price: 18.5, blurb: "Polished A4 stainless cleat for mooring and fender lines." },
  { slug: "bow-shackle-a4-10", name: "Bow Shackle A4 Stainless 10mm", brand: "La Capitana", category: "deck-hardware", price: 4.75, blurb: "Marine-grade stainless shackle for rigging and ground tackle." },
  { slug: "vikan-deck-brush-25", name: "Vikan Deck Brush + Bumper 25cm", brand: "Vikan", category: "deck-hardware", price: 33.5, oldPrice: 40.54, blurb: "Stiff-bristle deck brush with a rubber bumper to protect the topsides." },

  // Mooring & Fenders
  { slug: "talamex-fender-a3", name: "Talamex Fender A-Series 15x56cm", brand: "Talamex", category: "mooring-fenders", price: 24.95, blurb: "Inflatable yacht fender that shrugs off marina walls and rafting.", featured: true },
  { slug: "mooring-line-14mm-10m", name: "Mooring Line 14mm x 10m", brand: "Talamex", category: "mooring-fenders", price: 27.5, unit: "per line", blurb: "Pre-spliced navy polyester mooring line with a soft eye." },
  { slug: "fender-line-set", name: "Fender Line Set (2 pcs)", brand: "La Capitana", category: "mooring-fenders", price: 9.95, blurb: "Two adjustable fender lines, ready to hang." },

  // Electrical & Lighting
  { slug: "led-nav-light-bicolour", name: "LED Navigation Light Bicolour", brand: "Talamex", category: "electrical-lighting", price: 34.9, blurb: "Low-draw bicolour bow light, rail or surface mount." },
  { slug: "agm-battery-100ah", name: "AGM Marine Battery 100Ah", brand: "La Capitana", category: "electrical-lighting", price: 189.0, blurb: "Sealed AGM service battery, maintenance-free and deep-cycle capable." },
  { slug: "tinned-cable-25-10m", name: "Marine Tinned Cable 2.5mm² x 10m", brand: "La Capitana", category: "electrical-lighting", price: 19.95, unit: "per roll", blurb: "Tinned-copper cable that stands up to a salt-air environment." },

  // Engine & Bilge
  { slug: "bilge-pump-2000", name: "Bilge Pump 12V 2000 GPH", brand: "Talamex", category: "engine-bilge", price: 49.95, blurb: "Compact submersible bilge pump with a high flow rate." },
  { slug: "yachticon-bio-grease", name: "Yachticon Bio Grease Cartridge", brand: "Yachticon", category: "engine-bilge", price: 11.5, blurb: "Biodegradable marine grease for stern gear and fittings." },
  { slug: "impeller-service-kit", name: "Impeller Service Kit", brand: "La Capitana", category: "engine-bilge", price: 24.95, blurb: "Impeller plus gasket and O-rings for a quick raw-water pump service." },

  // Safety & Rescue
  { slug: "besto-lifejacket-150n", name: "Besto Automatic Life Jacket 150N", brand: "Besto", category: "safety-rescue", price: 89.0, blurb: "Automatic inflatable life jacket, comfortable enough to wear all day.", featured: true },
  { slug: "fire-extinguisher-2kg", name: "Fire Extinguisher 2kg ABC", brand: "La Capitana", category: "safety-rescue", price: 27.5, blurb: "Compact ABC powder extinguisher with a mounting bracket." },
  { slug: "handheld-flare-kit", name: "Handheld Flare Kit", brand: "La Capitana", category: "safety-rescue", price: 44.95, blurb: "Coastal flare pack for the grab bag." },

  // Electronics & Comms
  { slug: "nautic-talk-duo", name: "Nautic Talk Duo Headset System", brand: "Nautic Talk", category: "electronics-comms", price: 258.26, oldPrice: 312.49, unit: "set", blurb: "Hands-free Bluetooth headset pair for stress-free communication when mooring and manoeuvring.", featured: true },
  { slug: "nautic-talk-solo", name: "Nautic Talk Solo Headset", brand: "Nautic Talk", category: "electronics-comms", price: 179.0, blurb: "Single-headset version of the Nautic Talk system." },
  { slug: "binoculars-7x50", name: "Marine Binoculars 7x50", brand: "La Capitana", category: "electronics-comms", price: 69.95, blurb: "Waterproof 7x50 binoculars with a built-in compass." },

  // Foul-Weather & Kit
  { slug: "offshore-jacket", name: "Offshore Sailing Jacket", brand: "La Capitana", category: "clothing", price: 149.0, blurb: "Breathable, fully waterproof offshore jacket with a high fleece-lined collar." },
  { slug: "deck-gloves", name: "Deck Gloves", brand: "La Capitana", category: "clothing", price: 14.95, unit: "per pair", blurb: "Grippy short-finger gloves for lines and winches." },
  { slug: "sailing-boots", name: "Sailing Boots", brand: "La Capitana", category: "clothing", price: 59.95, blurb: "Non-slip, warm-lined boots for wet decks." },

  // Flags & Accessories
  { slug: "spanish-courtesy-flag", name: "Spanish Courtesy Flag 30x45cm", brand: "La Capitana", category: "flags-accessories", price: 9.5, blurb: "Woven courtesy ensign for cruising Spanish waters." },
  { slug: "ss-flag-pole-60", name: "Stainless Flag Pole 60cm", brand: "Talamex", category: "flags-accessories", price: 22.9, blurb: "Polished stainless flag staff with a rail clamp." },

  // Tools
  { slug: "marine-tool-kit-30", name: "Marine Tool Kit 30pc", brand: "La Capitana", category: "tools", price: 49.95, blurb: "Corrosion-resistant essentials in a compact roll." },
  { slug: "boat-cover-4x6", name: "Boat Cover Tarpaulin 4x6m", brand: "La Capitana", category: "tools", price: 39.95, blurb: "Heavy-duty breathable cover with reinforced eyelets." },

  // Fishing
  { slug: "shore-spinning-rod-80", name: "Shore Spinning Rod 8'0\" 10-30g", brand: "La Capitana", category: "fishing", price: 99.0, blurb: "Crisp, fast shore rod built for lubina at the Turia mouth.", featured: true },
  { slug: "saltwater-reel-4000", name: "Saltwater Spinning Reel 4000", brand: "La Capitana", category: "fishing", price: 119.0, blurb: "Sealed, salt-ready spinning reel with a smooth drag." },
  { slug: "lubina-lure-set", name: "Lubina Lure Set (5 pcs)", brand: "La Capitana", category: "fishing", price: 29.95, blurb: "A hand-picked set of hard and soft lures for Mediterranean sea bass." },
];

// --- Spanish overrides -------------------------------------------------------
// English arrays above stay the canonical data (and the shape a real backend
// will fill). These maps translate the visible fields for the "es" locale.
// Product model numbers / brand product names are left as-is.

const esCategory: Record<string, { name: string; tagline: string; blurb: string }> = {
  maintenance: { name: "Mantenimiento y cuidado", tagline: "Que luzca como nueva", blurb: "Limpiadores, pulimentos, antifouling y barniz de Hempel, Epifanes y Yachticon." },
  "deck-hardware": { name: "Cubierta y herrajes", tagline: "Hecho para durar en el mar", blurb: "Cornamusas, grilletes, herrajes inoxidables y cabo para cada cubierta." },
  "mooring-fenders": { name: "Amarre y defensas", tagline: "Atraca con facilidad", blurb: "Defensas de yate, cabos de amarre y norays para embarcaciones de recreo." },
  "electrical-lighting": { name: "Electricidad e iluminación", tagline: "Energía y visibilidad", blurb: "Baterías marinas, cableado estañado e iluminación de navegación." },
  "engine-bilge": { name: "Motor y sentina", tagline: "Que siga en marcha", blurb: "Bombas, aceites, grasa, correas y esenciales de sala de máquinas." },
  "safety-rescue": { name: "Seguridad y rescate", tagline: "Todos a casa a salvo", blurb: "Chalecos salvavidas, bengalas, botiquín y protección contra incendios." },
  "electronics-comms": { name: "Electrónica y comunicaciones", tagline: "Conectados a bordo", blurb: "Sistemas de auriculares Nautic Talk, prismáticos y electrónica de a bordo." },
  clothing: { name: "Ropa de agua y equipo", tagline: "Vístete para el Mediterráneo", blurb: "Chaquetas de vela, botas, guantes y ropa de lluvia." },
  "flags-accessories": { name: "Banderas y accesorios", tagline: "Los últimos detalles", blurb: "Banderas de cortesía, mástiles, cabina y decoración." },
  tools: { name: "Herramientas", tagline: "Para las tareas del barco", blurb: "Juegos de herramientas marinas, fundas, lonas y eslingas." },
  fishing: { name: "Pesca", tagline: "Junto a la desembocadura del Turia", blurb: "Cañas, carretes y señuelos para lubina, pesca desde barco y del Mediterráneo." },
};

const esBrandNote: Record<string, string> = {
  Hempel: "Antifouling y pinturas",
  Epifanes: "Barnices y pintura",
  Sika: "Selladores y adhesivos",
  "3M": "Cintas y abrasivos",
  Yachticon: "Limpieza y cuidado",
  Talamex: "Efectos navales y herrajes",
  Besto: "Chalecos y seguridad",
  "Nautic Talk": "Comunicación a bordo",
};

const esUnit: Record<string, string> = {
  "per tin": "por lata",
  "per can": "por bidón",
  "per line": "por cabo",
  "per roll": "por rollo",
  set: "juego",
  "per pair": "por par",
};

const esProduct: Record<string, { name: string; blurb: string }> = {
  "hempel-cream-cleaner-500": { name: "Hempel Cream Cleaner 500ml", blurb: "Crema abrasiva suave que elimina la suciedad y el velo mate del gelcoat sin rayar." },
  "epifanes-clear-varnish-1l": { name: "Epifanes Barniz Brillante Incoloro 1L", blurb: "El barniz de alto brillo de referencia para maderas vistas, con fuerte protección UV." },
  "hempel-mille-antifouling-25l": { name: "Hempel Mille NCT Antifouling 2,5L", blurb: "Antifouling autopulimentante que mantiene el casco limpio durante toda la temporada mediterránea." },
  "zettex-ship-cleaner-10l": { name: "Zettex Limpiador de Barcos 10L", blurb: "Limpiador concentrado de alto rendimiento para casco, cubierta y línea de flotación." },
  "talamex-ss-cleat-150": { name: "Cornamusa de acero inox 150mm", blurb: "Cornamusa de acero inoxidable A4 pulido para amarre y cabos de defensa." },
  "bow-shackle-a4-10": { name: "Grillete de arco inox A4 10mm", blurb: "Grillete inoxidable de grado marino para jarcia y fondeo." },
  "vikan-deck-brush-25": { name: "Vikan Cepillo de Cubierta + Parachoques 25cm", blurb: "Cepillo de cubierta de cerdas duras con parachoques de goma para proteger el costado." },
  "talamex-fender-a3": { name: "Talamex Defensa Serie A 15x56cm", blurb: "Defensa hinchable de yate que aguanta muelles y abarloamientos." },
  "mooring-line-14mm-10m": { name: "Cabo de amarre 14mm x 10m", blurb: "Cabo de amarre de poliéster azul con gaza blanda, ya empalmado." },
  "fender-line-set": { name: "Juego de cabos para defensas (2 uds)", blurb: "Dos cabos de defensa ajustables, listos para colgar." },
  "led-nav-light-bicolour": { name: "Luz de navegación LED bicolor", blurb: "Luz de proa bicolor de bajo consumo, montaje en balcón o superficie." },
  "agm-battery-100ah": { name: "Batería marina AGM 100Ah", blurb: "Batería de servicio AGM sellada, sin mantenimiento y apta para ciclo profundo." },
  "tinned-cable-25-10m": { name: "Cable marino estañado 2,5mm² x 10m", blurb: "Cable de cobre estañado que resiste el ambiente salino." },
  "bilge-pump-2000": { name: "Bomba de achique 12V 2000 GPH", blurb: "Bomba de achique sumergible compacta con alto caudal." },
  "yachticon-bio-grease": { name: "Yachticon Cartucho de Grasa Bio", blurb: "Grasa marina biodegradable para bocina y herrajes." },
  "impeller-service-kit": { name: "Kit de mantenimiento de rodete", blurb: "Rodete con junta y tóricas para un servicio rápido de la bomba de agua salada." },
  "besto-lifejacket-150n": { name: "Besto Chaleco Salvavidas Automático 150N", blurb: "Chaleco salvavidas hinchable automático, cómodo para llevar todo el día." },
  "fire-extinguisher-2kg": { name: "Extintor 2kg ABC", blurb: "Extintor de polvo ABC compacto con soporte de montaje." },
  "handheld-flare-kit": { name: "Kit de bengalas de mano", blurb: "Pack de bengalas costeras para la bolsa de emergencia." },
  "nautic-talk-duo": { name: "Sistema de auriculares Nautic Talk Duo", blurb: "Par de auriculares Bluetooth manos libres para comunicarte sin estrés al amarrar y maniobrar." },
  "nautic-talk-solo": { name: "Auricular Nautic Talk Solo", blurb: "Versión de un solo auricular del sistema Nautic Talk." },
  "binoculars-7x50": { name: "Prismáticos marinos 7x50", blurb: "Prismáticos 7x50 estancos con brújula integrada." },
  "offshore-jacket": { name: "Chaqueta náutica offshore", blurb: "Chaqueta offshore transpirable y totalmente impermeable con cuello alto forrado de forro polar." },
  "deck-gloves": { name: "Guantes de cubierta", blurb: "Guantes de dedos cortos con buen agarre para cabos y winches." },
  "sailing-boots": { name: "Botas náuticas", blurb: "Botas antideslizantes con forro cálido para cubiertas mojadas." },
  "spanish-courtesy-flag": { name: "Bandera de cortesía de España 30x45cm", blurb: "Bandera de cortesía tejida para navegar por aguas españolas." },
  "ss-flag-pole-60": { name: "Mástil de bandera inox 60cm", blurb: "Asta de bandera de acero inoxidable pulido con abrazadera para balcón." },
  "marine-tool-kit-30": { name: "Juego de herramientas marinas 30 pzs", blurb: "Esenciales resistentes a la corrosión en una funda compacta." },
  "boat-cover-4x6": { name: "Lona de cubrición 4x6m", blurb: "Cubierta transpirable de alta resistencia con ojales reforzados." },
  "shore-spinning-rod-80": { name: 'Caña de spinning de costa 8\'0" 10-30g', blurb: "Caña de costa nerviosa y rápida, pensada para lubina en la desembocadura del Turia." },
  "saltwater-reel-4000": { name: "Carrete de spinning de mar 4000", blurb: "Carrete de spinning sellado y listo para el mar, con freno suave." },
  "lubina-lure-set": { name: "Set de señuelos para lubina (5 uds)", blurb: "Selección de señuelos duros y blandos para la lubina del Mediterráneo." },
};

function localizeCategory(c: Category, locale?: string): Category {
  if (locale !== "es") return c;
  const o = esCategory[c.slug];
  return o ? { ...c, name: o.name, tagline: o.tagline, blurb: o.blurb } : c;
}

function localizeProduct(p: Product, locale?: string): Product {
  if (locale !== "es") return p;
  const o = esProduct[p.slug];
  const unit = p.unit ? esUnit[p.unit] ?? p.unit : p.unit;
  return o ? { ...p, name: o.name, blurb: o.blurb, unit } : { ...p, unit };
}

// -----------------------------------------------------------------------------
// Data access — the ONLY functions the UI calls. Swap these for Shopify/Odoo
// later; the rest of the site does not change. Pass the active locale to get
// localized names, blurbs and units.
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

export function getProduct(slug: string, locale?: string): Product | undefined {
  const p = products.find((p) => p.slug === slug);
  return p ? localizeProduct(p, locale) : undefined;
}

export function getFeaturedProducts(locale?: string): Product[] {
  return products.filter((p) => p.featured).map((p) => localizeProduct(p, locale));
}

export function getBrands(locale?: string): Brand[] {
  if (locale !== "es") return brands;
  return brands.map((b) => ({ ...b, note: esBrandNote[b.name] ?? b.note }));
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
  return locale === "es" ? `${n} €` : `€${n}`;
}
