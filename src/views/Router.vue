<template>
  <div class="router">
    <ls-section title="路由切换">
      <p class="text"
        slot="main">路由切换已加入过渡效果。</p>
    </ls-section>
  </div>
</template>

<script>
export default {
  name: 'Router'
}
</script>

<style lang="scss">
.router {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  .text {
    padding-top: 80px;
    text-align: center;
    font-size: 20px;
  }
}
</style>
