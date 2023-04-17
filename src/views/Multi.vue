<template>
  <div class="multi">
    <ls-section title="2个Button">
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
          enter-active-class="animated bounceInLeft"
          leave-active-class="animated bounceOutRight"
        >
          <button
            v-if="isShow"
            :key="1"
            type="button"
          >
            我是按钮1
          </button>
          <button
            v-else
            :key="2"
            style="background-color: green;"
            type="button"
          >
            咦，我咋绿了
          </button>
        </Transition>
      </template>
    </ls-section>
    <ls-section title="3个Button">
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
          enter-active-class="animated slideInRight"
          leave-active-class="animated slideOutLeft"
        >
          <button
            key="blue"
            type="button"
            :style="{ backgroundColor: ['green', 'red', 'blur'][num % 3] }"
          >
            我是按钮{{ num + 1 }}
          </button>
        </Transition>
      </template>
    </ls-section>
    <ls-section title="1个Button">
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
          enter-active-class="animated zoomInRight"
          leave-active-class="animated zoomOutLeft"
        >
          <button
            :key="color"
            :style="`background-color: ${color};`"
            type="button"
          >
            我是按钮
          </button>
        </Transition>
      </template>
    </ls-section>
    <ls-section title="过渡模式">
      <template #ctrl>
        <button
          @click="isShow = !isShow"
          style="margin-right: 30px;"
          type="button"
        >
          切换显示
        </button>
        <button
          @click="isDefault = !isDefault"
          style="margin-right: 30px;"
          type="button"
        >
          切换模式
        </button>
        <strong>{{ isDefault ? 'in-out' : 'out-in' }}</strong>
      </template>
      <template #main>
        <Transition
          enter-active-class="animated bounceInRight"
          leave-active-class="animated bounceOutLeft"
          :mode="isDefault ? 'in-out' : 'out-in'"
        >
          <button
            v-if="isShow"
            :key="1"
            type="button"
          >
            我是按钮1
          </button>
          <button
            v-else
            :key="2"
            style="background-color: green;"
            type="button"
          >
            咦，我咋绿了
          </button>
        </Transition>
      </template>
    </ls-section>
    <ls-section title="多组件过渡">
      <template #ctrl>
        <button
          @click="isShow = !isShow"
          style="margin-right: 30px;"
          type="button"
        >
          切换显示
        </button>
      </template>
      <template #main>
        <Transition
          enter-active-class="animated bounceInRight"
          leave-active-class="animated bounceOutLeft"
          mode="out-in"
        >
          <RedCircle v-if="isShow" />
          <BlueCircle v-else />
        </Transition>
      </template>
    </ls-section>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

const num = ref(0)
const isShow = ref(true)
const isDefault = ref(true)
const color = computed(() => ['blue', 'green', 'red'][num.value % 3])
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
