<template>
  <div>
    <nav class="bg-stone-900 w-full fixed bottom-0 h-20 px-5 rounded-t-2xl">
      <div class="flex justify-between my-5">
        <img src="/icons/home.svg" alt="" />
        <img class="notselected" src="/icons/community.svg" alt="" />
        <div
          class="bg-primary p-3 rounded-full shadow-[0_4px_35px_-5px_rgba(0,0,0,0.3)] shadow-primary"
        >
          <img src="/icons/joystick.svg" alt="" />
        </div>

        <img class="notselected" src="/icons/star.svg" alt="" />
        <img class="notselected" src="/icons/profile.svg" alt="" />
      </div>
    </nav>
  </div>
</template>

<style scoped>
.notselected {
  filter: brightness(50%);
}
</style>
