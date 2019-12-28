<template>
  <div class="header-cart">
    <div v-if="cart.length > 0" padding="0">
      <ol>
        <li
          class="header-cart__item"
          v-for="item in cart"
          v-bind:key="item.uuid + '_cart'"
        >
          <img :src="item.cover_image_url" width="40px" />
          <div>
            <p class="title">{{ item.title }}</p>
            <p class="price">
              {{ item.quantity }} x {{ item.retail_price.formatted_value }}
            </p>
            <button class="btn" @click="addQuantity(item)">+</button>
            <button class="btn" @click="removeQuantity(item)">-</button>
          </div>
        </li>
      </ol>

      <div class="total">
        <p class="title">Subtotal</p>
        <p class="price">{{ totalPrice }} €</p>
      </div>
    </div>

    <p class="empty" v-if="cart.length === 0">Empty cart</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";
import { ProductState, Product } from "../store/product/types";
const namespace: string = "product";

@Component
export default class CartComponent extends Vue {
  @Getter("cart", { namespace }) cart!: Array<Product>;
  @Getter("totalPrice", { namespace }) totalPrice!: String;
  @Action("addToCart", { namespace }) addToCart: any;
  @Action("removeFromCart", { namespace }) removeFromCart: any;

  /**
   * Add quantity of selected product
   * @param item Product item
   */
  addQuantity(item: Product) {
    this.addToCart(item);
  }

  /**
   * Remove quantity of selected product
   * @param item Product item
   */
  removeQuantity(item: Product) {
    this.removeFromCart(item.uuid);
  }
}
</script>

<style scoped lang="scss">
/* ==========================================================================
   Header - Cart
   ========================================================================== */

.header-cart {
  width: 350px;
  max-width: 500px;
  overflow-y: visible;
  color: black;
  border: 1px solid red;
  background: white;
  z-index: 10;
  position: absolute;
  top: 50px;
  box-shadow: 0 5px 5px 1px rgba(0, 0, 0, 0.125);
  right: 2%;
}

.header-cart > div > ol {
  padding: 0 3%;
}

.total {
  height: 60px;
  border-top: 1px dashed #d9d9d9;
  border-bottom: 1px dashed #d9d9d9;
  margin: 5% 0;
}

.header-cart__item,
.total {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.header-cart__item:hover,
.total:hover {
  background-color: #d9d9d9;
}

.total > p.title {
  flex: 0 60%;
  font-size: 0.7rem;
  font-weight: 600;
  padding-left: 1rem;
}

.header-cart__item > div {
  flex: 0 60%;
  padding: 3% 2%;
  width: 200px;
}

.header-cart__item > div > p.title,
.total > p.title {
  font-size: 0.7rem;
  font-weight: 600;
}

.header-cart__item > div > p.price,
.total > p.price {
  font-size: 0.7rem;
  font-weight: 400;
}

.total > p.price {
  flex: 0 40%;
}

.header-cart__item > img {
  color: black;
  flex: 0 40%;
  padding: 3% 0;
}

.header-cart > .empty {
  font-size: 0.7rem;
  font-weight: 600;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.btn {
  width: 20px;
  padding: 1%;
  margin: 1%;
}
</style>
