<template>
  <div class="home">
    <ul class="nav">
      <li
        v-for="item in list"
        :key="item.name"
        class="nav-item"
      >
        <RouterLink :to="`/${item.path}`">{{ item.name }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const list = ref([
  { path: 'basic', name: '基础用法' },
  { path: 'hook', name: '钩子函数' },
  { path: 'multi', name: '多个元素' },
  { path: 'list', name: '列表过渡' },
  { path: 'anime', name: 'Animate' },
  { path: 'router', name: '路由切换' },
  { path: 'about', name: '关于我' },
])
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
