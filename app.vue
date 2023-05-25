<template>
  <div>
    <PopUpBox
      v-if="isOpen == true"
      :is-open="isOpen"
      @toggle-pop-up="togglePopUp"
    />
    <div>
      <!-- <CommunityList /> -->
      <!-- <Homepage class="px-5" /> -->
      <!-- <CategoryList /> -->
      <!-- <ClaimPage
        title="Spotify"
        img="spotify.svg"
        description="
        Claim 1 måneds GRATIS Spotify Premium subscription ved at aktivere denne kupon. Brug Spotify til at streame dine yndlingsartisters sange on demand!
        "
      /> -->
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
