<template>
  <div>
    <div class="py-2 flex justify-between items-center">
      <div
        @click="goBack()"
        class="my-5 bg-white w-10 rounded-2xl p-3 flex justify-center"
      >
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
  </div>
</template>
<script>
export default {
  methods: {
    goBack() {
      const route = useRouter();
      console.log("goingBack");
      route.go(-1);
    },
  },
};
</script>
