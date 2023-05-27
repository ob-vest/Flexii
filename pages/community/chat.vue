<template>
  <div>
    <BackNavBar />
    <h1 class="mb-5 text-4xl font-extrabold">Designsnak</h1>

    <div class="bg-stone-700 flex flex-col justify-end h-full mx-2 rounded-2xl">
      <div class="h-full flex flex-col items-center p-5">
        <div class="bg-stone-500 rounded-xl">
          <p class="p-2 text-xs text-stone-200">i dag 10:36</p>
        </div>
        <div class="m-3 flex flex-col w-full items-start">
          <p class="text-yellow-300 font-bold">Christoffer</p>
          <div class="bg-stone-500 p-3 rounded-xl">
            <p>Se her! 😁🥳</p>
            <img src="/illustrations/chatimage.png" alt="" />
          </div>
          <div class="flex h-4 mt-2 mx-2">
            <p class="text-xs text-stone-400">10:21</p>
            <img src="/illustrations/icons/tik-mark.svg" alt="" />
          </div>
        </div>

        <div class="m-3 flex flex-col w-full items-end">
          <div class="bg-yellow-500 p-3 rounded-xl w-11/12">
            <p>
              Det ser fedt ud Chris! 🥳 Hvilket program har du brugt til at
              tegne det?
            </p>
          </div>
          <div class="flex h-4 mt-2 mx-2">
            <p class="text-xs text-stone-400">10:21</p>
            <img src="/illustrations/icons/tik-mark.svg" alt="" />
          </div>
        </div>

        <div class="m-3 flex flex-col w-full items-start">
          <p class="text-yellow-300 font-bold">Christoffer</p>
          <div class="bg-stone-500 p-3 rounded-xl w-11/12">
            <p>Tak! Jeg har genereret det med AI. Det vildt! 🤩</p>
          </div>
          <div class="flex h-4 mt-2 mx-2">
            <p class="text-xs text-stone-400">10:21</p>
            <img src="/illustrations/icons/tik-mark.svg" alt="" />
          </div>
        </div>
        <div class="bg-stone-500 w-full h-10 rounded-xl p-2 flex gap-3">
          <img src="/illustrations/icons/microphone.svg" alt="" />
          <p class="text-stone-400 w-full">Skriv her..</p>
          <div class="flex space-x-2 justify-end w-full items-center">
            <img src="/illustrations/icons/gallery.svg" alt="" />
            <img src="/illustrations/icons/smiley.svg" alt="" />
            <img class="pl-3" src="/illustrations/icons/send.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
