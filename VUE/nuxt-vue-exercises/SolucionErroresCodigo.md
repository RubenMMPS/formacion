// composables/useCounter.ts
import { ref } from "vue";

export function useCounter() {
  const count = ref(0);

  function increment() {
    count.value++;
  }
}

return{
    count,
    increment,
};

He añadido un return porque al hacer la función no devolvía nada.


<script setup>
import { ref } from "vue";

const items = ref([
    {id: 1, name:"Apple"},
    {id: 2, name: "Banana"},
    {id: 3, name: "Cherry" }]);
</script>
<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
</template>

He añadido una clave id para parametizar las variables y después he cambiado la llave index por id que no se repite y así no da problemas.


<script setup>
import { ref } from "vue";
const counter = ref(0);

</script>

<template>
  <p v-if="counter === 10">Número, {{ counter }}</p>
</template>


Las variables dentro de "< script setup>" deben ser ref o reactive para que el template pueda reaccionar a sus cambios. Además, usamos === (estricto) por buena práctica de JS.