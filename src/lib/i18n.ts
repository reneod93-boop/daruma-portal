import es from '@/i18n/es.json';
import en from '@/i18n/en.json';

export type Locale = 'es' | 'en';
export const dictionaries = { es, en } as const;

export function getDict(locale: Locale = 'es') {
  return dictionaries[locale];
}
