export interface Asset {
    classNames: string,
    href: string,
    logo: string,
    transitionName: string,
    alt: string
}

export const createAsset = ({classNames, href, logo, transitionName, alt}: Asset): Asset => ({
    classNames,
    href,
    logo,
    transitionName,
    alt
})