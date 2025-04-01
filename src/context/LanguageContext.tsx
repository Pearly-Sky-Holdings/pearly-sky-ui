// src/context/LanguageContext.tsx
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { 
  SupportedLanguage, 
  enTranslations, 
  frTranslations, 
  deTranslations,
  jpTranslations,
  zhTranslations,
  spTranslations,
  nlTranslations 
} from './language';

// Map country codes to language codes
export const countryToLanguage: Record<string, SupportedLanguage> = {
  'us': 'en',
  'gb': 'en',
  'fr': 'fr',
  'de': 'de',
  'jp': 'jp',
  'cn': 'cn',
  'es': 'sp',
  'nl': 'nl',
};

// Reverse mapping for convenience
export const languageToCountry: Record<SupportedLanguage, string> = {
  'en': 'us',
  'fr': 'fr',
  'de': 'de',
  'jp': 'jp',
  'cn': 'cn',
  'sp': 'es',
  'nl': 'nl',
};

// Define the translations dictionary
const translations: Record<SupportedLanguage, Record<string, string>> = {
  'en': enTranslations,
  'fr': frTranslations,
  'de': deTranslations,
  'jp': jpTranslations,
  'cn': zhTranslations,
  'sp': spTranslations,
  'nl': nlTranslations,
};

// Define the context type
type LanguageContextType = {
  language: SupportedLanguage;
  setLanguage: (language: SupportedLanguage) => void;
  translate: (key: string) => string;
  currentLanguage?: string;
};

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  translate: (key) => key,
});

// Create the provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Try to get language from localStorage if available
  const getBrowserLanguage = (): SupportedLanguage => {
    // Check localStorage
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && Object.keys(translations).includes(savedLanguage)) {
      return savedLanguage as SupportedLanguage;
    }

    // Check browser language
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'en' || browserLang === 'fr' || browserLang === 'de') {
      return browserLang as SupportedLanguage;
    }
    

    // Default to English
    return 'en';
  };

  const [language, setLanguage] = useState<SupportedLanguage>(getBrowserLanguage());

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('preferredLanguage', language);
    // Update document language for accessibility
    document.documentElement.lang = language;
  }, [language]);

  const handleSetLanguage = (newLanguage: SupportedLanguage) => {
    setLanguage(newLanguage);
  };

  const translate = (key: string): string => {
    // Return the translation or the key if translation doesn't exist
    if (key === 'commercialMixedUtilities' || key === 'teamOfExpertsTitle') {
      console.log('log____________', language, key);
      
    }
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Create a custom hook for easy access to the context
export const useLanguage = () => useContext(LanguageContext);