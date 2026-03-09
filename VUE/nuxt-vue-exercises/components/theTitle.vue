<script setup lang="ts">
const props = defineProps<{
  propTitle: string;
}>();
</script>

<template>
  <div>
    <h1>{{ propTitle }}</h1>
  </div>
</template>
