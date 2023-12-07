<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>Search Term: {{ search }}</p>
    <div v-for="name in matchNames" :key="name"> {{ name }} </div>
  </div>
</template>

<script>
import { ref, computed, watch, watchEffect } from 'vue'

export default {
  name: 'HomeView',

  setup() {

    const search = ref('')
    const names = ref(["Mordekaiser", "Garen",
      "Aatrox", "Volibear", "Malphite", "Tamn Kench"])

    watch(search, () => {
      console.log("run wa")
    })

    watchEffect(() => {
      console.log("run")
    })
    const matchNames = computed(() => {
      return names.value.filter(
        (name) => name.includes(search.value))
    })

    return {
      search, matchNames
    }
  }
}
</script>
