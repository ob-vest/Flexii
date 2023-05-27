<template>
  <div
    class="bg-stone-600 w-full flex items-center justify-between px-5 rounded-xl h-12"
  >
    <h3>{{ title }}</h3>
    <img class="brightness-125" :src="'/illustrations/icons/' + img" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    img: String,
  },
};
</script>
