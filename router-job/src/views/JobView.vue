<template lang="">
    <div>
        <h1>Jobs</h1>
        <div v-for="job in jobs" :key="job.id">
        
        {{ job.title }}
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      jobs: [
        { title: "Toplaner", id: 1, details: "lorem" },
        { title: "Midlaner", id: 2, details: "lorem" },
        { title: "Botlaner", id: 1, details: "lorem" },
      ],
    };
  },
};
</script>
<style lang="">
</style>