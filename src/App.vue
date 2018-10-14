<template>
  <div id="app">
    <h1>Vue中动画的使用</h1>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  min-width: 320px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 15px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
}
</style>
