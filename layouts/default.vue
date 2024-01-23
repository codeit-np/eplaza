<template>
  <v-layout>
    <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

    <v-app-bar color="primary" prominent>
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>ePlaza</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn variant="text" icon="mdi-magnify"></v-btn>

      <v-btn variant="text" icon="mdi-filter"></v-btn>

      <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" location="left" temporary>
      <v-list>
        <v-list-item
          link
          v-for="category in categoryStore.categories"
          :key="category"
          :value="category.id"
          @click="productStore.fetchProductByCategory(category.id)"
          ><v-img :src="category.image" :lazy-src="category.image"></v-img
          >{{ category.name }}</v-list-item
        >
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <nuxt-loading-indicator />
      <slot />
    </v-main>
  </v-layout>
</template>
<script setup>
import { useProductStore } from "~/store/products";
const productStore = useProductStore();

import { useCategoryStore } from "~/store/categories";
const categoryStore = useCategoryStore();

await productStore.fetchAllProducts();
await categoryStore.fetchAllCategories();
const drawer = ref(false);
const group = ref(null);

watch(group, () => {
  drawer.value = false;
});
</script>