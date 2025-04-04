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
  css: {
    postcss: {
      plugins: [
        autoprefixer()
      ]
    }
  },
  server: {
    open: true
  },
  // base: '/https://Zeeneil.github.io/salimbigkas-filipino-e-learning-app/',  // Add your repo name here
  // build: {
  //   outDir: 'dist',
  // },
});