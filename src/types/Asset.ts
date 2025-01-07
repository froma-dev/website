export interface Asset {
    classNames: string,
    href: string,
    logoSrc?: string,
    transitionName: string,
    alt?: string,
    title?: string,
}

export interface ExperienceAsset {
    classNames: string,
    href: string,
    company: string,
    description: string,
    title: string,
    transitionName: string,
    startYear: number,
}