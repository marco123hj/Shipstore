import en from "./en";
import es from "./es";

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

// Default locale. The site opens here and unprefixed URLs redirect to it.
// Spanish-first (Spain store). Change to "en" to make English the default.
export const defaultLocale: Locale = "es";

export type Dict = typeof en;

const dicts: Record<Locale, Dict> = { en, es: es as Dict };

export function getDict(locale: string): Dict {
  return dicts[locale as Locale] ?? dicts[defaultLocale];
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
