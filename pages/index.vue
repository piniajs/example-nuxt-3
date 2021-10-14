<template>
  <div>
    <pre>{{ counter.$state }}</pre>
    <!-- Remove this component to get started! -->
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
import { useCounter } from "~/stores/counter";

const counter = useCounter()

if (process.server) {
  counter.n = 20
}
</script>
