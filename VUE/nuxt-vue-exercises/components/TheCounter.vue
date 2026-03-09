<template>
  <TheTitle> Contador</TheTitle>
  <div>
    <h2>Valor actual = {{ counter }}</h2>

    <button v-if="counter > 0" v-on:click="decrement">decrement</button>

    <button v-if="counter < 10" v-on:click="increment">increment</button>
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
