<template>
  <div class="hook">
    <ls-section title="初始渲染">
      <template #ctrl>
        <button
          @click="isShow = !isShow"
          type="button"
        >
          切换显示
        </button>
      </template>
      <template #main>
        <transition
          @before-appear="beforeAppear"
          @appear="appear"
          @after-appear="afterAppear"
          @appear-cancelled="appearCancelled"
          appear
        >
          <ls-box
            v-show="isShow"
            class="box1"
          />
        </transition>
      </template>
    </ls-section>
    <ls-section title="钩子函数">
      <template #ctrl>
        <button
          @click="isShow = !isShow"
          type="button"
        >
          切换显示
        </button>
      </template>
      <template #main>
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
        >
          <ls-box
            v-show="isShow"
            class="box2"
          />
        </transition>
      </template>
    </ls-section>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import anime from 'animejs'

const { log } = window.console
const isShow = ref(true)

type AnimeDone = () => void

// 初始渲染
const beforeAppear = (el: HTMLElement) => {
  el.style.cssText = ''
}

const appear = (el: HTMLElement, done: AnimeDone)  =>{
  anime({
    targets: el,
    opacity: 0.2,
    translateX: 300,
    duration: 3000,
    complete () {
      log('> Appear am called')
      done()
    }
  })
}

const afterAppear = () => {}

const appearCancelled = () => {}

    // 进入过渡
const beforeEnter = () => {
  log('> beforeEnter')
}

const enter = (el: HTMLElement, done: AnimeDone) => {
  anime({
    targets: '.box2',
    opacity: 0.6,
    translateX: (el.parentElement?.clientWidth ?? 0) - 100 * 2,
    scale: 0.5,
    backgroundColor: '#012345',
    duration () { return anime.random(800, 1600) },
    complete () {
      log('> enter')
      done()
    }
  })
}

const afterEnter =  () => {
  log('> afterEnter')
}

const enterCancelled =  () => {
  log('> enterCancelled')
}

// 离开过渡
const beforeLeave = () => {
  log('> beforeLeave')
}

const leave = (el: HTMLElement, done: AnimeDone) => {
  anime({
    targets: '.box2',
    translateX: 0,
    rotate: '5turn',
    scale: '1',
    backgroundColor: '#f00',
    duration: 1500,
    complete () {
      log('> leave')
      done()
    }
  })
}

const afterLeave = (el: HTMLElement)  => {
  el.style.cssText = ''
  log('> afterLeave')
}

const leaveCancelled = () => {
  log('> leaveCancelled')
}
</script>

<style lang="scss">
.hook {
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
