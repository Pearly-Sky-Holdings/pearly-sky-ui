import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// භාෂා සඳහා පරිවර්තන
const resources = {
  en: {
    translation: {
      "login": "Login",
      "home": "Home",
      "services": "Services",
      "contactUs": "Contact Us",
      // වෙනත් පරිවර්තන
    }
  },
  si: {
    translation: {
      "login": "පිවිසෙන්න",
      "home": "මුල් පිටුව",
      "services": "සේවාවන්",
      "contactUs": "අප අමතන්න",
      // වෙනත් පරිවර්තන
    }
  },
  fr: {
    translation: {
      "login": "Connexion",
      "home": "Accueil",
      "services": "Services",
      "contactUs": "Contactez-nous",
      // වෙනත් පරිවර්තන
    }
  },
  de: {
    translation: {
      "login": "Anmelden",
      "home": "Startseite",
      "services": "Dienstleistungen",
      "contactUs": "Kontaktiere uns",
      // වෙනත් පරිවර්තන
    }
  },
  ja: {
    translation: {
      "login": "ログイン",
      "home": "ホーム",
      "services": "サービス",
      "contactUs": "お問い合わせ",
      // වෙනත් පරිවර්තන
    }
  }
};

// i18n මූලාරම්භ කිරීම
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;