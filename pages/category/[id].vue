<template>
  <div class="px-5">
    <BackNavBar />
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
