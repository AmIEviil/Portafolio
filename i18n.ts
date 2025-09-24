import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./src/locales/en.json";
import es from "./src/locales/es.json";

i18n
  .use(LanguageDetector) // detecta idioma del navegador
  .use(initReactI18next) // integra con react-i18next
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    fallbackLng: "en", // idioma por defecto
    interpolation: {
      escapeValue: false, // React ya hace el escape
    },
  });

export default i18n;
