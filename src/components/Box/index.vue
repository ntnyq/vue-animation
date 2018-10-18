<template>
  <div class="ls-box"
    :style="`background-color: ${bgColor}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LsBox',
  props: {
    bgColor: {
      type: String,
      default: 'red'
    }
  }
}
</script>

<style lang="scss">
.ls-box {
  width: 100px;
  height: 100px;
  border-radius: 3px;
}
</style>
