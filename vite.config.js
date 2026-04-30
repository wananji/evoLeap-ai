import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/evoLeap-ai/',  // GitHub Pages 仓库名称
})
