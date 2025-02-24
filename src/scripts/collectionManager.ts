import {getCollection} from 'astro:content'
import type {Language} from "../types/I18n.ts"
import type {ExperienceAsset} from "../types/Asset.ts";
import {getLocaleUrlRelative} from "@i18n/utils.ts";
import {getImageUrl} from "@services/cloud/cloud.ts";

export async function getExperienceCollection(lang: Language) {
    const collection = await getCollection('experience')
    const langRegEx = new RegExp(lang)

    return collection
        .filter(({id}) => langRegEx.test(id))
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
                shortDescription: job.shortDescription,
                thumbnailUrl: getImageUrl(job.thumbnailUrl).toString(),
            } as ExperienceAsset
        })
}