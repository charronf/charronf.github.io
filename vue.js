import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
createApp({
  data() {
    return {};
  },
  methods: {
    log() {
      console.log("hello");
    },
  },
  mounted() {},
}).mount("#app");
