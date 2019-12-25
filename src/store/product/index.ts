import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { ProductState } from "./types";
import { RootState } from "../types";

export const state: ProductState = {
  products: [],
  selectedPage: 0,
  wishlist: [],
  cart: [],
  totalPrice: 0
};

const namespaced: boolean = true;

export const product: Module<ProductState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
