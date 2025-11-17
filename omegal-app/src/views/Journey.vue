<template>
  <div class="relative flex h-auto min-h-screen w-full flex-col bg-background-light group/design-root overflow-x-hidden dark:bg-background-dark">
    <div class="flex items-center bg-transparent p-4 pb-2 justify-between absolute top-0 left-0 right-0 z-10">
      <div class="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm dark:bg-neutral-dark-gray/20">
        <span class="material-symbols-outlined text-white">arrow_back_ios_new</span>
      </div>
      <h2 class="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">My Tree's Journey</h2>
      <div class="flex size-10 shrink-0 items-center"></div>
    </div>
    <div class="relative h-64 w-full bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuA6c2DDucjTKZ1x2Jh-WB4Rosc5hT2tL_2trfxMK157r92riLThLeAmGlQyHfF30wymKiQrMTywal1z_aKq71AlogxZwSn_psW2sj3R0HZS-ZupcZghnIPhQes6Lz2d9ccWJKL3u-weRAShvY4rwNOIVH_V7RZb7vj9gVxAoBycA6NmbVEPWoUA7oq3HwsXeW6JTmWvU4qkkds5SGTedKDFh8rTvvtvlCpRSp8MxTbvxQw4eJJWi3YXfpWLewEgGK0PmUjvVEyUhnTo');">
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-black/10"></div>
      <div class="relative flex h-full flex-col justify-end p-6">
        <h1 class="text-3xl font-bold text-white">Follow Your Olive's Story</h1>
        <p class="text-base text-white/90 mt-1">From the groves of Greece to your home.</p>
      </div>
    </div>
    <div class="flex-1 transform -translate-y-4">
      <div class="rounded-t-2xl bg-background-light px-4 pt-4 dark:bg-background-dark">
        <div class="flex bg-white p-1 rounded-xl shadow-sm dark:bg-neutral-dark-gray/50">
          <label class="flex cursor-pointer h-10 grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-brand-blue has-[:checked]:text-white text-neutral-dark-gray/70 text-sm font-medium leading-normal transition-all duration-300 has-[:checked]:shadow-md dark:text-neutral-white/70 dark:has-[:checked]:text-white">
            <span class="truncate">Farm Videos</span>
            <input checked="" class="invisible w-0" name="content-toggle" type="radio" value="Farm Videos"/>
          </label>
          <label class="flex cursor-pointer h-10 grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-brand-blue has-[:checked]:text-white text-neutral-dark-gray/70 text-sm font-medium leading-normal transition-all duration-300 has-[:checked]:shadow-md dark:text-neutral-white/70 dark:has-[:checked]:text-white">
            <span class="truncate">Monitoring Reports</span>
            <input class="invisible w-0" name="content-toggle" type="radio" value="Monitoring Reports"/>
          </label>
        </div>
      </div>
      <div class="flex-1 bg-background-light px-4 pt-4 pb-8 dark:bg-background-dark">
        <div class="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
          <div class="flex flex-col gap-2 rounded-xl bg-white shadow-sm dark:bg-neutral-dark-gray/50 overflow-hidden">
            <div class="relative w-full bg-center bg-no-repeat aspect-square bg-cover" data-alt="Olive trees being pruned in the spring" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWSUeDD9Sj_ObIGMCw_EteEppMZdekar7imGJvyMg8Hc1wjQm2XSVmOVfM_cU5pSWO49F0oCdNX8z6vKIJnTerGspTDti74-cPidnWp4Xfx1ObdAErOb2ss7e1eSeCrM7HYkOe7ixrcHyqYLw0GkPpGWH9x04UKWvXm3Hodlbj8QT8qi7o4IfDo7bXYm4z3YH2VErYTG50VmAniYIAed4kexJo9FX-h2gy1m3A1vf54PNQvGu4hE0I80SkAUMO6bqIoGOtKGc0qwfr");'>
              <div class="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div class="flex items-center justify-center w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm">
                  <span class="material-symbols-outlined text-3xl text-white">play_arrow</span>
                </div>
              </div>
            </div>
            <div class="p-3">
              <p class="text-neutral-dark-gray text-base font-semibold leading-normal dark:text-neutral-white">Spring Pruning</p>
              <p class="text-neutral-dark-gray/60 text-sm font-normal leading-normal dark:text-neutral-white/60">March 2024</p>
            </div>
          </div>
          <div class="flex flex-col gap-2 rounded-xl bg-white shadow-sm dark:bg-neutral-dark-gray/50 overflow-hidden">
            <div class="relative w-full bg-center bg-no-repeat aspect-square bg-cover" data-alt="Close-up of ripe olives on a tree branch during harvest" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuArEd2rPTSFEJfhG1VfwdpgN8kxnJaq3qias7CcsXN5Ey-vuvlLMt5SHlxe4n-1qpOvW4a5p8OwiKfbJ6R3eCWvVos7kx6KLXN9yiCJgNAaviZ_5r2SNTp-Y0F_K3uJlI-s2ypMY7nFpHO_S4B0bzNnzwM-plk9cQNVtkeK30eQQ4NyUg7S6iXlp8pk91oJemqRpfDsL_RStrRdj6fppT3jYJ-M6MvvWq3tV7B5cnsM7pCm_EPOwxylxE6ZllKpvD-4w44A8qv9J5b3");'>
              <div class="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div class="flex items-center justify-center w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm">
                  <span class="material-symbols-outlined text-3xl text-white">play_arrow</span>
                </div>
              </div>
            </div>
            <div class="p-3">
              <p class="text-neutral-dark-gray text-base font-semibold leading-normal dark:text-neutral-white">October Harvest</p>
              <p class="text-neutral-dark-gray/60 text-sm font-normal leading-normal dark:text-neutral-white/60">October 2023</p>
            </div>
          </div>
          <div class="flex flex-col gap-2 rounded-xl bg-white shadow-sm dark:bg-neutral-dark-gray/50 overflow-hidden">
            <div class="relative w-full bg-center bg-no-repeat aspect-square bg-cover" data-alt="Olive oil being pressed in a traditional mill" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBIHQHG4cZyL5w-45yN2s0Yyj1bEEN2tMvFY8_rExbs5NB9VB4cNF_6L3NMJdnSRP7qSIL9XnCE_gSvs0Wx5vYBgOiwmQhkSniSlsWFKPnU4qOZQDhPFOPPqvNGOggjEo3o-0d5chuJbFL6Nwbh0g2CdTScLE752wNc9fIi2qHue0pTo6P7sSiZAEnl8hlY-rEWnXvsZr91Ph5bppJSE7zG6ylw7ha6oA9KRijg-RGu_Sv7KYd-FOIWhh0kegUH5RyJvFO7Xm1dGYTg");'>
              <div class="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div class="flex items-center justify-center w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm">
                  <span class="material-symbols-outlined text-3xl text-white">play_arrow</span>
                </div>
              </div>
            </div>
            <div class="p-3">
              <p class="text-neutral-dark-gray text-base font-semibold leading-normal dark:text-neutral-white">The Pressing Process</p>
              <p class="text-neutral-dark-gray/60 text-sm font-normal leading-normal dark:text-neutral-white/60">November 2023</p>
            </div>
          </div>
          <div class="flex flex-col gap-2 rounded-xl bg-white shadow-sm dark:bg-neutral-dark-gray/50 overflow-hidden">
            <div class="relative w-full bg-center bg-no-repeat aspect-square bg-cover" data-alt="Bottles of freshly made olive oil" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDfZwpfx4DdwTeOVgJk3C0rrIuK2kuZu2IdLPZjse9zUFSRAZ4WiJrm1iEFBMeX7SqbU38GcahAKCDOxsDHjmpDBfw-64zTBy3r0qoxcBYXiTheoSMvBI9UGH9h08tWIh5OA4UGIUHH1b7yCd_5_0g29DGb8xDPolErCsgL1brf25LyulGhf4IgTuph_6xBaVPTN8OBmICnPSdnltvMtozYO5mKAEKNPjfuwTh9kdeUx_qYa1I3EMkucxAVkvVhAuGY3IzA-WzirgEN");'>
              <div class="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div class="flex items-center justify-center w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm">
                  <span class="material-symbols-outlined text-3xl text-white">play_arrow</span>
                </div>
              </div>
            </div>
            <div class="p-3">
              <p class="text-neutral-dark-gray text-base font-semibold leading-normal dark:text-neutral-white">From Grove to Bottle</p>
              <p class="text-neutral-dark-gray/60 text-sm font-normal leading-normal dark:text-neutral-white/60">December 2023</p>
            </div>
          </div>
        </div>
        <div class="hidden flex-col gap-3">
          <div class="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm dark:bg-neutral-dark-gray/50 border border-transparent hover:border-brand-gold transition-colors duration-300">
            <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-orange/10">
              <span class="material-symbols-outlined text-2xl text-brand-orange">trending_up</span>
            </div>
            <div class="flex-1">
              <p class="font-semibold text-neutral-dark-gray dark:text-neutral-white">Growth Report - Q2 2024</p>
              <p class="text-sm text-neutral-dark-gray/60 dark:text-neutral-white/60">Issued: April 5, 2024</p>
            </div>
            <button class="flex h-10 items-center justify-center rounded-full bg-brand-gold px-4 text-sm font-medium text-white shadow-md hover:bg-brand-gold/90 transition-colors">
              <span class="material-symbols-outlined">visibility</span>
            </button>
          </div>
          <div class="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm dark:bg-neutral-dark-gray/50 border border-transparent hover:border-brand-gold transition-colors duration-300">
            <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-orange/10">
              <span class="material-symbols-outlined text-2xl text-brand-orange">health_and_safety</span>
            </div>
            <div class="flex-1">
              <p class="font-semibold text-neutral-dark-gray dark:text-neutral-white">Soil &amp; Health Analysis</p>
              <p class="text-sm text-neutral-dark-gray/60 dark:text-neutral-white/60">Issued: March 12, 2024</p>
            </div>
            <button class="flex h-10 items-center justify-center rounded-full bg-brand-gold px-4 text-sm font-medium text-white shadow-md hover:bg-brand-gold/90 transition-colors">
              <span class="material-symbols-outlined">visibility</span>
            </button>
          </div>
          <div class="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm dark:bg-neutral-dark-gray/50 border border-transparent hover:border-brand-gold transition-colors duration-300">
            <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-orange/10">
              <span class="material-symbols-outlined text-2xl text-brand-orange">summarize</span>
            </div>
            <div class="flex-1">
              <p class="font-semibold text-neutral-dark-gray dark:text-neutral-white">Annual Summary 2023</p>
              <p class="text-sm text-neutral-dark-gray/60 dark:text-neutral-white/60">Issued: January 15, 2024</p>
            </div>
            <button class="flex h-10 items-center justify-center rounded-full bg-brand-gold px-4 text-sm font-medium text-white shadow-md hover:bg-brand-gold/90 transition-colors">
              <span class="material-symbols-outlined">visibility</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
