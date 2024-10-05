import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.JPG', '**/*.jpg'],
  plugins: [react()],
  base: '/The-Light-Tutors-New-Website/',
})
