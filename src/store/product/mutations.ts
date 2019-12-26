import { MutationTree } from "vuex";
import { ProductState, Product } from "./types";

export const mutations: MutationTree<ProductState> = {
  productsLoaded(state, payload: Array<Product>) {
    state.products = payload;
  },
  loadCartAndWishlistFromStorage(state) {
    state.wishlist = JSON.parse(localStorage.getItem("wishlist") || "") || [];
    state.cart = JSON.parse(localStorage.getItem("cart") || "") || [];
  },
  addToCart(state, payload: Product) {
    const index = state.cart.findIndex(el => el.uuid === payload.uuid);
    if (index === -1) state.cart.push({ ...payload, quantity: 1 });
    else state.cart[index].quantity++;
    localStorage.setItem("cart", JSON.stringify(state.cart));
  },
  addToWishlist(state, payload: Product) {
    const index = state.wishlist.findIndex(el => el.uuid === payload.uuid);
    if (index === -1) state.wishlist.push({ ...payload });
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
  },
  removeFromCart(state, payload: String) {
    const index = state.cart.findIndex(el => el.uuid === payload);
    if (index !== -1)
      if (state.cart[index].quantity > 1) state.cart[index].quantity--;
      else state.cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(state.cart));
  },
  removeFromWishlist(state, payload: String) {
    const index = state.wishlist.findIndex(el => el.uuid === payload);
    if (index !== -1) state.wishlist.splice(index, 1);
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
  }
};
