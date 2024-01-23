<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      cover
      height="250"
      :src="product.images[0]"
      :lazy-src="product.images[0]"
    ></v-img>

    <v-card-item>
      <v-card-title>{{ product.title }}</v-card-title>

      <v-card-subtitle>
        <span class="me-1">{{ product.category.name }}</span>

        <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :model-value="4.5"
          color="amber"
          density="compact"
          half-increments
          readonly
          size="small"
        ></v-rating>

        <div class="text-grey ms-4">4.5 (413)</div>
      </v-row>

      <div class="my-4 text-subtitle-1">${{ product.price }}</div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <v-card-actions>
      <v-btn color="deep-purple-lighten-2" variant="text" @click="reserve">
        Add to Cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script setup>
import { ref } from "vue";

defineProps({
  product: {},
});
const loading = ref(false);
const selection = ref(1);
function reserve() {
  loading.value = true;
  setTimeout(() => (loading.value = false), 2000);
}
</script>