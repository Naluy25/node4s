import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  publicDir: false,
  build: {
    outDir: 'dist/client',
    emptyOutDir: true,
    rollupOptions: {
      input: 'public/index.html'
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
