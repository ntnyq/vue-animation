<template>
  <div class="basic">
    <ls-section title="初始过渡">
      <button slot="ctrl" @click="isShow = !isShow" type="button">切换显示</button>
      <transition slot="main" appear appear-active-class="animated bounceOutLeft">
        <ls-box v-show="isShow" />
      </transition>
    </ls-section>
    <ls-section title="基本用法">
      <button slot="ctrl" @click="isShow = !isShow" type="button">切换显示</button>
      <transition slot="main" name="fade">
        <ls-box v-show="isShow" />
      </transition>
    </ls-section>
    <ls-section title="自定义类名">
      <button slot="ctrl" @click="isShow = !isShow" type="button">切换显示</button>
      <transition enter-active-class="animated tada" leave-active-class="animated bounceOutRight" slot="main" name="cus-animate">
        <ls-box v-show="isShow" />
      </transition>
    </ls-section>
    <ls-section title="关键帧动画">
      <button slot="ctrl" @click="isShow = !isShow" type="button">切换显示</button>
      <transition slot="main" name="fold">
        <ls-box v-show="isShow" />
      </transition>
    </ls-section>
  </div>
</template>

<script>
export default {
  name: 'Basic',

  data () {
    return {
      isShow: true
    }
  }
}
</script>

<style lang="scss">
.basic {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.fold-enter-active {
  animation-name: fold-in;
  animation-duration: 1s;
}
.fold-leave-active {
  animation-name: fold-out;
  animation-duration: 1s;
}
@keyframes fold-in {
  0% {
    opacity: 0;
    transform: scale(0.7) rotate(0deg);
  }
  33% {
    opacity: 0.33;
    transform: scale(0.8) rotate(5deg);
  }
  67% {
    opacity: 0.67;
    transform: scale(0.9) rotate(-5deg);
  }
  100% {
    opacity: 1.0;
    transform: scale(1.0) rotate(0deg);
  }
}
@keyframes fold-out {
  0% {
    opacity: 1.0;
    transform: scale(1.0) rotate(0deg);
  }
  33% {
    opacity: 0.67;
    transform: scale(0.9) rotate(-5deg);
  }
  67% {
    opacity: 0.33;
    transform: scale(0.8) rotate(5deg);
  }
  100% {
    opacity: 0;
    transform: scale(0.7) rotate(0deg);
  }
}
</style>
