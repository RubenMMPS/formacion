<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>

<template>
  <div>
    <h1>{{ title || "Título por defecto" }}</h1>
  </div>
</template>
