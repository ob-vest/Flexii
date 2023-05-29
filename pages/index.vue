<template>
  <div class="space-y-5">
    <div class="flex pt-5 body-space">
      <img src="/emma.svg" alt="" />
      <div class="w-full flex justify-center">
        <img class="object-contain" src="/flexii-logo.svg" alt="" />
      </div>
    </div>
    <div class="body-space">
      <h3 class="text-gray-400">Hej Emma!</h3>
      <h1 class="text-3xl">Velkommen tilbage!</h1>
    </div>
    <div class="body-space space-y-5">
      <h2 class="title">Nyt fra Flexii</h2>

      <Newsbox />
    </div>
    <h2 class="title body-space">Kategorier</h2>
    <div class="overflow-x-scroll">
      <div class="body-space mb-2 flex gap-3">
        <NuxtLink
          v-for="(category, index) in categories"
          :key="index"
          :to="'/category/' + category.name.toLowerCase()"
        >
          <CategoryBox :title="category.name" :img="category.image" />
        </NuxtLink>
      </div>
    </div>

    <div class="flex justify-between my-2 body-space">
      <h2 class="title">Mest populære claims</h2>
    </div>

    <div class="overflow-x-scroll">
      <div class="flex gap-3 body-space">
        <NuxtLink
          :to="
            '/category/' +
            categories[1].name.toLowerCase() +
            '/' +
            categories[1].items[0].title.toLowerCase()
          "
        >
          <PopularClaimButton
            :title="categories[1].items[0].title"
            :img="categories[1].items[0].image"
          />
        </NuxtLink>

        <NuxtLink
          :to="
            '/category/' +
            categories[1].name.toLowerCase() +
            '/' +
            categories[1].items[1].title.toLowerCase()
          "
        >
          <PopularClaimButton
            :title="categories[1].items[1].title"
            :img="categories[1].items[1].image"
          />
        </NuxtLink>
        <NuxtLink
          :to="
            '/category/' +
            categories[1].name.toLowerCase() +
            '/' +
            categories[1].items[3].title.toLowerCase()
          "
        >
          <PopularClaimButton
            :title="categories[1].items[3].title"
            :img="categories[1].items[3].image"
          />
        </NuxtLink>
      </div>
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
