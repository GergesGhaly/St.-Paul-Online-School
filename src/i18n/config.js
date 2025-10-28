import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationAR from "./locales/ar/translation.json";
import translationEN from "./locales/en/translation.json";

// موارد الترجمة
const resources = {
  ar: { translation: translationAR },
  en: { translation: translationEN },
};

i18n
  .use(LanguageDetector) // يكتشف لغة المتصفح
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ar", // اللغة الافتراضية
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
