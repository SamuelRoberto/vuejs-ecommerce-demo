import { ActionTree } from "vuex";
import axios from "axios";
import { ProductState, Product } from "./types";
import { RootState } from "../types";

export const actions: ActionTree<ProductState, RootState> = {
  getProducts({ commit }): any {
    axios({
      url:
        "https://api.musement.com/api/v3/venues/164/activities?limit=6&offset=0",
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
  loadCartAndWishlist({ commit }): any {
    commit("loadCartAndWishlistFromStorage");
  },
  addToCart({ commit }, product: Product): any {
    commit("addToCart", product);
  },
  addToWishlist({ commit }, product: Product): any {
    commit("addToWishlist", product);
  },
  removeFromCart({ commit }, product: String): any {
    commit("removeFromCart", product);
  },
  removeFromWishlist({ commit }, product: String): any {
    commit("removeFromWishlist", product);
  }
};
