import type {Job} from "../types/Job.ts";
import {getObjectUrl} from "@services/cloud/cloud.ts";
const logo24i = getObjectUrl('24i_logo.svg').toString()
const background24i = getObjectUrl('ams_canals.webp').toString()
const logoNokia = getObjectUrl('nokia_logo.svg').toString()
const backgroundNokia = getObjectUrl('nokia.webp').toString()

export const JOBS: Job[] = [
    {
        id: '24i',
        company: '24i',
        linkedinUrl: 'https://www.linkedin.com/company/24i',
        websiteUrl: 'https://www.24i.com/',
        roles: ['SmartTV Developer', 'Team Leader '],
        tags: ['Samsung Tizen', 'LG WebOS', 'AndroidTV', 'OTT'],
        description: 'Frank Romaña, a frontend developer and dedicated team lead, brought a global touch to his work at 24i, captivating audiences across Europe, North America, and South America. Known for his technical expertise, leading initiatives that grew the user base by 10x. Frank’s approach seamlessly merges leadership with innovation, leaving a lasting impact on the streaming experience.',
        logo: logo24i,
        backgroundUrl: background24i,
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
        description: 'At Nokia TECSS, Frank Romaña was part of a multidisciplinary team dedicated to building a custom IPTV app across platforms like Arris Set-Top-Boxes, Samsung Tizen, and LG WebOS. His contributions included working on an innovative Proof of Concept for video conferencing on Set-Top-Boxes, voice control features, third-party app integrations, expanding the future possibilities of connected devices.',
        logo: logoNokia,
        backgroundUrl: backgroundNokia,
        transitionName: 'nokia_logo',
        href: '/jobs/nokia',
        startYear: 2014,
        endYear: 2020
    }
]

export function getJobById(id: string): Job {
    return JOBS.filter((job) => job.id === id)[0]
}