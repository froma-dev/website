import { locales, defaultLang, languages } from './locales.ts';
let currentUrl: URL | undefined

export function getLanguages (){
    return languages
}

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
    return function (key: keyof typeof locales[typeof defaultLang]) {
        return locales[lang][key] || locales[defaultLang][key];
    }
}