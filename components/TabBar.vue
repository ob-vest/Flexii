import { NuxtLink } from '~/.nuxt/components';

<template>
  <div>
    <nav
      class="bg-stone-900 w-full fixed bottom-0 h-20 px-5 rounded-t-2xl max-w-md mx-auto"
    >
      <div class="flex justify-between items-center h-full">
        <img class="icon" src="/illustrations/icons/home.svg" alt="" />
        <NuxtLink to="/community">
          <img
            class="icon notselected"
            src="/illustrations/icons/community.svg"
            alt=""
          />
        </NuxtLink>

        <div
          class="bg-primary p-2 rounded-full shadow-[0_4px_35px_-5px_rgba(0,0,0,0.3)] shadow-primary"
        >
          <img
            class="h-10 w-10"
            src="/illustrations/icons/joystick.svg"
            alt=""
          />
        </div>

        <img
          class="icon notselected"
          :src="'/illustrations/icons/star.svg'"
          alt=""
        />
        <img
          class="icon notselected"
          src="/illustrations/icons/profile.svg"
          alt=""
        />
      </div>
    </nav>
  </div>
</template>

<style scoped>
.notselected {
  filter: brightness(50%);
}
.icon {
  @apply w-7;
}
</style>
