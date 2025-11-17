<template>
  <div class="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
    <div class="absolute inset-0 z-0">
      <div class="h-full w-full bg-center bg-no-repeat bg-cover" data-alt="A sun-drenched olive grove in Greece with gentle sunlight filtering through the leaves." style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCGwa-lMeadhS-wmJHEIt5ikGWDTSV0IzYdmx95XzNdEorVjkAFsCcuOKIRukp6qJT_DoGNPwjKbpaFmh3Jb6ntTGNfHCtN2YjVSP9Aezsg89_4Y7j58oKfkfuGL7uhP0YxWstRtn6UeOcehC0VSN9D2prCEWsidEakz7WC366QLv8giBPfaRxlml_Pjjo1Kstz8dTE32wxwhIcqoCI4Us1w4iHJmGoS5VnVdqVSSk9xbQWPT7XoNCdj-4b5uP4Twsmyntp5hR22tgG");'>
        <div class="h-full w-full bg-gradient-to-t from-background-light/80 via-background-light/20 to-transparent dark:from-background-dark/80 dark:via-background-dark/20"></div>
      </div>
    </div>
    <div class="relative z-10 flex flex-col justify-end min-h-screen p-4 pb-6">
      <div class="absolute top-0 left-0 right-0 p-6 flex justify-center">
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined text-white text-4xl" style="text-shadow: 0 1px 3px rgba(0,0,0,0.2);">spa</span>
          <span class="text-white text-2xl font-bold tracking-wider" style="text-shadow: 0 1px 3px rgba(0,0,0,0.2);">OMEGAL</span>
        </div>
      </div>
      <div class="flex flex-col gap-6 rounded-xl bg-card-light/90 dark:bg-card-dark/90 backdrop-blur-md p-6 @container shadow-2xl shadow-black/10">
        <div class="flex w-full flex-col items-center justify-center gap-2 text-center">
          <h1 class="text-text-light dark:text-text-dark text-3xl font-extrabold leading-tight tracking-tighter">Embrace the Soul of Greece</h1>
          <p class="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal max-w-md">
            Co-own an organic olive tree, and receive pure, luxurious cosmetics crafted from its precious oil.
          </p>
        </div>
        <div class="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-4">
          <div class="flex flex-1 gap-3 rounded-lg border border-gray-200 dark:border-gray-700/50 bg-background-light dark:bg-card-dark/50 p-4 flex-col items-center text-center">
            <div class="text-primary-blue dark:text-primary-gold">
              <span class="material-symbols-outlined !text-3xl">public</span>
            </div>
            <div class="flex flex-col gap-1">
              <h2 class="text-text-light dark:text-text-dark text-sm font-bold leading-tight">Authentic Greek Origin</h2>
              <p class="text-text-muted-light dark:text-text-muted-dark text-xs font-normal leading-normal">From historic groves</p>
            </div>
          </div>
          <div class="flex flex-1 gap-3 rounded-lg border border-gray-200 dark:border-gray-700/50 bg-background-light dark:bg-card-dark/50 p-4 flex-col items-center text-center">
            <div class="text-primary-blue dark:text-primary-gold">
              <span class="material-symbols-outlined !text-3xl">eco</span>
            </div>
            <div class="flex flex-col gap-1">
              <h2 class="text-text-light dark:text-text-dark text-sm font-bold leading-tight">100% Organic</h2>
              <p class="text-text-muted-light dark:text-text-muted-dark text-xs font-normal leading-normal">Pure and sustainable</p>
            </div>
          </div>
          <div class="flex flex-1 gap-3 rounded-lg border border-gray-200 dark:border-gray-700/50 bg-background-light dark:bg-card-dark/50 p-4 flex-col items-center text-center">
            <div class="text-primary-blue dark:text-primary-gold">
              <span class="material-symbols-outlined !text-3xl">water_drop</span>
            </div>
            <div class="flex flex-col gap-1">
              <h2 class="text-text-light dark:text-text-dark text-sm font-bold leading-tight">From Tree to Skin</h2>
              <p class="text-text-muted-light dark:text-text-muted-dark text-xs font-normal leading-normal">Premium cosmetics</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-3 items-stretch pt-2">
          <button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary-blue text-white text-base font-bold leading-normal tracking-[0.015em] w-full shadow-lg shadow-primary-blue/30 transition-transform hover:scale-105 active:scale-100 dark:bg-primary-gold dark:text-background-dark dark:shadow-primary-gold/30">
            <span class="truncate">Discover Your Tree</span>
          </button>
          <button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-transparent text-primary-blue dark:text-primary-gold text-base font-bold leading-normal tracking-[0.015em] w-full">
            <span class="truncate">I'm already a member</span>
          </button>
        </div>
      </div>
    </div>
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
