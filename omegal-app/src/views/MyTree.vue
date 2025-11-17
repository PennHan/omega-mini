<script setup>
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { t } = useI18n()
const router = useRouter()
const activeTab = ref('details')

const growthLogs = computed(() => [
  {
    id: 'irrigation',
    icon: 'material-symbols:water-drop',
    stage: t('myTree.logs.irrigation.stage'),
    date: t('myTree.logs.irrigation.date'),
    description: t('myTree.logs.irrigation.description'),
    status: t('myTree.logs.irrigation.status'),
    metricLabel: t('myTree.logs.irrigation.metricLabel'),
    metricValue: t('myTree.logs.irrigation.metricValue'),
  },
  {
    id: 'bloom',
    icon: 'material-symbols:local-florist',
    stage: t('myTree.logs.bloom.stage'),
    date: t('myTree.logs.bloom.date'),
    description: t('myTree.logs.bloom.description'),
    status: t('myTree.logs.bloom.status'),
    metricLabel: t('myTree.logs.bloom.metricLabel'),
    metricValue: t('myTree.logs.bloom.metricValue'),
  },
  {
    id: 'fruitset',
    icon: 'material-symbols:sprint',
    stage: t('myTree.logs.fruitset.stage'),
    date: t('myTree.logs.fruitset.date'),
    description: t('myTree.logs.fruitset.description'),
    status: t('myTree.logs.fruitset.status'),
    metricLabel: t('myTree.logs.fruitset.metricLabel'),
    metricValue: t('myTree.logs.fruitset.metricValue'),
  },
  {
    id: 'harvestprep',
    icon: 'material-symbols:eco',
    stage: t('myTree.logs.harvestprep.stage'),
    date: t('myTree.logs.harvestprep.date'),
    description: t('myTree.logs.harvestprep.description'),
    status: t('myTree.logs.harvestprep.status'),
    metricLabel: t('myTree.logs.harvestprep.metricLabel'),
    metricValue: t('myTree.logs.harvestprep.metricValue'),
  },
])
</script>

<template>
  <div class="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
    <div class="flex items-center bg-background-light p-4 pb-2 justify-between sticky top-0 z-10">
      <button
        type="button"
        class="flex size-10 shrink-0 items-center justify-center"
        aria-label="Back"
        @click="router.back()"
      >
        <Icon icon="material-symbols:arrow-back-ios-new" class="text-2xl text-subtext-light" />
      </button>
      <h2 class="text-lg font-bold leading-tight tracking-tight flex-1 text-center">{{ t('myTree.header') }}</h2>
      <div class="flex size-10 shrink-0 items-center justify-center">
        <Icon icon="material-symbols:ios-share" class="text-2xl text-subtext-light" />
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
      <div class="flex h-12 flex-1 items-center justify-center rounded-full bg-white p-1 shadow-soft shadow-lg ring-1 ring-black/5">
        <label
          class="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-3 text-subtext-light text-sm font-semibold leading-normal transition-all duration-300"
          :class="activeTab === 'details' ? 'bg-gradient-to-r from-[#FFE9B0] via-[#FAD989] to-[#F1CB72] text-[#7A5B1D] shadow-inner' : ''"
        >
          <span class="truncate">{{ t('myTree.tabs.details') }}</span>
          <input
            class="sr-only"
            type="radio"
            name="tree-info-tabs"
            value="details"
            :checked="activeTab === 'details'"
            @change="activeTab = 'details'"
          />
        </label>
        <label
          class="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-3 text-subtext-light text-sm font-semibold leading-normal transition-all duration-300"
          :class="activeTab === 'growth' ? 'bg-gradient-to-r from-[#FFE9B0] via-[#FAD989] to-[#F1CB72] text-[#7A5B1D] shadow-inner' : ''"
        >
          <span class="truncate">{{ t('myTree.tabs.growth') }}</span>
          <input
            class="sr-only"
            type="radio"
            name="tree-info-tabs"
            value="growth"
            :checked="activeTab === 'growth'"
            @change="activeTab = 'growth'"
          />
        </label>
      </div>
    </div>
    <div v-if="activeTab === 'details'" class="grid grid-cols-2 gap-4 p-4">
      <div class="flex flex-1 flex-col gap-3 rounded-xl bg-card-light p-4 shadow-soft shadow-lg">
        <div class="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF8C42]/15 text-[#FF8C42]">
          <Icon icon="material-symbols:public" class="!text-3xl" />
        </div>
        <div class="flex flex-col gap-1">
          <h2 class="text-sm font-medium leading-tight text-subtext-light">{{ t('myTree.stats.region.label') }}</h2>
          <p class="text-base font-semibold leading-normal text-text-light">{{ t('myTree.stats.region.value') }}</p>
        </div>
      </div>
      <div class="flex flex-1 flex-col gap-3 rounded-xl bg-card-light p-4 shadow-soft shadow-lg">
        <div class="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF8C42]/15 text-[#FF8C42]">
          <Icon icon="material-symbols:thermostat" class="!text-3xl" />
        </div>
        <div class="flex flex-col gap-1">
          <h2 class="text-sm font-medium leading-tight text-subtext-light">{{ t('myTree.stats.climate.label') }}</h2>
          <p class="text-base font-semibold leading-normal text-text-light">{{ t('myTree.stats.climate.value') }}</p>
        </div>
      </div>
      <div class="flex flex-1 flex-col gap-3 rounded-xl bg-card-light p-4 shadow-soft shadow-lg">
        <div class="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF8C42]/15 text-[#FF8C42]">
          <Icon icon="material-symbols:eco" class="!text-3xl" />
        </div>
        <div class="flex flex-col gap-1">
          <h2 class="text-sm font-medium leading-tight text-subtext-light">{{ t('myTree.stats.growth.label') }}</h2>
          <p class="text-base font-semibold leading-normal text-text-light">{{ t('myTree.stats.growth.value') }}</p>
        </div>
      </div>
      <div class="flex flex-1 flex-col gap-3 rounded-xl bg-card-light p-4 shadow-soft shadow-lg">
        <div class="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF8C42]/15 text-[#FF8C42]">
          <Icon icon="material-symbols:science" class="!text-3xl" />
        </div>
        <div class="flex flex-col gap-1">
          <h2 class="text-sm font-medium leading-tight text-subtext-light">{{ t('myTree.stats.yield.label') }}</h2>
          <p class="text-base font-semibold leading-normal text-text-light">{{ t('myTree.stats.yield.value') }}</p>
        </div>
      </div>
    </div>
    <div v-else class="flex flex-col gap-4 px-4 pb-6">
      <div
        v-for="log in growthLogs"
        :key="log.id"
        class="flex gap-4 rounded-2xl bg-white/95 p-4 shadow-soft shadow-lg ring-1 ring-black/5 backdrop-blur"
      >
        <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FDECC9] text-[#C17F2A]">
          <Icon :icon="log.icon" class="!text-2xl" />
        </div>
        <div class="flex flex-1 flex-col gap-2">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <p class="text-base font-semibold leading-tight text-text-light">{{ log.stage }}</p>
            <span class="text-xs font-medium text-subtext-light">{{ log.date }}</span>
          </div>
          <p class="text-sm text-subtext-light">{{ log.description }}</p>
          <div class="flex flex-wrap items-center gap-2 pt-1">
            <span class="rounded-full bg-[#F8E5BB] px-3 py-1 text-xs font-semibold text-[#8A5B10]">{{ log.status }}</span>
            <span class="text-xs text-subtext-light">{{ log.metricLabel }}</span>
            <span class="text-sm font-semibold text-text-light">{{ log.metricValue }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-auto mb-6 px-4 pt-4">
      <button class="flex h-14 w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#F9E18B] via-[#F2C964] to-[#E5B347] px-6 text-base font-bold text-white shadow-lg shadow-primary-blue/30 transition-transform duration-200 ease-in-out hover:scale-[1.02]">
        {{ t('myTree.action') }}
      </button>
    </div>
  </div>
</template>

