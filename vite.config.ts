// import vikeSolid from 'vike-solid/vite'
import { plugin as vike } from 'vike/plugin'
import { vikeNode } from 'vike-node/plugin'
import type { UserConfig } from 'vite'

export default {
  cacheDir: '.vite',
  plugins: [
    vike(),
    // vikeSolid(),
    vikeNode('src/server/index.ts')
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
  }
} satisfies UserConfig