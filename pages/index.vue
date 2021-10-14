<template>
  <div>
    <pre>{{ counter.$state }}</pre>
    <!-- Remove this component to get started! -->
    <p>
      N: {{ counter.n }}
      <br />
      myRef: {{ counter.myRef }}
    </p>

    <input type="text" v-model="counter.myRef" />
    <br />
    <input type="number" v-model="counter.n" />
  </div>
</template>

<script setup lang="ts">
import { useCounter } from "~/stores/counter";

const counter = useCounter()

if (process.server) {
  counter.n = 20
}
</script>
