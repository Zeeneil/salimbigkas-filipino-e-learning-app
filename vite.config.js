import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import autoprefixer from 'autoprefixer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  server: {
    open: true
  },
  base: process.env.NODE_ENV === 'production' ? '/salimbigkas-filipino-e-learning-app/' : '/', // Replace with your repo name
  build: {
    outDir: 'dist',
  },
});