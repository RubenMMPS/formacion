<script setup>
import { ref, provide } from "vue";
import ChildComponent from "./ChildComponent.vue";

const parentMessage = ref("Hola desde ParentComponent");

function changeMessage() {
  parentMessage.value = "Mensaje actualizado desde el padre";
}

provide("parentMessage", parentMessage);
</script>
<template>
  <div class="p-4 bg-white rounded shadow">
    <h3 class="font-bold mb-4">Componente Padre</h3>
    <button
      class="mb-4 rounded bg-blue-600 px-3 py-2 text-white"
      @click="changeMessage"
    >
      Cambiar mensaje del padre
    </button>
    <ChildComponent />
  </div>
</template>
