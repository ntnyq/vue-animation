<template>
  <div id="app">
    <h1>Vue与动画</h1>
    <a
      @click="$router.push({ name: 'home'})"
      class="back"
      href="javascript"
    >🔙</a>
    <div class="container">
      <router-view />
    </div>
    <footer>
      <iframe
        allowtransparency="true"
        scrolling="no"
        frameborder="0"
        src="https://buttons.github.io/buttons.html#href=https%3A%2F%2Fgithub.com%2Fntnyq&amp;aria-label=Follow%20%40ntnyq%20on%20GitHub&amp;data-text=Follow%20%40ntnyq&amp;data-size=large&amp;data-show-count=true"
        style="width: 174.5px; height: 28px; margin: 20px auto; border: none;"
      ></iframe>
    </footer>
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
    display: block;
    line-height: 1;
    font-size: 50px;
  }
}
footer {
  text-align: center;
}
</style>
