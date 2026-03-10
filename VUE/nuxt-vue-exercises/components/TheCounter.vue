<script setup lang="ts">
import { useCounter } from "../Composables/useCounter";
const { counter, increment, decrement, reset } = useCounter();
</script>

<template>
  <TheTitle> Contador</TheTitle>
  <div class="p-4 bg-white rounded shadow">
    <h2>Valor actual = {{ counter }}</h2>

    <button
      v-if="counter > 0"
      v-on:click="decrement"
      class="bg-red-500 text-white px-3 py-2 rounded"
    >
      decrement
    </button>

    <button
      v-if="counter < 10"
      v-on:click="increment"
      class="bg-green-500 text-white px-3 py-2 rounded"
    >
      increment
    </button>

    <button v-on:click="reset" class="bg-blue-500 text-white px-3 py-2 rounded">
      reset
    </button>
  </div>
</template>
