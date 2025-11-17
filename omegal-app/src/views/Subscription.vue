<script setup>
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { t } = useI18n()
const router = useRouter()
</script>

<template>
  <div class="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
    <div class="sticky top-0 z-10 flex items-center bg-background-light/95 dark:bg-background-dark/95 backdrop-blur p-4 pb-3 justify-between shadow-sm">
      <button
        type="button"
        class="text-text-light-primary dark:text-text-dark-primary flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 transition-colors"
        aria-label="Back"
        @click="router.back()"
      >
        <Icon icon="material-symbols:arrow-back-ios-new" class="text-2xl" />
      </button>
      <h1 class="text-text-light-primary dark:text-text-dark-primary text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">{{ t('subscription.header') }}</h1>
      <div class="size-10"></div>
    </div>
    <main class="flex-1 px-4 pb-28">
      <section class="mt-4 rounded-2xl border border-white/70 dark:border-white/10 bg-white dark:bg-gray-900 shadow-xl overflow-hidden @container">
        <div
          class="relative aspect-[4/3] w-full @xl:aspect-[3/2] @xl:h-full @xl:w-2/5 bg-center bg-cover"
          data-alt="A sunlit olive grove in Greece."
          style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAaKnUVGhJpJMdk4W6n_fvZoUQ9eHTy17IHQEczxLb5GKZo1LTdClJalIxW6Vb5dKxyn-VCg1fKuHOBZjmnB22Jb1Zv6Y_2s-4rz0gyoUEQLFp78EU5cgfim4PC9iWm10WjsZ61BSSYDhthMrjTraARKF76tPv_Tb8GJYqW4Ggl82COZw5C70JS3nOK7eVCqV6-zpuco7pnn1iLCS3LLGqER15F0-AfHWsqJkB-GlARR4sTPKBV2S8cGmhtALtvuAQY9VWoIt8JXApC");'
        >
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
        <div class="flex flex-col gap-4 p-5 @xl:absolute @xl:right-0 @xl:top-0 @xl:h-full @xl:w-3/5 @xl:bg-gradient-to-br @xl:from-white/95 @xl:to-white/60 dark:@xl:from-gray-900/95 dark:@xl:to-gray-800/60">
          <div class="flex items-center gap-2">
            <span class="inline-flex items-center rounded-full bg-gold/10 px-2.5 py-0.5 text-xs font-semibold text-gold">{{ t('subscription.badge') }}</span>
            <p class="text-text-light-primary dark:text-text-dark-primary text-lg font-bold leading-tight tracking-[-0.015em]">{{ t('subscription.planName') }}</p>
          </div>
          <p class="text-text-light-secondary dark:text-text-dark-secondary text-base font-normal leading-normal">{{ t('subscription.expiry') }}</p>
          <div class="flex flex-wrap gap-3 pt-2">
            <button class="flex min-w-[140px] flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-xl h-11 px-6 bg-gradient-to-r from-[#F7E4A5] via-[#F0CB6C] to-[#E3B752] text-[#5B3F09] text-sm font-semibold leading-normal shadow-md hover:brightness-105 transition-all">
              <span class="truncate">{{ t('subscription.actions.renew') }}</span>
            </button>
            <button class="flex min-w-[140px] flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-xl h-11 px-6 border border-gray-200 dark:border-gray-600 bg-white/70 dark:bg-gray-800/70 text-text-light-primary dark:text-text-dark-primary text-sm font-semibold leading-normal hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
              <span class="truncate">{{ t('subscription.actions.manage') }}</span>
            </button>
          </div>
        </div>
      </section>

      <section class="space-y-3 pt-6">
        <h2 class="text-text-light-primary dark:text-text-dark-primary text-xl font-bold leading-tight tracking-[-0.015em]">{{ t('subscription.includesTitle') }}</h2>
        <div class="flex flex-col gap-3">
          <article class="flex items-center gap-4 rounded-2xl border border-white/70 dark:border-white/10 bg-white dark:bg-gray-900/70 p-4 shadow-sm">
            <div class="text-gold flex items-center justify-center rounded-full bg-gold/10 shrink-0 size-12">
              <Icon icon="material-symbols:workspace-premium" class="text-2xl" />
            </div>
            <p class="text-text-light-primary dark:text-text-dark-primary text-base font-medium leading-normal flex-1">{{ t('subscription.includes.certificate') }}</p>
          </article>
          <article class="flex items-center gap-4 rounded-2xl border border-white/70 dark:border-white/10 bg-white dark:bg-gray-900/70 p-4 shadow-sm">
            <div class="text-accent flex items-center justify-center rounded-full bg-accent/10 shrink-0 size-12">
              <Icon icon="material-symbols:potted-plant" class="text-2xl" />
            </div>
            <p class="text-text-light-primary dark:text-text-dark-primary text-base font-medium leading-normal flex-1">{{ t('subscription.includes.updates') }}</p>
          </article>
          <article class="flex items-center gap-4 rounded-2xl border border-white/70 dark:border-white/10 bg-white dark:bg-gray-900/70 p-4 shadow-sm">
            <div class="text-accent flex items-center justify-center rounded-full bg-accent/10 shrink-0 size-12">
              <Icon icon="material-symbols:redeem" class="text-2xl" />
            </div>
            <p class="text-text-light-primary dark:text-text-dark-primary text-base font-medium leading-normal flex-1">{{ t('subscription.includes.giftBox') }}</p>
          </article>
        </div>
      </section>

      <section class="space-y-3 pt-6">
        <h2 class="text-text-light-primary dark:text-text-dark-primary text-xl font-bold leading-tight tracking-[-0.015em]">{{ t('subscription.historyTitle') }}</h2>
        <div class="rounded-2xl border border-white/70 dark:border-white/10 bg-white dark:bg-gray-900 divide-y divide-gray-100 dark:divide-gray-800">
          <article class="flex items-center justify-between gap-4 px-4 py-4">
            <div class="flex flex-col">
              <p class="text-text-light-primary dark:text-text-dark-primary text-base font-semibold leading-tight">{{ t('subscription.history.latest.title') }}</p>
              <p class="text-text-light-secondary dark:text-text-dark-secondary text-sm">{{ t('subscription.history.latest.date') }}</p>
            </div>
            <div class="flex flex-col items-end">
              <p class="text-gold text-base font-semibold leading-tight">{{ t('subscription.history.latest.amount') }}</p>
              <p class="text-green-600 dark:text-green-400 text-sm font-medium">{{ t('subscription.history.latest.status') }}</p>
            </div>
          </article>
          <article class="flex items-center justify-between gap-4 px-4 py-4">
            <div class="flex flex-col">
              <p class="text-text-light-primary dark:text-text-dark-primary text-base font-semibold leading-tight">{{ t('subscription.history.previous.title') }}</p>
              <p class="text-text-light-secondary dark:text-text-dark-secondary text-sm">{{ t('subscription.history.previous.date') }}</p>
            </div>
            <div class="flex flex-col items-end">
              <p class="text-gold text-base font-semibold leading-tight">{{ t('subscription.history.previous.amount') }}</p>
              <p class="text-green-600 dark:text-green-400 text-sm font-medium">{{ t('subscription.history.previous.status') }}</p>
            </div>
          </article>
        </div>
      </section>
    </main>
    <div class="fixed bottom-0 left-0 right-0 z-20 p-4 bg-background-light/95 dark:bg-background-dark/95 border-t border-gray-200 dark:border-gray-700 backdrop-blur">
      <button class="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-2xl h-14 px-6 bg-gradient-to-r from-[#F7E4A5] via-[#F0CB6C] to-[#E3B752] text-[#5B3F09] text-base font-bold leading-normal shadow-xl hover:brightness-110 transition-all">
        <span class="truncate">{{ t('subscription.cta') }}</span>
      </button>
    </div>
  </div>
</template>
