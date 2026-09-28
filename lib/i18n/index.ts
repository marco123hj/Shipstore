import en from "./en";
import nl from "./nl";

export const locales = ["nl", "en"] as const;
export type Locale = (typeof locales)[number];

// Default locale. The site opens here and unprefixed URLs redirect to it.
// Dutch-first (Netherlands store, shipstore.nl). English is kept for
// international visitors. Change to "en" to make English the default.
export const defaultLocale: Locale = "nl";

export type Dict = typeof en;

const dicts: Record<Locale, Dict> = { en, nl: nl as Dict };

export function getDict(locale: string): Dict {
  return dicts[locale as Locale] ?? dicts[defaultLocale];
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
