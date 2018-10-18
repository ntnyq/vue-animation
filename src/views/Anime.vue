<template>
  <div class="anime">
    <ls-section title="基础动画">
      <button slot="ctrl"
        @click="isShow = !isShow"
        type="button">切换显示</button>
      <transition slot="main"
        enter-active-class="zoomIn"
        leave-active-class="zoomOut">
        <ls-box v-show="isShow"
          class="animated" />
      </transition>
    </ls-section>
    <ls-section title="元素切换">
      <button slot="ctrl"
        @click="num++;"
        type="button">切换显示</button>
      <transition slot="main"
        enter-active-class="zoomIn"
        leave-active-class="zoomOut">
        <ls-box v-if="num % 2 === 0"
          key="red"
          class="animated" />
        <ls-box v-else
          :bg-color="'blue'"
          key="blue"
          class="animated" />
      </transition>
    </ls-section>
    <ls-section title="排序过渡">
      <button slot="ctrl"
        @click="add"
        style="margin-right: 30px;"
        type="button">添加</button>
      <button slot="ctrl"
        @click="remove"
        type="button">删除</button>
      <transition-group slot="main"
        name="list"
        enter-active-class="animated rotateInUpLeft"
        leave-active-class="animated rotateOutDownRight poa"
        tag="p">
        <!-- 不要用Inde做key 否则index不变的元素不会运动 -->
        <span v-for="num in array"
          :key="num"
          class="num">{{num}}</span>
      </transition-group>
    </ls-section>
    <ls-section title="动画延时">
      <button slot="ctrl"
        @click="isShow = !isShow"
        type="button">切换显示</button>
      <transition slot="main"
        enter-active-class="zoomIn"
        leave-active-class="zoomOut">
        <ls-box v-show="isShow"
          class="animated delay-1s" />
      </transition>
    </ls-section>
    <ls-section title="自定义持续时间">
      <button slot="ctrl"
        @click="isShow = !isShow"
        type="button">切换显示</button>
      <transition slot="main"
        enter-active-class="rollIn"
        leave-active-class="rollOut">
        <ls-box v-show="isShow"
          class="animated faster" />
      </transition>
    </ls-section>
  </div>
</template>

<script>

export default {
  name: 'Anime',

  data () {
    return {
      array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      next: 10,
      isShow: true,
      num: 1
    }
  },

  methods: {
    random () {
      return Math.floor(Math.random() * this.array.length)
    },

    add () {
      this.array.splice(this.random(), 0, this.next++)
    },

    remove () {
      this.array.splice(this.random(), 1)
    }
  }
}
</script>

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
