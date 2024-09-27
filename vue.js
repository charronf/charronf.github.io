import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
createApp({
  data() {
    return {
      mouseX : '10px',
      mouseY : '10px',
    };
  },
  computed : {
    gradiant(){
      return {backgroundImage : `radial-gradient(circle at ${this.mouseX}% ${this.mouseY}px, #393d8a, #212241 55%)`}
    }
      },
  methods: {
    cursor(event){
      let width = window.innerWidth;
      this.mouseX = (event.clientX / width) * 100;
      this.mouseY = event.clientY;
    }
  },
  mounted() {
  },

}).mount("#app");
