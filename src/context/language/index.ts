export { enTranslations } from './en';
export { frTranslations } from './fr';
export { deTranslations } from './de';
export { jpTranslations } from './jp';
export { zhTranslations } from './zh';
export { spTranslations } from './sp';
export { nlTranslations } from './nl';
export { svTranslations } from './se';
export { arTranslations } from './ae';

export type SupportedLanguage = 'en' | 'fr' | 'de' | 'jp' | 'cn' | 'sp' | 'nl' | 'se';
export type Translations = Record<string, string>;