import {getCollection} from 'astro:content'
import type {Language} from "../types/I18n.ts"
import type {ExperienceAsset} from "../types/Asset.ts";
import {getLocaleUrlRelative} from "@i18n/utils.ts";
import {getImageUrl} from "@services/cloud/cloud.ts";

export async function getExperienceCollection(lang: Language) {
    const collection = await getCollection('experience')

    return collection
        .filter(({id}) => id.startsWith(`${lang}/`))
        .sort((a, b) => b.data.startYear - a.data.startYear)
        .map(asset => {
            const job = asset.data

            return {
                classNames: 'job',
                href: getLocaleUrlRelative(lang, job.href),
                transitionName: job.transitionName,
                title: job.roles.join(' & '),
                company: job.company,
                description: job.description,
                startYear: job.startYear,
                endYear: job.endYear,
                imageFit: job.imageFit,
                shortDescription: job.shortDescription,
                thumbnailUrl: getImageUrl(job.thumbnailUrl).toString(),
            } as ExperienceAsset
        })
}