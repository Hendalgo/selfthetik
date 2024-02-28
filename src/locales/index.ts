import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import es from './es/ns1.json';
import fallback from './es/fallback.json';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).use(LanguageDetector).init({
  debug: true,
  resources: {
    es: {
      ns1: es,
      fallback: fallback
    },
  },
  fallbackLng: 'es'
});

export default i18n;