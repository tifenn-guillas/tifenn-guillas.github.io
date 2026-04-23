// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tifenn-guillas.fr',
  output: 'static',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
