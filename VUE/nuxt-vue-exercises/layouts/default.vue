<template>
  <div class="min-h-screen flex flex-col">
    <Header></Header>
    <main class="flex-grow container mx-auto p-4">
      <slot />
    </main>
    <footer
      class="flex items-center justify-center p-4 bg-gray-100 shadow mt-8"
    >
      <h2>Footer</h2>
      <Icons></Icons>
    </footer>
  </div>
</template>
