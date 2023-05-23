<template>
  <div>
    <div class="mx-5 space-y-5">
      <BackNavBar />
      <h1 class="text-4xl">{{ title }}</h1>
      <div class="flex justify-center">
        <img class="w-48" :src="'/illustrations/' + img" alt="" />
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
          {{ description }}
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
export default {
  props: {
    title: String,
    img: String,
    description: String,
  },
};
</script>
