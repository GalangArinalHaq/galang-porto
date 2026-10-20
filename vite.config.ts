import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

const currentDir = typeof import.meta.dirname !== 'undefined' ? import.meta.dirname : __dirname;

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(currentDir, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(currentDir, 'index.html'),
          work: path.resolve(currentDir, 'work.html'),
          about: path.resolve(currentDir, 'about.html'),
          services: path.resolve(currentDir, 'services.html'),
          journal: path.resolve(currentDir, 'journal.html'),
          contact: path.resolve(currentDir, 'contact.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
