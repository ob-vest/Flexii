<template>
  <div>
    <div class="mt-20"></div>
    <h3 class="text-gray-400">Hej Sofie!</h3>
    <h1 class="pb-10 text-4xl">Velkommen tilbage!</h1>

    <h2 class="my-2">Kategorier</h2>
    <div class="grid grid-cols-3 gap-3">
      <CategoryBox />
      <CategoryBox />
      <CategoryBox />
    </div>
    <div class="flex justify-between my-2">
      <h2>Mest populære claims</h2>
      <p>Se alle</p>
    </div>
    <div
      class="bg-primary w-26 h-40 rounded-3xl justify-end items-center flex flex-col p-2"
    >
      <h1>Hel</h1>
    </div>
  </div>
</template>
