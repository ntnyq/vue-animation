<script lang="ts" setup>
const num = ref(0)
const isShow = ref(true)
const isDefault = ref(true)
const colorClassList = ref(['btn-simple-teal', 'btn-simple-orange', 'btn-simple-cyan'])

const color = computed(() => colorClassList.value[num.value % 3])
</script>

<template>
  <div class="multi">
    <LsSection title="2个Button">
      <template #ctrl>
        <SimpleButton
          @click="isShow = !isShow"
          title="切换显示"
        />
      </template>
      <template #main>
        <Transition
          enter-active-class="animate__animated animate__bounceInLeft"
          leave-active-class="animate__animated animate__bounceOutRight"
        >
          <SimpleButton
            v-if="isShow"
            title="我是按钮1"
          />
          <SimpleButton
            v-else
            color="btn-simple-green"
            title="咦，我咋绿了"
          />
        </Transition>
      </template>
    </LsSection>
    <LsSection title="3个Button">
      <template #ctrl>
        <SimpleButton
          @click="num++"
          title="切换显示"
        />
      </template>
      <template #main>
        <Transition
          enter-active-class="animate__animated animate__slideInRight"
          leave-active-class="animate__animated animate__slideOutLeft"
        >
          <SimpleButton
            v-if="isShow"
            :color="colorClassList[num % 3]"
            :title="`我是按钮${num + 1}`"
          />
        </Transition>
      </template>
    </LsSection>
    <LsSection title="1个Button">
      <template #ctrl>
        <SimpleButton
          @click="num++"
          title="切换显示"
        />
      </template>
      <template #main>
        <Transition
          enter-active-class="animate__animated animate__zoomInRight"
          leave-active-class="animate__animated animate__zoomOutLeft"
        >
          <SimpleButton
            :key="color"
            :color="color"
            title="我是按钮"
          />
        </Transition>
      </template>
    </LsSection>
    <LsSection title="过渡模式">
      <template #ctrl>
        <SimpleButton
          @click="isShow = !isShow"
          title="切换显示"
        />
        <SimpleButton
          @click="isDefault = !isDefault"
          title="切换模式"
        />
        <strong>{{ isDefault ? 'in-out' : 'out-in' }}</strong>
      </template>
      <template #main>
        <Transition
          :mode="isDefault ? 'in-out' : 'out-in'"
          enter-active-class="animate__animated animate__bounceInRight"
          leave-active-class="animate__animated animate__bounceOutLeft"
        >
          <SimpleButton
            v-if="isShow"
            title="我是按钮1"
          />
          <SimpleButton
            v-else
            color="btn-simple-green"
            title="咦，我咋绿了"
          />
        </Transition>
      </template>
    </LsSection>
    <LsSection title="多组件过渡">
      <template #ctrl>
        <SimpleButton
          @click="isShow = !isShow"
          title="切换显示"
        />
      </template>
      <template #main>
        <Transition
          enter-active-class="animate__animated animate__bounceInRight"
          leave-active-class="animate__animated animate__bounceOutLeft"
          mode="out-in"
        >
          <RedCircle v-if="isShow" />
          <BlueCircle v-else />
        </Transition>
      </template>
    </LsSection>
  </div>
</template>

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
