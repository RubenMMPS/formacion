<template>
  <div>
    <header class="flex items-center gap-4 p-4 bg-gray-100 shadow">
      <NuxtLink to="/home"><h1>Nuxt 4 Project</h1></NuxtLink>
      <div class="ml-auto flex items-center gap-4">
        <NuxtLink to="/home"><button>Home</button></NuxtLink>
        <NuxtLink to="/catalogo"><button>Catalogo</button></NuxtLink>
        <NuxtLink to="/counter"><button>Contador</button></NuxtLink>
      </div>
    </header>
    <slot />
  </div>
</template>
