export interface Asset {
    classNames: string,
    href: string,
    logoSrc?: string,
    transitionName: string,
    alt?: string,
    title?: string,
}

export const createAsset = ({classNames, href, logoSrc, transitionName, alt, title}: Asset): Asset => ({
    classNames,
    href,
    logoSrc,
    transitionName,
    title,
    alt
})