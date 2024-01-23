import { defineStore } from "pinia";
import axiosApi from "~/config/axios";

export const useCategoryStore = defineStore("category", {
  // state
  state: () => ({
    categories: null,
    loading: false,
  }),

  //getters

  //action
  actions: {
    async fetchAllCategories() {
      try {
        this.loading = true;
        const response = await axiosApi.get("categories");
        if (response.status == 200) {
          this.categories = response.data;
        }
      } catch (e) {
        console.warn(e);
      } finally {
        this.loading = false;
      }
    },
  },
});
