// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://hrod.dev',
  // Astro 7 defaults to JSX-style whitespace, which drops spaces before inline links
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()]
  }
});