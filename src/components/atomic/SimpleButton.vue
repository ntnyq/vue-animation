<script lang="ts" setup>
defineProps<{
  icon?: string
  color?: string
  title?: string
  to?: string
}>()
</script>

<template>
  <component
    :is="to ? 'a' : 'button'"
    :to="to"
    :class="[color || 'btn-simple-primary']"
    :type="to ? undefined : 'button'"
    class="relative px-2.5 py-2 lh-1em"
    role="button"
  >
    <span
      v-if="icon"
      :class="icon"
    />
    <slot :title="title">
      {{ title }}
    </slot>
  </component>
</template>
