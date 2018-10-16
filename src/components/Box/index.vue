<template>
  <div class="ls-box"
    :style="`baxckground-color: ${color}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LsBox',
  props: {
    color: String
  }
}
</script>

<style lang="scss">
.ls-box {
  width: 100px;
  height: 100px;
  border-radius: 3px;
  background-color: red;
}
</style>
