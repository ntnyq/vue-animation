<template>
  <div class="home">
    <ul class="nav">
      <li class="nav-item">
        <router-link to="/basic">基础用法</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/hook">钩子函数</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/multi">多元素</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about">关于我</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  .nav {
    line-height: 2;
    font-weight: 400;
    font-size: 30px;

    li {
      text-align: justify;
      text-align-last: justify;
    }
  }
}
</style>
