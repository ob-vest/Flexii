<template>
  <div class="px-5">
    <div class="py-5 flex justify-between items-center">
      <div class="my-5 bg-white w-10 rounded-2xl p-3 flex justify-center">
        <img
          class="rotate-180"
          src="/illustrations/icons/chevron-right.svg"
          alt=""
        />
      </div>
      <div class="w-full flex justify-center">
        <img src="/flexii-logo.svg" alt="" />
      </div>
    </div>

    <h1 class="text-4xl">
      {{ category ? category.name : "No category selected" }}
    </h1>
    <div>
      <div v-for="item in category.items" :key="item.title">
        <NuxtLink
          :to="category.name.toLowerCase() + '/' + item.title.toLowerCase()"
        >
          <CategoryListBox :image="item.image" :title="item.title" />
        </NuxtLink>
      </div>
      <!-- 
      <CategoryListBox image="viaplay.svg" title="Viaplay" />
      <CategoryListBox image="deezer.png" title="Deezer" />
      <CategoryListBox image="netflix.svg" title="Netflix" />
      <CategoryListBox image="youtube.svg" title="Youtube" />
      <CategoryListBox image="disney.svg" title="Disney+" /> -->
    </div>
  </div>
</template>

<script>
import { categories } from "~/assets/css/categories";
export default {
  data() {
    return {
      category: this.getCategory(),
    };
  },
  methods: {
    getCategory() {
      const route = useRoute();
      return categories.find(
        (category) => category.name.toLowerCase() === route.params.id
      );
    },
  },
};
</script>
