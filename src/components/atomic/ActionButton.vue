<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    type?: 'icon' | 'button'
    title?: string
    icon: string
  }>(),
  {
    type: 'icon',
  },
)
</script>

<template>
  <SimpleButton
    v-if="type === 'button'"
    v-bind="props"
  />
  <IconButton
    v-else-if="type === 'icon'"
    v-bind="props"
  />
</template>
