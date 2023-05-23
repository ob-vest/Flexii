<template>
  <div class="fixed bg-black bg-opacity-80 w-full h-full">
    <div class="fixed top-1/3 w-full">
      <div
        class="mx-auto max-w-xs bg-black border-primary border-2 rounded-2xl flex flex-col justify-center p-4 space-y-5"
      >
        <p>
          Velkommen til! Du har nu fået +200 point på din konto, som en velkomst
          gave.
        </p>
        <button
          @click="close"
          class="py-2 w-24 mx-auto bg-primary rounded-2xl text-black"
        >
          Luk
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    close() {
      console.log("close");
      this.$emit("toggle-pop-up");
    },
  },
};
</script>
