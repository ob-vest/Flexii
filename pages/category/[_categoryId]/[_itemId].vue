<template>
  <div>
    <div class="mx-5 space-y-5">
      <BackNavBar />
      <h1 class="text-4xl">{{ item.title }}</h1>
      <div class="flex justify-center">
        <img class="w-48" :src="'/illustrations/' + item.image" alt="" />
      </div>

      <div class="mx-5 space-y-5">
        <div class="flex justify-between items-center">
          <h2>Detaljer</h2>
          <div class="flex items-center h-8">
            <img class="h-full" src="/icons/coin.svg" alt="" />
            <p class="text-white text-opacity-60">150 p</p>
          </div>
        </div>

        <p class="text-white text-opacity-60">
          {{ item.text }}
        </p>
        <p class="text-white text-opacity-80">
          Prisen for denne kupon er 150 point.
        </p>
        <button class="bg-primary text-black font-bold w-full rounded-2xl h-12">
          Claim
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { categories } from "~/assets/css/categories";

export default {
  data() {
    return {
      item: this.getItem(),
    };
  },
  methods: {
    getCategory() {
      return categories.find(
        (category) =>
          category.name.toLowerCase() === this.$route.params._categoryId
      ).items;
    },
    getItem() {
      console.log(this.$route.params);
      const items = this.getCategory();
      return items.find(
        (item) => item.title.toLowerCase() === this.$route.params._itemId
      );
    },
  },
};
</script>
