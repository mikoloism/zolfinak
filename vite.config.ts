/// <reference types="vitest/config" />

import path from 'node:path';

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
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
      'lib/': `${path.resolve(__dirname, 'src', 'libs')}/`,
      'libs/': `${path.resolve(__dirname, 'src', 'libs')}/`,
    },
  },

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
        presetWebFonts({
          provider: 'google',
          fonts: {
            sans: 'DM Sans',
            serif: 'DM Serif Display',
            mono: 'DM Mono',
          },
        }),
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
