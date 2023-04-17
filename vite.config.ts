import { URL, fileURLToPath } from 'node:url'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
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
  },

  server: {
    open: true,
  },

  plugins: [
    vue(),
    vueComponents({
      dts: 'src/components.d.ts',
    }),
    splitVendorChunkPlugin(),
  ],
})
