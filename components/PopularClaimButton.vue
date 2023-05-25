<template>
  <div>
    <div
      class="bg-white w-32 h-32 rounded-3xl justify-center items-center flex flex-col p-2 space-y-2"
    >
      <img class="h-12 object-contain" :src="'/illustrations/' + img" alt="" />
      <h1 class="text-black">{{ title }}</h1>
    </div>
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
