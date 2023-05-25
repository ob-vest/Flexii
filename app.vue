<template>
  <div>
    <PopUpBox
      v-if="isOpen == true"
      :is-open="isOpen"
      @toggle-pop-up="togglePopUp"
    />
    <div>
      <!-- <CommunityList /> -->
      <NuxtPage />
      <TabBar class="pt-24" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    togglePopUp() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
