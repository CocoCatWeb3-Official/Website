// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    '~/plugins/arco-ui',
    // '~/plugins/motion.js',
    // '~/plugins/wow.client.js',
    '~/plugins/aos.client.js',
    '~/plugins/pinia.js'
  ],
  css: [],
  build: {
    // transpile: ['@arco-design/web-vue'],
  },
  nitro: {
    preset: 'static', // Ensure that Nitro is set to generate a static site
    prerender: {
      routes: ['/'], // Add any routes that need to be prerendered
    },
  },
})
