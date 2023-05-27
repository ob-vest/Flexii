<template>
  <div>
    <div class="mt-5 px-5">
      <h1 class="text-white text-4xl mb-3">Flexiimunities</h1>
      <NuxtLink to="/community/chat">
        <CommunityListBox class="spacing" image="alien.png" />
      </NuxtLink>
      <NuxtLink to="/community/chat">
        <CommunityListBox
          class="spacing"
          image="seed.png"
          title="Veganerriget"
          message="Sara: Så i arklen om..."
        />
      </NuxtLink>
      <NuxtLink to="/community/chat">
        <CommunityListBox
          class="spacing"
          image="meditation.png"
          title="Mentaltalk"
          message="Julie: Jeg vidste ikke..."
        />
      </NuxtLink>
      <NuxtLink to="/community/chat">
        <CommunityListBox
          class="spacing"
          image="football.png"
          title="Superligasnak"
          message="Jonas: Kampen start..."
        />
      </NuxtLink>
      <NuxtLink to="/community/chat">
        <CommunityListBox
          class="spacing"
          image="palette.png"
          title="Designsnak"
          message="Ayat: Tjek lige det he..."
        />
      </NuxtLink>
      <NuxtLink to="/community/chat">
        <CommunityListBox
          class="spacing"
          image="rocket.png"
          title="Kryptosnak"
          message="Julie: Jeg vidste ikke..."
        />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.spacing {
  padding-block: 0.5rem;
}
</style>
