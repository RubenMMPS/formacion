<script setup lang="ts">
const myTitle = ref("¡Bienvenido a mi Proyecto Nuxt 4!");
</script>

<template>
  <div>
    <theTitle :propTitle="myTitle" />

    <theTitle propTitle="Segundo título" />
  </div>
</template>
