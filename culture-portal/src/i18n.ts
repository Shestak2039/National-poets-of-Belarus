import i18n from 'i18next';
import Backend from 'i18next-locize-backend';
import LaunguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LaunguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      projectId: '60788b14-bdc1-4a02-b8c8-3fd486c271c4',
      apiKey: '09e284b4-2e74-480d-a5ab-eba7cac3f5f4',
      referenceLng: 'en'
    },
    saveMissing: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    keySeparator: '>',
    nsSeparator: '|',
  });

export default i18n;

