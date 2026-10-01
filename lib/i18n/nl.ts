import type { LegalDoc, Faq } from "./types";

const UPDATED = "27 augustus 2026";

const faq: Faq[] = [
  {
    q: "Zijn jullie een webshop of een fysieke winkel?",
    a: "Allebei. Wij hebben een scheepsbenodigdhedenwinkel aan de Kadijk in Lemmer en verzenden online door heel Nederland en de Europese Unie.",
  },
  {
    q: "Waar zijn jullie gevestigd?",
    a: "Kadijk 2B, 8531 XD Lemmer, direct aan het water. Zie onze {{l:/contact|contactpagina}} voor een routebeschrijving.",
  },
  {
    q: "Wat zijn jullie openingstijden?",
    a: "{{f:Maandag tot en met vrijdag 09:00 tot 17:30, zaterdag 09:00 tot 16:00. Zondag gesloten.}}",
  },
  {
    q: "Leveren jullie ook buiten Nederland?",
    a: "Ja. Wij verzenden binnen heel Nederland en door de EU. Alle details staan op onze pagina {{l:/shipping|Verzending & Retour}}.",
  },
  {
    q: "Hoe lang duurt het voordat mijn bestelling er is?",
    a: "Bestellingen op voorraad worden binnen 1 tot 2 werkdagen verzonden. De levertijd hangt af van de bestemming, zie {{l:/shipping|Verzending & Retour}}.",
  },
  {
    q: "Zijn de prijzen inclusief BTW?",
    a: "Ja. Alle prijzen zijn inclusief 21% BTW. Bij bestellingen buiten de EU wordt zonder BTW gefactureerd en kunnen er invoerrechten en lokale belastingen bijkomen.",
  },
  {
    q: "Welke betaalmethoden accepteren jullie?",
    a: "Wij accepteren {{f:iDEAL, creditcard, Bancontact en bankoverschrijving}}. De beschikbare methoden worden bij het afrekenen getoond.",
  },
  {
    q: "Kan ik mijn bestelling afhalen in de winkel?",
    a: "Ja. Neem contact met ons op om het afhalen in Lemmer te regelen.",
  },
  {
    q: "Bieden jullie ook zakelijke of groothandelsprijzen?",
    a: "Ja. Wij leveren aan boten, watersportverenigingen, professionals en andere retailers. {{l:/contact|Neem contact op}} voor zakelijke voorwaarden.",
  },
  {
    q: "Kunnen jullie mij adviseren over het juiste product?",
    a: "Ja. Wij kennen de producten en de wateren. Vraag het ons en wij wijzen u de juiste keuze.",
  },
  {
    q: "Verkopen jullie ook communicatieapparatuur?",
    a: "Ja. Wij zijn dealer van Nautic Talk, draadloze intercom-headsets voor aan boord. Ideaal voor het aanleggen, ankeren en zeilen.",
  },
  {
    q: "Hoe kan ik een product retourneren?",
    a: "U heeft 14 dagen bedenktijd. Zie {{l:/shipping|Verzending & Retour}} voor de retourprocedure.",
  },
  {
    q: "Mijn bestelling is beschadigd aangekomen. Wat moet ik doen?",
    a: "Neem binnen 48 uur contact met ons op met een foto en uw bestelnummer. Wij regelen een vervanging of terugbetaling. Alle details staan op onze pagina {{l:/shipping|Verzending & Retour}}.",
  },
  {
    q: "Kunnen jullie een product bestellen dat niet in het assortiment staat?",
    a: "Vaak wel. Laat ons weten wat u nodig heeft en wij doen ons best het voor u te regelen.",
  },
];

const shipping: LegalDoc = {
  title: "Verzending & Retour",
  intro: "Hoe wij inpakken, verzenden en retouren afhandelen voor bestellingen in de Shipstore webshop.",
  updated: UPDATED,
  sections: [
    {
      h: "Waar wij bezorgen",
      blocks: [
        { t: "p", s: "Wij verzenden vanuit ons magazijn in Lemmer naar heel Nederland en de Europese Unie. Als uw land niet beschikbaar is bij het afrekenen, neem dan contact met ons op voor een offerte." },
      ],
    },
    {
      h: "Verzendkosten",
      blocks: [
        {
          t: "table",
          head: ["Bestemming", "Standaardtarief", "Gratis vanaf"],
          rows: [
            ["Nederland", "{{f:\u20AC5,95}}", "\u20AC75"],
            ["Belgi\u00EB en Duitsland", "{{f:\u20AC9,95}}", "{{f:\u20AC120}}"],
            ["Overige EU-landen", "{{f:\u20AC12,95}}", "{{f:\u20AC150}}"],
            ["Verenigd Koninkrijk en overige niet-EU", "Op aanvraag bij afrekenen", "\u2014"],
          ],
        },
        { t: "note", s: "Bestellingen naar landen buiten de EU worden zonder BTW verzonden. Invoerrechten, lokale BTW en afhandelingskosten kunnen bij levering in rekening worden gebracht en zijn voor rekening van de klant." },
      ],
    },
    {
      h: "Verzend- en levertijden",
      blocks: [
        { t: "p", s: "Bestellingen op voorraad worden binnen 1 tot 2 werkdagen verzonden. Verwachte levertijd na verzending:" },
        {
          t: "ul",
          items: [
            "Nederland: {{f:1 tot 2 werkdagen}}",
            "Belgi\u00EB en Duitsland: {{f:2 tot 4 werkdagen}}",
            "Overige EU-landen: {{f:3 tot 7 werkdagen}}",
            "VK en niet-EU: {{f:5 tot 10 werkdagen}}, plus eventuele douaneafhandeling",
          ],
        },
        { t: "note", s: "Levertijden zijn schattingen en worden niet gegarandeerd. Bestellingen geplaatst in het weekend of op feestdagen worden de eerstvolgende werkdag verwerkt." },
      ],
    },
    {
      h: "Gevaarlijke stoffen",
      blocks: [
        { t: "p", s: "Sommige scheepsproducten zijn geclassificeerd als gevaarlijke stoffen, waaronder noodsignalen, spuitbussen, lithiumbatterijen en bepaalde verven, oplosmiddelen en lijmen. Deze artikelen mogen niet per vliegtuig worden verzonden, kunnen een toeslag hebben en zijn niet naar elke bestemming leverbaar. Eventuele beperkingen worden bij het afrekenen getoond." },
      ],
    },
    {
      h: "Retourneren en het herroepingsrecht van 14 dagen",
      blocks: [
        { t: "p", s: "Als consument in de EU heeft u het recht om uw aankoop binnen 14 dagen na ontvangst zonder opgave van redenen te herroepen. Meld dit binnen die 14 dagen (een e-mail volstaat). Vervolgens heeft u nog 14 dagen om de producten terug te sturen." },
        { t: "p", s: "Geretourneerde artikelen moeten ongebruikt, compleet en in de originele verpakking zijn, in een staat die wederverkoop mogelijk maakt. De kosten voor retourzending zijn voor uw rekening, tenzij het artikel defect is of wij het verkeerde product hebben gestuurd." },
        { t: "p", s: "Het herroepingsrecht geldt niet voor:" },
        {
          t: "ul",
          items: [
            "Op maat gemaakte of op lengte gesneden producten, zoals touw, ketting of kabel op maat.",
            "Verzegelde producten die na opening niet kunnen worden teruggestuurd om hygi\u00EBne- of veiligheidsredenen.",
            "Speciaal voor u bestelde producten die wij normaal niet op voorraad hebben.",
          ],
        },
      ],
    },
    {
      h: "Hoe retourneren",
      blocks: [
        {
          t: "ol",
          items: [
            "Stuur een e-mail naar info@shipstore.nl met uw bestelnummer en de artikelen die u wilt retourneren.",
            "Wij antwoorden met het retouradres en instructies.",
            "Verpak de producten zorgvuldig en stuur ze binnen 14 dagen terug.",
          ],
        },
      ],
    },
    {
      h: "Terugbetalingen",
      blocks: [
        { t: "p", s: "Zodra wij de geretourneerde producten hebben ontvangen en gecontroleerd, betalen wij u binnen 14 dagen terug via dezelfde betaalmethode als waarmee u heeft betaald. Wij mogen de terugbetaling uitstellen totdat wij de producten hebben ontvangen. Als u bij de oorspronkelijke bestelling heeft gekozen voor een duurdere verzendoptie dan onze standaardservice, vergoeden wij alleen de standaard verzendkosten." },
      ],
    },
    {
      h: "Defecte, beschadigde of verkeerde artikelen",
      blocks: [
        { t: "p", s: "Alle producten vallen onder de wettelijke conformiteitsgarantie. Op grond van het Nederlands recht (Burgerlijk Wetboek, Boek 7) heeft u recht op een product dat aan de overeenkomst beantwoordt. Als een artikel beschadigd aankomt, defect is of niet is wat u heeft besteld, neem dan binnen redelijke tijd contact met ons op. Wij regelen kosteloos een reparatie, vervanging of terugbetaling, inclusief retourverzending." },
        { t: "p", s: "Controleer uw levering bij aankomst en meld zichtbare transportschade binnen {{f:48 uur}}, zodat wij dit bij de vervoerder kunnen melden." },
      ],
    },
    {
      h: "Vragen",
      blocks: [
        { t: "p", s: "Voor vragen over een bestelling, verzending of retour, zie onze {{l:/faq|Veelgestelde vragen}} of {{l:/contact|neem contact op}}." },
      ],
    },
  ],
};

const terms: LegalDoc = {
  title: "Algemene Voorwaarden",
  intro: "De voorwaarden die gelden wanneer u deze website gebruikt en producten koopt in de Shipstore webshop.",
  updated: UPDATED,
  sections: [
    {
      h: "1. Wie wij zijn",
      blocks: [
        { t: "p", s: "Deze website en webshop worden beheerd door Shipstore B.V." },
        {
          t: "ul",
          items: [
            "KvK-nummer: 71395318",
            "BTW-nummer: {{f:[NL BTW-nummer]}}",
            "Vestigingsadres: Kadijk 2B, 8531 XD Lemmer",
            "E-mail: info@shipstore.nl",
            "Telefoon: +31 514-856718",
          ],
        },
      ],
    },
    {
      h: "2. Deze voorwaarden",
      blocks: [
        { t: "p", s: "Door gebruik te maken van deze website of een bestelling te plaatsen, accepteert u deze voorwaarden. Lees ze voordat u bestelt. Wij kunnen ze van tijd tot tijd bijwerken; de versie die van toepassing is op uw bestelling is de versie die gepubliceerd was toen u deze plaatste." },
      ],
    },
    {
      h: "3. Producten en beschikbaarheid",
      blocks: [
        { t: "p", s: "Wij beschrijven onze producten zo nauwkeurig mogelijk. Foto's en specificaties dienen ter indicatie en kleine afwijkingen kunnen voorkomen. Alle producten zijn onder voorbehoud van beschikbaarheid. Als een besteld artikel niet leverbaar is, nemen wij contact met u op en bieden wij een alternatief of terugbetaling aan." },
      ],
    },
    {
      h: "4. Prijzen en BTW",
      blocks: [
        { t: "p", s: "Prijzen worden weergegeven in euro's en zijn inclusief 21% Nederlandse BTW, tenzij anders vermeld. Verzendkosten worden bij het afrekenen berekend en getoond voordat u bevestigt. Bestellingen buiten het BTW-gebied van de EU kunnen zonder BTW worden gefactureerd en zijn mogelijk onderhevig aan lokale invoerbelastingen en heffingen, die voor rekening van de klant komen. Wij streven naar correcte prijzen, maar bij een kennelijke prijsfout nemen wij contact met u op v\u00F3\u00F3r verzending en kunt u bevestigen tegen de juiste prijs of annuleren." },
      ],
    },
    {
      h: "5. Uw bestelling",
      blocks: [
        { t: "p", s: "Wanneer u een bestelling plaatst, sturen wij een bevestiging per e-mail. De overeenkomst komt tot stand op het moment dat wij de verzending van de producten bevestigen. Wij kunnen een bestelling weigeren of annuleren, bijvoorbeeld als de producten niet leverbaar zijn, de betaling niet is geautoriseerd of wij fraude vermoeden." },
      ],
    },
    {
      h: "6. Betaling",
      blocks: [
        { t: "p", s: "Betaling verloopt via onze betalingsprovider met de methoden die bij het afrekenen worden getoond. Uw kaart- en betaalgegevens worden verwerkt door de provider en worden niet door ons opgeslagen. Producten blijven ons eigendom totdat volledig is betaald." },
      ],
    },
    {
      h: "7. Verzending",
      blocks: [
        { t: "p", s: "Verzendkosten, bestemmingen en geschatte levertijden staan beschreven in ons {{l:/shipping|Verzending & Retour}}-beleid, dat onderdeel uitmaakt van deze voorwaarden. Het risico van de producten gaat bij levering over op u." },
      ],
    },
    {
      h: "8. Herroepingsrecht en retourneren",
      blocks: [
        { t: "p", s: "Als consument heeft u een herroepingsrecht van 14 dagen op de meeste bestellingen en een langere wettelijke garantie voor gebrekkige producten. De volledige procedure, voorwaarden en uitzonderingen staan beschreven in ons {{l:/shipping|Verzending & Retour}}-beleid." },
      ],
    },
    {
      h: "9. Wettelijke garantie",
      blocks: [
        { t: "p", s: "Alle aan consumenten verkochte producten vallen onder de wettelijke conformiteitsgarantie op grond van het Nederlands Burgerlijk Wetboek (Boek 7, Titel 1). U heeft recht op een product dat beantwoordt aan de overeenkomst. Dit staat los van eventuele fabrieksgaranties." },
      ],
    },
    {
      h: "10. Gebruik van producten",
      blocks: [
        { t: "p", s: "Scheeps-, veiligheids- en elektrische apparatuur moet juist worden geselecteerd, ge\u00EFnstalleerd en gebruikt. Onze productinformatie en adviezen worden te goeder trouw gegeven maar vervangen geen professionele installatie of uw eigen controles. U bent zelf verantwoordelijk om te bepalen of een product geschikt is voor uw boot en het beoogde gebruik." },
      ],
    },
    {
      h: "11. Aansprakelijkheid",
      blocks: [
        { t: "p", s: "Niets in deze voorwaarden beperkt onze aansprakelijkheid waar de wet dat niet toestaat, inclusief voor overlijden of persoonlijk letsel veroorzaakt door onze nalatigheid. Voor het overige zijn wij niet aansprakelijk voor indirecte of gevolgschade. Dit doet geen afbreuk aan uw wettelijke rechten als consument." },
      ],
    },
    {
      h: "12. Intellectueel eigendom",
      blocks: [
        { t: "p", s: "De inhoud van deze website, inclusief teksten, afbeeldingen en de naam en het logo van Shipstore, is ons eigendom of wordt met toestemming gebruikt en mag niet zonder onze toestemming worden hergebruikt." },
      ],
    },
    {
      h: "13. Toepasselijk recht en geschillen",
      blocks: [
        { t: "p", s: "Op deze voorwaarden is Nederlands recht van toepassing. Als u een consument bent, blijven de dwingende consumentenbeschermingsregels van uw land van vestiging van toepassing. Geschillen vallen onder de bevoegdheid van de Rechtbank Noord-Nederland, behoudens het recht van consumenten om een procedure elders aan te spannen." },
        { t: "p", s: "De Europese Commissie biedt een platform voor online geschillenbeslechting op {{a:https://ec.europa.eu/consumers/odr|ec.europa.eu/consumers/odr}}." },
      ],
    },
    {
      h: "14. Contact",
      blocks: [
        { t: "p", s: "Vragen over deze voorwaarden? E-mail info@shipstore.nl of gebruik onze {{l:/contact|contactpagina}}." },
      ],
    },
  ],
};

const privacy: LegalDoc = {
  title: "Privacybeleid",
  intro: "Hoe Shipstore B.V. uw persoonsgegevens verzamelt, gebruikt en beschermt, conform de AVG en de Nederlandse privacywetgeving.",
  updated: UPDATED,
  sections: [
    {
      h: "1. Wie is verantwoordelijk voor uw gegevens",
      blocks: [
        { t: "p", s: "De verwerkingsverantwoordelijke is:" },
        {
          t: "ul",
          items: [
            "Shipstore B.V.",
            "KvK-nummer: 71395318",
            "Adres: Kadijk 2B, 8531 XD Lemmer",
            "E-mail: info@shipstore.nl",
          ],
        },
      ],
    },
    {
      h: "2. Welke gegevens wij verzamelen",
      blocks: [
        {
          t: "ul",
          items: [
            "Contact- en accountgegevens: naam, e-mailadres, telefoonnummer, factuur- en afleveradres.",
            "Bestelgegevens: wat u heeft gekocht, bestelwaarde en -historie.",
            "Betaalgegevens, verwerkt door onze betalingsprovider. Wij slaan geen volledige kaartnummers op.",
            "Berichten die u ons stuurt via het contactformulier, e-mail of telefoon.",
            "Technische en gebruiksgegevens: IP-adres, apparaat en browser, en bezochte pagina's, verzameld via cookies.",
          ],
        },
      ],
    },
    {
      h: "3. Hoe wij ze gebruiken en onze rechtsgrond",
      blocks: [
        {
          t: "ul",
          items: [
            "Om uw bestellingen te verwerken, te leveren en retouren af te handelen. Rechtsgrond: uitvoering van de overeenkomst.",
            "Om uw vragen te beantwoorden en klantenservice te bieden. Rechtsgrond: uitvoering van de overeenkomst of ons gerechtvaardigd belang.",
            "Om te voldoen aan boekhoudkundige, fiscale en andere wettelijke verplichtingen. Rechtsgrond: wettelijke verplichting.",
            "Om marketinge-mails te sturen, alleen als u zich hiervoor heeft aangemeld. Rechtsgrond: toestemming, die u op elk moment kunt intrekken.",
            "Om de website veilig te houden en te verbeteren. Rechtsgrond: ons gerechtvaardigd belang.",
          ],
        },
      ],
    },
    {
      h: "4. Met wie wij ze delen",
      blocks: [
        { t: "p", s: "Wij delen persoonsgegevens alleen met dienstverleners die ons helpen de webshop te runnen, waaronder:" },
        {
          t: "ul",
          items: [
            "Onze betalingsprovider: {{f:[betalingsprovider]}}",
            "Bezorg- en koeriersdiensten: {{f:[vervoerders]}}",
            "Onze webshop-, hosting- en e-mailproviders: {{f:[platform / hosting / e-mailtools]}}",
          ],
        },
        { t: "p", s: "Deze dienstverleners mogen uw gegevens alleen gebruiken voor het uitvoeren van hun dienst aan ons. Wij verkopen uw persoonsgegevens niet." },
      ],
    },
    {
      h: "5. Internationale doorgifte",
      blocks: [
        { t: "p", s: "Wanneer een dienstverlener gegevens buiten de Europese Economische Ruimte verwerkt, zorgen wij voor passende waarborgen, zoals de standaardcontractbepalingen van de Europese Commissie." },
      ],
    },
    {
      h: "6. Cookies",
      blocks: [
        { t: "p", s: "Wij gebruiken cookies die nodig zijn voor het functioneren van de website en, met uw toestemming, cookies voor analyse en marketing. U kunt niet-essenti\u00EBle cookies accepteren of weigeren via onze cookiebanner en uw keuze op elk moment wijzigen. Zie ons {{l:/cookies|Cookiebeleid}} voor meer informatie." },
      ],
    },
    {
      h: "7. Hoe lang wij ze bewaren",
      blocks: [
        { t: "p", s: "Wij bewaren bestel- en facturatiegegevens zo lang als de fiscale en handelsrechtelijke wetgeving vereist (doorgaans zeven jaar). Overige gegevens worden alleen zo lang bewaard als nodig voor het doel waarvoor ze zijn verzameld, waarna ze worden verwijderd of geanonimiseerd." },
      ],
    },
    {
      h: "8. Uw rechten",
      blocks: [
        { t: "p", s: "U kunt ons vragen om:" },
        {
          t: "ul",
          items: [
            "Inzage in de gegevens die wij over u bewaren.",
            "Correctie van gegevens die onjuist of onvolledig zijn.",
            "Verwijdering van uw gegevens, voor zover de wet dit toestaat.",
            "Beperking van of bezwaar tegen de verwerking.",
            "Overdracht van uw gegevens in een gangbaar formaat (dataportabiliteit).",
            "Intrekking van uw toestemming op elk moment, zonder dat dit de eerdere verwerking aantast.",
          ],
        },
        { t: "p", s: "Om gebruik te maken van deze rechten, stuur een e-mail naar info@shipstore.nl. U heeft ook het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens (AP) via {{a:https://www.autoriteitpersoonsgegevens.nl|autoriteitpersoonsgegevens.nl}}." },
      ],
    },
    {
      h: "9. Beveiliging",
      blocks: [
        { t: "p", s: "Wij nemen passende technische en organisatorische maatregelen om uw gegevens te beschermen tegen verlies, misbruik en ongeautoriseerde toegang." },
      ],
    },
    {
      h: "10. Wijzigingen",
      blocks: [
        { t: "p", s: "Wij kunnen dit beleid bijwerken. De actuele versie staat altijd op deze pagina, met de datum van de laatste wijziging." },
      ],
    },
    {
      h: "11. Contact",
      blocks: [
        { t: "p", s: "Vragen over uw gegevens? E-mail info@shipstore.nl of gebruik onze {{l:/contact|contactpagina}}." },
      ],
    },
  ],
};

const cookies: LegalDoc = {
  title: "Cookiebeleid",
  intro: "Hoe Shipstore B.V. cookies gebruikt op deze website.",
  updated: UPDATED,
  sections: [
    {
      h: "1. Wat zijn cookies",
      blocks: [
        { t: "p", s: "Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen wanneer u een website bezoekt. Ze helpen de website te functioneren, uw keuzes te onthouden en te begrijpen hoe de site wordt gebruikt." },
      ],
    },
    {
      h: "2. Hoe wij cookies gebruiken",
      blocks: [
        {
          t: "ul",
          items: [
            "Essenti\u00EBle cookies die nodig zijn voor het functioneren van de website, waaronder uw taalvoorkeur, winkelwagen en cookievoorkeuren. Deze staan altijd aan.",
            "Analytische cookies die ons helpen begrijpen hoe de site wordt gebruikt. Deze worden alleen met uw toestemming geplaatst.",
            "Marketingcookies die onze advertenties meten en ondersteunen. Deze worden alleen met uw toestemming geplaatst.",
          ],
        },
      ],
    },
    {
      h: "3. Uw cookies beheren",
      blocks: [
        { t: "p", s: "Bij uw eerste bezoek kunt u via onze cookiebanner alle cookies accepteren of niet-essenti\u00EBle cookies weigeren. U kunt uw keuze op elk moment wijzigen door de cookies van deze site in uw browser te wissen, waarna de banner opnieuw verschijnt. U kunt cookies ook blokkeren of verwijderen via uw browserinstellingen, maar de site werkt dan mogelijk niet zoals bedoeld." },
      ],
    },
    {
      h: "4. Welke cookies wij gebruiken",
      blocks: [
        { t: "p", s: "De specifieke analyse- en marketingtools die wij gebruiken zijn: {{f:[analyse- / marketingtools, bijv. Google Analytics]}}. Deze worden samen met de manier waarop wij uw gegevens verwerken beschreven in ons {{l:/privacy|Privacybeleid}}." },
      ],
    },
    {
      h: "5. Meer informatie",
      blocks: [
        { t: "p", s: "Zie ons {{l:/privacy|Privacybeleid}} voor hoe wij uw persoonsgegevens verwerken. Vragen? E-mail info@shipstore.nl of gebruik onze {{l:/contact|contactpagina}}." },
      ],
    },
  ],
};

const nl = {
  code: "nl",
  htmlLang: "nl",
  localeName: "Nederlands",
  meta: {
    title: "Shipstore — Scheepsbenodigdheden & Watersportartikelen \u00B7 Lemmer",
    description:
      "Scheepsbenodigdheden en watersportartikelen in Lemmer. Onderhoud, scheepsuitrusting, veiligheid, elektronica en coatings voor boten en jachten.",
  },
  switchLabel: "EN",
  switchTo: "Switch to English",
  nav: { shop: "Winkel", nauticTalk: "Nautic Talk", fishing: "Merken", about: "Over ons", contact: "Contact" },
  a11y: { search: "Zoeken", cart: "Winkelwagen" },
  common: {
    add: "Toevoegen",
    addToCart: "In winkelwagen",
    sale: "Aanbieding",
    home: "Home",
    shop: "Winkel",
    allCategories: "Alle categorie\u00EBn",
    updated: "Laatst bijgewerkt",
  },
  footer: {
    blurb: "Scheepsbenodigdheden en watersportartikelen in Lemmer, Friesland.",
    shop: "Winkel",
    info: "Info",
    legal: "Juridisch",
    address: "Adres",
    about: "Over ons",
    contact: "Contact",
    faq: "Veelgestelde vragen",
    shipping: "Verzending & Retour",
    terms: "Algemene Voorwaarden",
    privacy: "Privacybeleid",
    cookies: "Cookiebeleid",
  },
  home: {
    heroTitle: "Alles voor de watersport en de scheepvaart",
    heroSub: "Als ervaren binnenvaartschippers en gepassioneerde watersportliefhebbers leveren wij hoogwaardige materialen en deskundig advies — van fenders en gereedschap tot elektra en veiligheidsmiddelen. Snelle levering in de Benelux, Duitsland en Spanje.",
    heroCta: "Bekijk alle producten",
    usps: ["Deskundig advies", "Breed assortiment", "Snelle levering in de Benelux", "Zakelijk & particulier"],
    categories: "Winkel per categorie",
    featured: "Uitgelichte producten",
    brands: "Merken",
    visit: "Bezoek ons",
    visitText: "Kadijk 2B, 8531 XD Lemmer. Direct aan de jachthaven.",
    visitCta: "Contact & openingstijden",
  },
  shop: { title: "Winkel", all: "Alle producten" },
  browse: {
    sort: "Sorteren",
    featured: "Uitgelicht",
    priceAsc: "Prijs: laag naar hoog",
    priceDesc: "Prijs: hoog naar laag",
    name: "Naam A-Z",
    brand: "Merk",
    allBrands: "Alle merken",
    price: "Prijs",
    anyPrice: "Elke prijs",
    under25: "Onder \u20AC25",
    mid: "\u20AC25 tot \u20AC100",
    over100: "Boven \u20AC100",
    items: "producten",
    none: "Geen producten gevonden met deze filters.",
    filters: "Filters",
    clearAll: "Alles wissen",
    to: "tot",
  },
  category: { back: "Winkel", coming: "Producten in deze categorie volgen binnenkort." },
  brand: { back: "Alle merken", products: "Producten", noProducts: "Producten van dit merk volgen binnenkort." },
  product: {
    priceNote: "Prijzen zijn inclusief BTW. Verzendkosten worden bij het afrekenen berekend.",
    addToCart: "In winkelwagen",
    wishlistAdd: "Aan verlanglijst toevoegen",
    wishlistRemove: "Van verlanglijst verwijderen",
    quantityDec: "Aantal verlagen",
    quantityInc: "Aantal verhogen",
    trust: ["Originele voorraad", "Gratis verzending vanaf \u20AC75", "14 dagen retour", "Veilig betalen"],
    description: "Beschrijving",
    specifications: "Specificaties",
    shipping: "Verzending & retour",
    specBrand: "Merk",
    specCategory: "Categorie",
    specSoldPer: "Verkocht per",
    shippingBody: [
      "Gratis bezorging in heel Nederland bij bestellingen boven \u20AC75.",
      "Verzonden binnen 1 tot 2 werkdagen vanuit Lemmer.",
      "14 dagen retourrecht op ongebruikte artikelen in originele verpakking.",
    ],
    moreIn: "Meer in",
    moreInFallback: "de winkel",
  },
  about: {
    title: "Over Shipstore",
    paras: [
      "Shipstore B.V. is een scheepsbenodigdhedenwinkel en webshop in Lemmer, gebouwd op jarenlange ervaring in het leveren van scheepsuitrusting en watersportartikelen.",
      "Wij voeren een breed assortiment met merken als Hempel, Epifanes, Sigma, Sika, 3M, Talamex, Besto, Americol, Vikan en Zettex. Van schoonmaakmiddelen en coatings tot veiligheidsuitrusting en scheepsbeslag.",
      "Daarnaast zijn wij dealer van Nautic Talk, het draadloze Bluetooth-intercomsysteem voor aan boord. Ideaal voor schipper en bemanning bij het aanleggen, ankeren en zeilen.",
    ],
    card1Title: "Scheepsbenodigdheden",
    card1Body: "Onderhoud, scheepsuitrusting, veiligheid, elektronica en coatings.",
    card2Title: "Nautic Talk",
    card2Body: "Draadloze intercom-headsets voor helder communiceren aan boord.",
    cta: "Bekijk de winkel",
  },
  contact: {
    title: "Contact",
    company: "SHIPSTORE bv.",
    intro:
      "Shipstore levert scheepvaartmaterialen aan de scheepvaart en watersport. Wij leveren een goede service met deskundig advies. De deskundigheid komt voort uit vele decennia ervaring als binnenvaartschipper en watersportliefhebber.",
    hours: "Openingstijden",
    hoursValue: "Maandag t/m vrijdag 9:00 - 17:00",
    phoneNote: "Telefonisch staat Marco van de klantenservice voor u klaar:",
    phone: "+31 (0)6 211 000 79",
    infoTitle: "Contactinformatie",
    address: "Adres",
    email: "E-mail",
    addr: ["Kadijk 2b", "8531 XD Lemmer", "Friesland", "Nederland"],
    formTitle: "Stuur een bericht",
    fName: "Naam",
    fCompany: "Bedrijfsnaam",
    fPhone: "Telefoonnummer",
    fEmail: "E-mailadres",
    fMessage: "Bericht",
    fSend: "Verzenden",
    required: "* Verplichte velden",
    sending: "Versturen...",
    sent: "Bedankt, uw bericht is onderweg. Wij nemen zo snel mogelijk contact met u op.",
    error: "Er is iets misgegaan. Probeer het opnieuw of mail ons direct.",
  },
  notFound: {
    title: "Pagina niet gevonden",
    body: "De pagina die u zoekt bestaat niet of is verplaatst.",
    home: "Terug naar home",
    shop: "Naar de winkel",
  },
  recentlyViewed: "Recent bekeken",
  newsletter: {
    title: "Blijf op de hoogte",
    subtitle: "Nieuwe producten, aanbiedingen en nieuws vanuit Lemmer. Geen spam.",
    placeholder: "Uw e-mailadres",
    cta: "Aanmelden",
    done: "U bent aangemeld, bedankt!",
    error: "Er is iets misgegaan. Probeer het opnieuw.",
  },
  faqPage: {
    title: "Veelgestelde vragen",
    intro: "Snelle antwoorden over de winkel, verzending, betalen en retourneren. Staat uw vraag er niet bij? Neem contact met ons op.",
    items: faq,
  },
  cookieBanner: {
    text: "Wij gebruiken cookies om de webshop te laten werken en, met uw toestemming, om deze te meten en te verbeteren.",
    policy: "Cookiebeleid",
    accept: "Alles accepteren",
    reject: "Niet-essenti\u00EBle weigeren",
  },
  cart: {
    title: "Winkelwagen",
    empty: "Uw winkelwagen is leeg.",
    continue: "Verder winkelen",
    subtotal: "Subtotaal",
    vat: "BTW inbegrepen",
    checkout: "Afrekenen",
    checkoutNote: "Nog geen online betaling, u plaatst een bestelaanvraag.",
    remove: "Verwijderen",
    close: "Sluiten",
    added: "Toegevoegd",
  },
  checkout: {
    title: "Afrekenen",
    empty: "Uw winkelwagen is leeg.",
    backToShop: "Terug naar winkel",
    contactTitle: "Contactgegevens",
    name: "Volledige naam",
    email: "E-mail",
    phone: "Telefoon",
    deliveryTitle: "Bezorging",
    methodShip: "Laten bezorgen",
    methodPickup: "Afhalen in Lemmer",
    savedAddress: "Bezorgen op",
    newAddress: "Nieuw adres gebruiken",
    address: "Adres",
    postcode: "Postcode",
    city: "Plaats",
    country: "Land",
    notes: "Opmerkingen bij bestelling (optioneel)",
    summaryTitle: "Besteloverzicht",
    subtotal: "Subtotaal",
    shipping: "Verzending",
    free: "Gratis",
    total: "Totaal",
    place: "Bestelling plaatsen",
    paymentNote: "Nog geen online betaling. Wij bevestigen uw bestelling per e-mail en regelen de betaling met u.",
    shippingNote: "Definitieve verzendkosten worden bij uw bestelling bevestigd.",
    thanksTitle: "Bedankt, uw bestelling is ontvangen",
    thanksBody: "Wij hebben uw bestelaanvraag ontvangen. U ontvangt binnenkort een e-mail met de bevestiging van beschikbaarheid en betaling.",
    orderRef: "Bestelreferentie",
    continue: "Verder winkelen",
    vat: "BTW (21%) incl.",
    haveAccount: "Al een account? Log in voor sneller afrekenen",
    signedInAs: "Ingelogd als",
    chooseTitle: "Hoe wilt u afrekenen?",
    chooseSubtitle: "Log in, maak een account aan of ga verder als gast.",
    continueGuest: "Verder als gast",
    or: "of",
  },
  search: {
    placeholder: "Zoek producten",
    title: "Zoeken",
    resultsFor: "Resultaten voor",
    noResults: "Geen producten gevonden voor",
    results: "resultaten",
  },
  wishlist: {
    title: "Verlanglijst",
    empty: "Uw verlanglijst is leeg.",
    browse: "Producten bekijken",
  },
  auth: {
    signIn: "Inloggen",
    signOut: "Uitloggen",
    account: "Account",
    name: "Volledige naam",
    email: "E-mail",
    password: "Wachtwoord",
    loginTab: "Inloggen",
    registerTab: "Account aanmaken",
    loginCta: "Inloggen",
    registerCta: "Account aanmaken",
    wrong: "Verkeerd e-mailadres of wachtwoord.",
    exists: "Er bestaat al een account met dit e-mailadres.",
    demoNote: "Demo-login opgeslagen in uw browser. Echte, beveiligde accounts komen met de backend.",
  },
  account: {
    title: "Mijn account",
    hello: "Welkom terug",
    dashSubtitle: "Beheer uw bestellingen, adressen en gegevens vanuit hier.",
    nav: {
      dashboard: "Dashboard",
      orders: "Bestellingen",
      addresses: "Adressen",
      wishlist: "Verlanglijst",
      settings: "Instellingen",
      logout: "Uitloggen",
    },
    statOrders: "Bestellingen",
    statWishlist: "Verlanglijst",
    statAddresses: "Adressen",
    recentOrder: "Laatste bestelling",
    quickLinks: "Snelkoppelingen",
    viewAll: "Alles bekijken",
    // orders
    orders: "Bestelgeschiedenis",
    noOrders: "U heeft nog geen bestellingen geplaatst.",
    order: "Bestelling",
    date: "Datum",
    total: "Totaal",
    startShopping: "Begin met winkelen",
    // addresses
    addressesTitle: "Opgeslagen adressen",
    addressesSubtitle: "Adressen die u kunt hergebruiken bij het afrekenen.",
    addAddress: "Adres toevoegen",
    editAddress: "Adres bewerken",
    noAddresses: "U heeft nog geen adressen opgeslagen.",
    default: "Standaard",
    makeDefault: "Als standaard instellen",
    edit: "Bewerken",
    delete: "Verwijderen",
    save: "Opslaan",
    cancel: "Annuleren",
    fRecipient: "Naam ontvanger",
    fLine1: "Straat en huisnummer",
    fLine2: "Appartement, suite (optioneel)",
    fPostcode: "Postcode",
    fCity: "Plaats",
    fCountry: "Land",
    fPhone: "Telefoon (optioneel)",
    // settings
    settingsTitle: "Accountinstellingen",
    profile: "Profiel",
    fFirstName: "Voornaam",
    fLastName: "Achternaam",
    fEmail: "E-mail",
    emailLocked: "Uw e-mailadres is uw login en kan hier nog niet worden gewijzigd.",
    marketing: "Stuur mij e-mails over nieuwe producten en aanbiedingen",
    saveChanges: "Wijzigingen opslaan",
    saved: "Wijzigingen opgeslagen.",
    // logout confirmation
    logoutTitle: "Uitloggen?",
    logoutBody: "U moet opnieuw inloggen om uw bestellingen en gegevens te zien.",
    logoutConfirm: "Uitloggen",
  },
  nauticTalk: {
    kicker: "Handsfree communicatie aan boord",
    title: "Nautic Talk",
    heroSub:
      "Draadloze headset-systemen waarmee schipper en bemanning helder met elkaar praten, handsfree, van het roer tot de boeg.",
    heroCta: "Bekijk de systemen",
    introTitle: "Praat met je bemanning zonder te schreeuwen",
    intro:
      "Aanleggen, afmeren, ankeren en zeilmanoeuvres gaan altijd op dezelfde manier mis: iemand hoort de instructie niet. Nautic Talk geeft iedereen aan boord een full-duplex headset, zodat u normaal praat met beide handen aan het werk, geen knop om in te drukken en geen geschreeuw over de wind of de motor.",
    featuresTitle: "Waarom bemanningen er niet meer zonder kunnen",
    features: [
      { icon: "radio", title: "Tot 1.000 m bereik", body: "Intercom tussen de headsets, onafhankelijk van uw telefoon, marifoon of portofoon." },
      { icon: "wave", title: "Handsfree, full duplex", body: "Tegelijk praten en luisteren, geen spreekknop nodig. Houd beide handen aan de lijnen." },
      { icon: "droplet", title: "Waterdicht & stofdicht", body: "Blijft werken bij opspattend water en slecht weer, zelfs als hij in het water valt." },
      { icon: "gear", title: "DSP-ruisonderdrukking", body: "Slimme software filtert wind- en motorgeluid voor kristalhelder geluid." },
      { icon: "bolt", title: "Tot 10 uur spreektijd", body: "Een hele dag manoeuvres op \u00E9\u00E9n lading, circa 1.000 uur stand-by." },
      { icon: "link", title: "Koppelt met uw telefoon", body: "Bluetooth naar een mobiel, draag hem op beide oren, verbindt automatisch opnieuw wanneer u weer binnen bereik bent." },
    ],
    boxTitle: "In de Duo-set",
    box: [
      "2 Nautic Talk headset-modules",
      "2 laders en laadkabels",
      "2 oorhaakhouders",
      "Helmklem en zelfklevende houders",
      "Snelstartgids",
    ],
    useTitle: "Gemaakt voor de momenten die ertoe doen",
    use: ["Aanleggen & afmeren", "Ankeren", "Zeilmanoeuvres", "Man-over-boord & veiligheid", "Bemanning co\u00F6rdinatie op grote boten"],
    productsTitle: "Nautic Talk bestellen",
    trust: "Een bewezen favoriet bij schippers en jachtbemanningen.",
  },
  shipping,
  terms,
  privacy,
  cookies,
};

export default nl;
