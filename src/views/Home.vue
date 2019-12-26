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
        <PaginationComponent></PaginationComponent>
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
import PaginationComponent from "../components/Pagination.vue";

const namespace: string = "product";
@Component({
  components: {
    ProductComponent,
    PaginationComponent
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

<style lang="scss">
/* ==========================================================================
   Product List
   ========================================================================== */

.product-list {
  display: flex;
  flex: 0 1 auto;
  flex-flow: row wrap;
  margin: 0 -10px;
  &__item {
    padding: 10px;
    flex: 1 0 33.3333%;
    max-width: 33.3333%;
  }
  @media screen and (max-width: 1024px) {
    &__item {
      padding: 10px;
      flex: 1 0 50%;
      max-width: 50%;
    }
  }
  @media screen and (max-width: 720px) {
    &__item {
      padding: 10px;
      flex: 1 0 100%;
      max-width: 100%;
    }
  }
}

.product {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 10px 10px 100px -13px rgba(209, 205, 209, 1);
  &__image-wrapper {
    padding: 30px;
    position: relative;
    text-align: center;
  }
  &__image {
    max-width: 100%;
    height: auto;
    border-radius: 20px;
  }
  &__details {
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    padding: 10px 30px 30px;
    text-align: left;
  }
  &__title {
    padding-bottom: 10px;
    font-family: "Lato-Bold", sans-serif;
    font-size: 14px;
    letter-spacing: 1.37px;
    text-transform: uppercase;
  }
  &__subtitle {
    padding-bottom: 10px;
    font-size: 12px;
    line-height: 19px;
    letter-spacing: 0.43px;
    color: #808080;
  }
  &__price {
    padding-bottom: 20px;
    font-family: "Lato-Bold", sans-serif;
    font-size: 14px;
    letter-spacing: 2.33px;
    text-align: center;
    &--strike {
      margin-right: 10px;
      text-decoration: line-through;
    }
    &--discounted {
      color: #f54b5e;
    }
  }
  &__wishlist-button {
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 15px;
    right: 15px;
  }
  &__add-to-cart {
    width: 100%;
    margin-top: 10px;
    margin-top: auto;
  }
}
</style>
