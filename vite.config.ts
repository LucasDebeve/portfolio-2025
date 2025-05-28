import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',  // Assurez-vous que c'est bien '/' ou votre sous-chemin si nécessaire
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
