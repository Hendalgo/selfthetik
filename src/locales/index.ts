import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import es from './es/ns1.json';
import fallbackEs from './es/fallback.json';
import en from './en/ns1.json';
import fallbackEn from './en/fallback.json';

import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).use(LanguageDetector).init({
  debug: true,
  resources: {
    es: {
      ns1: es,
      fallback: fallbackEs
    },
    en:{
      ns1: en,
      fallback: fallbackEn
    }
  },
  fallbackLng: 'es'
});

console.log(i18n.language);
export default i18n;