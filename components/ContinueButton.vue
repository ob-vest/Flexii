<template>
  <div>
    <div :class="class" class="h-7 w-7 rounded-full items-center flex mt-2">
      <img
        class="p-2 h-full w-full object-contain"
        src="/icons/chevron-right.svg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    class: {
      type: String,
      default: "",
    },
  },
};
</script>
