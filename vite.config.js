import { defineConfig } from 'vite'

export default defineConfig({
  root: 'prototype',
  publicDir: false,
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
})
