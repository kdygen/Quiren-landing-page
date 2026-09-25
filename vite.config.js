import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  // For Plesk/production deployment, use '/'
  // For GitHub Pages deployment, change this to '/your-repo-name/'
  base: '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'three': ['three'],
          'framer-motion': ['framer-motion'],
        },
      },
    },
  },
})