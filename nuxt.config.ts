import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@exampledev/new.css@1/new.min.css' }
    ]
  },

  buildModules: [
    // pinia plugin
    ['@pinia/nuxt']
  ],
})
