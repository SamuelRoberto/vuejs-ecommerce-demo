<template>
  <div class="product">
    <article class="product" itemscope itemtype="http://schema.org/Product">
      <figure class="product__image-wrapper">
        <img
          class="product__image"
          :src="product.cover_image_url"
          alt="Product"
          itemprop="image"
        />
        <button
          @click="
            inWishlist() ? removeFromWishlistClick() : addToWishlistClick()
          "
          class="product__wishlist-button button button--round button--wishlist"
          :class="inWishlist() ? 'button--wishlist-selected' : ''"
        >
          <svg
            class="icon"
            width="20px"
            height="20px"
            viewBox="0 6 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <title>Wishlist Icon</title>
            <polygon
              id="Wishlist-Icon"
              stroke="none"
              fill-rule="evenodd"
              points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"
            />
          </svg>
        </button>
      </figure>
      <div class="product__details">
        <h1 class="product__title" itemprop="brand">{{ product.title }}</h1>
        <p class="product__subtitle" itemprop="description">
          {{ product.description }}
        </p>
        <div
          class="product__price"
          itemscope
          itemtype="http://schema.org/Offer"
        >
          <div v-if="product.discount > 0">
            <span class="product__price--strike">{{
              product.original_retail_price.formatted_value
            }}</span>
            <span class="product__price--discounted" itemprop="price">{{
              product.retail_price.formatted_value
            }}</span>
          </div>
          <div v-else>
            <span class="product__price">{{
              product.retail_price.formatted_value
            }}</span>
          </div>
        </div>
        <button
          v-if="!inCart()"
          @click="addToCartClick()"
          class="product__add-to-cart button button--primary"
        >
          Add to Cart
        </button>
        <button
          v-if="inCart()"
          @click="addToCartClick()"
          class="product__add-to-cart button button--primary button--in-cart"
        >
          In Cart
        </button>
        <br />
        <button
          v-if="inCart()"
          @click="removeFromCartClick()"
          class="product__add-to-cart button button--primary"
        >
          Remove from Cart
        </button>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";
import { ProductState, Product } from "../store/product/types";
const namespace = "product";

@Component
export default class ProductComponent extends Vue {
  @Prop({ type: Object, default: null }) product!: Product;
  @Action("addToCart", { namespace }) addToCart: any;
  @Action("addToWishlist", { namespace }) addToWishlist: any;
  @Action("removeFromCart", { namespace }) removeFromCart: any;
  @Action("removeFromWishlist", { namespace }) removeFromWishlist: any;

  @Getter("wishlist", { namespace }) wishlist!: Array<Product>;
  @Getter("cart", { namespace }) cart!: Array<Product>;

  addToCartClick() {
    this.addToCart(this.product);
  }

  addToWishlistClick() {
    this.addToWishlist(this.product);
  }

  removeFromCartClick() {
    this.removeFromCart(this.product.uuid);
  }

  removeFromWishlistClick() {
    this.removeFromWishlist(this.product.uuid);
  }

  inWishlist(): Boolean {
    return this.wishlist
      ? this.wishlist.findIndex(el => el.uuid === this.product.uuid) !== -1
      : false;
  }

  inCart(): Boolean {
    return this.cart
      ? this.cart.findIndex(el => el.uuid === this.product.uuid) !== -1
      : false;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/* ==========================================================================
   Product
   ========================================================================== */

.product {
  display: flex;
  flex-direction: column;
  height: 100%;

  background-color: #ffffff;
}

/* ==========================================================================
   Product Image
   ========================================================================== */

.product__image-wrapper {
  padding: 20px;
  position: relative;
  text-align: center;
}

.product__image {
  max-width: 100%;
  height: auto;
}

/* ==========================================================================
   Product Details
   ========================================================================== */

.product__details {
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  padding: 10px 20px 20px;
  text-align: center;
}

/* ==========================================================================
   Product Titles
   ========================================================================== */

.product__title {
  padding-bottom: 10px;

  font-family: "Lato-Bold", sans-serif;
  font-size: 14px;
  letter-spacing: 1.37px;
  text-transform: uppercase;
}

.product__subtitle {
  padding-bottom: 10px;

  font-size: 12px;
  line-height: 19px;
  letter-spacing: 0.43px;

  color: #808080;
}

/* ==========================================================================
   Product Prices
   ========================================================================== */

.product__price {
  padding-bottom: 20px;

  font-family: "Lato-Bold", sans-serif;
  font-size: 14px;
  letter-spacing: 2.33px;
}

.product__price--strike {
  margin-right: 10px;
  text-decoration: line-through;
}

.product__price--discounted {
  color: #f54b5e;
}

/* ==========================================================================
   Product actions
   ========================================================================== */

.product__wishlist-button {
  width: 35px;
  height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 10px;
  right: 10px;
}

.product__add-to-cart {
  width: 100%;
  margin-top: 10px;
  margin-top: auto;
}
</style>
