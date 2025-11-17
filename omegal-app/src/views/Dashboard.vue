<template>
  <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
    <main class="flex flex-grow flex-col justify-between">
      <div class="flex-grow">
        <div class="relative h-[45vh] w-full">
          <img alt="Olive tree in a Greek landscape" class="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA46x4HcUirO9sFttcctm_6i_z96taUc_0Ec2elmTmhKUhVoGN51qRtl_E5dK2AI7QIXWQP25feTnn_7GuUIkbp0WbJoUOUl0zGvrndF5vPmB4H11WgByWfxgbFdejsDEOj6yWMhE3AK05MHyr8p0DGGKLWbtVMznwuAeOP2RX7Ngtp2iDWZOV98X0nUqkSUIj0EDe-nFKezHvNFOARkYX0BtOMNfSxVugTfPxijXTmh-e5uzFi23vLAHCST2UytRK2f88BC9r55jcb"/>
          <div class="absolute inset-0 bg-black/20"></div>
          <div class="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
            <h1 class="text-4xl font-extrabold tracking-tight">OMEGAL</h1>
            <p class="mt-1 text-sm font-light">The Aegean Sea Beauty Secrets</p>
          </div>
        </div>
        <div class="bg-background-light -mt-8 rounded-t-3xl p-5 pb-24">
          <div class="grid grid-cols-2 gap-4">
            <router-link to="/my-tree" class="flex flex-col gap-3 rounded-2xl bg-white p-5 shadow-soft">
              <div class="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                <span class="material-symbols-outlined !text-3xl">spa</span>
              </div>
              <div class="flex flex-col gap-1 mt-auto">
                <h2 class="text-brand-text-light text-base font-bold leading-tight">My Olive Tree</h2>
                <p class="text-brand-text-subtle text-sm font-normal leading-normal">View your tree's status</p>
              </div>
            </router-link>
            <router-link to="/journey" class="flex flex-col gap-3 rounded-2xl bg-white p-5 shadow-soft">
              <div class="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                <span class="material-symbols-outlined !text-3xl">play_circle</span>
              </div>
              <div class="flex flex-col gap-1 mt-auto">
                <h2 class="text-brand-text-light text-base font-bold leading-tight">Videos & Reports</h2>
                <p class="text-brand-text-subtle text-sm font-normal leading-normal">Watch the latest updates</p>
              </div>
            </router-link>
            <router-link to="/gift-box" class="flex flex-col gap-3 rounded-2xl bg-white p-5 shadow-soft">
              <div class="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                <span class="material-symbols-outlined !text-3xl">redeem</span>
              </div>
              <div class="flex flex-col gap-1 mt-auto">
                <h2 class="text-brand-text-light text-base font-bold leading-tight">My Gift Box</h2>
                <p class="text-brand-text-subtle text-sm font-normal leading-normal">Check your delivery</p>
              </div>
            </router-link>
            <router-link to="/subscription" class="flex flex-col gap-3 rounded-2xl bg-white p-5 shadow-soft">
              <div class="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                <span class="material-symbols-outlined !text-3xl">credit_card</span>
              </div>
              <div class="flex flex-col gap-1 mt-auto">
                <h2 class="text-brand-text-light text-base font-bold leading-tight">Subscription</h2>
                <p class="text-brand-text-subtle text-sm font-normal leading-normal">Manage your plan</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="fixed bottom-0 left-0 w-full px-4 pb-4 pt-2 bg-transparent">
        <div class="flex items-center justify-around rounded-full bg-white/80 px-4 py-2 shadow-soft backdrop-blur-lg ring-1 ring-black/5">
          <router-link to="/dashboard" class="flex flex-1 flex-col items-center justify-end gap-1 text-brand-gold">
            <div class="flex h-8 items-center justify-center">
              <span class="material-symbols-outlined !font-bold">home</span>
            </div>
            <p class="text-xs font-semibold leading-normal tracking-[0.015em]">Home</p>
          </router-link>
          <a class="flex flex-1 flex-col items-center justify-end gap-1 text-brand-text-subtle/80" href="#">
            <div class="flex h-8 items-center justify-center">
              <span class="material-symbols-outlined">storefront</span>
            </div>
            <p class="text-xs font-medium leading-normal tracking-[0.015em]">Shop</p>
          </a>
          <a class="flex flex-1 flex-col items-center justify-end gap-1 text-brand-text-subtle/80" href="#">
            <div class="flex h-8 items-center justify-center">
              <span class="material-symbols-outlined">person</span>
            </div>
            <p class="text-xs font-medium leading-normal tracking-[0.015em]">Profile</p>
          </a>
        </div>
      </div>
    </main>
  </div>
</template>

<style>
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}
</style>
