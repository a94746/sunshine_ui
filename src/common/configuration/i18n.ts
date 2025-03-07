import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '@/assets/locales/en/translation.json';
import ru from '@/assets/locales/ru/translation.json';

const resources = {
    en: {
        translation: en
    },
    ru: {
        translation: ru
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'ru', // язык по умолчанию
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // не нужно для React
        },
    });

export default i18n;