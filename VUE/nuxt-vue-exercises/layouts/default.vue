<template>
  <div class="min-h-screen flex flex-col">
    <header class="flex items-center gap-4 p-4 bg-gray-100 shadow">
      <NuxtLink to="/home"><h1>Nuxt 4 Project</h1></NuxtLink>
      <div class="ml-auto flex items-center gap-4">
        <NuxtLink to="/home"><button>Home</button></NuxtLink>
        <NuxtLink to="/catalogo"><button>Catalogo</button></NuxtLink>
        <NuxtLink to="/counter"><button>Contador</button></NuxtLink>
      </div>
    </header>
    <main class="flex-grow container mx-auto p-4">
      <slot />
    </main>
    <footer
      class="flex items-center justify-center p-4 bg-gray-100 shadow mt-8"
    >
      <p>© 2026 Nuxt 4 Project. All rights reserved.</p>
      <Icons></Icons>
    </footer>
  </div>
</template>
