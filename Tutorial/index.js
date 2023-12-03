const app = Vue.createApp({
  // Data, functions

  //   template: "<p>Hi!</p>",

  data() {
    return {
      url: "facebook.com",
      showBooks: true,
      books: [
        {
          title: "Omega LuL",
          author: "IDK",
          img: "download (1).jfif",
          ifFav: true,
        },
        {
          title: "Someone",
          author: "Prolly",
          img: "download (1).png",
          ifFav: true,
        },
        { title: "Random", author: "Ohhh", img: "download.jfif", ifFav: false },
      ],
    };
  },

  methods: {
    toggle_books() {
      this.showBooks = !this.showBooks;
    },

    handle_events(e, data) {
      console.log(e, e.type);

      if (data) {
        this.title = data;
      } else {
        this.title = "Empty";
      }
    },

    handle_mouse_move(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount("#app");
