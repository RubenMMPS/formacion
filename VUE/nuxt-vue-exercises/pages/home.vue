<script setup lang="ts">
import ParentComponent from "~/components/ParentComponent.vue";
import ChildComponent from "~/components/ChildComponent.vue";
import TheCounter from "~/components/TheCounter.vue";
</script>

<template>
  <div
    class="grid w-fit mx-auto justify-center bg-gray-100 shadow p-4 gap-4 mt-8"
  >
    <TheTitle> Mi Título con Slots </TheTitle>

    <TheCounter></TheCounter>

    <ParentComponent />

    <NuxtLink to="/catalogo">
      <button>Ir al catálogo</button>
    </NuxtLink>
  </div>
</template>
