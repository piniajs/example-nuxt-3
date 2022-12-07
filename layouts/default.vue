<template>
  <header>
    <h1>Challenge Desarrollador Front</h1>
    <p>Administrador de contadores con Nuxt</p>
  </header>

  <template v-if="route.path !== '/'">
    <router-link to="/">→ Back Home</router-link>
    <hr />
  </template>

  <slot />

  <hr />

  <footer>
    <a href="https://github.com/catuga/los-heroes-counter-app" target="_blank">los-heroes-counter-app</a>
  </footer>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style scoped>
</style>
