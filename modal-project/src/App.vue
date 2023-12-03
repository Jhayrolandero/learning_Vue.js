<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name">
  <Modal />
  <button @click="handle_click"> Click Me</button>
</template>

<script>
import Modal from "./components/Modal.vue";



export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "Hello, World in Vue.js"
    }
  },
  methods: {
    handle_click() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add('active');
      this.$refs.name.focus()
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  color: tomato;
  font-size: 3rem;
  border: #282828 solid 1px;
}
</style>
