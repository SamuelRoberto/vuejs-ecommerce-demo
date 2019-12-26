<template>
  <div class="footer">
    <footer class="container">
      <p class="footer__sidenote">Footer</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";
import { ProductState, Product } from "../store/product/types";
const namespace = "product";

@Component
export default class FooterComponent extends Vue {}
</script>

<style scoped lang="scss">
/* ==========================================================================
   Footer
   ========================================================================== */

.page-title {
  font-size: 20px;
}

.footer,
footer {
  background-color: #ffc400;
  color: white;
}
</style>
