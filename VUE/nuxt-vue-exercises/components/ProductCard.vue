<template>
  <div class="p-4 rounded-lg max-w-[18.75rem] my-4 m-auto bg-white shadow">
    <slot name="image"></slot>
    <h2 class="mt-0 mx-0 mb-2"><slot name="title"></slot></h2>
    <p class="my-1 mx-0"><slot name="description"></slot></p>
    <div class="flex items-center justify-between mt-4">
      <p class="my-1 mx-0 text-[#ff5733]"><slot name="price"></slot></p>
      <button class="bg-blue-500 hover:bg-blue-700 text-white rounded">
        <slot name="button"></slot>
      </button>
    </div>
  </div>
</template>
