<template>
  <div>
    <div>
      <div
        class="bg-stone-800 rounded-[2rem] w-full h-full items-center py-5 px-3 flex space-x-4"
      >
        <div
          class="w-16 bg-white flex justify-center items-center rounded-full"
        >
          <img
            class="p-2"
            :src="'/illustrations/icons/communities/' + image"
            alt=""
          />
        </div>
        <div class="flex flex-col justify-between w-full">
          <div class="flex justify-between w-full">
            <h2>{{ title }}</h2>
            <p class="text-sm">15:32</p>
          </div>
          <div class="flex justify-between w-full">
            <p class="t">{{ message }}</p>
            <div
              class="h-6 w-6 bg-red-800 rounded-full flex items-center justify-center"
            >
              <p class="text-sm">36</p>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <ContinueButton class="bg-primary" />
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
      default: "rocket.png",
    },
    title: {
      type: String,
      default: "GamersUtopia",
    },
    message: {
      type: String,
      default: "Tony: Super fedt!",
    },
  },
};
</script>
