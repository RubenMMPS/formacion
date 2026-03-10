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
  </div>
</template>

<script setup>
import { ref } from "vue";

const counter = ref(0);

const increment = () => {
  counter.value++;
};

const decrement = () => {
  if (counter.value > 0) {
    counter.value--;
  }
};
</script>
