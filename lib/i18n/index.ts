import en from "./en";
import es from "./es";

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

// Default locale. The site opens here and unprefixed URLs redirect to it.
// To make the shop Spanish-first, change this to "es" (one line).
export const defaultLocale: Locale = "en";

export type Dict = typeof en;

const dicts: Record<Locale, Dict> = { en, es: es as Dict };

export function getDict(locale: string): Dict {
  return dicts[locale as Locale] ?? dicts[defaultLocale];
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
