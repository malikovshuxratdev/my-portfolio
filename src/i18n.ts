import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import uz from './locales/uz.json';

export const LANGUAGES = ['en', 'uz'] as const;
export type Language = (typeof LANGUAGES)[number];

// Translations are bundled so the page never flashes raw keys on first paint.
i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: { en: { translation: en }, uz: { translation: uz } },
        supportedLngs: [...LANGUAGES],
        fallbackLng: 'en',
        detection: {
            order: ['localStorage', 'navigator'],
            lookupLocalStorage: 'lang',
            caches: ['localStorage'],
        },
        interpolation: { escapeValue: false },
        react: { useSuspense: false },
    });

i18next.on('languageChanged', (lng) => {
    document.documentElement.lang = lng;
});

export default i18next;
