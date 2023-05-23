<template>
  <div>
    <div class="mt-5">
      <div class="px-3 bg-white w-full h-20 rounded-3xl">
        <div class="flex w-full h-full justify-start items-center space-x-5">
          <img class="w-12" :src="'/illustrations/' + image" alt="" />
          <h1 class="text-black font-bold">{{ title }}</h1>
          <div class="flex justify-end w-full">
            <ContinueButton class="bg-primary" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: "",
    },
  },
};
</script>
