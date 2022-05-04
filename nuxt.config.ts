import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  css: ['~/assets/main.css'],

  buildModules: [
    // pinia plugin
    '@pinia/nuxt',
  ],
})
