import { defineStore } from "pinia";
import { ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const counter = ref<number>(0);
  const message = ref<string>("Estas en el valor mínimo");

  const increment = (): void => {
    counter.value++;
    if (counter.value === 10) {
      message.value = "Estás en el valor máximo";
    } else if (counter.value > 0 && counter.value < 10) {
      message.value = "Estás en los parametros adecuados";
    }
  };

  const decrement = (): void => {
    counter.value--;
    if (counter.value === 0) {
      message.value = "Estas en el valor mínimo";
    } else if (counter.value > 0 && counter.value < 10) {
      message.value = "Estás en los parametros adecuados";
    }
  };

  const reset = (): void => {
    counter.value = 0;
    message.value = "Estas en el valor mínimo";
  };

  return {
    counter,
    message,
    increment,
    decrement,
    reset,
  };
});
