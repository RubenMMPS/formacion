<script setup>
import { inject } from "vue";

const parentMessage = inject("parentMessage", "No llego ningun mensaje");
</script>

<template>
  <div class="rounded border border-gray-300 p-4">
    <h4 class="mb-2 font-semibold">Componente Hijo</h4>
    <p>Mensaje recibido por inject: {{ parentMessage }}</p>
  </div>
</template>
