<template>
  <div class="basic">
    <ls-section title="初始过渡">
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
          appear
          appear-active-class="animated fadeOutRightBig"
        >
          <ls-box v-show="isShow" />
        </transition>
      </template>
    </ls-section>
    <ls-section title="基本用法">
      <template #ctrl>
        <button
          @click="isShow = !isShow"
          type="button"
        >
          切换显示
        </button>
      </template>
      <template #main>
        <transition name="fade">
          <ls-box v-show="isShow" />
        </transition>
      </template>
    </ls-section>
    <ls-section title="自定义类名">
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
          enter-active-class="animated tada"
          leave-active-class="animated bounceOutRight"
          name="cus-animate"
        >
          <ls-box v-show="isShow" />
        </transition>
      </template>
    </ls-section>
    <ls-section title="关键帧动画">
      <template #ctrl>
        <button
          @click="isShow = !isShow"
          type="button"
        >
          切换显示
        </button>
      </template>
      <template #main>
        <transition name="fold">
          <ls-box v-show="isShow" />
        </transition>
      </template>
    </ls-section>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Basic',

  data() {
    return {
      isShow: true,
    }
  },
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
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes fold-out {
  0% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
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
