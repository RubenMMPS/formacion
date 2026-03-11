<script setup lang="ts">
/*
import { useCounter } from "../Composables/useCounter";
const { counter, increment, decrement, reset } = useCounter();

let textoValor = "Estas en el valor mínimo";

watch(counter, () => {
  if (counter.value === 10) textoValor = "Estás en el valor máximo";

  if (counter.value === 0) textoValor = "Estas en el valor mínimo";

  if (counter.value > 0 && counter.value < 10)
    textoValor = "Estás en los parametros adecuados";
});

*/

import { useCounterStore } from "../stores/counterStore";
import { storeToRefs } from "pinia";

const counterStore = useCounterStore();
const { counter, message } = storeToRefs(counterStore);
const { increment, decrement, reset } = counterStore;
</script>

<template>
  <TheTitle title="Contador" class="text-center"></TheTitle>
  <div class="p-4 bg-white rounded shadow">
    <h2 :class="{ 'text-green-500': counter === 10 }">
      Valor actual = {{ counter }}
    </h2>
    <p>Valor multiplicado por dos: {{ counter * 2 }}</p>
    <p class="mb-4">{{ message }}</p>

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

    <button
      v-if="counter !== 0"
      v-on:click="reset"
      class="bg-blue-500 text-white px-3 py-2 rounded"
    >
      reset
    </button>
  </div>
</template>
