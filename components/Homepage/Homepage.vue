<template>
  <div class="scroll-overflow-y">
    <div class="flex py-5">
      <img src="/emma.svg" alt="" />
      <div class="w-full flex justify-center">
        <img src="/flexii-logo.svg" alt="" />
      </div>
    </div>

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
    <div class="grid grid-cols-2 gap-3">
      <PopularClaimButton />
      <PopularClaimButton />
    </div>
  </div>
</template>

<script>
import CategoryBox from "./CategoryBox.vue";
import PopularClaimButton from "./PopularClaimButton.vue";
export default {
  components: {
    CategoryBox,
    PopularClaimButton,
  },
};
</script>
