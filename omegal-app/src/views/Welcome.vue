<script setup>
import { Icon } from '@iconify/vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <div class="relative flex h-auto min-h-screen w-full flex-col bg-background-light group/design-root overflow-x-hidden">
    <div class="absolute inset-0 z-0">
      <div class="h-full w-full bg-center bg-no-repeat bg-cover" data-alt="A sun-drenched olive grove in Greece with gentle sunlight filtering through the leaves." style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCGwa-lMeadhS-wmJHEIt5ikGWDTSV0IzYdmx95XzNdEorVjkAFsCcuOKIRukp6qJT_DoGNPwjKbpaFmh3Jb6ntTGNfHCtN2YjVSP9Aezsg89_4Y7j58oKfkfuGL7uhP0YxWstRtn6UeOcehC0VSN9D2prCEWsidEakz7WC366QLv8giBPfaRxlml_Pjjo1Kstz8dTE32wxwhIcqoCI4Us1w4iHJmGoS5VnVdqVSSk9xbQWPT7XoNCdj-4b5uP4Twsmyntp5hR22tgG");'>
        <div class="h-full w-full bg-gradient-to-t from-background-light/80 via-background-light/20 to-transparent"></div>
      </div>
    </div>
    <div class="relative z-10 flex flex-col justify-end min-h-screen p-4 pb-6">
      <div class="absolute top-12 left-0 right-0 p-6 flex justify-center">
        <div class="flex items-center gap-2">
          <Icon icon="mdi:spa" class="text-white text-4xl" style="text-shadow: 0 1px 3px rgba(0,0,0,0.2);" />
          <span class="text-white text-2xl font-bold tracking-wider" style="text-shadow: 0 1px 3px rgba(0,0,0,0.2);">{{ t('common.brand') }}</span>
        </div>
      </div>
      <div class="flex flex-col gap-6 rounded-xl bg-card-light/90 backdrop-blur-md p-6 @container shadow-2xl shadow-black/10 bg-white">
        <div class="flex w-full flex-col items-center justify-center gap-2 text-center">
          <h1 class="text-text-light text-3xl font-extrabold leading-tight tracking-tighter">{{ t('welcome.hero.title') }}</h1>
          <p class="text-text-muted-light text-base font-normal leading-normal max-w-md">
            {{ t('welcome.hero.description') }}
          </p>
        </div>
        <div class="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-4">
          <div class="flex flex-1 gap-3 rounded-lg border border-gray-200 bg-background-light p-4 flex-col items-center text-center">
            <div class="text-primary-blue">
              <Icon icon="material-symbols:public" class="!text-3xl" />
            </div>
            <div class="flex flex-col gap-1">
              <h2 class="text-text-light text-sm font-bold leading-tight">{{ t('welcome.features.origin.title') }}</h2>
              <p class="text-text-muted-light text-xs font-normal leading-normal">{{ t('welcome.features.origin.description') }}</p>
            </div>
          </div>
          <div class="flex flex-1 gap-3 rounded-lg border border-gray-200 bg-background-light p-4 flex-col items-center text-center">
            <div class="text-primary-blue">
              <Icon icon="material-symbols:eco" class="!text-3xl" />
            </div>
            <div class="flex flex-col gap-1">
              <h2 class="text-text-light text-sm font-bold leading-tight">{{ t('welcome.features.organic.title') }}</h2>
              <p class="text-text-muted-light text-xs font-normal leading-normal">{{ t('welcome.features.organic.description') }}</p>
            </div>
          </div>
          <div class="flex flex-1 gap-3 rounded-lg border border-gray-200 bg-background-light p-4 flex-col items-center text-center">
            <div class="text-primary-blue">
              <Icon icon="material-symbols:water-drop" class="!text-3xl" />
            </div>
            <div class="flex flex-col gap-1">
              <h2 class="text-text-light text-sm font-bold leading-tight">{{ t('welcome.features.skincare.title') }}</h2>
              <p class="text-text-muted-light text-xs font-normal leading-normal">{{ t('welcome.features.skincare.description') }}</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-3 items-stretch pt-2">
          <RouterLink
            to="/dashboard"
            class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-gradient-to-r from-[#F9E18B] via-[#F2C964] to-[#E5B347] text-white text-base font-bold leading-normal tracking-[0.015em] w-full shadow-lg shadow-primary-blue/30 transition-transform hover:scale-105 active:scale-100"
          >
            <span class="truncate">{{ t('welcome.cta.primary') }}</span>
          </RouterLink>
          <button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-transparent text-primary-blue text-base font-bold leading-normal tracking-[0.015em] w-full">
            <span class="truncate">{{ t('welcome.cta.secondary') }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
