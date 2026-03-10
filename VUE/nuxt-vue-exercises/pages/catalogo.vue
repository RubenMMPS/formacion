<script setup lang="ts">
import ProductCard from "~/components/ProductCard.vue";
import { products } from "~/data/mock";
</script>

<template>
  <div
    class="grid grid-cols-[repeat(auto-fit,_minmax(18.75rem,_1fr))] gap-4 p-4"
  >
    <div v-for="product of products" :key="product.id">
      <ProductCard>
        <template #image>
          <img :src="product.img" :alt="product.title" />
        </template>
        <template #title>
          {{ product.title }}
        </template>
        <template #description>
          {{ product.description }}
        </template>
        <template #price>
          {{ product.price }}
        </template>
        <template #button>
          {{ product.button }}
        </template>
      </ProductCard>
    </div>
  </div>
  <NuxtLink to="/home" class="flex justify-center">
    <button>Volver al inicio</button>
  </NuxtLink>
</template>
