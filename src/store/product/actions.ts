import { ActionTree } from "vuex";
import axios from "axios";
import { ProductState, Product } from "./types";
import { RootState } from "../types";

export const actions: ActionTree<ProductState, RootState> = {
  /**
   * Get products from specific service and update Store
   */
  getProducts({ commit, getters }): any {
    axios({
      url: `https://api.musement.com/api/v3/venues/164/activities?limit=6&offset=${getters.selectedPage *
        6}`,
      headers: {
        "accept-language": "it",
        "content-type": "application/json",
        "x-musement-currency": "EUR",
        "x-musement-version": "3.4.0"
      }
    }).then(
      response => {
        const payload: Array<Product> = response && response.data;
        commit("productsLoaded", payload);
      },
      error => {
        console.log(error);
      }
    );
  },
  /**
   * Update Store with the previous page
   */
  prevPage({ commit }): any {
    commit("prevPage");
  },
  /**
   * Update Store with the next page
   */
  nextPage({ commit }): any {
    commit("nextPage");
  },
  /**
   * Load Cart and Wishlist from local storage
   */
  loadCartAndWishlist({ commit }): any {
    commit("loadCartAndWishlistFromStorage");
  },
  /**
   * Update store with new item in Cart
   * @param product Product item that will be added in store and local storage
   */
  addToCart({ commit }, product: Product): any {
    commit("addToCart", product);
  },
  /**
   * Update store with new item in Wishlist
   * @param product Product item that will be added in store and local storage
   */
  addToWishlist({ commit }, product: Product): any {
    commit("addToWishlist", product);
  },
  /**
   * Update store with removed item in Cart
   * @param product Product item UUID that will be removed in store and local storage
   */
  removeFromCart({ commit }, product: String): any {
    commit("removeFromCart", product);
  },
  /**
   * Update store with removed item in Wishlist
   * @param product Product item UUID that will be removed in store and local storage
   */
  removeFromWishlist({ commit }, product: String): any {
    commit("removeFromWishlist", product);
  }
};
