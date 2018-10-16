<template>
  <div class="multi">
    <ls-section title="2个Button">
      <button slot="ctrl"
        @click="isShow = !isShow"
        type="button">切换显示</button>
      <transition enter-active-class="animated bounceInLeft"
        leave-active-class="animated bounceOutRight"
        slot="main">
        <button v-if="isShow"
          :key="1"
          type="button">我是按钮1</button>
        <button v-else
          :key="2"
          style="background-color: green;"
          type="button">咦，我咋绿了</button>
      </transition>
    </ls-section>
    <ls-section title="3个Button">
      <button slot="ctrl"
        @click="num++"
        type="button">切换显示</button>
      <transition enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutLeft"
        slot="main">
        <button v-if="num % 3 === 0"
          :key="`blue`"
          type="button">我是按钮1</button>
        <button v-if="num % 3 === 1"
          :key="`green`"
          style="background-color: green;"
          type="button">我是按钮2</button>
        <button v-if="num % 3 === 2"
          :key="`red`"
          style="background-color: red;"
          type="button">我是按钮3</button>
      </transition>
    </ls-section>
    <ls-section title="1个Button">
      <button slot="ctrl"
        @click="num++"
        type="button">切换显示</button>
      <transition enter-active-class="animated zoomInRight"
        leave-active-class="animated zoomOutLeft"
        slot="main">
        <button :key="color"
          :style="`background-color: ${color};`"
          type="button">我是按钮</button>
      </transition>
    </ls-section>
    <ls-section title="过渡模式">
      <button slot="ctrl"
        @click="isShow = !isShow"
        style="margin-right: 30px;"
        type="button">切换显示</button>
      <button slot="ctrl"
        @click="isDefault = !isDefault"
        style="margin-right: 30px;"
        type="button">切换模式</button>
      <strong slot="ctrl">{{ isDefault ? 'in-out' : 'out-in' }}</strong>
      <transition enter-active-class="animated bounceInRight"
        leave-active-class="animated bounceOutLeft"
        :mode="isDefault ? 'in-out' : 'out-in'"
        slot="main">
        <button v-if="isShow"
          :key="1"
          type="button">我是按钮1</button>
        <button v-else
          :key="2"
          style="background-color: green;"
          type="button">咦，我咋绿了</button>
      </transition>
    </ls-section>
    <ls-section title="多组件过渡">
      <button slot="ctrl"
        @click="isShow = !isShow"
        style="margin-right: 30px;"
        type="button">切换显示</button>
      <transition enter-active-class="animated bounceInRight"
        leave-active-class="animated bounceOutLeft"
        mode="out-in"
        slot="main">
        <component :is="circle"></component>
      </transition>
    </ls-section>
  </div>
</template>

<script>
import RedCircle from '@/components/Circle/RedCircle'
import BlueCircle from '@/components/Circle/BlueCircle'

export default {
  name: 'Multi',

  components: {
    RedCircle,
    BlueCircle
  },

  computed: {
    color () {
      return ['blue', 'green', 'red'][this.num % 3]
    },

    circle () {
      return this.isShow ? 'red-circle' : 'blue-circle'
    }
  },

  data () {
    return {
      isDefault: true,
      isShow: true,
      num: 0
    }
  }
}
</script>

<style lang="scss">
.multi {
  display: flex;
  flex-direction: column;
  flex: 1;

  .ls-section-main-inner {
    button {
      position: absolute;
    }
  }
}
</style>
