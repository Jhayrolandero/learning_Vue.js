<template>
  <SignUpFormVue />
</template>

<script>
import SignUpFormVue from "./components/SignUpForm.vue";

export default {
  name: "App",
  components: { SignUpFormVue },
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

body {
  background-color: #141414;
  margin: 0;
}
</style>
