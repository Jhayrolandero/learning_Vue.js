const app = Vue.createApp({
  // Data, functions

  //   template: "<p>Hi!</p>",

  data() {
    return {
      showBooks: true,
      title: "Harry Potter",
      author: "J. K. Rowling",
      solds: 1000,
    };
  },

  methods: {
    toggle_books() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount("#app");
