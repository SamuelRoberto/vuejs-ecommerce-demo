<template>
  <div class="home">
    <main class="product-page">
      <div class="container">
        <ul class="product-list">
          <li
            class="product-list__item"
            v-for="(product, index) in products"
            :key="index"
          >
            <ProductComponent :product="product"></ProductComponent>
          </li>
        </ul>
        <!-- <PaginationComponent @prevPage="refreshPage" @nextPage="refreshPage"></PaginationComponent> -->
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { State, Action, Getter } from "vuex-class";
import Component from "vue-class-component";
import { ProductState, Product } from "../store/product/types";
import ProductComponent from "../components/Product.vue";

const namespace: string = "product";
@Component({
  components: {
    ProductComponent
  }
})
export default class Home extends Vue {
  @State("product") productState!: ProductState;
  @Action("getProducts", { namespace }) getProducts: any;
  @Action("loadCartAndWishlist", { namespace }) loadCartAndWishlist: any;
  @Getter("products", { namespace }) products!: Array<Product>;

  mounted() {
    this.getProducts();
    this.loadCartAndWishlist();
  }
}
</script>
