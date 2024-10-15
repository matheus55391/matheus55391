export type Locale = (typeof locales)[number];

export const locales = ['pt', 'en'] as const;
export const defaultLocale: Locale = 'pt';