<template>
    <div class="backdrop" @click.self="close_modal">
        <div class="modal" :class="{ sale: theme === 'sale', dark: theme === 'dark' }">

            <slot></slot>
            <div class="action">
                <slot name="links"></slot>
            </div>
            <button @click="sale_theme">Sale Theme</button>
            <button @click="dark_theme">Dark Theme</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ["header", "text", "theme"],
    methods: {
        close_modal() {
            this.$emit('close');
        },

        sale_theme() {
            this.$emit('sale_theme')
        },

        dark_theme() {
            this.$emit('dark_theme')
        }
    }
}

</script>

<style>
p {
    font-style: normal;
}

.modal h1 {
    color: aqua;
    border: none;
}

.modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}

.backdrop {
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
}

.sale {
    background-color: gold;
    color: #141414;
}

.dark {
    background-color: #282828;
    color: white;
}

.modal.dark .action a {
    color: red;
    padding: 8px;
    border: darkturquoise solid 1px;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
}

.modal.sale .action a {
    color: green;
    padding: 8px;
    border: blue solid 1px;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
}
</style>