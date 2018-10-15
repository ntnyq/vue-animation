<template>
  <div class="hook">
    <ls-section title="初始渲染">
      <button slot="ctrl" @click="isShow = !isShow" type="button">切换显示</button>
      <transition slot="main"
        appear
        @before-appear="beforeAppear"
        @appear="appear"
        @after-appear="afterAppear"
        @appear-cancelled="appearCancelled">
        <ls-box v-show="isShow" class="box1" />
      </transition>
    </ls-section>
    <ls-section title="钩子函数">
      <button slot="ctrl" @click="isShow = !isShow" type="button">切换显示</button>
      <transition slot="main"
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @leave-cancelled="leaveCancelled">
        <ls-box v-show="isShow" class="box2" />
      </transition>
    </ls-section>
  </div>
</template>

<script>
import anime from 'animejs'

const { log } = window.console

export default {
  name: 'Hook',

  data () {
    return {
      isShow: true
    }
  },

  methods: {

    // 初始渲染
    beforeAppear (el) {
      el.style = ''
    },

    appear (el, done) {
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
    },

    afterAppear (el) {},

    appearCancelled () {},

    // 进入过渡
    beforeEnter (el) {
      log('> beforeEnter')
    },

    enter (el, done) {
      anime({
        targets: '.box2',
        opacity: 0.6,
        translateX: el.parentNode.clientWidth - 100 * 2,
        scale: 0.5,
        backgroundColor: '#012345',
        duration () { return anime.random(800, 1600) },
        complete () {
          log('> enter')
          done()
        }
      })
    },

    afterEnter (el) {
      log('> afterEnter')
    },

    enterCancelled (el) {
      log('> enterCancelled')
    },

    // 离开过渡
    beforeLeave (el) {
      log('> beforeLeave')
    },

    leave (el, done) {
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
    },

    afterLeave (el) {
      el.style = ''
      log('> afterLeave')
    },

    leaveCancelled (el) {
      log('> leaveCancelled')
    }
  }
}
</script>

<style lang="scss">
.hook {
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
