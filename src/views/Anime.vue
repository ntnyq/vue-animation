<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(1)
const next = ref(10)
const isShow = ref(true)
const array = ref([1, 2, 3, 4, 5, 6, 7, 8, 9])
const random = () => Math.trunc(Math.random() * array.value.length)
const add = () => {
  array.value.splice(random(), 0, next.value++)
}
const remove = () => {
  array.value.splice(random(), 1)
}
</script>

<template>
  <div class="anime">
    <LsSection title="基础动画">
      <template #ctrl>
        <button
          @click="isShow = !isShow"
          type="button"
        >
          切换显示
        </button>
      </template>
      <template #main>
        <Transition
          enter-active-class="zoomIn"
          leave-active-class="zoomOut"
        >
          <LsBox
            v-show="isShow"
            class="animated"
          />
        </Transition>
      </template>
    </LsSection>
    <LsSection title="元素切换">
      <template #ctrl>
        <button
          @click="num++"
          type="button"
        >
          切换显示
        </button>
      </template>
      <template #main>
        <Transition
          enter-active-class="zoomIn"
          leave-active-class="zoomOut"
        >
          <LsBox
            v-if="num % 2 === 0"
            key="red"
            class="animated"
          />
          <LsBox
            v-else
            key="blue"
            bg-color="blue"
            class="animated"
          />
        </Transition>
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
          name="list"
          enter-active-class="animated rotateInUpLeft"
          leave-active-class="animated rotateOutDownRight poa"
          tag="p"
        >
          <span
            v-for="id in array"
            :key="id"
            class="num"
            >{{ id }}</span
          >
        </TransitionGroup>
      </template>
    </LsSection>
    <LsSection title="动画延时">
      <template #ctrl>
        <button
          @click="isShow = !isShow"
          type="button"
        >
          切换显示
        </button>
      </template>
      <template #main>
        <Transition
          enter-active-class="zoomIn"
          leave-active-class="zoomOut"
        >
          <LsBox
            v-show="isShow"
            class="animated delay-1s"
          />
        </Transition>
      </template>
    </LsSection>
    <LsSection title="自定义持续时间">
      <template #ctrl>
        <button
          @click="isShow = !isShow"
          type="button"
        >
          切换显示
        </button>
      </template>
      <template #main>
        <Transition
          enter-active-class="rollIn"
          leave-active-class="rollOut"
        >
          <LsBox
            v-show="isShow"
            class="animated faster"
          />
        </Transition>
      </template>
    </LsSection>
  </div>
</template>

<style lang="scss">
.anime {
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

  .poa {
    position: absolute;
  }

  .list-move {
    transition: all 1s;
  }
}
</style>
