<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import LanguageSwitcher from './components/LanguageSwitcher.vue'

const route = useRoute()
const shouldShowSwitcher = computed(() => ['/', '/dashboard'].includes(route.path))
</script>

<template>
  <div class="relative">
    <LanguageSwitcher v-if="shouldShowSwitcher" />
    <router-view />
  </div>
</template>
