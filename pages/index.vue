<template>
  <div class="space-y-5">
    <div class="flex pt-5">
      <img src="/emma.svg" alt="" />
      <div class="w-full flex justify-center">
        <img src="/flexii-logo.svg" alt="" />
      </div>
    </div>
    <div>
      <h3 class="text-gray-400">Hej Emma!</h3>
      <h1 class="text-3xl">Velkommen tilbage!</h1>
    </div>

    <h2 class="title">Nyt fra Flexii</h2>

    <Newsbox />

    <h2 class="title">Kategorier</h2>
    <div class="flex gap-3 overflow-x-scroll">
      <!-- <CategoryBox title="Wellness" img="wellness.svg" />
      <CategoryBox title="Streaming" img="streaming.svg" /> -->
      <NuxtLink
        v-for="(category, index) in categories"
        :key="index"
        :to="'/category/' + category.name.toLowerCase()"
      >
        <CategoryBox :title="category.name" :img="category.image" />
      </NuxtLink>
    </div>

    <div class="flex justify-between my-2">
      <h2 class="title">Mest populære claims</h2>
      <p>Se alle</p>
    </div>

    <div class="flex gap-3 overflow-x-scroll">
      <PopularClaimButton title="Viaplay" img="viaplay.svg" />
      <PopularClaimButton title="Spotify" img="spotify.svg" />
      <PopularClaimButton title="Netflix" img="netflix.svg" />
    </div>
  </div>
</template>

<script>
import CategoryBox from "../components/CategoryBox.vue";
import Newsbox from "../components/Newsbox.vue";
import PopularClaimButton from "../components/PopularClaimButton.vue";
import { categories } from "~/assets/css/categories";
export default {
  components: {
    CategoryBox,
    PopularClaimButton,
    Newsbox,
  },
  data() {
    return {
      selectedCategory: 0,
      categories,
    };
  },
};
</script>

<style scoped>
.title {
  @apply font-extrabold text-2xl;
}
</style>
