<template>
  <h1>Making timer</h1>

  <button @click="start" :disabled="isPlaying">Play</button>
  <BlockComponent v-if="isPlaying" :delay="delay" @end="end_game" />
  <ResultsComponent v-if="score" :score="score" />
</template>

<script>

import BlockComponent from './components/BlockComponent.vue';
import ResultsComponent from './components/ResultsComponent.vue'
export default {
  name: 'App',
  components: { BlockComponent, ResultsComponent },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null
    }
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.score = null;
    },

    end_game(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
</style>
