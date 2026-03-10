<script setup>
import { ref } from "vue";
import ChildComponent from "./ChildComponent.vue";

const eventMessage = ref(null);

function handleCustomEvent(payload) {
  eventMessage.value = payload.message;
}
</script>
<template>
  <div class="p-4 bg-white rounded shadow">
    <h3 class="font-bold mb-4">Componente Padre</h3>
    <ChildComponent @handleClick="handleCustomEvent" />
    <div
      v-if="eventMessage"
      class="mt-4 p-3 bg-green-100 text-green-800 rounded"
    >
      <p>Evento recibido: {{ eventMessage }}</p>
    </div>
  </div>
</template>
