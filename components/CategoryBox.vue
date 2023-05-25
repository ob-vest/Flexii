<template>
  <div>
    <div class="bg-white w-32 h-40 rounded-3xl">
      <div class="flex flex-col space-y-2 justify-center h-full w-full">
        <img
          class="w-full h-20 px-3 object-covern"
          :src="'/illustrations/' + img"
          alt=""
        />
        <h3 class="text-black text-xl font-extrabold text-center">
          {{ title }}
        </h3>
      </div>
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
