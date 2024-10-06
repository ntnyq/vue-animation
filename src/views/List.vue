<script lang="ts" setup>
import anime from 'animejs'
import { computed, ref } from 'vue'

const next = ref(10)
const text = ref('')
const array = ref([1, 2, 3, 4, 5, 6, 7, 8, 9])
const array2 = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
const list = ref([
  { lang: 'HTML' },
  { lang: 'JavaScript' },
  { lang: 'CSS' },
  { lang: 'Python' },
  { lang: 'Julia' },
  { lang: 'Ruby' },
  { lang: 'Rust' },
  { lang: 'C' },
  { lang: 'C++' },
  { lang: 'C#' },
  { lang: 'Lisp' },
  { lang: 'Markdown' },
  { lang: 'Perl' },
])
const cells = ref(Array.from({ length: 81 }, (_, idx) => ({ idx, number: (idx % 9) + 1 })))
const computedList = computed(() =>
  text.value.length > 0
    ? list.value.filter(item => item.lang.toLowerCase().includes(text.value))
    : [],
)

const random = () => Math.trunc(Math.random() * array.value.length)

const add = () => {
  array.value.splice(random(), 0, next.value++)
}

const remove = () => {
  array.value.splice(random(), 1)
}

const shuffle = () => {
  array2.value.sort(() => (Math.random() > 0.5 ? 1 : -1))
}

const shuffle2 = () => {
  cells.value.sort(() => (Math.random() > 0.5 ? 1 : -1))
}

const beforeEnter = (el: any) => {
  el.style.cssText = 'height: 0; opacity: 0;'
}

const enter = (el: any, done: () => void) => {
  anime({
    targets: el,
    opacity: 1,
    height: '1.6em',
    duration: () => Number.parseInt(el.dataset.index ?? '') * 800,
    complete: done,
  })
}

const leave = (el: any, done: () => void) => {
  anime({
    targets: el,
    opacity: 0,
    height: 0,
    duration: () => Number.parseInt(el.dataset.index ?? '') * 400,
    complete: done,
  })
}
</script>

<template>
  <div class="list">
    <LsSection title="进入离开">
      <template #ctrl>
        <button
          @click="add"
          style="margin-right: 30px"
          type="button"
        >
          添加
        </button>
        <button
          @click="remove"
          type="button"
        >
          删除
        </button>
      </template>
      <template #main>
        <TransitionGroup
          name="list"
          tag="p"
        >
          <span
            v-for="num in array"
            :key="num"
            class="num"
          >
            {{ num }}
          </span>
        </TransitionGroup>
      </template>
    </LsSection>
    <LsSection title="排序过渡">
      <template #ctrl>
        <button
          @click="add"
          style="margin-right: 30px"
          type="button"
        >
          添加
        </button>
        <button
          @click="remove"
          type="button"
        >
          删除
        </button>
      </template>
      <template #main>
        <TransitionGroup
          name="list2"
          tag="p"
        >
          <span
            v-for="num in array"
            :key="num"
            class="num"
          >
            {{ num }}
          </span>
        </TransitionGroup>
      </template>
    </LsSection>
    <LsSection title="乱序动画">
      <template #ctrl>
        <button
          @click="shuffle"
          type="button"
        >
          乱序
        </button>
      </template>
      <template #main>
        <TransitionGroup
          name="flip"
          tag="p"
        >
          <span
            v-for="num in array2"
            :key="num"
            class="num"
          >
            {{ num }}
          </span>
        </TransitionGroup>
      </template>
    </LsSection>
    <LsSection title="网格乱序">
      <template #ctrl>
        <button
          @click="shuffle2"
          type="button"
        >
          乱序
        </button>
      </template>
      <template #main>
        <TransitionGroup
          name="cell"
          class="cells"
          tag="div"
        >
          <span
            v-for="cell in cells"
            :key="cell.idx"
            class="cell"
            >{{ cell.number }}</span
          >
        </TransitionGroup>
      </template>
    </LsSection>
    <LsSection title="js列表过渡">
      <template #ctrl>
        <input
          v-model="text"
          placeholder="输入搜索"
          type="text"
          class="input"
        />
      </template>
      <template #main>
        <TransitionGroup
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave"
          :css="false"
          name="lang"
          class="str-list"
          tag="ul"
        >
          <li
            v-for="(item, index) in computedList"
            :key="item.lang"
            :data-index="index"
            class="str"
          >
            {{ item.lang }}
          </li>
        </TransitionGroup>
      </template>
    </LsSection>
  </div>
</template>

<style lang="scss">
.list {
  display: flex;
  flex-direction: column;
  flex: 1;

  .num {
    display: inline-block;
    margin: 0 10px 10px 0;
    width: 50px;
    height: 50px;
    background-color: darkgreen;
    border-radius: 2px;
    line-height: 50px;
    text-align: center;
    color: #fff;
  }

  .list2,
  .list {
    // 插入与移除过程
    &-enter-active,
    &-leave-active {
      transition: all 1s;
    }

    // 开始插入 和 移除结束的位置
    &-enter,
    &-leave-to {
      opacity: 0;
      transform: translateY(50px);
    }
  }

  // 移除时元素固定
  .list2-leave-active {
    position: absolute;
  }

  // 元素定位变化动画
  .list2-move {
    transition: all 1s;
  }

  .flip-move {
    transition: all 1s;
  }

  .cells {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 280px;

    .cell {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 30px;
      height: 30px;
      border: 1px solid #ccc;
      margin-right: -1px;
      margin-bottom: -1px;

      &:nth-of-type(3n) {
        margin-bottom: 0;
      }

      &:nth-of-type(27n) {
        margin-right: 0;
      }

      &-move {
        transition: all 2s;
      }
    }
  }
}
</style>
