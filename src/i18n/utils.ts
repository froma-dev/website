import { locales, defaultLang } from './locales.ts';
let currentUrl: URL | undefined

export function getLangFromUrl(url: URL | undefined) {
    url = url ?? currentUrl
    const [, lang] = url?.pathname.split('/') ?? []
    if (lang in locales)
        return lang as keyof typeof locales
    return defaultLang
}

export function setCurrentUrl(url: URL | undefined) {
    currentUrl = url
}

export function useTranslations(lang: keyof typeof locales) {
    return function t(key: keyof typeof locales[typeof defaultLang]) {
        return locales[lang][key] || locales[defaultLang][key];
    }
}

export function isEnglish(lang: keyof typeof locales) {
    if (lang in locales) return true
}