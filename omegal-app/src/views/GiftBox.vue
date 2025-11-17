<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="relative w-full min-h-screen">
    <div class="sticky top-0 z-20 bg-background-light/80 backdrop-blur-sm">
      <div class="flex items-center p-4 pb-3">
        <button class="flex items-center justify-center w-10 h-10 text-text-primary">
          <span class="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 class="flex-1 text-lg font-bold tracking-tight text-center text-text-primary">{{ t('giftBox.header') }}</h2>
        <button class="flex items-center justify-center w-10 h-10 text-text-primary">
          <span class="material-symbols-outlined">share</span>
        </button>
      </div>
    </div>
    <main class="pb-28">
      <div class="relative w-full h-80">
        <div class="absolute inset-0 flex overflow-x-auto snap-x snap-mandatory [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
          <div class="flex-shrink-0 w-full h-full snap-center">
            <img class="object-cover w-full h-full" data-alt="A luxurious cosmetic gift box with elegant packaging." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdDfQMfsq3oDVc0QAtF9qwlb0gmjFjKcjmb_roqPi1EiXVabk-FcaD7I9rocRWDDN5cVfcz_O2kBv4-Gyv55hGe23jMxFBanhk0YGnyECbQMfwBtxvvZbCW_VEwhp-tp6JrXG20I87lR16E6CXo-zsoIrMfwLWmshTVfVhU4-BxBdwivqzj9j653TPwHTL9JKVMXJ0xFyyAa-hRFYIDzpO5bKd-19VfwbGSBevkl643E3GQeJ6r3H467KibEdmfTRYc_HUfrxv0RpT"/>
          </div>
          <div class="flex-shrink-0 w-full h-full snap-center">
            <img class="object-cover w-full h-full" data-alt="Close-up of organic olive oil cosmetic products." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCynr7kAt80xMNUIfhP_QyxejWGZYsVAoI143vf8xO1FN5k79f2MxYS47hdkjVlWKh81mtJ3ELeTC5YdXim8N9c69YCebavrd496HAU__w3REVOmaiDTSNlFfh4SQ0G-7b1yKfc69q4aHLyEc7g_CL3W50nQmcx3GKK1RDXWWYOW3YsuFDfZZYNC2U4NlFdspvIf6o5X6Z8UmglqgXgvf1T-Ca9RyOewIAVQ_JUkM4Q4H5H1sS4V9rRkJbC02gCPLYKjs9r3FR9ZJsD"/>
          </div>
          <div class="flex-shrink-0 w-full h-full snap-center">
            <img class="object-cover w-full h-full" data-alt="Sun-drenched olive groves in Greece." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEjR-rHRojytMnJzBS1jYx6ly7R5V9xrsrB2GJlEFncI_udeSVJT-FYTSRfwAdeAz-lN0qwKgyGulIWX_IgRik_qe62QFMEgvuFfqFCmqHnjm4ljpiLQFBIFq-dtowHSrwsHEbzfKnnf3iQKy47vptYilRV1AAMhUsx-sdMkCu3sg8tZJ3-fQSQL05KtXB1-DqRLo7WIydjEeKsvQ6-vWCjiSRQ-yXGzVlyKkknUYDYpYIsmn09OlFKgdpYFEnmdcD57wWdHV9EebQ"/>
          </div>
        </div>
      </div>
      <div class="p-6 space-y-4 bg-background-light">
        <h1 class="text-2xl font-extrabold leading-tight tracking-tight text-text-primary">{{ t('giftBox.title') }}</h1>
        <p class="text-base text-text-primary/80">{{ t('giftBox.subtitle') }}</p>
        <h3 class="pt-2 text-3xl font-bold tracking-tight text-accent-gold">{{ t('giftBox.price') }}</h3>
      </div>
      <div class="h-2 bg-gray-100"></div>
      <div class="p-4 space-y-3">
        <details class="p-5 transition-all duration-300 ease-in-out bg-white rounded-2xl shadow-sm" open="">
          <summary class="flex items-center justify-between font-bold cursor-pointer text-text-primary list-none group">
            <span>{{ t('giftBox.insideTitle') }}</span>
            <span class="transition-transform duration-300 material-symbols-outlined group-open:rotate-180">expand_more</span>
          </summary>
          <div class="pt-4 mt-4 border-t border-gray-200">
            <ul class="space-y-4 text-text-primary/90">
              <li class="flex items-center gap-4">
                <span class="flex items-center justify-center w-10 h-10 rounded-full bg-primary-blue/10 text-primary-blue">
                  <span class="material-symbols-outlined">auto_awesome</span>
                </span>
                <span class="font-medium">{{ t('giftBox.inside.serum') }}</span>
              </li>
              <li class="flex items-center gap-4">
                <span class="flex items-center justify-center w-10 h-10 rounded-full bg-primary-blue/10 text-primary-blue">
                  <span class="material-symbols-outlined">spa</span>
                </span>
                <span class="font-medium">{{ t('giftBox.inside.balm') }}</span>
              </li>
              <li class="flex items-center gap-4">
                <span class="flex items-center justify-center w-10 h-10 rounded-full bg-primary-blue/10 text-primary-blue">
                  <span class="material-symbols-outlined">airwave</span>
                </span>
                <span class="font-medium">{{ t('giftBox.inside.cream') }}</span>
              </li>
            </ul>
          </div>
        </details>
        <details class="p-5 transition-all duration-300 ease-in-out bg-white rounded-2xl shadow-sm">
          <summary class="flex items-center justify-between font-bold cursor-pointer text-text-primary list-none group">
            <span>{{ t('giftBox.fromTreeTitle') }}</span>
            <span class="transition-transform duration-300 material-symbols-outlined group-open:rotate-180">expand_more</span>
          </summary>
          <p class="pt-4 mt-4 text-base leading-relaxed border-t border-gray-200 text-text-primary/80">
            {{ t('giftBox.fromTreeDescription') }}
          </p>
        </details>
      </div>
      <div class="h-2 bg-gray-100"></div>
      <div class="p-4">
        <div class="p-5 bg-white rounded-2xl shadow-sm">
          <div class="flex items-center justify-between pb-4 border-b border-gray-200">
            <div>
              <p class="text-sm text-text-secondary">{{ t('giftBox.status.label') }}</p>
              <p class="text-lg font-bold text-accent-orange">{{ t('giftBox.status.value') }}</p>
            </div>
            <div class="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-blue/10">
              <span class="text-sm font-medium text-primary-blue">{{ t('giftBox.status.carrier') }}</span>
            </div>
          </div>
          <div class="pt-6 space-y-2">
            <div class="relative flex items-start gap-5 timeline-line active">
              <div class="z-10 flex flex-col items-center">
                <div class="flex items-center justify-center w-8 h-8 rounded-full bg-accent-orange">
                  <span class="text-white material-symbols-outlined">local_shipping</span>
                </div>
              </div>
              <div class="pt-1">
                <p class="font-bold text-text-primary">{{ t('giftBox.status.timeline.shipped.title') }}</p>
                <p class="text-sm text-text-secondary">{{ t('giftBox.status.timeline.shipped.time') }}</p>
              </div>
            </div>
            <div class="relative flex items-start gap-5 pt-4 timeline-line">
              <div class="z-10 flex flex-col items-center">
                <div class="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-text-secondary">
                  <span class="material-symbols-outlined">inventory_2</span>
                </div>
              </div>
              <div class="pt-1">
                <p class="font-bold text-text-secondary">{{ t('giftBox.status.timeline.processing.title') }}</p>
                <p class="text-sm text-text-secondary">{{ t('giftBox.status.timeline.processing.time') }}</p>
              </div>
            </div>
            <div class="relative flex items-start gap-5 pt-4">
              <div class="z-10 flex flex-col items-center">
                <div class="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-text-secondary">
                  <span class="material-symbols-outlined">receipt_long</span>
                </div>
              </div>
              <div class="pt-1">
                <p class="font-bold text-text-secondary">{{ t('giftBox.status.timeline.confirmed.title') }}</p>
                <p class="text-sm text-text-secondary">{{ t('giftBox.status.timeline.confirmed.time') }}</p>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between p-3 mt-6 rounded-lg bg-primary-blue/10">
            <span class="text-sm font-medium text-primary-blue">{{ t('giftBox.status.tracking') }}</span>
            <button class="px-4 py-1.5 text-sm font-bold text-white rounded-full bg-accent-orange">{{ t('common.buttons.copy') }}</button>
          </div>
        </div>
      </div>
    </main>
    <div class="fixed bottom-0 left-0 right-0 z-20 p-4 bg-background-light/80 backdrop-blur-sm">
      <button class="w-full h-14 text-base font-bold text-white rounded-full shadow-lg bg-primary-blue hover:bg-primary-blue/90 transition-colors">
        <span>{{ t('giftBox.cta') }}</span>
      </button>
    </div>
  </div>
</template>

<style>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24
}
.timeline-line::before {
  content: '';
  position: absolute;
  left: 1rem;
  top: 2rem;
  bottom: -1rem;
  width: 2px;
  background-color: #E2E8F0;z-index: 0;
}
.timeline-line.active::before {
  background: linear-gradient(to bottom, #F5A623 0%, #E2E8F0 70%);
}
</style>
