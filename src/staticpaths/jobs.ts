import type {Job} from "../types/Job.ts";
import {getImageUrl} from "@services/cloud/cloud.ts";
const background24i = getImageUrl('ams_canals.webp').toString()
const backgroundNokia = getImageUrl('nokia.webp').toString()

export const JOBS: Job[] = [
    {
        id: '24i',
        company: '24i',
        linkedinUrl: 'https://www.linkedin.com/company/24i',
        websiteUrl: 'https://www.24i.com/',
        roles: ['JavaScript Developer', 'Team Leader'],
        tags: ['Samsung Tizen', 'LG WebOS', 'AndroidTV', 'OTT', 'Shaka Player'],
        description: 'Frank Romaña, a front-end developer and dedicated team lead, brought a global touch to his work at 24i, captivating audiences across Europe, North America, and South America. Known for his technical expertise, leading initiatives that grew the client\'s user base. Frank’s approach seamlessly merges leadership with innovation, leaving a lasting impact on the streaming experience.',
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
        roles: ['Front-End Developer'],
        tags: ['Samsung Tizen', 'LG WebOS', 'Arris STB', 'IPTV'],
        description: 'At Nokia TECSS, Frank Romaña was part of a multidisciplinary team dedicated to building a custom IPTV app across platforms like Arris Set-Top-Boxes, Samsung Tizen, and LG WebOS. His contributions included working on an innovative Proof of Concept for video conferencing on Set-Top-Boxes, voice control features, third-party app integrations, expanding the future possibilities of connected devices.',
        backgroundUrl: backgroundNokia,
        transitionName: 'nokia_logo',
        href: '/jobs/nokia',
        startYear: 2014,
        endYear: 2020
    }
]