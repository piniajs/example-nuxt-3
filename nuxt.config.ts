import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  css: ['~/assets/main.css'],

  buildModules: [
    // pinia plugin
    '@pinia/nuxt',
  ],
})
