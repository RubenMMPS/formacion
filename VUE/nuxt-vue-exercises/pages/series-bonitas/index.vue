<script setup lang="ts">
import { series } from "~/data/series";

const categories = new Set();

for (const serie of series) {
  categories.add(serie.category);
}
</script>

<template>
  <div
    class="grid w-fit mx-auto justify-center bg-gray-100 shadow p-4 gap-4 mt-8"
  >
    <h1>Estás en: Página principal de Series Bonitas</h1>
    <NuxtLink
      v-for="category of categories"
      :to="`/series-bonitas/${category}`"
      class="flex justify-center"
    >
      <button>Ir a la categoría {{ category }}</button>
    </NuxtLink>
  </div>
</template>
