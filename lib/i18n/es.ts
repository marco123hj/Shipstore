import type { LegalDoc, Faq } from "./types";

const UPDATED = "27 de agosto de 2026";

const faq: Faq[] = [
  {
    q: "¿Sois una tienda online o una tienda física?",
    a: "Las dos cosas. Somos una tienda náutica en el puerto Valencia Mar y enviamos online a toda España y a la Unión Europea.",
  },
  {
    q: "¿Dónde estáis?",
    a: "Puerto Valencia Mar, lado de El Saler, junto a Plan B, 46012 València. Consulta cómo llegar en nuestra {{l:/contact|página de contacto}}.",
  },
  {
    q: "¿Cuál es vuestro horario?",
    a: "{{f:De lunes a sábado, de 09:00 a 19:00. Domingos cerrado.}}",
  },
  {
    q: "¿Hacéis envíos internacionales?",
    a: "Sí. Enviamos a la España peninsular, las Islas Baleares, toda la UE, el Reino Unido y destinos seleccionados fuera de la UE. Tienes todos los detalles en nuestra página de {{l:/shipping|Envíos y devoluciones}}.",
  },
  {
    q: "¿Cuánto tarda mi pedido?",
    a: "Los pedidos en stock se expiden en 1 o 2 días laborables. El plazo de entrega depende del destino, consulta {{l:/shipping|Envíos y devoluciones}}.",
  },
  {
    q: "¿Los precios llevan el IVA incluido?",
    a: "Sí. Los precios incluyen el IVA español para consumidores. Los pedidos enviados fuera del territorio de IVA español, como las Islas Canarias o países fuera de la UE, se facturan sin IVA y pueden estar sujetos a impuestos de importación locales en la entrega.",
  },
  {
    q: "¿Qué métodos de pago puedo usar?",
    a: "Aceptamos {{f:las principales tarjetas de débito y crédito, y Bizum}}. Los métodos disponibles se muestran en el pago.",
  },
  {
    q: "¿Puedo recoger mi pedido en la tienda?",
    a: "Sí. Contáctanos para acordar la recogida en el puerto Valencia Mar.",
  },
  {
    q: "¿Ofrecéis precios para profesionales o mayoristas?",
    a: "Sí. Suministramos a embarcaciones, clubs, profesionales y otras tiendas. {{l:/contact|Contáctanos}} para conocer las condiciones para profesionales.",
  },
  {
    q: "¿Podéis aconsejarme qué producto elegir?",
    a: "Sí. Conocemos el material y las aguas de la zona. Pregúntanos y te orientaremos hacia la mejor opción.",
  },
  {
    q: "¿Vendéis aparejos de pesca?",
    a: "Sí. Tenemos una sección de pesca para costa, barco y Mediterráneo, a un minuto de la desembocadura del río Turia.",
  },
  {
    q: "¿Cómo devuelvo algo?",
    a: "Tienes un derecho de desistimiento de 14 días. Consulta {{l:/shipping|Envíos y devoluciones}} para saber cómo devolver un artículo.",
  },
  {
    q: "Mi pedido ha llegado dañado. ¿Qué hago?",
    a: "Contáctanos en un plazo de 48 horas con una foto y tu número de pedido y te gestionaremos un cambio o un reembolso. Tienes todos los detalles en nuestra página de {{l:/shipping|Envíos y devoluciones}}.",
  },
  {
    q: "¿Podéis pedir un artículo que no está en el catálogo?",
    a: "A menudo sí. Dinos qué necesitas y haremos lo posible por conseguírtelo.",
  },
];

const shipping: LegalDoc = {
  title: "Envíos y devoluciones",
  intro: "Cómo preparamos, enviamos y gestionamos las devoluciones de los pedidos de la tienda online de La Capitana.",
  updated: UPDATED,
  sections: [
    {
      h: "Dónde enviamos",
      blocks: [
        { t: "p", s: "Enviamos desde nuestra tienda del puerto Valencia Mar a la España peninsular, las Islas Baleares y toda la Unión Europea. También enviamos al Reino Unido y a destinos seleccionados fuera de la UE. Si tu país no aparece en el pago, contáctanos y te lo presupuestamos." },
      ],
    },
    {
      h: "Gastos de envío",
      blocks: [
        {
          t: "table",
          head: ["Destino", "Tarifa estándar", "Gratis desde"],
          rows: [
            ["España peninsular", "{{f:5,95 €}}", "75 €"],
            ["Islas Baleares", "{{f:9,95 €}}", "{{f:120 €}}"],
            ["Resto de la UE", "{{f:12,95 €}}", "{{f:150 €}}"],
            ["Canarias, Ceuta y Melilla", "Presupuesto en el pago", "—"],
            ["Reino Unido y otros fuera de la UE", "Presupuesto en el pago", "—"],
          ],
        },
        { t: "note", s: "Los pedidos a Canarias, Ceuta, Melilla, el Reino Unido y otros destinos fuera de la UE se envían sin IVA español. En la entrega pueden aplicarse IVA de importación, aranceles y gastos de gestión locales, que corren a cargo del cliente." },
      ],
    },
    {
      h: "Plazos de expedición y entrega",
      blocks: [
        { t: "p", s: "Los pedidos en stock se expiden en 1 o 2 días laborables. Entrega habitual una vez enviado:" },
        {
          t: "ul",
          items: [
            "España peninsular: {{f:1 a 3 días laborables}}",
            "Islas Baleares: {{f:2 a 5 días laborables}}",
            "Resto de la UE: {{f:3 a 7 días laborables}}",
            "Reino Unido y fuera de la UE: {{f:5 a 10 días laborables}}, más el despacho de aduanas",
          ],
        },
        { t: "note", s: "Los plazos de entrega son estimados y no están garantizados. Los pedidos realizados en fin de semana o festivos se tramitan el siguiente día laborable." },
      ],
    },
    {
      h: "Mercancías peligrosas",
      blocks: [
        { t: "p", s: "Algunos productos náuticos se clasifican como mercancías peligrosas, como bengalas, aerosoles, baterías de litio y ciertas pinturas, disolventes y adhesivos. Estos artículos no pueden enviarse por avión, pueden llevar un recargo de gestión y no están disponibles para todos los destinos. Cualquier restricción se indica en el pago." },
      ],
    },
    {
      h: "Devoluciones y derecho de desistimiento de 14 días",
      blocks: [
        { t: "p", s: "Como consumidor en la UE tienes derecho a desistir de tu compra en un plazo de 14 días desde la recepción del pedido, sin dar ninguna razón. Para ello, avísanos dentro de esos 14 días (un correo es suficiente). Después dispones de otros 14 días para devolver la mercancía." },
        { t: "p", s: "Los artículos devueltos deben estar sin usar, completos y en su embalaje original, en un estado que podamos volver a vender. Los gastos de devolución corren a tu cargo, salvo que el artículo sea defectuoso o te hayamos enviado el producto equivocado." },
        { t: "p", s: "El derecho de desistimiento no se aplica a:" },
        {
          t: "ul",
          items: [
            "Productos hechos a medida o cortados a tu medida, como cabo, cadena o cable cortados a la longitud que pidas.",
            "Productos precintados que no son aptos para devolución una vez abiertos por motivos de salud o seguridad.",
            "Pedidos especiales realizados para ti que no tenemos habitualmente en stock.",
          ],
        },
      ],
    },
    {
      h: "Cómo devolver un artículo",
      blocks: [
        {
          t: "ol",
          items: [
            "Escribe a {{f:info@lacapitana.es}} con tu número de pedido y los artículos que quieres devolver.",
            "Te respondemos con la dirección de devolución y las instrucciones.",
            "Empaqueta la mercancía con cuidado y envíanosla en un plazo de 14 días.",
          ],
        },
      ],
    },
    {
      h: "Reembolsos",
      blocks: [
        { t: "p", s: "Una vez recibida y revisada la mercancía devuelta, te reembolsamos en un plazo de 14 días, con el mismo método de pago que usaste al comprar. Podemos retener el reembolso hasta que la mercancía nos llegue. Si elegiste una opción de envío más cara que nuestro servicio estándar, solo reembolsamos el coste del envío estándar." },
      ],
    },
    {
      h: "Artículos defectuosos, dañados o incorrectos",
      blocks: [
        { t: "p", s: "Todos los productos cuentan con la garantía legal de conformidad. Según la ley española, dispones de hasta tres años desde la entrega para comunicar un defecto que existiera en el momento de la compra. Si un artículo llega dañado, es defectuoso o no es lo que pediste, contáctanos en un plazo razonable y te gestionaremos una reparación, un cambio o un reembolso sin coste para ti, incluidos los gastos de devolución." },
        { t: "p", s: "Revisa tu entrega al recibirla y comunícanos cualquier daño visible del transporte en un plazo de {{f:48 horas}} para que podamos reclamarlo al transportista." },
      ],
    },
    {
      h: "Dudas",
      blocks: [
        { t: "p", s: "Para cualquier cosa sobre un pedido, un envío o una devolución, consulta nuestras {{l:/faq|Preguntas frecuentes}} o {{l:/contact|contáctanos}}." },
      ],
    },
  ],
};

const terms: LegalDoc = {
  title: "Términos y condiciones",
  intro: "Los términos que se aplican cuando usas esta web y compras en la tienda online de La Capitana.",
  updated: UPDATED,
  sections: [
    {
      h: "1. Quiénes somos",
      blocks: [
        { t: "p", s: "Esta web y tienda están gestionadas por {{f:[nombre de la empresa / autónomo]}}, con nombre comercial La Capitana." },
        {
          t: "ul",
          items: [
            "NIF/CIF: {{f:[NIF / CIF]}}",
            "Número de IVA: {{f:[número de IVA de la UE]}}",
            "Domicilio social: {{f:[domicilio social]}}",
            "Dirección comercial: Puerto Valencia Mar, lado de El Saler, junto a Plan B, 46012 València, España",
            "Correo: {{f:info@lacapitana.es}}",
            "Teléfono: {{f:[teléfono]}}",
          ],
        },
      ],
    },
    {
      h: "2. Sobre estos términos",
      blocks: [
        { t: "p", s: "Al usar esta web o realizar un pedido aceptas estos términos. Léelos antes de comprar. Podemos actualizarlos de vez en cuando; la versión que se aplica a tu pedido es la publicada en el momento de realizarlo." },
      ],
    },
    {
      h: "3. Productos y disponibilidad",
      blocks: [
        { t: "p", s: "Describimos nuestros productos con la mayor precisión posible. Las fotos y especificaciones son orientativas y pueden darse pequeñas variaciones. Todos los productos están sujetos a disponibilidad. Si un artículo que has pedido no está disponible, te contactaremos y te ofreceremos una alternativa o un reembolso." },
      ],
    },
    {
      h: "4. Precios e IVA",
      blocks: [
        { t: "p", s: "Los precios se muestran en euros e incluyen el IVA español para consumidores, salvo que se indique lo contrario. Los gastos de envío se añaden en el pago y se muestran antes de confirmar. Los pedidos enviados fuera del territorio de IVA español pueden facturarse sin IVA y estar sujetos a impuestos de importación y aranceles locales, que corren a cargo del cliente. Procuramos mantener los precios correctos, pero si se produce un error de precio evidente te contactaremos antes del envío y podrás confirmar al precio correcto o cancelar." },
      ],
    },
    {
      h: "5. Tu pedido",
      blocks: [
        { t: "p", s: "Cuando realizas un pedido te enviamos un acuse de recibo por correo. El contrato se formaliza cuando confirmamos el envío de la mercancía. Podemos rechazar o cancelar un pedido, por ejemplo si la mercancía no está disponible, el pago no se autoriza o sospechamos de fraude." },
      ],
    },
    {
      h: "6. Pago",
      blocks: [
        { t: "p", s: "El pago se realiza a través de nuestro proveedor de pagos con los métodos que se muestran en el pago. Los datos de tu tarjeta y de pago los gestiona el proveedor y no los almacenamos. La mercancía sigue siendo de nuestra propiedad hasta su pago completo." },
      ],
    },
    {
      h: "7. Envíos",
      blocks: [
        { t: "p", s: "Los gastos de envío, los destinos y los plazos estimados se detallan en nuestra política de {{l:/shipping|Envíos y devoluciones}}, que forma parte de estos términos. El riesgo sobre la mercancía pasa a ti en el momento de la entrega." },
      ],
    },
    {
      h: "8. Derecho de desistimiento y devoluciones",
      blocks: [
        { t: "p", s: "Como consumidor tienes un derecho de desistimiento de 14 días en la mayoría de los pedidos, y una garantía legal más amplia para productos defectuosos. El procedimiento completo, las condiciones y las excepciones se detallan en nuestra política de {{l:/shipping|Envíos y devoluciones}}." },
      ],
    },
    {
      h: "9. Garantía legal",
      blocks: [
        { t: "p", s: "Todos los productos vendidos a consumidores cuentan con la garantía legal de conformidad según la ley española (Real Decreto Legislativo 1/2007), actualmente de tres años desde la entrega. Es adicional a cualquier garantía comercial ofrecida por un fabricante." },
      ],
    },
    {
      h: "10. Uso de los productos",
      blocks: [
        { t: "p", s: "El material náutico, de seguridad y eléctrico debe elegirse, instalarse y usarse correctamente. Nuestra información y consejos sobre los productos se dan de buena fe, pero no sustituyen una instalación profesional ni tus propias comprobaciones. Eres responsable de asegurarte de que un producto es adecuado para tu embarcación y para el uso previsto." },
      ],
    },
    {
      h: "11. Responsabilidad",
      blocks: [
        { t: "p", s: "Nada en estos términos limita nuestra responsabilidad cuando la ley no lo permite, incluidos los casos de muerte o daños personales causados por nuestra negligencia. Por lo demás, no somos responsables de daños indirectos o consecuentes. Esto no afecta a tus derechos legales como consumidor." },
      ],
    },
    {
      h: "12. Propiedad intelectual",
      blocks: [
        { t: "p", s: "El contenido de esta web, incluidos los textos, las imágenes y el nombre y el logotipo de La Capitana, es de nuestra propiedad o se usa con permiso y no puede reutilizarse sin nuestro consentimiento." },
      ],
    },
    {
      h: "13. Ley aplicable y conflictos",
      blocks: [
        { t: "p", s: "Estos términos se rigen por la ley española. Si eres consumidor, siguen aplicándose las protecciones obligatorias de tu país de residencia. Los conflictos se someten a los juzgados de {{f:València, España}}, sin perjuicio de tu derecho como consumidor a iniciar acciones en otro lugar." },
        { t: "p", s: "La Comisión Europea ofrece una plataforma de resolución de litigios en línea en {{a:https://ec.europa.eu/consumers/odr|ec.europa.eu/consumers/odr}}." },
      ],
    },
    {
      h: "14. Contacto",
      blocks: [
        { t: "p", s: "¿Dudas sobre estos términos? Escribe a {{f:info@lacapitana.es}} o usa nuestra {{l:/contact|página de contacto}}." },
      ],
    },
  ],
};

const privacy: LegalDoc = {
  title: "Política de privacidad",
  intro: "Cómo La Capitana recoge, usa y protege tus datos personales, conforme al RGPD y a la normativa española de protección de datos.",
  updated: UPDATED,
  sections: [
    {
      h: "1. Quién es responsable de tus datos",
      blocks: [
        { t: "p", s: "El responsable del tratamiento es:" },
        {
          t: "ul",
          items: [
            "{{f:[nombre de la empresa / autónomo]}}, con nombre comercial La Capitana",
            "NIF/CIF: {{f:[NIF / CIF]}}",
            "Dirección: {{f:[domicilio social]}}",
            "Correo: {{f:info@lacapitana.es}}",
          ],
        },
      ],
    },
    {
      h: "2. Qué datos recogemos",
      blocks: [
        {
          t: "ul",
          items: [
            "Datos de contacto y de cuenta: nombre, correo, teléfono, dirección de facturación y de entrega.",
            "Datos del pedido: qué compraste, importe e historial.",
            "Datos de pago, gestionados por nuestro proveedor de pagos. No almacenamos los números completos de tarjeta.",
            "Los mensajes que nos envías por el formulario de contacto, correo o teléfono.",
            "Datos técnicos y de uso: dirección IP, dispositivo y navegador, y páginas visitadas, recogidos mediante cookies.",
          ],
        },
      ],
    },
    {
      h: "3. Cómo los usamos y nuestra base legal",
      blocks: [
        {
          t: "ul",
          items: [
            "Para tramitar y entregar tus pedidos y gestionar devoluciones. Base legal: ejecución del contrato.",
            "Para responder a tus consultas y darte atención al cliente. Base legal: ejecución del contrato o nuestro interés legítimo.",
            "Para cumplir obligaciones contables, fiscales y otras obligaciones legales. Base legal: obligación legal.",
            "Para enviarte correos comerciales, solo si has pedido recibirlos. Base legal: consentimiento, que puedes retirar en cualquier momento.",
            "Para mantener la web segura y mejorarla. Base legal: nuestro interés legítimo.",
          ],
        },
      ],
    },
    {
      h: "4. Con quién los compartimos",
      blocks: [
        { t: "p", s: "Solo compartimos datos personales con proveedores que nos ayudan a gestionar la tienda, entre ellos:" },
        {
          t: "ul",
          items: [
            "Nuestro proveedor de pagos: {{f:[proveedor de pagos]}}",
            "Empresas de transporte y mensajería: {{f:[transportistas]}}",
            "Nuestros proveedores de tienda, alojamiento y correo: {{f:[plataforma / alojamiento / herramientas de correo]}}",
          ],
        },
        { t: "p", s: "Estos proveedores solo pueden usar tus datos para prestarnos su servicio. No vendemos tus datos personales." },
      ],
    },
    {
      h: "5. Transferencias internacionales",
      blocks: [
        { t: "p", s: "Cuando un proveedor trata datos fuera del Espacio Económico Europeo, nos aseguramos de que exista una garantía adecuada, como las cláusulas contractuales tipo de la Comisión Europea." },
      ],
    },
    {
      h: "6. Cookies",
      blocks: [
        { t: "p", s: "Usamos cookies necesarias para que la web funcione y, con tu consentimiento, cookies de analítica y marketing. Puedes aceptar o rechazar las cookies no esenciales en nuestro banner de cookies y cambiar tu elección en cualquier momento. Tienes los detalles en nuestra {{l:/cookies|Política de cookies}}." },
      ],
    },
    {
      h: "7. Cuánto tiempo los conservamos",
      blocks: [
        { t: "p", s: "Conservamos los datos de pedidos y facturación durante el tiempo que exige la ley fiscal y mercantil (por lo general varios años). El resto de datos se conservan solo el tiempo necesario para la finalidad para la que se recogieron, tras lo cual se eliminan o anonimizan." },
      ],
    },
    {
      h: "8. Tus derechos",
      blocks: [
        { t: "p", s: "Puedes pedirnos:" },
        {
          t: "ul",
          items: [
            "Acceder a los datos que tenemos sobre ti.",
            "Rectificar datos incorrectos o incompletos.",
            "Suprimir tus datos, cuando la ley lo permita.",
            "Limitar u oponerte a cómo los usamos.",
            "Recibir tus datos en un formato portable.",
            "Retirar tu consentimiento en cualquier momento, sin que afecte a tratamientos anteriores.",
          ],
        },
        { t: "p", s: "Para ejercer cualquiera de estos derechos, escribe a {{f:info@lacapitana.es}}. También tienes derecho a reclamar ante la Agencia Española de Protección de Datos (AEPD) en {{a:https://www.aepd.es|aepd.es}}." },
      ],
    },
    {
      h: "9. Seguridad",
      blocks: [
        { t: "p", s: "Aplicamos medidas técnicas y organizativas razonables para proteger tus datos frente a pérdida, uso indebido y acceso no autorizado." },
      ],
    },
    {
      h: "10. Cambios",
      blocks: [
        { t: "p", s: "Podemos actualizar esta política. La versión vigente está siempre en esta página, con la fecha de su última modificación." },
      ],
    },
    {
      h: "11. Contacto",
      blocks: [
        { t: "p", s: "¿Dudas sobre tus datos? Escribe a {{f:info@lacapitana.es}} o usa nuestra {{l:/contact|página de contacto}}." },
      ],
    },
  ],
};

const cookies: LegalDoc = {
  title: "Política de cookies",
  intro: "Cómo usa La Capitana las cookies en esta web.",
  updated: UPDATED,
  sections: [
    {
      h: "1. Qué son las cookies",
      blocks: [
        { t: "p", s: "Las cookies son pequeños archivos de texto que se guardan en tu dispositivo cuando visitas una web. Ayudan a que el sitio funcione, recuerdan tus elecciones y permiten entender cómo se usa." },
      ],
    },
    {
      h: "2. Cómo usamos las cookies",
      blocks: [
        {
          t: "ul",
          items: [
            "Cookies esenciales que hacen que la web funcione, incluidas tu elección de idioma, el carrito y tus preferencias de cookies. Están siempre activas.",
            "Cookies de analítica que nos ayudan a entender cómo se usa el sitio, activadas solo con tu consentimiento.",
            "Cookies de marketing que miden y apoyan nuestra publicidad, activadas solo con tu consentimiento.",
          ],
        },
      ],
    },
    {
      h: "3. Cómo gestionar tus cookies",
      blocks: [
        { t: "p", s: "En tu primera visita, nuestro banner de cookies te permite aceptar todas las cookies o rechazar las no esenciales. Puedes cambiar tu elección en cualquier momento borrando las cookies de este sitio en tu navegador, lo que hará que el banner vuelva a aparecer. También puedes bloquear o eliminar cookies en la configuración de tu navegador, aunque entonces la web puede no funcionar como debería." },
      ],
    },
    {
      h: "4. Las cookies que usamos",
      blocks: [
        { t: "p", s: "Las herramientas concretas de analítica y marketing que usamos son: {{f:[herramientas de analítica / marketing, p. ej. Google Analytics]}}. Se detallan junto con el tratamiento de tus datos en nuestra {{l:/privacy|Política de privacidad}}." },
      ],
    },
    {
      h: "5. Más información",
      blocks: [
        { t: "p", s: "Para saber cómo tratamos tus datos personales, consulta nuestra {{l:/privacy|Política de privacidad}}. ¿Dudas? Escribe a {{f:info@lacapitana.es}} o usa nuestra {{l:/contact|página de contacto}}." },
      ],
    },
  ],
};

const es = {
  code: "es",
  htmlLang: "es",
  localeName: "Español",
  switchLabel: "EN",
  switchTo: "Switch to English",
  nav: { shop: "Tienda", nauticTalk: "Nautic Talk", fishing: "Pesca", about: "Sobre nosotros", contact: "Contacto" },
  a11y: { search: "Buscar", cart: "Carrito" },
  common: {
    add: "Añadir",
    addToCart: "Añadir al carrito",
    sale: "Oferta",
    home: "Inicio",
    shop: "Tienda",
    allCategories: "Todas las categorías",
    updated: "Última actualización",
  },
  footer: {
    blurb: "Suministros náuticos y para yates en el puerto Valencia Mar, Valencia.",
    shop: "Tienda",
    info: "Información",
    legal: "Legal",
    address: "Dirección",
    about: "Sobre nosotros",
    contact: "Contacto",
    faq: "Preguntas frecuentes",
    shipping: "Envíos y devoluciones",
    terms: "Términos y condiciones",
    privacy: "Política de privacidad",
    cookies: "Política de cookies",
  },
  home: {
    heroTitle: "Suministros náuticos y para yates en el puerto Valencia Mar.",
    heroSub: "Mantenimiento, herrajes, seguridad, electrónica y aparejos de pesca para barcos y yates, a pie de agua en Valencia.",
    heroCta: "Ver todos los productos",
    usps: ["Asesoramiento experto", "Amplio catálogo", "En el puerto", "Envíos a toda España"],
    categories: "Compra por categoría",
    featured: "Productos destacados",
    brands: "Marcas",
    visit: "Visítanos",
    visitText: "Puerto Valencia Mar, lado de El Saler, junto a Plan B. 46012 València.",
    visitCta: "Contacto y horario",
  },
  shop: { title: "Tienda", all: "Todos los productos" },
  browse: {
    sort: "Ordenar",
    featured: "Destacados",
    priceAsc: "Precio: de menor a mayor",
    priceDesc: "Precio: de mayor a menor",
    name: "Nombre A-Z",
    brand: "Marca",
    allBrands: "Todas las marcas",
    price: "Precio",
    anyPrice: "Cualquier precio",
    under25: "Menos de 25 €",
    mid: "25 € a 100 €",
    over100: "Más de 100 €",
    items: "productos",
    none: "Ningún producto coincide con estos filtros.",
  },
  category: { back: "Tienda", coming: "Los productos de esta categoría llegarán pronto." },
  brand: { back: "Todas las marcas", products: "Productos", noProducts: "Los productos de esta marca llegarán pronto." },
  product: {
    priceNote: "Precios con IVA incluido. Los gastos de envío se calculan en el pago.",
    addToCart: "Añadir al carrito",
    wishlistAdd: "Añadir a favoritos",
    wishlistRemove: "Quitar de favoritos",
    quantityDec: "Reducir cantidad",
    quantityInc: "Aumentar cantidad",
    trust: ["Producto original", "Envío gratis desde 75 €", "Devoluciones 14 días", "Pago seguro"],
    description: "Descripción",
    specifications: "Especificaciones",
    shipping: "Envíos y devoluciones",
    specBrand: "Marca",
    specCategory: "Categoría",
    specSoldPer: "Se vende por",
    shippingBody: [
      "Envío gratis a la España peninsular en pedidos superiores a 75 €.",
      "Se expide en 1 o 2 días laborables desde el puerto Valencia Mar.",
      "Devoluciones en 14 días de artículos sin usar en su embalaje original.",
    ],
    moreIn: "Más en",
    moreInFallback: "la tienda",
  },
  about: {
    title: "Sobre La Capitana",
    paras: [
      "La Capitana es una tienda náutica y de yates en el puerto Valencia Mar, nacida de un negocio familiar con décadas de experiencia comprando y suministrando equipamiento para barcos.",
      "Ofrecemos una gama seleccionada para el Mediterráneo español, la parte de embarcaciones de recreo y yates del sector, con marcas como Hempel, Epifanes, Sika, Talamex y Besto. Dejamos fuera el material pesado de navegación interior que aquí no se usa.",
      "Estamos a un minuto de la desembocadura del río Turia, el mejor punto de pesca de Valencia, así que también tenemos una sección de pesca para costa, barco y Mediterráneo.",
    ],
    card1Title: "Náutica y yates",
    card1Body: "Mantenimiento, herrajes, seguridad, electrónica y piezas de motor.",
    card2Title: "Pesca",
    card2Body: "Cañas, carretes y señuelos para el Mediterráneo.",
    cta: "Visita la tienda",
  },
  contact: {
    title: "Contacto",
    address: "Dirección",
    hours: "Horario",
    hoursValue: "Próxima apertura.",
    email: "Correo",
    formTitle: "Envíanos un mensaje",
    fName: "Nombre",
    fEmail: "Correo",
    fMessage: "Mensaje",
    fSend: "Enviar",
    addr: ["La Capitana", "Puerto Valencia Mar (lado de El Saler)", "Junto a Plan B", "46012 València, España"],
  },
  faqPage: {
    title: "Preguntas frecuentes",
    intro: "Respuestas rápidas sobre la tienda, los envíos, los pagos y las devoluciones. Si tu pregunta no está aquí, contáctanos.",
    items: faq,
  },
  cookieBanner: {
    text: "Usamos cookies para que la tienda funcione y, con tu consentimiento, para medir y mejorar.",
    policy: "Política de cookies",
    accept: "Aceptar todo",
    reject: "Rechazar no esenciales",
  },
  cart: {
    title: "Cesta",
    empty: "Tu cesta está vacía.",
    continue: "Seguir comprando",
    subtotal: "Subtotal",
    vat: "IVA incluido",
    checkout: "Tramitar pedido",
    checkoutNote: "Aún sin pago online, realizas una solicitud de pedido.",
    remove: "Quitar",
    close: "Cerrar",
    added: "Añadido",
  },
  checkout: {
    title: "Finalizar pedido",
    empty: "Tu cesta está vacía.",
    backToShop: "Volver a la tienda",
    contactTitle: "Datos de contacto",
    name: "Nombre completo",
    email: "Correo",
    phone: "Teléfono",
    deliveryTitle: "Entrega",
    methodShip: "Envío a mi dirección",
    methodPickup: "Recoger en el puerto",
    address: "Dirección",
    postcode: "Código postal",
    city: "Ciudad",
    country: "País",
    notes: "Notas del pedido (opcional)",
    summaryTitle: "Resumen del pedido",
    subtotal: "Subtotal",
    shipping: "Envío",
    free: "Gratis",
    total: "Total",
    place: "Realizar pedido",
    paymentNote: "Aún no hay pago online. Te confirmaremos el pedido por correo y acordaremos el pago contigo.",
    shippingNote: "El envío final se confirma con tu pedido.",
    thanksTitle: "Gracias, tu pedido está registrado",
    thanksBody: "Hemos recibido tu solicitud de pedido. Te escribiremos en breve para confirmar la disponibilidad y acordar el pago.",
    orderRef: "Referencia del pedido",
    continue: "Seguir comprando",
    vat: "IVA (21%) incl.",
    haveAccount: "¿Tienes cuenta? Inicia sesión para un pago más rápido",
    signedInAs: "Sesión iniciada como",
    chooseTitle: "¿Cómo quieres finalizar la compra?",
    chooseSubtitle: "Inicia sesión, crea una cuenta o continúa como invitado.",
    continueGuest: "Continuar como invitado",
    or: "o",
  },
  search: {
    placeholder: "Buscar productos",
    title: "Buscar",
    resultsFor: "Resultados para",
    noResults: "No se han encontrado productos para",
    results: "resultados",
  },
  auth: {
    signIn: "Iniciar sesión",
    signOut: "Cerrar sesión",
    account: "Cuenta",
    name: "Nombre completo",
    email: "Correo",
    password: "Contraseña",
    loginTab: "Iniciar sesión",
    registerTab: "Crear cuenta",
    loginCta: "Iniciar sesión",
    registerCta: "Crear cuenta",
    wrong: "Correo o contraseña incorrectos.",
    exists: "Ya existe una cuenta con este correo.",
    demoNote: "Inicio de sesión de demostración guardado en tu navegador. Las cuentas reales y seguras llegan con el backend.",
  },
  account: {
    title: "Mi cuenta",
    greeting: "Sesión iniciada como",
    profile: "Perfil",
    orders: "Historial de pedidos",
    noOrders: "Todavía no hay pedidos.",
    order: "Pedido",
    date: "Fecha",
    total: "Total",
  },
  nauticTalk: {
    kicker: "Comunicación a bordo con manos libres",
    title: "Nautic Talk",
    heroSub:
      "Sistemas de auriculares inalámbricos que mantienen a patrón y tripulación hablando con claridad, con las manos libres, del timón a la proa.",
    heroCta: "Ver los sistemas",
    introTitle: "Habla con tu tripulación sin gritar",
    intro:
      "Atracar, amarrar, fondear y manejar la vela salen mal siempre por lo mismo: alguien no oye la orden. Nautic Talk pone un auricular full-duplex a cada persona, así hablas con normalidad y las dos manos en la faena, sin botón que pulsar y sin gritar por encima del viento o del motor.",
    featuresTitle: "Por qué las tripulaciones no lo sueltan",
    features: [
      { icon: "radio", title: "Alcance de hasta 1.000 m", body: "Intercomunicador entre los auriculares, independiente del móvil, la VHF o la emisora CB." },
      { icon: "wave", title: "Manos libres, full duplex", body: "Habla y escucha a la vez, sin pulsar para hablar. Las dos manos en los cabos." },
      { icon: "droplet", title: "Resistente al agua y al polvo", body: "Sigue funcionando con salpicaduras y mal tiempo, incluso si acaba en el agua." },
      { icon: "gear", title: "Supresión de ruido DSP", body: "Software inteligente que elimina el viento y el motor para una voz nítida." },
      { icon: "bolt", title: "Hasta 10 horas de conversación", body: "Un día entero de maniobras con una carga, unas 1.000 horas en reposo." },
      { icon: "link", title: "Se empareja con el móvil", body: "También por Bluetooth al teléfono, en cualquier oreja, con reconexión automática al volver al alcance." },
    ],
    boxTitle: "En el set Duo",
    box: [
      "2 módulos de auricular Nautic Talk",
      "2 cargadores y cables de carga",
      "2 soportes de gancho para la oreja",
      "Soportes de pinza y adhesivos para casco",
      "Manual rápido",
    ],
    useTitle: "Pensado para los momentos que importan",
    use: ["Atraque y amarre", "Fondeo", "Manejo de vela", "Hombre al agua y seguridad", "Coordinación de tripulación en barcos grandes"],
    productsTitle: "Comprar Nautic Talk",
    trust: "Un favorito probado entre patrones y tripulaciones de yate.",
  },
  shipping,
  terms,
  privacy,
  cookies,
};

export default es;
