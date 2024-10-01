import vike from 'vike/plugin'
import vikeSolid from 'vike-solid/vite'
// import { vikeNode } from 'vike-node/plugin'
import type { UserConfig } from 'vite'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import path from 'node:path'

export default {
  cacheDir: '.vite',
  plugins: [
    vike(),
    vikeSolid()
    // vikeNode('./src/server/index.ts')
  ],
  server: {
    port: 3000
  },
  preview: {
    port: 3000
  },
  build: {
    target: 'esnext',
    outDir: '.vite/dist'
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer
      ]
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src')
    }
  }
} satisfies UserConfig