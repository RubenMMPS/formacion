<script setup>
import { Icon } from "@iconify/vue";

const icons = {
  whatsapp: { link: "streamline-logos:whatsapp-logo-solid", color: "green" },
  github: { link: "streamline-logos:github-logo-2-solid", color: "black" },
};
</script>

<template>
  <div v-for="icon in icons" :key="icon.link">
    <Icon :icon="icon.link" :color="icon.color" width="30" class="ml-2 mr-2" />
  </div>
</template>
