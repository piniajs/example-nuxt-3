import { ref } from "vue";
import { defineStore } from "pinia";

export const useCounter = defineStore('counter', {
  state: () => ({
    n: 3,
    myRef: ref('hello')
  })
})
