<script setup lang="ts">
import { series } from "~/data/series";

const route = useRoute();
const { category, title } = route.params;

const serie = series.find((serie) => serie.title === title);
</script>

<template>
  <div
    class="grid w-fit mx-auto justify-center bg-gray-100 shadow p-4 gap-4 mt-8"
  >
    <h3>Detalles del contenido</h3>
    <p><strong>Categoría:</strong> {{ category }}</p>
    <p>
      <strong>Título:</strong>
      {{ serie?.title.toLowerCase().replace(" ", "-") }}-episodio-1
    </p>
    <p><strong>Descripción:</strong> {{ serie?.description }}</p>

    <NuxtLink to="/series-bonitas" class="flex justify-center"
      ><button>Volver al inicio</button></NuxtLink
    >
  </div>
</template>
