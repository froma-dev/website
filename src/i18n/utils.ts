import {defaultLang, languages, locales} from './locales.ts';

let currentUrl: URL | undefined

export function getLanguages() {
    return languages
}

export function getTranslatedUrl(fromLanguage: string, toLanguage: string, url: URL) {
    const isCurrentLanguage = fromLanguage === toLanguage
    const {pathname, origin} = url
    let path = pathname
    const parts = pathname?.split('/')

    console.log(pathname, fromLanguage, toLanguage, defaultLang)
    if (fromLanguage !== defaultLang) {
        parts.shift() || parts.shift()
        path = `/${toLanguage}${parts.join('/')}`


        console.log('-EEEE-------', new URL(path, origin).href)
    }

    return new URL(path, origin)
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