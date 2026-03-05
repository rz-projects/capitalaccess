import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://capitalaccess.org',
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
