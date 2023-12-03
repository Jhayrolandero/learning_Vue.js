<template>
  <h1>{{ title }}</h1>

  <teleport to=".modal" v-if="showModal1">
    <Modal :header="header" :text="text" :theme="theme" @close="show_modal1" @dark_theme="dark_theme"
      @sale_theme="sale_theme">
      <template v-slot:links>
        <a href="">Hello?</a>
        <a href="">World!</a>
      </template>
      <h1>Modal 1</h1>
      <p>Modal text 1</p>
    </Modal>
  </teleport>

  <teleport to=".modal" v-if="showModal2">
    <Modal :header="header" :text="text" :theme="theme" @close="show_modal2" @dark_theme="dark_theme"
      @sale_theme="sale_theme">
      <template v-slot:links>
        <a href="">Hello?</a>
        <a href="">World!</a>
      </template>
      <h1>Modal 2</h1>
      <p>Modal text 2</p>
    </Modal>
  </teleport>


  <button @click="show_modal1">Show Modal</button>
  <button @click="show_modal2">Show Modal</button>
</template>

<script>
import Modal from "./components/Modal.vue";



export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "Hello, World in Vue.js",
      header: "Happy New Year!",
      text: "Hola!",
      theme: "dark",
      showModal: false,
      showModal1: false,
      showModal2: false
    }
  },
  methods: {

    show_modal1() {
      this.showModal1 = !this.showModal1;
    },

    show_modal2() {
      this.showModal2 = !this.showModal2;
    },

    sale_theme() {
      this.theme = "sale";
    },

    dark_theme() {
      this.theme = "dark";
    }
  }
};
</script>

<style >
#app,
.modal {
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
