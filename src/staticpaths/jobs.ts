import type {Job} from "@types/Job.ts";

export const JOBS: Job[] = [
    {
        id: '24i',
        company: '24i',
        linkedinUrl: 'https://www.linkedin.com/company/24i',
        websiteUrl: 'https://www.24i.com/',
        roles: ['SmartTV Developer', 'Team Leader '],
        tags: ['Samsung Tizen', 'LG WebOS', 'AndroidTV', 'OTT'],
        description: 'Delivered seamless VOD and Live streaming experiences including Catch-Up, Start-Over, and CDVR, ' +
            'leveraging DRMs and different players (Shaka Player and native TV players).',
        logo: '/images/24i_logo.svg',
        backgroundUrl: 'https://res.cloudinary.com/fromaweb/image/upload/e_grayscale/images/cthefogvyyi6z9ulvqad.jpg',
        transitionName: '24i_logo',
        href: '/jobs/24i',
        startYear: 2019,
        endYear: 2023
    },
    {
        id: 'nokia',
        company: 'Nokia TECSS',
        linkedinUrl: 'https://www.linkedin.com/company/nokia-tecss',
        websiteUrl: 'https://www.nokia.com/',
        roles: ['Frontend Developer'],
        tags: ['Samsung Tizen', 'LG WebOS', 'Arris STB', 'IPTV'],
        description: 'A skilled frontend developer, known for building top-tier streaming apps that delighted users ' +
            'across Europe, North America, and South America, also excelled as a team lead. Simultaneously guiding ' +
            'colleagues and crafting exceptional user experiences, this developer proves that technical brilliance, ' +
            'leadership skills, and a global perspective can thrive together, leading to remarkable outcomes.',
        logo: '/images/nokia_logo.svg',
        backgroundUrl: 'https://res.cloudinary.com/fromaweb/image/upload/e_grayscale/images/cthefogvyyi6z9ulvqad.jpg',
        transitionName: 'nokia_logo',
        href: '/jobs/nokia',
        startYear: 2013,
        endYear: 2019
    }
]

export function getJobById(id: string): Job {
    return JOBS.filter((job) => job.id === id)[0]
}