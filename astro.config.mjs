// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  devToolbar: {
    enabled: false
  },
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [preact()]
});