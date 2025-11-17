<script setup>
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

const languages = [
  { code: 'zh', label: '中文' },
  { code: 'en', label: 'EN' },
]

const setLocale = (code) => {
  locale.value = code
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('locale', code)
  }
}
</script>

<template>
  <div class="fixed top-4 right-4 z-50 flex items-center rounded-full bg-white/80 px-1 py-1 text-sm shadow-md backdrop-blur gap-1">
    <span class="px-2 text-xs font-semibold text-gray-500 uppercase">
      {{ t('common.brand') }}
    </span>
    <div class="flex rounded-full bg-gray-100 p-1 gap-1">
      <button
        v-for="lang in languages"
        :key="lang.code"
        class="min-w-[48px] rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200"
        :class="locale === lang.code ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'"
        @click="setLocale(lang.code)"
      >
        {{ lang.label }}
      </button>
    </div>
  </div>
</template>

