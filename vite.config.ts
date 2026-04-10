import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate', //Actualizacion cuando cambias codigo
      includeAssets: ['favicon.ico', 'apple-touch-icon-png', 'mask-icon.svg'],
      manifest: {
        name: 'Progreso Tienda Gabi',
        short_name: 'VueShop',
        description: 'Tienda practic Vue3',
        theme_color: '#16c0b0',
        icons: [
          {
            src: 'icono.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icono512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  //server: {
  //  host: true,
  //  port: 5173,
  //  strictPort: true,
  //},
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
