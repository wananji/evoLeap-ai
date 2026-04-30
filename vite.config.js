import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-index-to-404',
      closeBundle() {
        const src = path.resolve(__dirname, 'dist/index.html')
        const dest = path.resolve(__dirname, 'dist/404.html')
        fs.copyFileSync(src, dest)
      }
    }
  ],
  base: './',
})
