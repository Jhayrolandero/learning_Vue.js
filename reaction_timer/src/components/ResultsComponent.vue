<template lang="">
    <div class="result">
        <h1> Reaction Time: {{ score }} ms - {{ rank }}</h1>
    </div>
</template>
<script>
export default {
    props: ['score'],

    data() {
        return {
            rank: null
        }
    },

    mounted() {
        if (this.score < 250) {
            this.rank = "Fast";
        } else if (this.score < 400) {
            this.rank = "Good";
        } else {
            this.rank = "Hell you are slow";
        }
    }
}
</script>
<style>
.result {
    color: #141414;
}
</style>