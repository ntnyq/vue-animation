<template>
  <div
    class="ls-box"
    :style="`background-color: ${bgColor}`"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  bgColor: {
    type: String,
    default: 'red'
  }
})
</script>

<style lang="scss">
.ls-box {
  width: 100px;
  height: 100px;
  border-radius: 3px;
}
</style>
