// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://nikolai-shabalin.github.io',
  base: process.env.NODE_ENV === 'production' ? '/dear-diary/' : '/',
  build: {
    assets: '_astro'
  }
});
