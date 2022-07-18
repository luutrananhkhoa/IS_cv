import GlobalPolyFill from '@esbuild-plugins/node-globals-polyfill'
// import { svelte } from '@sveltejs/vite-plugin-svelte';
// import { resolve } from "path";
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
      '@': '/src',
    },
  },
  base: './',
  plugins: [react()],
  publicDir: 'public',
})
