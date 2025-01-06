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
}

export const createAsset = ({classNames, href, logoSrc, transitionName, alt, title}: Asset): Asset => ({
    classNames,
    href,
    logoSrc,
    transitionName,
    title,
    alt
})

export const createExperienceAsset = ({
                                          classNames,
                                          href,
                                          description,
                                          company,
                                          title,
                                          transitionName
                                      }: ExperienceAsset): ExperienceAsset => ({
    classNames,
    href,
    description,
    company,
    title,
    transitionName,
})