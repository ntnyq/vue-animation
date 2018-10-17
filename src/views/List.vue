<template>
  <div class="list">
    <ls-section title="进入离开">
      <button slot="ctrl"
        @click="add"
        style="margin-right: 30px;"
        type="button">添加</button>
      <button slot="ctrl"
        @click="remove"
        type="button">删除</button>
      <transition-group slot="main"
        name="list"
        tag="p">
        <!-- 不要用Inde做key 否则index不变的元素不会运动 -->
        <span v-for="num in array"
          :key="num"
          class="num">{{num}}</span>
      </transition-group>
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
        name="list2"
        tag="p">
        <!-- 不要用Inde做key 否则index不变的元素不会运动 -->
        <span v-for="num in array"
          :key="num"
          class="num">{{num}}</span>
      </transition-group>
    </ls-section>
    <ls-section title="乱序动画">
      <button slot="ctrl"
        @click="shuffle"
        type="button">乱序</button>
      <transition-group slot="main"
        name="flip"
        tag="p">
        <!-- 不要用Inde做key 否则index不变的元素不会运动 -->
        <span v-for="num in array2"
          :key="num"
          class="num">{{num}}</span>
      </transition-group>
    </ls-section>
    <ls-section title="网格乱序">
      <button slot="ctrl"
        @click="shuffle2"
        type="button">乱序</button>
      <transition-group slot="main"
        name="cell"
        class="cells"
        tag="div">
        <!-- 不要用Inde做key 否则index不变的元素不会运动 -->
        <span v-for="cell in cells"
          :key="cell.idx"
          class="cell">{{cell.number}}</span>
      </transition-group>
    </ls-section>
    <ls-section title="js列表过渡">
      <input v-model="text"
        slot="ctrl"
        placeholder="输入搜索"
        type="text"
        class="input">
      <transition-group slot="main"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
        :css="false"
        name="lang"
        class="str-list"
        tag="ul">
        <li v-for="(item, index) in computedList"
          :key="item.lang"
          :data-index="index"
          class="str">{{item.lang}}</li>
      </transition-group>
    </ls-section>
  </div>
</template>

<script>
import anime from 'animejs'

export default {
  name: 'List',

  computed: {
    computedList () {
      return this.text.length ? this.list.filter(item => item.lang.toLowerCase().includes(this.text)) : []
    }
  },

  data () {
    return {
      cells: Array.apply(null, { length: 81 }).map((_, idx) => {
        return {
          idx,
          number: idx % 9 + 1
        }
      }),
      list: [
        { lang: 'HTML' },
        { lang: 'JavaScript' },
        { lang: 'CSS' },
        { lang: 'Python' },
        { lang: 'Julia' },
        { lang: 'Ruby' },
        { lang: 'Rust' },
        { lang: 'C' },
        { lang: 'C++' },
        { lang: 'C#' },
        { lang: 'Lisp' },
        { lang: 'Markdown' },
        { lang: 'Perl' }
      ],
      array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      array2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      next: 10,
      isShow: true,
      text: ''
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
    },

    shuffle () {
      this.array2.sort(() =>
        Math.random() > 0.5 ? 1 : -1
      )
    },

    shuffle2 () {
      this.cells.sort(() =>
        Math.random() > 0.5 ? 1 : -1
      )
    },

    beforeEnter (el) {
      el.style.opacity = 0
      el.style.height = 0
    },

    enter (el, done) {
      anime({
        targets: el,
        opacity: 1,
        height: '1.6em',
        duration: () => parseInt(el.dataset.index) * 800,
        complete: done
      })
    },

    leave (el, done) {
      anime({
        targets: el,
        opacity: 0,
        height: 0,
        duration: () => parseInt(el.dataset.index) * 400,
        complete: done
      })
    }
  }
}
</script>

<style lang="scss">
.list {
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

  .list2,
  .list {

    // 插入与移除过程
    &-enter-active,
    &-leave-active {
      transition: all 1s;
    }

    // 开始插入 和 移除结束的位置
    &-enter,
    &-leave-to {
      opacity: 0;
      transform: translateY(50px);
    }
  }

  // 元素定位变化动画
  .list2-move {
    transition: all 1s;
  }

  .flip-move {
    transition: all 1s;
  }

  .cells {
    display: flex;
    flex-wrap: wrap;
    width: 380px;

    .cell {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 40px;
      height: 40px;
      border: 1px solid #ccc;
      margin-right: -1px;
      margin-bottom: -1px;

      &:nth-of-type(3n) {
        margin-bottom: 0;
      }

      &:nth-of-type(27n) {
        margin-right: 0;
      }

      &-move {
        transition: all 2s;
      }
    }
  }
}
</style>
