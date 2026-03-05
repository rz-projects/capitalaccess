import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rz-projects.github.io',
  base: '/capitalaccess',
  output: 'static',
  build: {
    assets: 'assets'
  },
  vite: {
    resolve: {
      alias: {
        '@': '/src',
        '@components': '/src/components',
        '@layouts': '/src/layouts',
        '@styles': '/src/styles'
      }
    }
  }
});
