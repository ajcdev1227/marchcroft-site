import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


//TODO migrate to strapi
import en from '../../../public/locales/en/common.json';
import es from '../../../public/locales/es/common.json';
import gr from '../../../public/locales/gr/common.json';
import pt from '../../../public/locales/pt/common.json';

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
  gr: {
    translation: gr,
  },
  pt: {
    translation: pt
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // Default language fallback
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false, // React already escapes variables
    },
  });

export default i18n;