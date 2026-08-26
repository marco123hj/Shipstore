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

export type Brand = { name: string; note: string };

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
  { name: "Epifanes", note: "Varnish & paint" },
  { name: "Sika", note: "Sealants & adhesives" },
  { name: "3M", note: "Tapes & abrasives" },
  { name: "Yachticon", note: "Cleaning & care" },
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

// -----------------------------------------------------------------------------
// Data access — the ONLY functions the UI calls. Swap these for Shopify/Odoo
// later; the rest of the site does not change.
// -----------------------------------------------------------------------------

export function getCategories(): Category[] {
  return categories;
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getProducts(): Product[] {
  return products;
}

export function getProductsByCategory(slug: string): Product[] {
  return products.filter((p) => p.category === slug);
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getBrands(): Brand[] {
  return brands;
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

export function formatPrice(value: number): string {
  return "€" + value.toFixed(2).replace(".", ",");
}
