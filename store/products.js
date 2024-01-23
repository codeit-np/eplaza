import { defineStore } from "pinia";
import axiosApi from "~/config/axios";

export const useProductStore = defineStore("product", {
  // state
  state: () => ({
    products: null,
    loading: false,
  }),

  //getters

  //action
  actions: {
    async fetchAllProducts() {
      try {
        this.loading = true;
        const response = await axiosApi.get("products");
        if (response.status == 200) {
          this.products = response.data;
        }
      } catch (e) {
        console.warn(e);
      } finally {
        this.loading = false;
      }
    },

    async fetchProductByCategory(categoryId) {
      try {
        this.loading = true;
        const response = await axiosApi.get(
          `categories/${categoryId}/products`
        );
        if (response.status == 200) {
          this.products = response.data;
        }
      } catch (e) {
        console.warn(e);
      } finally {
        this.loading = false;
      }
    },
  },
});
