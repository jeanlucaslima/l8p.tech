import ptBR from '../i18n/pt-BR.json';
import en from '../i18n/en.json';

const translations = {
  'pt-BR': ptBR,
  'en': en
};

type Locale = 'pt-BR' | 'en';
type TranslationKey = string;

export function getTranslations(locale: Locale) {
  return translations[locale] || translations['pt-BR'];
}

export function t(locale: Locale, key: TranslationKey): string {
  const keys = key.split('.');
  let value: any = getTranslations(locale);

  for (const k of keys) {
    value = value?.[k];
  }

  return value || key;
}

export function getAlternateUrl(currentPath: string, targetLocale: Locale, currentLocale: Locale): string {
  // Remove leading slash
  const path = currentPath.replace(/^\//, '');

  // If switching to English and not already on /en/
  if (targetLocale === 'en' && currentLocale === 'pt-BR') {
    return `/en/${path}`;
  }

  // If switching to Portuguese from English
  if (targetLocale === 'pt-BR' && currentLocale === 'en') {
    // Remove /en/ prefix
    return `/${path.replace(/^en\//, '')}`;
  }

  return currentPath;
}
