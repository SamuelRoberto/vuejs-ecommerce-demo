import { GetterTree } from "vuex";
import { ProductState, Product } from "./types";
import { RootState } from "../types";

export const getters: GetterTree<ProductState, RootState> = {
  /**
   * Get all Products from Store
   * @param state State object
   */
  products(state): Array<Product> {
    const { products } = state;
    return products || [];
  },
  /**
   * Get all Products in Wishlist from Store
   * @param state State object
   */
  wishlist(state): Array<Product> {
    const { wishlist } = state;
    return wishlist || [];
  },
  /**
   * Get all Products in Cart from Store
   * @param state State object
   */
  cart(state): Array<Product> {
    const { cart } = state;
    return cart || [];
  },
  /**
   * Get total price from Store
   * @param state State object
   */
  totalPrice(state): String {
    let totalPrice: number = 0;
    const { cart } = state;
    if (cart instanceof Array) {
      cart.forEach(el => {
        totalPrice += el.retail_price.value * el.quantity;
      });
    }

    return totalPrice.toFixed(2);
  },
  /**
   * Get number of product in Cart from Store
   * @param state State object
   */
  productCount(state): number {
    let productCount: number = 0;
    const { cart } = state;
    if (cart && cart instanceof Array) {
      cart.forEach(el => {
        productCount += 1 * el.quantity;
      });
    }

    return productCount || 0;
  },
  /**
   * Get selected page from Store
   * @param state State object
   */
  selectedPage(state): number {
    const { selectedPage } = state;
    return selectedPage || 0;
  }
};
