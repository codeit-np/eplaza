<template>
  <div>
    <!-- Products Section -->
    <v-container>
      <v-row>
        <v-col cols="4" v-for="product in productStore.products" :key="product">
          <product-card :product="product" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { useProductStore } from "~/store/products";
const productStore = useProductStore();
</script>

<style lang="scss" scoped>
</style>