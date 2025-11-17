<template>
  <div class="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden pb-24">
    <div class="sticky top-0 z-10 flex items-center bg-background-light dark:bg-background-dark p-4 pb-3 justify-between shadow-sm">
      <div class="text-text-light-primary dark:text-text-dark-primary flex size-10 shrink-0 items-center justify-center">
        <span class="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
      </div>
      <h1 class="text-text-light-primary dark:text-text-dark-primary text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">我的橄榄树认领</h1>
      <div class="size-10"></div>
    </div>
    <div class="p-4 @container">
      <div class="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start shadow-md bg-white dark:bg-gray-800 overflow-hidden border border-gold/20">
        <div class="w-full @xl:w-1/3 bg-center bg-no-repeat aspect-video @xl:aspect-square bg-cover rounded-t-xl @xl:rounded-l-xl @xl:rounded-tr-none" data-alt="A sunlit olive grove in Greece." style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAaKnUVGhJpJMdk4W6n_fvZoUQ9eHTy17IHQEczxLb5GKZo1LTdClJalIxW6Vb5dKxyn-VCg1fKuHOBZjmnB22Jb1Zv6Y_2s-4rz0gyoUEQLFp78EU5cgfim4PC9iWm10WjsZ61BSSYDhthMrjTraARKF76tPv_Tb8GJYqW4Ggl82COZw5C70JS3nOK7eVCqV6-zpuco7pnn1iLCS3LLGqER15F0-AfHWsqJkB-GlARR4sTPKBV2S8cGmhtALtvuAQY9VWoIt8JXApC");'></div>
        <div class="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-3 p-4">
          <div class="flex items-center gap-2">
            <span class="inline-flex items-center rounded-full bg-gold/10 px-2.5 py-0.5 text-xs font-semibold text-gold">有效</span>
            <p class="text-text-light-primary dark:text-text-dark-primary text-lg font-bold leading-tight tracking-[-0.015em]">一年期橄榄树共同所有权</p>
          </div>
          <p class="text-text-light-secondary dark:text-text-dark-secondary text-base font-normal leading-normal">有效期至: 2024-12-31</p>
          <div class="flex items-center gap-2 pt-2">
            <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-gold text-white text-sm font-medium leading-normal shadow-sm hover:bg-gold/90 flex-1">
              <span class="truncate">立即续订</span>
            </button>
            <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-gray-200 dark:bg-gray-700 text-text-light-primary dark:text-text-dark-primary text-sm font-medium leading-normal hover:bg-gray-300 dark:hover:bg-gray-600 flex-1">
              <span class="truncate">管理认领</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <h2 class="text-text-light-primary dark:text-text-dark-primary text-xl font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">您的认领包含</h2>
    <div class="flex flex-col px-4 gap-2">
      <div class="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 min-h-14 rounded-lg shadow-sm">
        <div class="text-gold flex items-center justify-center rounded-full bg-gold/10 shrink-0 size-10">
          <span class="material-symbols-outlined">workspace_premium</span>
        </div>
        <p class="text-text-light-primary dark:text-text-dark-primary text-base font-medium leading-normal flex-1 truncate">共同所有权证书</p>
      </div>
      <div class="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 min-h-14 rounded-lg shadow-sm">
        <div class="text-accent flex items-center justify-center rounded-full bg-accent/10 shrink-0 size-10">
          <span class="material-symbols-outlined">potted_plant</span>
        </div>
        <p class="text-text-light-primary dark:text-text-dark-primary text-base font-medium leading-normal flex-1 truncate">季度农场更新</p>
      </div>
      <div class="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 min-h-14 rounded-lg shadow-sm">
        <div class="text-accent flex items-center justify-center rounded-full bg-accent/10 shrink-0 size-10">
          <span class="material-symbols-outlined">redeem</span>
        </div>
        <p class="text-text-light-primary dark:text-text-dark-primary text-base font-medium leading-normal flex-1 truncate">年度礼品盒</p>
      </div>
    </div>
    <h2 class="text-text-light-primary dark:text-text-dark-primary text-xl font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-6">支付历史</h2>
    <div class="flex flex-col px-4 gap-0.5">
      <div class="flex items-center justify-between gap-4 bg-transparent dark:bg-transparent px-0 py-4 min-h-14 border-b border-gray-200 dark:border-gray-700">
        <div class="flex flex-col">
          <p class="text-text-light-primary dark:text-text-dark-primary text-base font-medium leading-normal">一年期认领</p>
          <p class="text-text-light-secondary dark:text-text-dark-secondary text-sm">2023年12月31日</p>
        </div>
        <div class="flex flex-col items-end">
          <p class="text-gold text-base font-semibold leading-normal">¥888.00</p>
          <p class="text-green-600 dark:text-green-400 text-sm font-medium">已支付</p>
        </div>
      </div>
      <div class="flex items-center justify-between gap-4 bg-transparent dark:bg-transparent px-0 py-4 min-h-14 border-b border-gray-200 dark:border-gray-700">
        <div class="flex flex-col">
          <p class="text-text-light-primary dark:text-text-dark-primary text-base font-medium leading-normal">一年期认领</p>
          <p class="text-text-light-secondary dark:text-text-dark-secondary text-sm">2022年12月31日</p>
        </div>
        <div class="flex flex-col items-end">
          <p class="text-gold text-base font-semibold leading-normal">¥888.00</p>
          <p class="text-green-600 dark:text-green-400 text-sm font-medium">已支付</p>
        </div>
      </div>
    </div>
    <div class="fixed bottom-0 left-0 right-0 p-4 bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-700">
      <button class="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal shadow-lg hover:bg-primary/90">
        <span class="truncate">立即认领 (¥888 / 年)</span>
      </button>
    </div>
  </div>
</template>

<style>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
.text-gradient-gold {
  background: linear-gradient(to right, #D4AF37, #C09B2D);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
</style>
