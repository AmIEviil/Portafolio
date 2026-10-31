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
    supportedLngs: ["en", "es"], // "es-CL" del navegador se resuelve a "es"
    interpolation: {
      escapeValue: false, // React ya hace el escape
    },
  });

// mantiene <html lang> sincronizado (accesibilidad y SEO)
const syncHtmlLang = (lng: string) => {
  document.documentElement.lang = lng.split("-")[0];
};
syncHtmlLang(i18n.resolvedLanguage ?? "en");
i18n.on("languageChanged", syncHtmlLang);

export default i18n;
