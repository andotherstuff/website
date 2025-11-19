import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        hubs: resolve(__dirname, 'hubs.html'),
        'express-interest': resolve(__dirname, 'express-interest.html'),
      },
    },
  },
  server: {
    port: 8000,
    open: true,
  },
});
