export default defineNuxtConfig({
  css: ['~/assets/main.css'],

  modules: [
    // pinia plugin
    '@pinia/nuxt',
  ],

  imports: {
    dirs: ['./stores'],
  },

  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },

  compatibilityDate: '2025-03-19',
})