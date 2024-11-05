export interface Job {
    id: string,
    name: string,
    linkedinUrl: string,
    websiteUrl: string,
    roles: string[]
    tags: string[]
    description: string,
    logo: string,
    backgroundUrl: string,
    transitionName?: string
}