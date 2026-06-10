import {defineCollection} from 'astro:content'
import {z} from 'astro/zod'
import {glob} from 'astro/loaders'

const experience = defineCollection({
    loader: glob({pattern: '**/*.json', base: './src/content/experience/'}),
    schema: z.object({
        id: z.string(),
        company: z.string(),
        linkedinUrl: z.string(),
        websiteUrl: z.string(),
        roles: z.array(z.string()),
        tags: z.array(z.string()),
        description: z.string(),
        shortDescription: z.string(),
        backgroundUrl: z.string(),
        thumbnailUrl: z.string(),
        imageFit: z.enum(['cover', 'contain']).optional(),
        transitionName: z.string(),
        href: z.string(),
        startYear: z.number(),
        endYear: z.number().optional(),
    }),
})

const main = defineCollection({
    loader: glob({pattern: '**/*.json', base: './src/content/index/'}),
})

export const collections = {experience, main}
