import { fileURLToPath, URL } from 'node:url'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueComponents from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  optimizeDeps: {
    include: ['vue', 'vue-router'],
  },

  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'chunk-[hash].js',
        entryFileNames: 'entry-[hash].js',
      },
    },
  },

  server: {
    open: true,
  },

  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },

  plugins: [
    Vue(),

    UnoCSS(),

    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core'],
      dts: 'src/auto-imports.d.ts',
    }),

    VueComponents({
      dts: 'src/components.d.ts',
    }),
  ],
})
