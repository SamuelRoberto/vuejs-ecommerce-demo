import { GetterTree } from "vuex";
import { ProductState, Product } from "./types";
import { RootState } from "../types";

export const getters: GetterTree<ProductState, RootState> = {
  products(state): Array<Product> {
    const { products } = state;
    return products || [];
  },
  wishlist(state): Array<Product> {
    const { wishlist } = state;
    return wishlist || [];
  },
  inWishlist(state, product: Product): Boolean {
    const { wishlist } = state;
    return wishlist ? wishlist.findIndex(el => el.uuid === product.uuid) !== -1 : false;
  },
  cart(state): Array<Product> {
    const { cart } = state;
    return cart || [];
  },
  inCart(state, product: Product): Boolean {
    const { cart } = state;
    return cart ? cart.findIndex(el => el.uuid === product.uuid) !== -1 : false;
  },
  totalPrice(state): String {
    let totalPrice: number = 0;
    const { cart } = state;
    cart.forEach(el => {
        totalPrice += (el.retail_price.value * el.quantity);
    })

    return totalPrice.toFixed(2);
  },
  productCount(state): number {
    let productCount: number = 0;
    const { cart } = state;
    cart.forEach(el => {
        productCount += (1 * el.quantity);
    })

    return productCount || 0;
  }
};
