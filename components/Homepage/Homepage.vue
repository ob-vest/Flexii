<template>
  <div class="space-y-5">
    <div class="flex pt-5">
      <img src="/emma.svg" alt="" />
      <div class="w-full flex justify-center">
        <img src="/flexii-logo.svg" alt="" />
      </div>
    </div>

    <h3 class="text-gray-400">Hej Sofie!</h3>
    <h1 class="text-3xl">Velkommen tilbage!</h1>

    <h2 class="title">Nyt fra Flexii</h2>

    <Newsbox />

    <h2 class="title">Kategorier</h2>
    <div class="flex gap-3 overflow-x-scroll">
      <CategoryBox />
      <CategoryBox />
      <CategoryBox />
    </div>
    <div class="flex justify-between my-2">
      <h2 class="title">Mest populære claims</h2>
      <p>Se alle</p>
    </div>
    <div class="flex gap-3 overflow-x-scroll">
      <PopularClaimButton />
      <PopularClaimButton />
      <PopularClaimButton />
      <PopularClaimButton />
    </div>
  </div>
</template>

<script>
import CategoryBox from "./CategoryBox.vue";
import Newsbox from "./Newsbox.vue";
import PopularClaimButton from "./PopularClaimButton.vue";

export default {
  components: {
    CategoryBox,
    PopularClaimButton,
    Newsbox,
  },
};
</script>

<style scoped>
.title {
  @apply font-extrabold text-2xl;
}
</style>
