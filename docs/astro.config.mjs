import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import {
  injectComponents,
  wrapContents,
  customCodeComponent,
  defaultClasses,
} from 'astro-theme-docs/plugins';

export default defineConfig({
  markdown: {
    syntaxHighlight: false,
    extendDefaultPlugins: true,
    remarkPlugins: [customCodeComponent, defaultClasses],
  },
  integrations: [
    mdx({
      remarkPlugins: [
        wrapContents('RichContent'),
        injectComponents({
          RichContent: 'astro-theme-docs/components',
          Callout: 'astro-theme-docs/components',
          LinkCard: 'astro-theme-docs/components',
          Youtube: 'astro-theme-docs/components',
          Code: 'astro-theme-docs/components',
        }),
      ],
    }),
  ],
});
