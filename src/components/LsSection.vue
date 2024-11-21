<script lang="ts" setup>
withDefaults(
  defineProps<{
    title?: string
  }>(),
  {
    title: '',
  },
)
</script>

<template>
  <div class="relative mb-6">
    <h2 class="relative mb-3 px-2 text-center">
      <slot name="title">{{ title }}</slot>
    </h2>
    <div class="relative mb-3 flex items-center gap-4">
      <slot name="ctrl" />
    </div>
    <div class="relative bg-zinc-100 p-6 shadow-sm dark:bg-zinc-800">
      <div class="relative min-h-200px of-hidden">
        <slot name="main" />
      </div>
    </div>
  </div>
</template>
