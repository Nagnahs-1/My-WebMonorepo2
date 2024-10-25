import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
// import { presetUno, presetAttributify, presetIcons } from "unocss";
import UnoCSS from 'unocss/vite'

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue',
    },
  },
}

export default defineConfig({
  plugins: [vue(), vueJsx(), UnoCSS()],
  build: {
    rollupOptions,
    minify: false,
    cssCodeSplit: true,
    lib: {
      entry: './src/entry.ts',
      name: 'SSYUI',
      fileName: 'ssy-ui',
      formats: ['es', 'umd', 'iife'],
    },
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler',
    },
  },
})
