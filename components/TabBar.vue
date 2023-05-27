import { NuxtLink } from '~/.nuxt/components';

<template>
  <div>
    <nav
      class="bg-stone-900 w-full fixed bottom-0 h-20 px-5 rounded-t-2xl max-w-md mx-auto"
    >
      <div class="flex justify-between items-center h-full">
        <NuxtLink to="/">
          <img
            class="icon notselected"
            :class="{
              selected:
                getCurrentRoute() == '' || getCurrentRoute() == 'category',
            }"
            src="/illustrations/icons/home.svg"
            alt=""
          />
        </NuxtLink>
        <NuxtLink to="/community">
          <img
            class="icon notselected"
            :class="{ selected: getCurrentRoute() == 'community' }"
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
          :class="{ selected: $route.path === '/favorites' }"
          :src="'/illustrations/icons/star.svg'"
          alt=""
        />
        <NuxtLink to="/profile">
          <img
            class="icon notselected"
            :class="{ selected: getCurrentRoute() == 'profile' }"
            src="/illustrations/icons/profile.svg"
            alt=""
          />
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    getCurrentRoute() {
      const route = useRoute();
      console.log(route.path);
      const pathParts = route.path.split("/");
      console.log(pathParts[1]);
      return pathParts[1];
    },
  },
};
</script>

<style scoped>
.notselected {
  filter: brightness(50%);
}
.selected {
  filter: brightness(100%);
}
.icon {
  @apply w-7;
}
</style>
