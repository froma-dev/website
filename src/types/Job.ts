export type JobId = '24i' | 'nokia' | 'aszendit'

export interface Job {
    id: JobId,
    company: string,
    linkedinUrl: string,
    websiteUrl: string,
    roles: string[]
    tags: string[]
    description: string,
    logoSrc?: string,
    backgroundUrl: string,
    imageFit?: 'cover' | 'contain',
    transitionName: string,
    href: string,
    startYear: number
    endYear?: number
}