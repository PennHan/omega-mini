<script setup>
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden pb-24">
    <div class="sticky top-0 z-10 flex items-center bg-background-light p-4 pb-3 justify-between shadow-sm">
      <div class="text-text-light-primary flex size-10 shrink-0 items-center justify-center">
        <Icon icon="material-symbols:arrow-back-ios-new" class="text-2xl" />
      </div>
      <h1 class="text-text-light-primary text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">{{ t('subscription.header') }}</h1>
      <div class="size-10"></div>
    </div>
    <div class="p-4 @container">
      <div class="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start shadow-md bg-white overflow-hidden border border-gold/20">
        <div class="w-full @xl:w-1/3 bg-center bg-no-repeat aspect-video @xl:aspect-square bg-cover rounded-t-xl @xl:rounded-l-xl @xl:rounded-tr-none" data-alt="A sunlit olive grove in Greece." style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAaKnUVGhJpJMdk4W6n_fvZoUQ9eHTy17IHQEczxLb5GKZo1LTdClJalIxW6Vb5dKxyn-VCg1fKuHOBZjmnB22Jb1Zv6Y_2s-4rz0gyoUEQLFp78EU5cgfim4PC9iWm10WjsZ61BSSYDhthMrjTraARKF76tPv_Tb8GJYqW4Ggl82COZw5C70JS3nOK7eVCqV6-zpuco7pnn1iLCS3LLGqER15F0-AfHWsqJkB-GlARR4sTPKBV2S8cGmhtALtvuAQY9VWoIt8JXApC");'></div>
        <div class="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-3 p-4">
          <div class="flex items-center gap-2">
            <span class="inline-flex items-center rounded-full bg-gold/10 px-2.5 py-0.5 text-xs font-semibold text-gold">{{ t('subscription.badge') }}</span>
            <p class="text-text-light-primary text-lg font-bold leading-tight tracking-[-0.015em]">{{ t('subscription.planName') }}</p>
          </div>
          <p class="text-text-light-secondary text-base font-normal leading-normal">{{ t('subscription.expiry') }}</p>
          <div class="flex items-center gap-2 pt-2">
            <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-gold text-white text-sm font-medium leading-normal shadow-sm hover:bg-gold/90 flex-1">
              <span class="truncate">{{ t('subscription.actions.renew') }}</span>
            </button>
            <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-gray-200 text-text-light-primary text-sm font-medium leading-normal hover:bg-gray-300 flex-1">
              <span class="truncate">{{ t('subscription.actions.manage') }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <h2 class="text-text-light-primary text-xl font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">{{ t('subscription.includesTitle') }}</h2>
    <div class="flex flex-col px-4 gap-2">
      <div class="flex items-center gap-4 bg-white p-4 min-h-14 rounded-lg shadow-sm">
        <div class="text-gold flex items-center justify-center rounded-full bg-gold/10 shrink-0 size-10">
          <Icon icon="material-symbols:workspace-premium" class="text-2xl" />
        </div>
        <p class="text-text-light-primary text-base font-medium leading-normal flex-1 truncate">{{ t('subscription.includes.certificate') }}</p>
      </div>
      <div class="flex items-center gap-4 bg-white p-4 min-h-14 rounded-lg shadow-sm">
        <div class="text-accent flex items-center justify-center rounded-full bg-accent/10 shrink-0 size-10">
          <Icon icon="material-symbols:potted-plant" class="text-2xl" />
        </div>
        <p class="text-text-light-primary text-base font-medium leading-normal flex-1 truncate">{{ t('subscription.includes.updates') }}</p>
      </div>
      <div class="flex items-center gap-4 bg-white p-4 min-h-14 rounded-lg shadow-sm">
        <div class="text-accent flex items-center justify-center rounded-full bg-accent/10 shrink-0 size-10">
          <Icon icon="material-symbols:redeem" class="text-2xl" />
        </div>
        <p class="text-text-light-primary text-base font-medium leading-normal flex-1 truncate">{{ t('subscription.includes.giftBox') }}</p>
      </div>
    </div>
    <h2 class="text-text-light-primary text-xl font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-6">{{ t('subscription.historyTitle') }}</h2>
    <div class="flex flex-col px-4 gap-0.5">
      <div class="flex items-center justify-between gap-4 bg-transparent px-0 py-4 min-h-14 border-b border-gray-200">
        <div class="flex flex-col">
          <p class="text-text-light-primary text-base font-medium leading-normal">{{ t('subscription.history.latest.title') }}</p>
          <p class="text-text-light-secondary text-sm">{{ t('subscription.history.latest.date') }}</p>
        </div>
        <div class="flex flex-col items-end">
          <p class="text-gold text-base font-semibold leading-normal">{{ t('subscription.history.latest.amount') }}</p>
          <p class="text-green-600 text-sm font-medium">{{ t('subscription.history.latest.status') }}</p>
        </div>
      </div>
      <div class="flex items-center justify-between gap-4 bg-transparent px-0 py-4 min-h-14 border-b border-gray-200">
        <div class="flex flex-col">
          <p class="text-text-light-primary text-base font-medium leading-normal">{{ t('subscription.history.previous.title') }}</p>
          <p class="text-text-light-secondary text-sm">{{ t('subscription.history.previous.date') }}</p>
        </div>
        <div class="flex flex-col items-end">
          <p class="text-gold text-base font-semibold leading-normal">{{ t('subscription.history.previous.amount') }}</p>
          <p class="text-green-600 text-sm font-medium">{{ t('subscription.history.previous.status') }}</p>
        </div>
      </div>
    </div>
    <div class="fixed bottom-0 left-0 right-0 p-4 bg-background-light border-t border-gray-200">
      <button class="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal shadow-lg hover:bg-primary/90">
        <span class="truncate">{{ t('subscription.cta') }}</span>
      </button>
    </div>
  </div>
</template>


