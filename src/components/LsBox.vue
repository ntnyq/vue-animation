<script lang="ts" setup>
withDefaults(
  defineProps<{
    bgColor?: string
  }>(),
  {
    bgColor: 'red',
  },
)
</script>

<template>
  <div
    :style="{ backgroundColor: bgColor }"
    class="h-25 w-25 rounded-3px"
  >
    <slot />
  </div>
</template>
