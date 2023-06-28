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
    class="w-25 h-25 rounded-3px"
  >
    <slot></slot>
  </div>
</template>
