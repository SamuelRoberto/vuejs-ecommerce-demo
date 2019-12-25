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
        console.log(response.data);
        commit("productsLoaded", payload);
      },
      error => {
        console.log(error);
      }
    );
  }
};
