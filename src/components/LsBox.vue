<script lang="ts" setup>
defineProps({
  bgColor: {
    type: String,
    default: 'red',
  },
})
</script>

<template>
  <div
    :style="{ backgroundColor: bgColor }"
    class="h-25 w-25 rounded-3px"
  >
    <slot />
  </div>
</template>
