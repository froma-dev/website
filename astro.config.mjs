// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://frankromana.dev',
  devToolbar: {enabled: false},
  integrations: [sitemap()],
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "en",
  }
});