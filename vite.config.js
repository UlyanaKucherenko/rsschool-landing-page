import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve('index.html'),
        menu: resolve('menu.html'),
      },
    },
  },
});
