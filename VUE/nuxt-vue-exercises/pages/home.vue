<script setup lang="ts">
import ParentComponent from "~/components/ParentComponent.vue";
</script>

<template>
  <div
    class="grid w-fit mx-auto justify-center bg-gray-100 shadow p-4 gap-4 mt-8"
  >
    <TheTitle title="HOME" />

    <ParentComponent />

    <NuxtLink to="/catalogo" class="flex justify-center">
      <button>Ir al catálogo</button>
    </NuxtLink>
  </div>
</template>
