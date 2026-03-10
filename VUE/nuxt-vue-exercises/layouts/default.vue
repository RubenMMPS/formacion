<template>
  <div>
    <header class="flex items-center gap-4 p-4 bg-gray-100 shadow">
      <h1>Nuxt 4 Project</h1>
      <div class="ml-auto flex items-center gap-4">
        <NuxtLink to="/home"><button>Home</button></NuxtLink>
        <NuxtLink to="/catalogo"><button>Catalogo</button></NuxtLink>
      </div>
    </header>
    <slot />
  </div>
</template>
