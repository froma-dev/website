import {defaultLang, languages, locales} from './locales.ts'
import { getRelativeLocaleUrl, pathHasLocale } from 'astro:i18n'

let currentUrl: URL | undefined

export function getLanguages() {
    return languages
}

export function getLocaleUrlRelative(locale: string, path?: string) {
    let rawPath = path

    if (path && pathHasLocale(path)) {
        let splitPath = path.split('/')
        let pathLocale = splitPath.shift() || splitPath.shift()

        if (pathLocale) rawPath = path.replace(`/${pathLocale}`, '')
    }

    return getRelativeLocaleUrl(locale, rawPath)
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