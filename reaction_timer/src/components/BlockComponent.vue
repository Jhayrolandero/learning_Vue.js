<template lang="">
    <div class="block" v-if="showBlock" @click="stop_timer" >
        Click Me
    </div>
</template>

<script>
export default {
    props: ['delay'],
    data() {
        return {
            showBlock: false,
            timer: null,
            reactionTime: 0
        }
    },

    mounted() {
        console.log("Mounted")
        setTimeout(() => {
            this.showBlock = true;
            this.start_timer()
        }, this.delay)
    },

    methods: {
        start_timer() {
            this.timer = setInterval(() => {
                this.reactionTime += 10
            }, 10);
        },

        stop_timer() {
            clearInterval(this.timer);
            this.$emit('end', this.reactionTime);
            // console.log(this.reactionTime);
        }
    }
}
</script>

<style >
.block {
    width: 400px;
    border-radius: 20px;
    background: #0faf87;
    color: white;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
}
</style>