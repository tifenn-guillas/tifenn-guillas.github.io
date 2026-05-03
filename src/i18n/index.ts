export const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'fr';

/** Returns the alternate locale (for the language switcher). */
export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'fr' ? 'en' : 'fr';
}

/** Returns the equivalent URL in the alternate locale. */
export function getAlternateUrl(currentUrl: URL, currentLocale: Locale): string {
  const alternate = getAlternateLocale(currentLocale);
  return currentUrl.pathname.replace(`/${currentLocale}/`, `/${alternate}/`);
}

export const localeLabels: Record<Locale, string> = {
  fr: 'FR',
  en: 'EN',
};
