<template>
  <div class="px-5">
    <div class="py-5 flex justify-between items-center">
      <div class="my-5 bg-white w-10 rounded-2xl p-3 flex justify-center">
        <img class="rotate-180" src="/icons/chevron-right.svg" alt="" />
      </div>
      <div class="w-full flex justify-center">
        <img src="/flexii-logo.svg" alt="" />
      </div>
    </div>

    <h1 class="text-4xl">Streaming</h1>
    <div>
      <CategoryListBox image="spotify.svg" title="Spotify" />
      <CategoryListBox image="viaplay.svg" title="Viaplay" />
      <CategoryListBox image="deezer.png" title="Deezer" />
      <CategoryListBox image="netflix.svg" title="Netflix" />
      <CategoryListBox image="youtube.svg" title="Youtube" />
      <CategoryListBox image="disney.svg" title="Disney+" />
    </div>
  </div>
</template>
