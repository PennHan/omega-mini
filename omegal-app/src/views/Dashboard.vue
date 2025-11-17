<script setup>
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
    <main class="flex flex-grow flex-col justify-between">
      <div class="flex-grow">
        <div class="relative h-[45vh] w-full">
          <img alt="Olive tree in a Greek landscape" class="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA46x4HcUirO9sFttcctm_6i_z96taUc_0Ec2elmTmhKUhVoGN51qRtl_E5dK2AI7QIXWQP25feTnn_7GuUIkbp0WbJoUOUl0zGvrndF5vPmB4H11WgByWfxgbFdejsDEOj6yWMhE3AK05MHyr8p0DGGKLWbtVMznwuAeOP2RX7Ngtp2iDWZOV98X0nUqkSUIj0EDe-nFKezHvNFOARkYX0BtOMNfSxVugTfPxijXTmh-e5uzFi23vLAHCST2UytRK2f88BC9r55jcb"/>
          <div class="absolute inset-0 bg-black/20"></div>
          <div class="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
            <h1 class="text-4xl font-extrabold tracking-tight">{{ t('common.brand') }}</h1>
            <p class="mt-1 text-sm font-light">{{ t('dashboard.hero.subtitle') }}</p>
          </div>
        </div>
        <div class="bg-background-light -mt-8 rounded-t-3xl p-5 pb-24">
          <div class="grid grid-cols-2 gap-4">
            <router-link to="/my-tree" class="flex flex-col gap-3 rounded-2xl bg-white p-5 shadow-soft">
              <div class="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                <Icon icon="material-symbols:spa" class="!text-3xl" />
              </div>
              <div class="flex flex-col gap-1 mt-auto">
                <h2 class="text-brand-text-light text-base font-bold leading-tight">{{ t('dashboard.cards.myTree.title') }}</h2>
                <p class="text-brand-text-subtle text-sm font-normal leading-normal">{{ t('dashboard.cards.myTree.description') }}</p>
              </div>
            </router-link>
            <router-link to="/journey" class="flex flex-col gap-3 rounded-2xl bg-white p-5 shadow-soft">
              <div class="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                <Icon icon="material-symbols:play-circle" class="!text-3xl" />
              </div>
              <div class="flex flex-col gap-1 mt-auto">
                <h2 class="text-brand-text-light text-base font-bold leading-tight">{{ t('dashboard.cards.journey.title') }}</h2>
                <p class="text-brand-text-subtle text-sm font-normal leading-normal">{{ t('dashboard.cards.journey.description') }}</p>
              </div>
            </router-link>
            <router-link to="/gift-box" class="flex flex-col gap-3 rounded-2xl bg-white p-5 shadow-soft">
              <div class="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                <Icon icon="material-symbols:redeem" class="!text-3xl" />
              </div>
              <div class="flex flex-col gap-1 mt-auto">
                <h2 class="text-brand-text-light text-base font-bold leading-tight">{{ t('dashboard.cards.giftBox.title') }}</h2>
                <p class="text-brand-text-subtle text-sm font-normal leading-normal">{{ t('dashboard.cards.giftBox.description') }}</p>
              </div>
            </router-link>
            <router-link to="/subscription" class="flex flex-col gap-3 rounded-2xl bg-white p-5 shadow-soft">
              <div class="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                <Icon icon="material-symbols:credit-card" class="!text-3xl" />
              </div>
              <div class="flex flex-col gap-1 mt-auto">
                <h2 class="text-brand-text-light text-base font-bold leading-tight">{{ t('dashboard.cards.subscription.title') }}</h2>
                <p class="text-brand-text-subtle text-sm font-normal leading-normal">{{ t('dashboard.cards.subscription.description') }}</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="fixed bottom-0 left-0 w-full px-4 pb-4 pt-2 bg-transparent">
        <div class="flex items-center justify-around rounded-full bg-white/80 px-4 py-2 shadow-soft backdrop-blur-lg ring-1 ring-black/5">
          <router-link to="/dashboard" class="flex flex-1 flex-col items-center justify-end gap-1 text-brand-gold">
            <div class="flex h-8 items-center justify-center">
              <Icon icon="material-symbols:home" class="!text-2xl !font-bold" />
            </div>
            <p class="text-xs font-semibold leading-normal tracking-[0.015em]">{{ t('common.navigation.home') }}</p>
          </router-link>
          <a class="flex flex-1 flex-col items-center justify-end gap-1 text-brand-text-subtle/80" href="#">
            <div class="flex h-8 items-center justify-center">
              <Icon icon="material-symbols:storefront" class="!text-2xl" />
            </div>
            <p class="text-xs font-medium leading-normal tracking-[0.015em]">{{ t('common.navigation.shop') }}</p>
          </a>
          <a class="flex flex-1 flex-col items-center justify-end gap-1 text-brand-text-subtle/80" href="#">
            <div class="flex h-8 items-center justify-center">
              <Icon icon="material-symbols:person" class="!text-2xl" />
            </div>
            <p class="text-xs font-medium leading-normal tracking-[0.015em]">{{ t('common.navigation.profile') }}</p>
          </a>
        </div>
      </div>
    </main>
  </div>
</template>
