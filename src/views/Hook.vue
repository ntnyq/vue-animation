<script lang="ts" setup>
import anime from 'animejs'

type AnimeDone = () => void

const isShow = ref(true)

const log = (msg: string) => {
  window.console.log(`[vue-animation]: ${msg}`)
}

// 初始渲染
const onBeforeAppear = (el: Element) => {
  ;(el as HTMLElement).style.cssText = ''
}

const onAppear = (el: Element, done: AnimeDone) => {
  anime({
    targets: el,
    opacity: 0.2,
    translateX: 300,
    duration: 3000,
    complete() {
      log('appear')
      done()
    },
  })
}

const onAfterAppear = () => {
  log('afterAppear')
}

const onAppearCancelled = () => {
  log('appearCancelled')
}

// 进入过渡
const onBeforeEnter = () => {
  log('beforeEnter')
}

const onEnter = (el: Element, done: AnimeDone) => {
  anime({
    targets: '.box2',
    opacity: 0.6,
    translateX: (el.parentElement?.clientWidth ?? 0) - 100 * 2,
    scale: 0.5,
    backgroundColor: '#012345',
    duration() {
      return anime.random(800, 1600)
    },
    complete() {
      log('enter')
      done()
    },
  })
}

const onAfterEnter = () => {
  log('afterEnter')
}

const enterCancelled = () => {
  log('enterCancelled')
}

// 离开过渡
const beforeLeave = () => {
  log('beforeLeave')
}

const onLeave = (el: Element, done: AnimeDone) => {
  anime({
    targets: '.box2',
    translateX: 0,
    rotate: '5turn',
    scale: '1',
    backgroundColor: '#f00',
    duration: 1500,
    complete() {
      log('leave')
      done()
    },
  })
}

const onAfterLeave = (el: Element) => {
  ;(el as HTMLElement).style.cssText = ''
  log('afterLeave')
}

const onLeaveCancelled = () => {
  log('leaveCancelled')
}
</script>

<template>
  <div class="hook">
    <LsSection title="初始渲染">
      <template #ctrl>
        <SimpleButton
          @click="isShow = !isShow"
          title="切换显示"
        />
      </template>
      <template #main>
        <Transition
          @before-appear="onBeforeAppear"
          @appear="onAppear"
          @after-appear="onAfterAppear"
          @appear-cancelled="onAppearCancelled"
          appear
        >
          <LsBox
            v-show="isShow"
            class="box1"
          />
        </Transition>
      </template>
    </LsSection>
    <LsSection title="钩子函数">
      <template #ctrl>
        <SimpleButton
          @click="isShow = !isShow"
          title="切换显示"
        />
      </template>
      <template #main>
        <Transition
          @before-enter="onBeforeEnter"
          @enter="onEnter"
          @after-enter="onAfterEnter"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="onLeave"
          @after-leave="onAfterLeave"
          @leave-cancelled="onLeaveCancelled"
        >
          <LsBox
            v-show="isShow"
            class="box2"
          />
        </Transition>
      </template>
    </LsSection>
  </div>
</template>

<style lang="scss">
.hook {
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
