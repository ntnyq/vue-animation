<script lang="ts" setup>
import { name } from '../package.json'
</script>

<template>
  <div class="relative">
    <div class="flex items-center justify-between border-b border-base p-4">
      <RouterLink
        to="/"
        class="block"
      >
        <h1 class="text-xl font-semibold">{{ name }}</h1>
      </RouterLink>
      <DarkToggle />
    </div>
    <div class="relative mx-auto max-w-2xl min-h-screen min-w-xs flex flex-col p-4">
      <div class="flex flex-auto">
        <RouterView v-slot="{ Component }">
          <Transition
            enter-active-class="animate__animated animate__faster animate__fadeIn"
            leave-active-class="animate__animated animate__faster animate__fadeOut"
            mode="out-in"
          >
            <KeepAlive>
              <Component :is="Component" />
            </KeepAlive>
          </Transition>
        </RouterView>
      </div>
    </div>
  </div>
</template>
