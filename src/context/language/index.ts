export { enTranslations } from './en';
export { frTranslations } from './fr';
export { deTranslations } from './de';
export { jpTranslations } from './jp';
export { zhTranslations } from './zh';

export type SupportedLanguage = 'en' | 'fr' | 'de' | 'jp' | 'zh' ;
export type Translations = Record<string, string>;