import { ref } from "vue";
import { acceptHMRUpdate, defineStore } from "pinia";

export const useCounter = defineStore('counter', {
  state: () => ({
    n: 5,
    myRef: ref('hello'),
  })
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounter, import.meta.hot))
}
