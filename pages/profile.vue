<template>
  <div>
    <div class="p-5 flex flex-col items-center justify-center space-y-5">
      <h1 class="w-full text-4xl font-bold py-3">Din profil</h1>

      <div class="relative w-fit">
        <img class="h-24" src="/emma.svg" alt="" />
        <img
          class="absolute bottom-0 right-2"
          src="/illustrations/icons/addcircle.svg"
          alt=""
        />
      </div>
      <div class="text-center">
        <h2>Emma Larsen</h2>
        <p class="opacity-60 text-sm">Rediger profil</p>
      </div>

      <div class="flex gap-4 h-16 bg-yellow-600 p-2 px-5 rounded-xl">
        <div class="flex flex-col justify-between w-24 items-center">
          <p>Dine point</p>
          <div class="flex h-5 items-center">
            <img
              class="h-full object-contain"
              src="/illustrations/icons/coin.svg"
              alt=""
            />
            <p>2.256</p>
          </div>
        </div>
        <hr class="border-[0.5px] border-white border-opacity-30 h-full" />
        <div class="flex flex-col justify-between w-24 items-center">
          <p>Brugte point</p>
          <div class="flex h-5 items-center">
            <img
              class="h-full object-contain"
              src="/illustrations/icons/coin.svg"
              alt=""
            />
            <p>20.556</p>
          </div>
        </div>
      </div>
      <div class="space-y-4 pt-5 w-full">
        <ProfileListItem
          title="Seneste aktiverede kuponer"
          img="ticketdiscount.svg"
        />
        <ProfileListItem title="Dit mobilabonnement" img="phone.svg" />
        <ProfileListItem title="Affiliate portal" img="affiliate.svg" />
        <ProfileListItem title="Indstillinger" img="settings.svg" />
        <ProfileListItem title="Kundesupport" img="messagequestion.svg" />
      </div>
    </div>
  </div>
</template>
