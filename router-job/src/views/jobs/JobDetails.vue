<template lang="">
    <div v-if="job">
        <h2>{{ job.title }}</h2>
        <p>Job ID is {{ id }}</p>
        <p>Description: {{ job.details }}</p>
    </div>
    <div v-else>
      Fetching Data...
    </div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null,
      title: ''
    }
  },
  mounted() {
    fetch('http://localhost:3000/jobs/' + this.id)
      .then(res => res.json())
      .then(data => this.job = data)
      .catch(err => console.log(err.message))
  }
};
</script>
<style lang="">
</style>