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
  specs?: Record<string, string>;
};

export type Brand = { slug: string; name: string; note: string; description: string; logo?: string };

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
  { slug: "hempel", name: "Hempel", note: "Antifouling & coatings", logo: "/brands/hempel.jpg", description: "Hempel is one of the world's leading marine coatings manufacturers. From self-polishing antifouling to primers, fillers and topside enamels, their range keeps a hull protected season after season in Mediterranean waters." },
  { slug: "epifanes", name: "Epifanes", note: "Varnish & paint", logo: "/brands/epifanes.png", description: "Epifanes is a Dutch family manufacturer famous for the finest marine varnishes and paints. Their clear gloss varnish is the reference for teak and brightwork, prized for depth of shine and strong UV protection." },
  { slug: "sigma-coatings", name: "Sigma Coatings", note: "Coatings & antifouling", logo: "/brands/sigma.webp", description: "Sigma Coatings supplies durable marine and protective paints, from antifouling to primers and finishes. A trusted name for keeping steel, aluminium and GRP hulls protected against the sea." },
  { slug: "sika", name: "Sika", note: "Sealants & adhesives", logo: "/brands/sika.avif", description: "Sika is a global leader in sealants and adhesives. Their marine-grade Sikaflex products bond and seal decks, fittings and joints with a flexible, waterproof hold that stands up to salt, sun and constant movement." },
  { slug: "zettex", name: "Zettex", note: "Sealants & cleaning", logo: "/brands/zettex.png", description: "Zettex is a Dutch manufacturer of high-performance sealants, MS-polymer adhesives and boat cleaning products. Reliable, professional-grade chemistry for building, bonding and maintaining a boat." },
  { slug: "3m", name: "3M", note: "Tapes & abrasives", logo: "/brands/3m.webp", description: "3M needs little introduction. On board it means dependable masking and mounting tapes, sanding abrasives, polishing compounds and adhesives, the finishing products professionals reach for." },
  { slug: "yachticon", name: "Yachticon", note: "Cleaning & care", logo: "/brands/yachticon.png", description: "Yachticon is a German specialist in boat care and cleaning. Cleaners, polishes, tank treatments and maintenance products made specifically for life on the water, keeping a boat fresh inside and out." },
  { slug: "americol", name: "Americol", note: "Cleaners & degreasers", logo: "/brands/americol.webp", description: "Americol makes powerful cleaning agents and degreasers for the toughest jobs on deck and in the engine room. Concentrated, effective and built for marine and industrial use." },
  { slug: "vikan", name: "Vikan", note: "Brushes & cleaning tools", logo: "/brands/vikan.png", description: "Vikan is a Danish maker of professional cleaning brushes and tools. Deck brushes, handles and accessories built to a hard-wearing standard that lasts far longer than supermarket gear." },
  { slug: "talamex", name: "Talamex", note: "Chandlery & hardware", logo: "/brands/talamex.png", description: "Talamex is a broad chandlery brand covering fenders, mooring lines, stainless hardware, lighting, pumps and inflatables. Solid, fair-priced equipment for the everyday jobs on any leisure boat." },
  { slug: "besto", name: "Besto", note: "Life jackets & safety", logo: "/brands/besto.webp", description: "Besto has been making life jackets and marine safety equipment for over a century. Automatic and manual inflatables, buoyancy aids and safety gear, trusted kit for keeping everyone aboard safe." },
  { slug: "nautic-talk", name: "Nautic Talk", note: "Onboard communication", logo: "/brands/nautic-talk.jpg", description: "Nautic Talk builds wireless Bluetooth headset systems so skipper and crew can talk clearly and hands-free while docking, mooring and manoeuvring. A favourite for taking the stress out of coming alongside." },
];

// --- Products ----------------------------------------------------------------
// Curated real stock from the Logic4 export (Aug 2026), the leisure/yacht-
// relevant items across the range. House-supplier items are shown under the
// La Capitana own brand. The full catalogue lands with the Logic4 backend.

export const products: Product[] = [
  // Maintenance & Care
  { slug: "zettex-ship-cleaner-10l", name: "Zettex Ship Cleaner 10L", brand: "Zettex", category: "maintenance", price: 33.73, unit: "per can", blurb: "Concentrated heavy-duty cleaner that lifts grime from hull, deck and waterline.", featured: true },
  { slug: "flat-brush-2in", name: "Flat Paint Brush 2\"", brand: "La Capitana", category: "maintenance", price: 4.57, blurb: "A hard-wearing flat brush for varnish, primer and antifouling." },
  { slug: "foam-roller-10cm", name: "Foam Paint Roller 10cm (10 pcs)", brand: "La Capitana", category: "maintenance", price: 1.09, unit: "per pack", blurb: "Fine foam mini-rollers for a smooth finish on small areas." },

  // Deck & Hardware
  { slug: "orka-hmpe-rope-24mm", name: "Orka HMPE Rope 24mm", brand: "Orka", category: "deck-hardware", price: 22.02, unit: "per m", blurb: "High-strength HMPE line, rated to 486 kN, for halyards, sheets and heavy loads." },
  { slug: "ss316-carabiner-120", name: "Stainless 316 Carabiner Hook 120mm", brand: "La Capitana", category: "deck-hardware", price: 10.89, blurb: "Marine-grade A4 stainless carabiner for gear, lines and safety clips." },
  { slug: "nylon-block-single-25", name: "Single Nylon Block 25mm", brand: "La Capitana", category: "deck-hardware", price: 2.24, blurb: "Light single-sheave block for control lines and small tackle." },

  // Mooring & Fenders
  { slug: "talamex-mooring-line-10", name: "Talamex Mooring Line 10mm", brand: "Talamex", category: "mooring-fenders", price: 1.0, unit: "per m", blurb: "Black PPM mooring line, sold by the metre, soft and easy on the hands." },
  { slug: "talamex-mooring-line-12", name: "Talamex Mooring Line 12mm", brand: "Talamex", category: "mooring-fenders", price: 1.35, unit: "per m", blurb: "Heavier 12mm black PPM mooring line for larger boats, sold by the metre." },
  { slug: "fender-12x100", name: "Fender 12x11x100cm", brand: "La Capitana", category: "mooring-fenders", price: 13.85, blurb: "Compact hanging fender that protects the topsides at the quay.", featured: true },
  { slug: "orka-fender-rope-18", name: "Orka Fender Rope 18mm x 50m", brand: "Orka", category: "mooring-fenders", price: 61.23, unit: "per roll", blurb: "Traditional fender rope for making up your own fenders and rubbing gear." },

  // Electrical & Lighting
  { slug: "nav-bulb-bay15d-28v", name: "Navigation Bulb BAY15D 25W 28V", brand: "La Capitana", category: "electrical-lighting", price: 3.15, blurb: "Replacement bayonet bulb for navigation lights, 24 to 28V." },
  { slug: "dhr-sealed-beam-par64", name: "DHR Sealed Beam PAR64 230V 1000W", brand: "DHR", category: "electrical-lighting", price: 70.85, blurb: "High-output sealed-beam lamp for searchlights and deck floods.", featured: true },
  { slug: "cee-shore-plug-16a", name: "CEE Shore Power Plug 16A", brand: "La Capitana", category: "electrical-lighting", price: 13.79, blurb: "IP44 CEE connector for shore-power hook-up at the marina." },

  // Engine & Bilge
  { slug: "pvc-suction-hose-25", name: "PVC Suction Hose 25mm", brand: "La Capitana", category: "engine-bilge", price: 3.63, unit: "per m", blurb: "Reinforced suction hose for bilge, water and transfer pumps." },
  { slug: "jerrycan-siphon-pump", name: "Jerrycan Siphon Pump", brand: "La Capitana", category: "engine-bilge", price: 5.75, blurb: "Simple hand siphon for moving fuel or water from a jerrycan." },
  { slug: "ss-hose-clamp-25-40", name: "Stainless Hose Clamp 25-40mm", brand: "La Capitana", category: "engine-bilge", price: 2.53, blurb: "A4 stainless worm-drive clamp that stands up to salt air." },

  // Safety & Rescue
  { slug: "besto-lifejacket-165n", name: "Besto Automatic Life Jacket 165N", brand: "Besto", category: "safety-rescue", price: 114.22, blurb: "Automatic inflatable life jacket with 165N of buoyancy, comfortable all day.", featured: true },
  { slug: "marinepool-300n-offshore", name: "MarinePool Automatic Life Jacket 300N Offshore", brand: "MarinePool", category: "safety-rescue", price: 216.95, blurb: "Heavy-duty 300N offshore life jacket with harness, for serious passages." },
  { slug: "besto-dog-lifejacket-m", name: "Besto Dog Life Jacket M (8-15kg)", brand: "Besto", category: "safety-rescue", price: 27.47, blurb: "Buoyancy aid for dogs, with a grab handle to lift them back aboard." },
  { slug: "fire-extinguisher-powder-2kg", name: "Fire Extinguisher Powder 2kg", brand: "La Capitana", category: "safety-rescue", price: 44.04, blurb: "Compact 2kg ABC powder extinguisher with a mounting bracket." },
  { slug: "fire-blanket-100", name: "Fire Blanket 100x100cm", brand: "La Capitana", category: "safety-rescue", price: 30.49, blurb: "Galley fire blanket for smothering flames fast." },

  // Electronics & Comms
  { slug: "nautic-talk-duo", name: "Nautic Talk Duo Headset System", brand: "Nautic Talk", category: "electronics-comms", price: 258.26, oldPrice: 312.49, unit: "set", blurb: "Hands-free Bluetooth headset pair for stress-free communication when mooring and manoeuvring.", featured: true },
  { slug: "nautic-talk-solo", name: "Nautic Talk Solo Headset", brand: "Nautic Talk", category: "electronics-comms", price: 179.0, blurb: "Single-headset add-on for the Nautic Talk system." },

  // Foul-Weather & Kit
  { slug: "winter-pvc-gloves", name: "Winter PVC Gloves", brand: "La Capitana", category: "clothing", price: 16.58, unit: "per pair", blurb: "Warm, waterproof PVC gloves for cold, wet work on deck." },
  { slug: "nitrile-grip-gloves", name: "Nitrile Grip Gloves", brand: "Psp", category: "clothing", price: 3.15, unit: "per pair", blurb: "All-round nitrile-coated gloves with a secure grip for lines and tools." },

  // Flags & Accessories
  { slug: "dutch-ensign-30x45", name: "Dutch Ensign 30x45cm", brand: "La Capitana", category: "flags-accessories", price: 4.3, blurb: "Woven courtesy ensign for Dutch-flagged boats." },
  { slug: "dressing-line-10m", name: "Dressing Line 10m", brand: "La Capitana", category: "flags-accessories", price: 9.14, blurb: "Red-white-blue dressing line to dress ship on a special day." },

  // Tools
  { slug: "lifting-sling-1t-3m", name: "Round Lifting Sling 1T 3m", brand: "Pro lift", category: "tools", price: 16.52, blurb: "One-tonne round sling for lifting, recovery and mast work." },
  { slug: "ratchet-strap-9m", name: "Ratchet Tie-Down Strap 25mm x 9m", brand: "La Capitana", category: "tools", price: 27.71, blurb: "Ratchet strap for securing gear, tenders and deck cargo." },
  { slug: "wire-cup-brush-115", name: "Wire Cup Brush 115mm", brand: "La Capitana", category: "tools", price: 17.41, blurb: "Twist-knot cup brush for angle grinders, for rust and paint prep." },

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
  "Sigma Coatings": "Pinturas y antifouling",
  Sika: "Selladores y adhesivos",
  Zettex: "Selladores y limpieza",
  "3M": "Cintas y abrasivos",
  Yachticon: "Limpieza y cuidado",
  Americol: "Limpiadores y desengrasantes",
  Vikan: "Cepillos y útiles de limpieza",
  Talamex: "Efectos navales y herrajes",
  Besto: "Chalecos y seguridad",
  "Nautic Talk": "Comunicación a bordo",
};

const esBrandDescription: Record<string, string> = {
  Hempel: "Hempel es uno de los principales fabricantes mundiales de pinturas náuticas. Desde antifouling autopulimentante hasta imprimaciones, masillas y esmaltes de obra muerta, su gama mantiene el casco protegido temporada tras temporada en aguas del Mediterráneo.",
  Epifanes: "Epifanes es un fabricante familiar neerlandés célebre por los mejores barnices y pinturas náuticas. Su barniz brillante incoloro es la referencia para la teca y las maderas vistas, apreciado por su profundidad de brillo y su fuerte protección UV.",
  "Sigma Coatings": "Sigma Coatings ofrece pinturas náuticas y de protección duraderas, desde antifouling hasta imprimaciones y acabados. Un nombre de confianza para mantener protegidos los cascos de acero, aluminio y fibra frente al mar.",
  Sika: "Sika es líder mundial en selladores y adhesivos. Sus productos Sikaflex de grado marino pegan y sellan cubiertas, herrajes y juntas con una sujeción flexible e impermeable que aguanta la sal, el sol y el movimiento constante.",
  Zettex: "Zettex es un fabricante neerlandés de selladores de altas prestaciones, adhesivos de polímero MS y productos de limpieza para barcos. Química profesional y fiable para construir, pegar y mantener una embarcación.",
  "3M": "3M no necesita presentación. A bordo son cintas de enmascarar y de montaje fiables, abrasivos de lijado, pastas de pulir y adhesivos, los productos de acabado que eligen los profesionales.",
  Yachticon: "Yachticon es un especialista alemán en cuidado y limpieza de barcos. Limpiadores, pulimentos, tratamientos de depósitos y productos de mantenimiento hechos específicamente para la vida en el agua, para mantener el barco impecable por dentro y por fuera.",
  Americol: "Americol fabrica potentes agentes de limpieza y desengrasantes para los trabajos más duros en cubierta y en la sala de máquinas. Concentrados, eficaces y pensados para uso náutico e industrial.",
  Vikan: "Vikan es un fabricante danés de cepillos y útiles de limpieza profesionales. Cepillos de cubierta, mangos y accesorios con un acabado resistente que dura mucho más que el material de supermercado.",
  Talamex: "Talamex es una marca de efectos navales muy amplia: defensas, cabos de amarre, herrajes inoxidables, iluminación, bombas y neumáticas. Equipamiento sólido y a buen precio para las tareas del día a día en cualquier embarcación de recreo.",
  Besto: "Besto lleva más de un siglo fabricando chalecos salvavidas y equipos de seguridad náutica. Hinchables automáticos y manuales, ayudas a la flotabilidad y material de seguridad, equipo de confianza para mantener a salvo a todos a bordo.",
  "Nautic Talk": "Nautic Talk fabrica sistemas de auriculares Bluetooth inalámbricos para que patrón y tripulación hablen con claridad y las manos libres al atracar, amarrar y maniobrar. Un favorito para quitarle el estrés a la llegada a puerto.",
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
  "zettex-ship-cleaner-10l": { name: "Zettex Limpiador de Barcos 10L", blurb: "Limpiador concentrado de alto rendimiento que elimina la suciedad del casco, la cubierta y la línea de flotación." },
  "flat-brush-2in": { name: "Brocha plana 2\"", blurb: "Brocha plana resistente para barniz, imprimación y antifouling." },
  "foam-roller-10cm": { name: "Rodillo de espuma 10cm (10 uds)", blurb: "Mini rodillos de espuma fina para un acabado liso en superficies pequeñas." },
  "orka-hmpe-rope-24mm": { name: "Cabo Orka HMPE 24mm", blurb: "Cabo HMPE de alta resistencia, hasta 486 kN, para drizas, escotas y grandes cargas." },
  "ss316-carabiner-120": { name: "Mosquetón inox 316 120mm", blurb: "Mosquetón de acero inoxidable A4 de grado marino para equipo, cabos y anclajes de seguridad." },
  "nylon-block-single-25": { name: "Motón simple de nylon 25mm", blurb: "Motón ligero de una roldana para cabos de control y aparejos pequeños." },
  "talamex-mooring-line-10": { name: "Cabo de amarre Talamex 10mm", blurb: "Cabo de amarre PPM negro, a metros, suave y agradable en las manos." },
  "talamex-mooring-line-12": { name: "Cabo de amarre Talamex 12mm", blurb: "Cabo de amarre PPM negro de 12mm para barcos más grandes, a metros." },
  "fender-12x100": { name: "Defensa 12x11x100cm", blurb: "Defensa colgante compacta que protege el costado en el muelle." },
  "orka-fender-rope-18": { name: "Cabo de defensa Orka 18mm x 50m", blurb: "Cabo de defensa tradicional para hacer tus propias defensas y guardacostados." },
  "nav-bulb-bay15d-28v": { name: "Bombilla de navegación BAY15D 25W 28V", blurb: "Bombilla de bayoneta de recambio para luces de navegación, de 24 a 28V." },
  "dhr-sealed-beam-par64": { name: "DHR Sealed Beam PAR64 230V 1000W", blurb: "Lámpara sellada de alta potencia para focos de búsqueda y de cubierta." },
  "cee-shore-plug-16a": { name: "Toma de puerto CEE 16A", blurb: "Conector CEE IP44 para la conexión a la toma de tierra del puerto." },
  "pvc-suction-hose-25": { name: "Manguera de aspiración PVC 25mm", blurb: "Manguera de aspiración reforzada para bombas de achique, agua y trasiego." },
  "jerrycan-siphon-pump": { name: "Bomba de trasiego para garrafa", blurb: "Sifón manual sencillo para pasar combustible o agua desde una garrafa." },
  "ss-hose-clamp-25-40": { name: "Abrazadera inox 25-40mm", blurb: "Abrazadera sinfín de acero inoxidable A4 que resiste el ambiente salino." },
  "besto-lifejacket-165n": { name: "Besto Chaleco Salvavidas Automático 165N", blurb: "Chaleco salvavidas hinchable automático de 165N, cómodo para todo el día." },
  "marinepool-300n-offshore": { name: "MarinePool Chaleco Automático 300N Offshore", blurb: "Chaleco offshore de 300N con arnés, para travesías exigentes." },
  "besto-dog-lifejacket-m": { name: "Besto Chaleco para Perro M (8-15kg)", blurb: "Ayuda a la flotabilidad para perros, con asa para subirlos a bordo." },
  "fire-extinguisher-powder-2kg": { name: "Extintor de polvo 2kg", blurb: "Extintor de polvo ABC compacto de 2kg con soporte de montaje." },
  "fire-blanket-100": { name: "Manta ignífuga 100x100cm", blurb: "Manta ignífuga para la cocina, para sofocar el fuego rápido." },
  "nautic-talk-duo": { name: "Sistema de auriculares Nautic Talk Duo", blurb: "Par de auriculares Bluetooth manos libres para comunicarte sin estrés al amarrar y maniobrar." },
  "nautic-talk-solo": { name: "Auricular Nautic Talk Solo", blurb: "Auricular individual adicional para el sistema Nautic Talk." },
  "winter-pvc-gloves": { name: "Guantes de PVC de invierno", blurb: "Guantes de PVC cálidos e impermeables para el trabajo en cubierta con frío y humedad." },
  "nitrile-grip-gloves": { name: "Guantes de nitrilo con agarre", blurb: "Guantes multiuso recubiertos de nitrilo con buen agarre para cabos y herramientas." },
  "dutch-ensign-30x45": { name: "Bandera de Países Bajos 30x45cm", blurb: "Bandera de cortesía tejida para barcos con pabellón neerlandés." },
  "dressing-line-10m": { name: "Empavesada 10m", blurb: "Cordón de banderines rojo-blanco-azul para empavesar en un día especial." },
  "lifting-sling-1t-3m": { name: "Eslinga redonda 1T 3m", blurb: "Eslinga redonda de 1 tonelada para izado, recuperación y trabajos de palo." },
  "ratchet-strap-9m": { name: "Cincha de trinquete 25mm x 9m", blurb: "Cincha de trinquete para asegurar equipo, auxiliares y carga en cubierta." },
  "wire-cup-brush-115": { name: "Cepillo de copa de alambre 115mm", blurb: "Cepillo de copa de alambre trenzado para amoladora, para óxido y preparación de pintura." },
  "shore-spinning-rod-80": { name: 'Caña de spinning de costa 8\'0" 10-30g', blurb: "Caña de costa nerviosa y rápida, pensada para lubina en la desembocadura del Turia." },
  "saltwater-reel-4000": { name: "Carrete de spinning de mar 4000", blurb: "Carrete de spinning sellado y listo para el mar, con freno suave." },
  "lubina-lure-set": { name: "Set de señuelos para lubina (5 uds)", blurb: "Selección de señuelos duros y blandos para la lubina del Mediterráneo." },
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

const esSpecLabel: Record<string, string> = {
  Buoyancy: "Flotabilidad",
  Type: "Tipo",
  Fit: "Talla",
  Harness: "Arnés",
  Voltage: "Voltaje",
  Power: "Potencia",
  Fitting: "Casquillo",
  Diameter: "Diámetro",
  "Break load": "Carga de rotura",
  Material: "Material",
  Range: "Alcance",
  "Talk time": "Autonomía",
  Users: "Usuarios",
  Rating: "Protección",
  Volume: "Volumen",
  Form: "Formato",
  Colour: "Color",
  Size: "Talla",
  "Dog weight": "Peso del perro",
  Handle: "Asa",
};

const esSpecValue: Record<string, string> = {
  Automatic: "Automático",
  "Automatic offshore": "Automático offshore",
  Adult: "Adulto",
  Integrated: "Integrado",
  Concentrate: "Concentrado",
  Black: "Negro",
  Waterproof: "Estanco",
  Yes: "Sí",
  "up to 1000 m": "hasta 1000 m",
  "8 to 15 kg": "8 a 15 kg",
};

function localizeSpecs(specs: Record<string, string>, locale?: string): Record<string, string> {
  if (locale !== "es") return specs;
  return Object.fromEntries(
    Object.entries(specs).map(([k, v]) => [esSpecLabel[k] ?? k, esSpecValue[v] ?? v])
  );
}

function localizeCategory(c: Category, locale?: string): Category {
  if (locale !== "es") return c;
  const o = esCategory[c.slug];
  return o ? { ...c, name: o.name, tagline: o.tagline, blurb: o.blurb } : c;
}

function localizeProduct(p: Product, locale?: string): Product {
  const rawSpecs = productSpecs[p.slug];
  const specs = rawSpecs ? localizeSpecs(rawSpecs, locale) : undefined;
  if (locale !== "es") return specs ? { ...p, specs } : p;
  const o = esProduct[p.slug];
  const unit = p.unit ? esUnit[p.unit] ?? p.unit : p.unit;
  const base = o ? { ...p, name: o.name, blurb: o.blurb, unit } : { ...p, unit };
  return specs ? { ...base, specs } : base;
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

// Bilingual search index for a product: combines EN + ES name/blurb, brand,
// and both category names, so search works regardless of the active language.
function buildSearchText(p: Product): string {
  const es = esProduct[p.slug];
  const catEn = categories.find((c) => c.slug === p.category)?.name ?? "";
  const catEs = esCategory[p.category]?.name ?? "";
  return [p.name, p.brand, p.blurb, es?.name, es?.blurb, catEn, catEs]
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
  if (locale !== "es") return b;
  return {
    ...b,
    note: esBrandNote[b.name] ?? b.note,
    description: esBrandDescription[b.name] ?? b.description,
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
  return locale === "es" ? `${n} €` : `€${n}`;
}
