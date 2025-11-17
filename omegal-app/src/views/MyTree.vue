<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
    <div class="flex items-center bg-background-light p-4 pb-2 justify-between sticky top-0 z-10">
      <div class="flex size-10 shrink-0 items-center justify-center">
        <span class="material-symbols-outlined">arrow_back_ios_new</span>
      </div>
      <h2 class="text-lg font-bold leading-tight tracking-tight flex-1 text-center">{{ t('myTree.header') }}</h2>
      <div class="flex size-10 shrink-0 items-center justify-center">
        <span class="material-symbols-outlined">ios_share</span>
      </div>
    </div>
    <div class="px-4">
      <div class="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl min-h-[340px] shadow-lg" data-alt="Stylized illustration of a healthy olive tree in a sunny field." style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQ4G5yHVw2SwBnjH4CERhwTASZsVBF_OipbExC38C0JE-wdv0AIv7UxeBv0r455_qhUnrdrYKwMSrY6Hem38Y-gqfL0YSNhPu0T_cXD4hdnzgN1uRJ9cWS16NKJp1Ty6z4wX51D--xRbbYt8iR7iLhvcl2NWFbYkbd3i7fGJQI6FpPHEeA2hnL_vO-2rnk7LYZJ_MUeoGZ4DQCkqZi6n8Wc0QIHL_dG-ct9U7MFF8AgSoWTk9pEEkFO4XkH2A5volkX7FX9NIcWczv"); background-color: #87CEEB;'></div>
    </div>
    <div class="px-4 pt-6 pb-2 text-center">
      <h1 class="tracking-tight text-3xl font-bold leading-tight text-ome-blue">{{ t('myTree.name') }}</h1>
      <p class="text-subtext-light mt-1">{{ t('myTree.tagline') }}</p>
    </div>
    <div class="flex px-4 py-4">
      <div class="flex h-12 flex-1 items-center justify-center rounded-full bg-gray-100 p-1">
        <label class="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 has-[:checked]:bg-ome-blue has-[:checked]:text-white text-subtext-light text-sm font-semibold leading-normal transition-all duration-300">
          <span class="truncate">{{ t('myTree.tabs.details') }}</span>
          <input checked="" class="invisible w-0" name="tree-info-tabs" type="radio" value="Details"/>
        </label>
        <label class="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 has-[:checked]:bg-ome-blue has-[:checked]:text-white text-subtext-light text-sm font-semibold leading-normal transition-all duration-300">
          <span class="truncate">{{ t('myTree.tabs.growth') }}</span>
          <input class="invisible w-0" name="tree-info-tabs" type="radio" value="Growth Log"/>
        </label>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4 p-4">
      <div class="flex flex-1 flex-col gap-3 rounded-xl bg-card-light p-4 shadow-subtle">
        <div class="text-ome-orange">
          <span class="material-symbols-outlined">public</span>
        </div>
        <div class="flex flex-col gap-1">
          <h2 class="text-sm font-medium leading-tight text-subtext-light">{{ t('myTree.stats.region.label') }}</h2>
          <p class="text-base font-semibold leading-normal text-text-light">{{ t('myTree.stats.region.value') }}</p>
        </div>
      </div>
      <div class="flex flex-1 flex-col gap-3 rounded-xl bg-card-light p-4 shadow-subtle">
        <div class="text-ome-orange">
          <span class="material-symbols-outlined">thermostat</span>
        </div>
        <div class="flex flex-col gap-1">
          <h2 class="text-sm font-medium leading-tight text-subtext-light">{{ t('myTree.stats.climate.label') }}</h2>
          <p class="text-base font-semibold leading-normal text-text-light">{{ t('myTree.stats.climate.value') }}</p>
        </div>
      </div>
      <div class="flex flex-1 flex-col gap-3 rounded-xl bg-card-light p-4 shadow-subtle">
        <div class="text-ome-orange">
          <span class="material-symbols-outlined">eco</span>
        </div>
        <div class="flex flex-col gap-1">
          <h2 class="text-sm font-medium leading-tight text-subtext-light">{{ t('myTree.stats.growth.label') }}</h2>
          <p class="text-base font-semibold leading-normal text-text-light">{{ t('myTree.stats.growth.value') }}</p>
        </div>
      </div>
      <div class="flex flex-1 flex-col gap-3 rounded-xl bg-card-light p-4 shadow-subtle">
        <div class="text-ome-orange">
          <span class="material-symbols-outlined">science</span>
        </div>
        <div class="flex flex-col gap-1">
          <h2 class="text-sm font-medium leading-tight text-subtext-light">{{ t('myTree.stats.yield.label') }}</h2>
          <p class="text-base font-semibold leading-normal text-text-light">{{ t('myTree.stats.yield.value') }}</p>
        </div>
      </div>
    </div>
    <div class="mt-auto mb-6 px-4 pt-4">
      <button class="flex h-14 w-full items-center justify-center rounded-xl bg-ome-gold px-6 text-base font-bold text-ome-blue shadow-lg transition-transform duration-200 ease-in-out hover:scale-[1.02]">
        {{ t('myTree.action') }}
      </button>
    </div>
  </div>
</template>

<style>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
  font-size: 28px;
}
</style>
