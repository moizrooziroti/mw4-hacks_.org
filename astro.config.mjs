import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';

const DEFAULT_SITE = 'https://mw4-hacks.org';
const site =
  typeof process.env.PUBLIC_CANONICAL_ORIGIN === 'string' &&
  process.env.PUBLIC_CANONICAL_ORIGIN.startsWith('http')
    ? process.env.PUBLIC_CANONICAL_ORIGIN.replace(/\/$/, '')
    : DEFAULT_SITE;

export default defineConfig({
  site,
  trailingSlash: 'always',
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    define: {
      'import.meta.env.PUBLIC_CANONICAL_ORIGIN': JSON.stringify(site),
    },
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'always',
  },
});
