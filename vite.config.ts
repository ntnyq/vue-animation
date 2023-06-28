import { URL, fileURLToPath } from 'node:url'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import vueComponents from 'unplugin-vue-components/vite'

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
    cssCodeSplit: false,
    manifest: true,
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

  plugins: [
    vue(),
    unocss(),
    splitVendorChunkPlugin(),
    vueComponents({
      dts: 'src/components.d.ts',
    }),
  ],
})
