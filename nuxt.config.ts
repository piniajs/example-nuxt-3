export default defineNuxtConfig({
  css: ['~/assets/main.css'],

  modules: [
    // pinia plugin
    '@pinia/nuxt',
  ],

  imports: {
    dirs: ['~/stores'],
  },

  pinia: {
  },

   future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2025-06-04'
})
