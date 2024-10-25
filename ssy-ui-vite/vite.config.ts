import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
// import { presetUno, presetAttributify, presetIcons } from "unocss";
import UnoCSS from 'unocss/vite'

// const rollupOptions = {
//   external: ['vue', 'vue-router'],
//   output: {
//     globals: {
//       vue: 'Vue',
//     },
//   },
// }
const rollupOptions = {
  external: ['jquery'], // 将 jQuery 排除在外，不打包进 bundle
  output: {
    globals: {
      $: '$', // 全局变量 $ 映射到 jQuery
    },
  },
}

export default defineConfig({
  plugins: [vue(), vueJsx(), UnoCSS()],
  build: {
    rollupOptions,
    minify: 'terser',
    sourcemap: true, // 输出单独 source文件
    reportCompressedSize: true, // 生成压缩大小报告
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
