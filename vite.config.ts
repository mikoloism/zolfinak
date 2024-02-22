/// <reference types="vitest/config" />

import presetTypography from '@unocss/preset-typography';
import presetUno from '@unocss/preset-uno';
import presetWebFonts from '@unocss/preset-web-fonts';
import transformerDirectives from '@unocss/transformer-directives';
import transformerVariantGroup from '@unocss/transformer-variant-group';

import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import unocss from 'unocss/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy(),
    unocss({
      mode: 'global',
      content: {
        pipeline: {
          include: [/\.(vue|svelte|[jt]sx|mdx?|astro|html)($|\?)/, 'src/**/*.{js,ts}'],
        },
      },
      presets: [
        // keep-order
        presetUno(),
        presetWebFonts({ provider: 'google' }),
        presetTypography(),
      ],
      transformers: [
        // keep-order
        transformerDirectives(),
        transformerVariantGroup(),
      ],
    }),
  ],
  build: {
    outDir: 'www',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
});
