// src/context/LanguageContext.tsx
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Define supported languages
export type SupportedLanguage = 'en' | 'fr' | 'de' | 'ja' | 'si';

// Map country codes to language codes
export const countryToLanguage: Record<string, SupportedLanguage> = {
  'us': 'en',
  'gb': 'en',
  'fr': 'fr',
  'de': 'de',
  'jp': 'ja',
  'lk': 'si',
};

// Reverse mapping for convenience
export const languageToCountry: Record<SupportedLanguage, string> = {
  'en': 'us',
  'fr': 'fr',
  'de': 'de',
  'ja': 'jp',
  'si': 'lk',
};

// Define the context type
type LanguageContextType = {
  language: SupportedLanguage;
  setLanguage: (language: SupportedLanguage) => void;
  translate: (key: string) => string;
};

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  translate: (key) => key,
});

// Define translation dictionaries
const translations: Record<SupportedLanguage, Record<string, string>> = {
  en: {
    // TopBar translations
    login: 'Login',
    unitedStates: 'United States',
    unitedKingdom: 'United Kingdom',
    france: 'France',
    germany: 'Germany',
    japan: 'Japan',
    sriLanka: 'Sri Lanka',
    languageSelector: 'Select Language',
    
    // Navigation/Menu translations
    home: 'Home',
    services: 'Services',
    locations: 'Locations',
    aboutUs: 'About Us',
    contactUs: 'Contact Us',
    career: 'Careers',
    customerDashboard: 'Customer Dashboard',
    
    // HomePage translations
    welcomeTitle: 'Welcome to Pearly Sky Cleaning Services',
    welcomeDescription: 'You are our most valued asset at PearlySky Company Pvt. Ltd. We are committed to providing you with the best care and service.',
    bookNow: 'Book Now',
    homePageImageAlt: 'Cleaning service showcase',
    previousImage: 'Previous image',
    nextImage: 'Next image',
    goToImage: 'Go to image ',
    
    // Services translations
    regularBasicCleaning: 'Regular & Basic Cleaning',
    oneTimeCleaning: 'One Time Cleaning',
    lastMinuteCleaning: 'Last Minute Cleaning',
    deepCleaning: 'Deep Cleaning',
    moveInOutCleaning: 'Move In/Out Cleaning',
    postConstructionCleaning: 'Post Construction Cleaning',
    airbnbCleaning: 'Airbnb & Short-term Rental Cleaning',
    childCareCleaning: 'Child Care Cleaning',
    elderCareCleaning: 'Elder Care Cleaning',
    sanitizationDisinfection: 'Sanitization & Disinfection',
    commercialOfficeCleaning: 'Commercial & Office Cleaning',
    carpetCleaning: 'Carpet Cleaning',
    
    // Footer translations
    footerAboutUs: 'About Us',
    footerServices: 'Services',
    footerContact: 'Contact',
    footerPrivacyPolicy: 'Privacy Policy',
    footerTermsConditions: 'Terms & Conditions',
    footerCopyright: '© 2025 PearlySky Company Pvt. Ltd. All Rights Reserved.',
    
    // Customer Dashboard translations
    settings: 'Settings',
    help: 'Help',
    myBookings: 'My Bookings',
    profile: 'Profile',
    logout: 'Logout',
    
    // Checkout Page
    checkout: 'Checkout',
    payment: 'Payment',
    summary: 'Order Summary',
    confirm: 'Confirm',
    
    // Common UI elements
    loading: 'Loading...',
    readMore: 'Read More',
    viewDetails: 'View Details',
    submit: 'Submit',
    back: 'Back',
    next: 'Next',
  },
  fr: {
    // TopBar translations
    login: 'Se connecter',
    unitedStates: 'États-Unis',
    unitedKingdom: 'Royaume-Uni',
    france: 'France',
    germany: 'Allemagne',
    japan: 'Japon',
    sriLanka: 'Sri Lanka',
    languageSelector: 'Choisir la langue',
    
    // Navigation/Menu translations
    home: 'Accueil',
    services: 'Services',
    locations: 'Emplacements',
    aboutUs: 'À propos',
    contactUs: 'Contactez-nous',
    career: 'Carrières',
    customerDashboard: 'Tableau de bord client',
    
    // HomePage translations
    welcomeTitle: 'Bienvenue chez Pearly Sky Services de Nettoyage',
    welcomeDescription: 'Vous êtes notre atout le plus précieux chez PearlySky Company Pvt. Ltd. Nous nous engageons à vous fournir les meilleurs soins et services.',
    bookNow: 'Réserver maintenant',
    homePageImageAlt: 'Présentation des services de nettoyage',
    previousImage: 'Image précédente',
    nextImage: 'Image suivante',
    goToImage: 'Aller à l\'image ',
    
    // Services translations
    regularBasicCleaning: 'Nettoyage régulier et basique',
    oneTimeCleaning: 'Nettoyage ponctuel',
    lastMinuteCleaning: 'Nettoyage de dernière minute',
    deepCleaning: 'Nettoyage en profondeur',
    moveInOutCleaning: 'Nettoyage d\'entrée/sortie',
    postConstructionCleaning: 'Nettoyage après construction',
    airbnbCleaning: 'Nettoyage Airbnb et location courte durée',
    childCareCleaning: 'Nettoyage pour garde d\'enfants',
    elderCareCleaning: 'Nettoyage pour soins aux personnes âgées',
    sanitizationDisinfection: 'Désinfection et assainissement',
    commercialOfficeCleaning: 'Nettoyage commercial et bureaux',
    carpetCleaning: 'Nettoyage de tapis',
    
    // Footer translations
    footerAboutUs: 'À propos de nous',
    footerServices: 'Services',
    footerContact: 'Contact',
    footerPrivacyPolicy: 'Politique de confidentialité',
    footerTermsConditions: 'Conditions générales',
    footerCopyright: '© 2025 PearlySky Company Pvt. Ltd. Tous droits réservés.',
    
    // Customer Dashboard translations
    settings: 'Paramètres',
    help: 'Aide',
    myBookings: 'Mes réservations',
    profile: 'Profil',
    logout: 'Déconnexion',
    
    // Checkout Page
    checkout: 'Paiement',
    payment: 'Paiement',
    summary: 'Résumé de la commande',
    confirm: 'Confirmer',
    
    // Common UI elements
    loading: 'Chargement...',
    readMore: 'Lire la suite',
    viewDetails: 'Voir les détails',
    submit: 'Soumettre',
    back: 'Retour',
    next: 'Suivant',
  },
  de: {
    // TopBar translations
    login: 'Anmelden',
    unitedStates: 'Vereinigte Staaten',
    unitedKingdom: 'Vereinigtes Königreich',
    france: 'Frankreich',
    germany: 'Deutschland',
    japan: 'Japan',
    sriLanka: 'Sri Lanka',
    languageSelector: 'Sprache auswählen',
    
    // Navigation/Menu translations
    home: 'Startseite',
    services: 'Dienstleistungen',
    locations: 'Standorte',
    aboutUs: 'Über uns',
    contactUs: 'Kontakt',
    career: 'Karriere',
    customerDashboard: 'Kundendashboard',
    
    // HomePage translations
    welcomeTitle: 'Willkommen bei Pearly Sky Reinigungsservice',
    welcomeDescription: 'Sie sind unser wertvollstes Gut bei PearlySky Company Pvt. Ltd. Wir sind bestrebt, Ihnen die beste Betreuung und den besten Service zu bieten.',
    bookNow: 'Jetzt buchen',
    homePageImageAlt: 'Vorstellung der Reinigungsdienste',
    previousImage: 'Vorheriges Bild',
    nextImage: 'Nächstes Bild',
    goToImage: 'Gehe zu Bild ',
    
    // Services translations
    regularBasicCleaning: 'Regelmäßige & Basisreinigung',
    oneTimeCleaning: 'Einmalige Reinigung',
    lastMinuteCleaning: 'Last-Minute-Reinigung',
    deepCleaning: 'Tiefenreinigung',
    moveInOutCleaning: 'Ein-/Auszugsreinigung',
    postConstructionCleaning: 'Baureinigung',
    airbnbCleaning: 'Airbnb & Kurzzeitvermietungsreinigung',
    childCareCleaning: 'Kinderbetreuungsreinigung',
    elderCareCleaning: 'Seniorenbetreuungsreinigung',
    sanitizationDisinfection: 'Desinfektion & Hygiene',
    commercialOfficeCleaning: 'Gewerbe- & Büroreinigung',
    carpetCleaning: 'Teppichreinigung',
    
    // Footer translations
    footerAboutUs: 'Über uns',
    footerServices: 'Dienstleistungen',
    footerContact: 'Kontakt',
    footerPrivacyPolicy: 'Datenschutzerklärung',
    footerTermsConditions: 'AGB',
    footerCopyright: '© 2025 PearlySky Company Pvt. Ltd. Alle Rechte vorbehalten.',
    
    // Customer Dashboard translations
    settings: 'Einstellungen',
    help: 'Hilfe',
    myBookings: 'Meine Buchungen',
    profile: 'Profil',
    logout: 'Abmelden',
    
    // Checkout Page
    checkout: 'Kasse',
    payment: 'Zahlung',
    summary: 'Bestellübersicht',
    confirm: 'Bestätigen',
    
    // Common UI elements
    loading: 'Wird geladen...',
    readMore: 'Weiterlesen',
    viewDetails: 'Details anzeigen',
    submit: 'Absenden',
    back: 'Zurück',
    next: 'Weiter',
  },
  ja: {
    // TopBar translations
    login: 'ログイン',
    unitedStates: 'アメリカ合衆国',
    unitedKingdom: 'イギリス',
    france: 'フランス',
    germany: 'ドイツ',
    japan: '日本',
    sriLanka: 'スリランカ',
    languageSelector: '言語を選択',
    
    // Navigation/Menu translations
    home: 'ホーム',
    services: 'サービス',
    locations: '所在地',
    aboutUs: '会社概要',
    contactUs: 'お問い合わせ',
    career: '採用情報',
    customerDashboard: 'カスタマーダッシュボード',
    
    // HomePage translations
    welcomeTitle: 'パーリースカイ・クリーニングサービスへようこそ',
    welcomeDescription: 'PearlySky Company Pvt. Ltd.ではお客様が最も大切な資産です。私たちは最高のケアとサービスをご提供することをお約束します。',
    bookNow: '今すぐ予約',
    homePageImageAlt: 'クリーニングサービスの紹介',
    previousImage: '前の画像',
    nextImage: '次の画像',
    goToImage: '画像に移動 ',
    
    // Services translations
    regularBasicCleaning: '定期的な基本清掃',
    oneTimeCleaning: '単発清掃',
    lastMinuteCleaning: '急な清掃',
    deepCleaning: 'ディープクリーニング',
    moveInOutCleaning: '引越し前後清掃',
    postConstructionCleaning: '建設後清掃',
    airbnbCleaning: 'Airbnb・短期賃貸清掃',
    childCareCleaning: '託児所清掃',
    elderCareCleaning: '介護施設清掃',
    sanitizationDisinfection: '除菌・消毒',
    commercialOfficeCleaning: '商業・オフィス清掃',
    carpetCleaning: 'カーペットクリーニング',
    
    // Footer translations
    footerAboutUs: '会社概要',
    footerServices: 'サービス',
    footerContact: 'お問い合わせ',
    footerPrivacyPolicy: 'プライバシーポリシー',
    footerTermsConditions: '利用規約',
    footerCopyright: '© 2025 PearlySky Company Pvt. Ltd. All Rights Reserved.',
    
    // Customer Dashboard translations
    settings: '設定',
    help: 'ヘルプ',
    myBookings: '予約一覧',
    profile: 'プロフィール',
    logout: 'ログアウト',
    
    // Checkout Page
    checkout: 'チェックアウト',
    payment: '支払い',
    summary: '注文の概要',
    confirm: '確認',
    
    // Common UI elements
    loading: '読み込み中...',
    readMore: '続きを読む',
    viewDetails: '詳細を見る',
    submit: '送信',
    back: '戻る',
    next: '次へ',
  },
  si: {
    // TopBar translations
    login: 'පිවිසෙන්න',
    unitedStates: 'එක්සත් ජනපදය',
    unitedKingdom: 'එක්සත් රාජධානිය',
    france: 'ප්‍රංශය',
    germany: 'ජර්මනිය',
    japan: 'ජපානය',
    sriLanka: 'ශ්‍රී ලංකාව',
    languageSelector: 'භාෂාව තෝරන්න',
    
    // Navigation/Menu translations
    home: 'මුල් පිටුව',
    services: 'සේවාවන්',
    locations: 'ස්ථාන',
    aboutUs: 'අප ගැන',
    contactUs: 'අප අමතන්න',
    career: 'රැකියා',
    customerDashboard: 'පාරිභෝගික පුවරුව',
    
    // HomePage translations
    welcomeTitle: 'පර්ලි ස්කයි පිරිසිදු කිරීමේ සේවාවන් වෙත සාදරයෙන් පිළිගනිමු',
    welcomeDescription: 'ඔබ PearlySky Company Pvt. Ltd හි අපගේ වඩාත්ම වටිනා වත්කම වේ. අපි ඔබට හොඳම සේවාවක් ලබා දීමට කැපවී සිටිමු.',
    bookNow: 'දැන් වෙන් කරන්න',
    homePageImageAlt: 'පිරිසිදු කිරීමේ සේවා දැක්ම',
    previousImage: 'පෙර රූපය',
    nextImage: 'ඊළඟ රූපය',
    goToImage: 'රූපයට යන්න ',
    
    // Services translations
    regularBasicCleaning: 'සාමාන්‍ය සහ මූලික පිරිසිදු කිරීම',
    oneTimeCleaning: 'එක් වරක් පිරිසිදු කිරීම',
    lastMinuteCleaning: 'අවසාන මිනිත්තුවේ පිරිසිදු කිරීම',
    deepCleaning: 'ගැඹුරු පිරිසිදු කිරීම',
    moveInOutCleaning: 'ඇතුළුවීමේ/පිටවීමේ පිරිසිදු කිරීම',
    postConstructionCleaning: 'ඉදිකිරීම් වලින් පසු පිරිසිදු කිරීම',
    airbnbCleaning: 'Airbnb සහ කෙටි කාලීන කුලී පිරිසිදු කිරීම',
    childCareCleaning: 'ළමා සංරක්ෂණ පිරිසිදු කිරීම',
    elderCareCleaning: 'වැඩිහිටි රැකවරණ පිරිසිදු කිරීම',
    sanitizationDisinfection: 'විෂබීජහරණය සහ විෂබීජනාශක',
    commercialOfficeCleaning: 'වාණිජ සහ කාර්යාල පිරිසිදු කිරීම',
    carpetCleaning: 'කාපට් පිරිසිදු කිරීම',
    
    // Footer translations
    footerAboutUs: 'අප ගැන',
    footerServices: 'සේවාවන්',
    footerContact: 'සම්බන්ධ වන්න',
    footerPrivacyPolicy: 'රහස්‍යතා ප්‍රතිපත්තිය',
    footerTermsConditions: 'නියමයන් සහ කොන්දේසි',
    footerCopyright: '© 2025 PearlySky Company Pvt. Ltd. සියලුම හිමිකම් ඇවිරිණි.',
    
    // Customer Dashboard translations
    settings: 'සැකසුම්',
    help: 'උදව්',
    myBookings: 'මගේ වෙන්කිරීම්',
    profile: 'පැතිකඩ',
    logout: 'පිටවීම',
    
    // Checkout Page
    checkout: 'ගෙවීම',
    payment: 'ගෙවීම',
    summary: 'ඇණවුම් සාරාංශය',
    confirm: 'තහවුරු කරන්න',
    
    // Common UI elements
    loading: 'පූරණය වෙමින්...',
    readMore: 'තවත් කියවන්න',
    viewDetails: 'විස්තර බලන්න',
    submit: 'ඉදිරිපත් කරන්න',
    back: 'ආපසු',
    next: 'ඊළඟ',
  }
};

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
    if (browserLang === 'en' || browserLang === 'fr' || browserLang === 'de' || browserLang === 'ja') {
      return browserLang as SupportedLanguage;
    }
    
    // Check if browser language is Sinhala
    if (browserLang === 'si') {
      return 'si';
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