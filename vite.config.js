// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base:'/Portfolio/', // ← nom EXACT de ton dépôt GitHub
  plugins: [react()],
})
