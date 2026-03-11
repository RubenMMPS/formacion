<script setup lang="ts">
import { series } from "~/data/series";
const route = useRoute();
const category = route.params.category;

const filteredSeries = series.filter((serie) => serie.category === category);
</script>

<template>
  <div
    class="grid w-fit mx-auto justify-center bg-gray-100 shadow p-4 gap-4 mt-8 text-center"
  >
    <h2>Estás en series de la categoría:</h2>
    <h2>{{ category }}</h2>

    <NuxtLink
      v-for="serie of filteredSeries"
      :key="serie.id"
      :to="`/series-bonitas/${category}/${serie.title}`"
      class="flex justify-center"
    >
      <button>Ver {{ serie.title }}</button>
    </NuxtLink>
  </div>
</template>
