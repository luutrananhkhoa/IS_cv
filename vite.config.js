import GlobalPolyFill from '@esbuild-plugins/node-globals-polyfill'
// import { svelte } from '@sveltejs/vite-plugin-svelte';
const path = require('path')
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  define: { 'process.env': process.env },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
      plugins: [
        GlobalPolyFill({
          process: true,
          buffer: true,
        }),
      ],
    },
  },
  resolve: {
    alias: {
      process: 'process/browser',
      stream: 'stream-browserify',
      zlib: 'browserify-zlib',
      util: 'util',
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/Components'),
      '@page': path.resolve(__dirname, 'src/Page'),
      '@context': path.resolve(__dirname, 'src/Context'),
      '@api': path.resolve(__dirname, 'src/Api'),
      '@middleware': path.resolve(__dirname, 'src/Middleware'),
      '@layout': path.resolve(__dirname, 'src/Layout'),
    },
  },
  base: './',
  plugins: [react()],
  publicDir: 'public',
})
