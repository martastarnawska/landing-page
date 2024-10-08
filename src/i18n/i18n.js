import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from 'i18next-http-backend';
import en from "./locales/en.json";
import pl from "./locales/pl.json";

const savedLangugage = localStorage.getItem('language') || 'en';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      pl: {
        translation: pl
      }
    },
    lng: savedLangugage,
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

  export default i18n;
  