import { MutationTree } from "vuex";
import { ProductState, Product } from "./types";

export const mutations: MutationTree<ProductState> = {
  /**
   * Update store with list of products
   * @param state State Object
   * @param payload Array of products
   */
  productsLoaded(state, payload: Array<Product>) {
    state.products = payload;
  },
  /**
   * Update store with previous page
   * @param state State Object
   */
  prevPage(state) {
    state.selectedPage > 0 ? state.selectedPage-- : null;
  },
  /**
   * Update store with next page
   * @param state State Object
   */
  nextPage(state) {
    state.selectedPage++;
  },
  /**
   * Load Cart and Wishlist from local storage
   * @param state State Object
   */
  loadCartAndWishlistFromStorage(state) {
    state.wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]") || [];
    state.cart = JSON.parse(localStorage.getItem("cart") || "[]") || [];
  },
  /**
   * Update store with new item in Cart
   * @param state State Object
   * @param payload Product item that will be added in store and local storage
   */
  addToCart(state, payload: Product) {
    const index = state.cart.findIndex(el => el.uuid === payload.uuid);
    if (index === -1) state.cart.push({ ...payload, quantity: 1 });
    else state.cart[index].quantity++;
    localStorage.setItem("cart", JSON.stringify(state.cart));
  },
  /**
   * Update store with new item in Wishlist
   * @param state State Object
   * @param payload Product item that will be added in store and local storage
   */
  addToWishlist(state, payload: Product) {
    const index = state.wishlist.findIndex(el => el.uuid === payload.uuid);
    if (index === -1) state.wishlist.push({ ...payload });
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
  },
  /**
   * Update store with removed item in Cart
   * @param state State Object
   * @param payload Product item UUID that will be removed in store and local storage
   */
  removeFromCart(state, payload: String) {
    const index = state.cart.findIndex(el => el.uuid === payload);
    if (index !== -1)
      if (state.cart[index].quantity > 1) state.cart[index].quantity--;
      else state.cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(state.cart));
  },
  /**
   * Update store with removed item in Wishlist
   * @param state State Object
   * @param payload Product item UUID that will be removed in store and local storage
   */
  removeFromWishlist(state, payload: String) {
    const index = state.wishlist.findIndex(el => el.uuid === payload);
    if (index !== -1) state.wishlist.splice(index, 1);
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
  }
};
