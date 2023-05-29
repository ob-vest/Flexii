<template>
  <div>
    <div class="w-full flex justify-center mb-5">
      <img src="/flexii-logo.svg" alt="" />
    </div>
    <section class="flex flex-col items-left px-5">
      <h1 class="text-3xl font-extrabold">Favoritter</h1>
      <div class="w-full">
        <NuxtLink to="/category/wellness/puregym">
          <CategoryListBox image="puregym.svg" title="Puregym" />
        </NuxtLink>
        <NuxtLink to="/category/streaming/spotify">
          <CategoryListBox image="spotify.svg" title="Spotify" />
        </NuxtLink>
        <NuxtLink to="/category/streaming/netflix">
          <CategoryListBox image="netflix.svg" title="Netflix" />
        </NuxtLink>
        <NuxtLink to="/category/gaming/playstation+">
          <CategoryListBox
            image="playstationplus.svg"
            title="Playstation Plus"
          />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
