<template>
  <h1>Vue与动画</h1>
  <RouterLink
    to="/"
    class="back"
  >
    🔙
  </RouterLink>
  <div class="container">
    <RouterView v-slot="{ Component }">
      <Transition
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        mode="out-in"
      >
        <KeepAlive>
          <Component :is="Component" />
        </KeepAlive>
      </Transition>
    </RouterView>
  </div>
</template>

<style lang="scss">
#app {
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 720px;
  min-width: 320px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 15px;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 2;
  color: #666;
  overflow-x: hidden;

  h1 {
    text-align: center;
  }

  .container {
    display: flex;
    flex: 1;
  }

  .back {
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 999;
    display: block;
    line-height: 1;
    font-size: 50px;
  }
}
</style>
