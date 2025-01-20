import { defineCollection, z } from 'astro:content'

const job = defineCollection({
    schema: z.object({
        id: z.string(),
        company: z.string(),
        linkedinUrl: z.string(),
        websiteUrl: z.string(),
        roles: z.array(z.string()),
        tags: z.array(z.string()),
        description: z.string(),
        backgroundUrl: z.string(),
        transitionName: z.string(),
        href: z.string(),
        startYear: z.number(),
        endYear: z.number()
    })
})

const main = defineCollection({
    schema: z.object({
        role: z.string(),
        location: z.string(),
        linkedinTooltipText: z.string(),
        emailTooltipText: z.string(),
        githubTooltipText: z.string(),
        description: z.string(),
        downloadButton: z.object({
            text: z.string(),
            ariaLabel: z.string()
        }),
        playPauseButton: z.object({
            text: z.string(),
            ariaLabel: z.string()
        }),
        volumeButton: z.object({
            text: z.string(),
            ariaLabel: z.string()
        })
    })
})

export const collections = {job, main}