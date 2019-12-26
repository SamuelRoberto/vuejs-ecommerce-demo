import { MutationTree } from "vuex";
import { ProductState, Product } from "./types";

export const mutations: MutationTree<ProductState> = {
  productsLoaded(state, payload: Array<Product>) {
    state.products = payload;
  },
  addToCart(state, payload: Product) {
    const index = state.cart.findIndex(el => el.uuid === payload.uuid);
    if (index === -1) state.cart.push({ ...payload, quantity: 1 });
    else state.cart[index].quantity++;
  },
  addToWishlist(state, payload: Product) {
    const index = state.wishlist.findIndex(el => el.uuid === payload.uuid);
    if (index === -1) state.wishlist.push({ ...payload });
  },
  removeFromWishlist(state, payload: String) {
    const index = state.wishlist.findIndex(el => el.uuid === payload);
    if (index !== -1) state.wishlist.splice(index, 1);
  },
  removeFromCart(state, payload: String) {
    const index = state.cart.findIndex(el => el.uuid === payload);
    if (index !== -1)
      if (state.cart[index].quantity > 1) state.cart[index].quantity--;
      else state.cart.splice(index, 1);
  }
};
