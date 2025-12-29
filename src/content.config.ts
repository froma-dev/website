// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

// 4. Define your collection(s)
const experience = defineCollection({
    loader: glob({ pattern: '**/*.json', base: "./src/content/experience/" }),
    schema: z.object({
        id: z.string(),
        company: z.string(),
        linkedinUrl: z.string(),
        websiteUrl: z.string(),
        roles: z.array(z.string()),
        tags: z.array(z.string()),
        description: z.string(),
        shortDescription: z.string().optional(),
        backgroundUrl: z.string(),
        transitionName: z.string(),
        href: z.string(),
        startYear: z.number(),
        endYear: z.number()
    }),
});

const main = defineCollection({
    loader: glob({ pattern: '**/*.json', base: "./src/content/index/" }),
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
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { experience, main };
