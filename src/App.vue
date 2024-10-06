<template>
  <div
    class="relative mx-auto max-w-2xl min-h-screen min-w-xs flex flex-col p-4 text-[#666] font-medium"
  >
    <h1 class="text-center text-4xl">Vue与动画</h1>
    <RouterLink
      to="/"
      class="fixed left-4 top-4 z40 block text-50px leading-1em"
    >
      🔙
    </RouterLink>
    <div class="flex flex-auto">
      <RouterView v-slot="{ Component }">
        <Transition
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
          mode="out-in"
        >
          <KeepAlive>
            <Component :is="Component" />
          </KeepAlive>
        </Transition>
      </RouterView>
    </div>
  </div>
</template>
