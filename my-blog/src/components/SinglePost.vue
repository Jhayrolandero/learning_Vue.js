<template lang="">
    <div class="post">
        <router-link :to="{ name: 'details', params: { id: post.id }}">
            <h1> 
                {{ post.title }}
            </h1>
        </router-link>
        <p>
            <span>
            {{ snippet }}
            </span>
        </p>
        <span v-for="tag in post.tags" :key="tag">
            #{{ tag }}
        </span>
    </div>
</template>
<script>
import { computed } from 'vue'


export default {
    props: ['post'],
    setup(props) {

        const snippet = computed(() => {
            return props.post.body.substring(0, 100) + '...'
        })

        return { snippet }
    }
}
</script>

<style></style>