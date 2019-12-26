<template>
  <div id="app">
    <HeaderComponent />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import HeaderComponent from "@/components/Header.vue";

@Component({
  components: {
    HeaderComponent
  }
})
export default class App extends Vue {}
</script>
<style href="" lang="scss">
/* ==========================================================================
   Fonts
   ========================================================================== */

@font-face {
  font-family: "Lato-Bold";
  src: url("./assets/font/Lato-Bold.ttf") format("ttf");
}

@font-face {
  font-family: "Lato-BoldItalic";
  src: url("./assets/font/Lato-BoldItalic.ttf") format("ttf");
}

@font-face {
  font-family: "Lato-Italic";
  src: url("./assets/font/Lato-Italic.ttf") format("ttf");
}

@font-face {
  font-family: "Lato-Regular";
  src: url("./assets/font/Lato-Regular.ttf") format("ttf");
}

/* ==========================================================================
   Main Styles
   ========================================================================== */
html {
  height: 100%;
}

body {
  min-height: 100%;
  margin: 0;

  display: flex;
  flex-direction: column;
  flex: 1 0 auto;

  font-family: "Lato-Regular", sans-serif;
  font-size: 13px;
  text-rendering: optimizeLegibility;

  -moz-osx-font-smoothing: grayscale; /* Font smoothing tweaks for MacOSx in Gecko */
  -webkit-font-smoothing: antialiased;

  color: #444a59;
  background-color: #f8f8f8;
}

* {
  box-sizing: border-box;
}

h1,
p,
figure {
  margin: 0;
  font-weight: normal;
}

a,
a:hover,
a:visited {
  text-decoration: none;
  color: #444a59;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

button {
  appearance: none;
  border: 0;
}

header,
footer {
  height: 60px;

  display: flex;
  flex-direction: row;
  align-items: center;

  text-transform: uppercase;
  background-color: #ffffff;
}

main {
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
  margin: 30px 0 20px;
}

.container {
  width: 100%;
  max-width: 1240px;
  padding: 0 40px;
  margin: 0 auto;
}

/* ==========================================================================
   Buttons
   ========================================================================== */

.icon {
  width: 20px;
  height: 20px;
  fill: #d9d9d9;
  transition: 0.3s fill;
}

.button {
  border: 1px solid #d9d9d9;
  border-radius: 100px;
  background-color: #ffffff;

  cursor: pointer;
  transition: 0.3s border, 0.3s color, 0.3s background-color;
}

.button--round {
  display: block;
  border-radius: 50%;
}

.button--primary {
  padding: 13px;

  font-family: "Lato-Bold", sans-serif;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1.39px;
}

.button--primary:hover {
  border: 1px solid #444a59;
  color: #ffffff;
  background-color: #444a59;
}

.button--wishlist:hover {
  border: 1px solid #444a59;
}

.button--wishlist-selected {
  border: 1px solid #444a59;
}

.button--wishlist-selected > .icon {
  fill: #444a59;
}

.button--wishlist:hover > .icon {
  fill: #444a59;
}

.button--in-cart {
  background-color: #d9d9d9;
}

/* ==========================================================================
   Footer
   ========================================================================== */

.footer__sidenote {
  font-family: "Lato-Bold", sans-serif;
  letter-spacing: 1.37px;
}
</style>
