<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["handleClick"]);

function handleClick() {
  emit("handleClick", { message: "Hola desde el componente hijo!" });
}
</script>

<template>
  <button @click="handleClick">Emitir Evento</button>
</template>
