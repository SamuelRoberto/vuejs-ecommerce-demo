import { GetterTree } from "vuex";
import { ProductState, Product } from "./types";
import { RootState } from "../types";

export const getters: GetterTree<ProductState, RootState> = {
  products(state): Array<Product> {
    const { products } = state;
    return products || [];
  }
};
