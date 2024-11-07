export type JobId = '24i' | 'nokia'

export interface Job {
    id: JobId,
    company: string,
    linkedinUrl: string,
    websiteUrl: string,
    roles: string[]
    tags: string[]
    description: string,
    logo: string,
    backgroundUrl: string,
    transitionName: string,
    href: string,
    startYear: number
    endYear: number
}