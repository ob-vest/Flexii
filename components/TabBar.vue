<template>
  <div>
    <div class="pt-24">
      <nav class="bg-stone-900 w-full fixed bottom-0 h-20 px-5 rounded-t-2xl">
        <div class="flex justify-between items-center h-full">
          <img class="icon" src="/icons/home.svg" alt="" />
          <img class="icon notselected" src="/icons/community.svg" alt="" />
          <div
            class="bg-primary p-2 rounded-full shadow-[0_4px_35px_-5px_rgba(0,0,0,0.3)] shadow-primary"
          >
            <img class="h-10 w-10" src="/icons/joystick.svg" alt="" />
          </div>

          <img class="icon notselected" :src="'/icons/star.svg'" alt="" />
          <img class="icon notselected" src="/icons/profile.svg" alt="" />
        </div>
      </nav>
    </div>
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
