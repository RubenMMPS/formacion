<template>
  <div class="min-h-screen flex flex-col">
    <header>
      <nav class="flex items-center gap-4 p-4 bg-gray-100 shadow">
        <NuxtLink to="/home"><h2>Menú</h2></NuxtLink>
        <div class="ml-auto flex items-center gap-4">
          <NuxtLink to="/home"><button>Home</button></NuxtLink>
          <NuxtLink to="/catalogo"><button>Catalogo</button></NuxtLink>
          <NuxtLink to="/counter"><button>Contador</button></NuxtLink>
        </div>
      </nav>
    </header>
    <main class="flex-grow container mx-auto p-4">
      <slot />
    </main>
  </div>
</template>
