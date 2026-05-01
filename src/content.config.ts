// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 4. Define your collection(s)
const experience = defineCollection({
    loader: glob({ pattern: '**/*.json', base: "./src/content/experience/" }),
});

const main = defineCollection({
    loader: glob({ pattern: '**/*.json', base: "./src/content/index/" }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { experience, main };
