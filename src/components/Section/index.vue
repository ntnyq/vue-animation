<template>
  <div class="ls-section">
    <h2 class="ls-section-title">
      <slot name="title">{{title}}</slot>
    </h2>
    <div class="ls-section-ctrl">
      <slot name="ctrl"></slot>
    </div>
    <div class="ls-section-main">
      <div class="ls-section-main-inner">
        <slot name="main"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LsSection',
  props: {
    title: String
  }
}
</script>

<style lang="scss">
.ls-section {
  position: relative;
  margin-bottom: 40px;

  .ls-section {

    &-title {
      position: relative;
      padding: 10px 0;
      margin-bottom: 15px;
      text-align: center;
    }

    &-ctrl {
      position: relative;
      padding: 10px 0;
      margin-bottom: 15px;
    }

    &-main {
      position: relative;
      padding: 30px;
      background-color: #f5f5f5;

      &-inner {
        position: relative;
        min-height: 200px;
        overflow: hidden;
      }
    }
  }
}
</style>
