<template>
  <div>

    <h2>Counter Store</h2>

    <button @click="counter.decrement()" data-testid="increment">-</button>
    <button @click="counter.increment()" data-testid="increment">+</button>

    <h4>Counter: {{ counter.n }}</h4>

  </div>
</template>

<script setup lang="ts">
import { useCounter } from "~/stores/counter";

const counter = useCounter()

</script>

<style scoped>
button {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
