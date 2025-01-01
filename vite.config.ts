import { fileURLToPath, URL } from 'node:url'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueComponents from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'chunk-[hash].js',
        entryFileNames: 'entry-[hash].js',
      },
    },
  },

  optimizeDeps: {
    include: ['vue', 'vue-router'],
  },

  plugins: [
    Vue(),

    UnoCSS(),

    AutoImport({
      dts: 'src/auto-imports.d.ts',
      imports: ['vue', 'vue-router', '@vueuse/core'],
    }),

    VueComponents({
      dts: 'src/components.d.ts',
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  server: {
    open: true,
  },
})
