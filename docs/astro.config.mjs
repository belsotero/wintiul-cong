// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://example.com/',
  integrations: [
    starlight({
      title: 'WinUtil Config',
      description: 'Quick setup page for WinUtil configs.',
      sidebar: [
        {
          label: 'Tools',
          items: [
            { label: 'Quick Config', slug: 'quick-config' },
            { label: 'Config Builder', slug: 'config-builder' },
            { label: 'Tweak Explorer', slug: 'tweak-explorer' },
          ],
        },
      ],
    }),
    react(),
  ],
});
