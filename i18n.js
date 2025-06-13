import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  he: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
    },
  },
};

i18n
  .use(HttpBackend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    //resources,
    fallbackLng: "he",
    lng: "he",
    supportedLngs: ["he", "en"],
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      useSuspense: true,
      wait: true,
      load: "languageOnly",
      // Esto fuerza a que i18next espere a que los recursos estén cargados
      initImmediate: false,
    },
  });

export default i18n;
