# Vue与动画

> Vuejs与动画。

**！！！本文非原创，是对别人博文的学习笔记，加上自己的思考和写Demo。原文章地址，请查看下面的参考资料。**

![](https://travis-ci.org/ntnyq/vue-animation.svg?branch=dev)


Table of Contents
=================

   * [Vue与动画](#vue与动画)
      * [基本介绍](#基本介绍)
         * [Transition组件](#transition组件)
         * [过渡实现的方式](#过渡实现的方式)
         * [动画执行逻辑](#动画执行逻辑)
      * [CSS动画](#css动画)
         * [transition组件的钩子状态](#transition组件的钩子状态)
         * [自定义动画类名](#自定义动画类名)
         * [使用关键帧动画](#使用关键帧动画)
         * [指定过渡持续时间](#指定过渡持续时间)
         * [初试渲染的过渡](#初试渲染的过渡)
      * [JS动画](#js动画)
         * [钩子函数](#钩子函数)
         * [初始渲染](#初始渲染)
      * [多元素组件动画](#多元素组件动画)
         * [多元素动画](#多元素动画)
         * [过渡模式](#过渡模式)
         * [多组件过渡](#多组件过渡)
      * [列表过渡](#列表过渡)
         * [基本说明](#基本说明)
         * [进入离开列表](#进入离开列表)
         * [列表排序过渡](#列表排序过渡)
         * [时间设置](#时间设置)
            * [过渡延迟时间](#过渡延迟时间)
            * [过渡持续时间](#过渡持续时间)
      * [集成Animate.css](#集成animatecss)
         * [基本使用](#基本使用)
      * [结合Vue-router](#结合vue-router)
         * [基本使用](#基本使用-1)
         * [路由切换多种动画](#路由切换多种动画)
      * [参考资料](#参考资料)

## 基本介绍

### Transition组件

> \<transition>\</transition>

1. 若某个元素或者组件需要有过渡效果，只需使用Vue内置的`transition`组件将其包裹起来封装成过渡组件即可。
2. Vue只有在**插入**、**更新**和**销毁**元素或者组件时才会使用过渡效果。例如：
	- v-if (条件渲染)
	- v-show (条件展现)
	- 动态组件
	- 在组件的根节点上，并且被Vue实例的DOM方法触发。

### 过渡实现的方式

主要有以下两种过渡的实现方式：

1. 利用CSS过渡(`transition`)或者关键帧动画(`@keyframes`)来实现。
2. 利用JavaScript来实现(建议使用动画库，如`animejs`)。

### 动画执行逻辑

过渡插件在触发过渡效果时，会进行如下操作：

1. 检查过渡组件作用的元素上是否有CSS过渡动画或者关键帧动画，若有则在对应时刻进行调用。
2. 若使用JavaScript的钩子函数来实现了动画，那么在合适的时机将调用Js完成动画。
3. 若不存在动画，则下一帧执行DOM操作，完成组件的**插入**、**更新**或**销毁**。

## CSS动画

### transition组件的钩子状态

当我们给transition组件设置一个name属性，例如`<transition name="fade"></transition>`，那么在过渡组件发生过渡的时候，会有以下6个类名发生切换。

- **xx-enter** 进入过渡的开始状态，元素被插入或者组件刚创建的时候生效，在下一帧后立刻被删除。
- **xx-enter-active** 进入过渡的结束状态，元素被插入后即刻生效，在过渡完成后删除。
- **xx-enter-to** 定义进入过渡的结束状态，在元素被插入后下一帧生效（同时`xx-enter`被删除）,在过渡/动画完成后删除。
- **xx-leave** 离开过渡的开始状态，元素被删除时候出发，只应用一帧后立刻删除。
- **xx-leave-active** 离开过渡的结束状态，元素删除后立即生效，离开过渡完成后删除。
- **xx-leave-to** 定义离开过渡的结束状态，在离开过渡被出发下一帧后生效（同时`xx-leave`被删除），在过渡/动画完成后被删除。

### 自定义动画类名

通过`enter-class`，`enter-active-class`, `enter-to-class`, `leave-class`，`lea ve-active-class`, `leave-to-class`这6个属性，即可指定对应状态的类名，方便与CSS动画库做集成。

**自定义类名的权值大于普通类名，若对过渡组件指定了类型，则此状态的默认类名不会被触发**。

### 使用关键帧动画

关键帧动画通过CSS定义`animation`属性与`@keyframes`来实现。
一般只需需要在在`xx-enter-active`和`xx-leave-active`两个类上定义创建和销毁的动画。

### 指定过渡持续时间

在`transition`组件上绑定`duration`属性即可指定过渡持续时间。单位为**毫秒**。

``` html
<transition :duration="3000"></transition>
```
也可以传入对象的方式，分别指定进入和离开的持续时间：

``` html
<transition :duration="{ entry: 2000, leave: 3000 }"></transition>
```

### 初试渲染的过渡

通过appear属性，可以设置元素初始渲染时候的过渡:

> 过渡只会在初始渲染时触发，重复改变其显示属性等不会触发过渡效果。

``` html
<transition appear>
  <!-- ... -->
</transition>
```
它也可以指定类名:

``` html
<transition
  appear
  appear-class="custom-appear-class"
  appear-to-class="custom-appear-to-class"
  appear-active-class="custom-appear-active-class">
  <!-- ... -->
</transition>
```

## JS动画

### 钩子函数

我们可以在`transition`组件上添加**钩子函数**，来监听过渡的执行过程，在合适的时机执行绑定在钩子函数上的JS动画，来实现过渡效果。需要注意的是：

- 当只存在Javascript动画时，必须在`leave`和`enter`中，调用其回调函数。否则他们将被同步调用，过渡会立即完成。(动画库会提供动画完成回调。比如`animejs`)
- 对于只使用Javascript的元素，建议添加`:css="false"`来让Vue跳过对其的**CSS检测**，同时也可以避免过渡过程受CSS影响。

代码示例：

``` html
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
    <ls-box v-show="isShow" />
</transition>
```

``` js
const { log } = window.console

export default {
  name: 'Hook',

  data () {
    return {
      isShow: true
    }
  },

  methods: {

    //* 进入过渡 */

    // 设置进入过渡之前的状态
    beforeEnter (el) {
      log('> beforeEnter')
    },

    // 设置进入过渡完成时的状态
    enter (el, done) {
      log('> enter')
      done()
    },

    // 设置进入过渡完成后的状态
    afterEnter (el) {
      log('> afterEnter')
    },

    // 只用于v-show中
    enterCancelled (el) {
      log('> enterCancelled')
    },

    //* 离开过渡 */

    // 设置离开过渡之前的状态
    beforeLeave (el) {
      log('> beforeLeave')
    },

    // 设置离开过渡完成时的状态
    leave (el, done) {
      log('> leave')
      done()
    },

    // 设置离开过渡完成后的状态
    afterLeave (el) {
      log('> afterLeave')
    },

    // 只用于v-show中
    leaveCancelled (el) {
      log('> leaveCancelled')
    }
  }
}
```

### 初始渲染

对于JS钩子函数，Vue同样也提供了初始渲染的钩子函数，调用方式如下：

``` html
<transition
  appear
  @before-appear="beforeAppear"
  @appear="appear"
  @after-appear-class="afterAppear"
  @apear-cancelled="appearCancelled">
  <!-- ... -->
</transition>
```

## 多元素组件动画

### 多元素动画

- 如果有2个原生元素，我们可以使用`v-if/v-else`来实现多元素之间的过渡。
- 如果有多个元素(2个以上)，我们可以使用并列的多个`v-if`来实现多个元素的过渡。

**注意：** 如果发送动画的元素标签名相同，注意给需要发生过渡的元素上加上不同的**`key`**值，否则`Vue`只会更新标签的内容。

``` html
<transition
  enter-active-name="animated slideInRight"
  leaveActiveClass="animated slideOutLeft">
  <button v-if="status === 0"
    type="button"
    :key="0">活动未开始</button>
  <button v-if="status === 1" 
    type="button" 
    :key="1">活动进行中</button>
  <button v-if="status === 2" 
  type="button" 
  :key="2">活动已结束</button>
</transition>
```
有时候，我们只需要给元素绑定`key`值，若`key`值发生变化，也可以触发过渡效果。

``` html
<button @click="status++" type="button">点击切换</button>
<transition
  enter-active-name="animated slideInRight"
  leaveActiveClass="animated slideOutLeft">
  <button
    type="button"
    :key="status">{{text}}</button>
</transition>
```

``` js
export default {
  computed: {
    text () {
      return ['活动未开始', '活动进行中', '活动已完成'][this.status % 3]
    }
  },
  data () {
    return {
      status: 0
    }
  }
}
```

### 过渡模式

在我们的动画里，尤其是在使用动画库实现多元素过渡时，常会出现动画重叠的现象。而过渡模式正是为了解决这一问题而提供的API。有两种名过渡模式可以使用：

- **in-out** 新元素先完成过渡，完成之后当前元素过渡离开。(**默认模式**)
- **out-in** 当前元素先完成过渡离开，离开后新元素再过渡进入。

### 多组件过渡

多组件之间过渡，我们可以使用**动态组件**来进行实现。

> Vue-cli创建的项目模板，使用的是*runtime-only*的环境，不支持使用`tenmplate`的模板自定义组件。

``` html
<button slot="ctrl"
    @click="isShow = !isShow"
    style="margin-right: 30px;"
    type="button">切换显示</button>
<transition enter-active-class="animated bounceInRight"
    leave-active-class="animated bounceOutLeft"
    mode="out-in"
    slot="main">
    <!-- 动态组件 -->
    <component :is="circle"></component>
</transition>
```

``` js
import RedCircle from '@/components/Circle/RedCircle'
import BlueCircle from '@/components/Circle/BlueCircle'

export default {

  components: {
    RedCircle,
    BlueCircle
  },

  computed: {

    circle () {
      return this.isShow ? 'red-circle' : 'blue-circle'
    }
  },

  data () {
    return {
      isShow: true
    }
  }
}
```
## 列表过渡
`transition`组件经常用于处理单个、或者同一时间几个节点的运动。而对于整个列表的过渡，（比如使用v-for）产生的，我们就需要使用`<transition-group></transition-group>`来让整个列表实现过渡。

### 基本说明
1. 与`transition`不同的是，`<transition-group></transition-group>`组件会被真实地渲染为**HTML节点**，默认会被渲染为`span`元素，通过指定**tag**属性可以改变渲染的元素。
2. 过渡模式在**列表渲染**中是不可用的，因为我们不再相互切换特有的元素。
3. `<transition-group></transition-group>`组件内部的元素必须有唯一的**key**值。

### 进入离开列表
**！！！注意** 在列表循环的时候，不要把循环的*index*值绑定给**key**，因为`index`不变的元素将不会发生运动。

### 列表排序过渡
普通的列表过渡只有新插入或者移除的元素拥有过渡，周围别的元素的过渡还是瞬间移动到它们布局位置，而不是拥有平滑的过渡。要解决这个问题就需要利用另一个特性**v-move**。

 `v-move`特性会在元素改变定位的过程中应用，和之前的类名一样，它也有如下特性：
 
 1. 可以通过`name`属性来自定义前缀。（若设置`name=“xxx”`，对应存在类名`xxx-move`）
 2. 也可以通过`move-class`属性手动设置自定义类名。

> 绑定列表动画的时候可以绑定`data-index`属性到元素上，访问的时候获取索引

``` html
<ls-section title=“排序过渡”>
  <button slot=“ctrl”
    @click=“add”
    style=“margin-right: 30px;”
    type=“button”>添加</button>
  <button slot=“ctrl”
    @click=“remove”
    type=“button”>删除</button>
  <transition-group slot=“main”
    name=“list2”
    tag=“p”>
    <span v-for=“num in array”
      :key=“num”
      class=“num”>{{num}}</span>
  </transition-group>
</ls-section>
```

``` js
export default {
    data () {
    return {
      array2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
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
```

``` scss
.list2 {

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

// 移除过程中位置固定
.list2-leave-active {
    position: absolute;
}

// 元素定位变化动画
.list2-move {
    transition: all 1s;
}
```
### 时间设置

#### 过渡延迟时间

`animated.css`内置了延时`1s`至`5s`的类，格式为`delay-1s`至`delay-5s`，当然根据自己需要，我们可以自定义别的`过渡延迟时间`，再将对应的类附加到动画元素上即可。

``` css
.delay-10s {
    animation-delay: 10s
}
```
#### 过渡持续时间

> `animate.css`中提供的动画，默认过渡持续时间为**1s**。

不过，它仍然提供了常用的几个持续时间类供我们使用。

- `slow` 动画过渡持续**2s**
- `slower` 动画过渡持续**3s**
- `fast` 动画过渡持续**800ms**
- `faster` 动画过渡持续**500ms**

当然，如果上述提供的持续时间不能满足你的需求，你仍然可以自定义持续时间类来使用。

## 集成Animate.css

首先，需要下载**animate.css**并引入。

``` bash
$ yarn add animate.css

```
然后在`main.js`中引用它。

``` js
// main.js

import ‘animate.css’ // 这里animate.css是依赖的名字
```

### 基本使用

使用`enter-active-class`和`leave-active-class`即可以指定`animate.css`提供的动画类为动画形式。

**注意！！！** 需要在上面的两个类上加`animated`类，或者直接加在过渡元素上面。若为多个元素过渡或者列表过渡的时候，则建议把`animated`类加在Vue的**动画状态类**上。

``` html
<button slot="ctrl"
    @click=“isShow = !isShow”
    type=“button”>切换显示</button>
<transition slot=“main”
    enter-active-class=“zoomIn”
    leave-active-class=“zoomOut”>
    <ls-box v-show=“isShow”
    class=“animated” />
</transition>


<button slot="ctrl"
    @click=“isShow = !isShow”
    type=“button”>切换显示</button>
<transition slot=“main”
    enter-active-class=“animated zoomIn”
    leave-active-class=“animated zoomOut”>
    <ls-box v-show=“isShow” />
</transition>
```
## 结合Vue-router

> 使用了`vue-router`的项目在页面跳转间加上过渡效果，可以让页面切换更加平滑，提升用户体验。

### 基本使用

``` html
<transition enter-active-class="animated fadeInDown"
    leave-active-class=“animated fadeOutUp”
    mode=“out-in”>
    <keep-alive>
      <router-view />
    </keep-alive>
</transition>
```

### 路由切换多种动画

``` js
// router.js

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = {
  mode: 'hash',
  routes: [
    {
      path: '/path1'
      name: 'page1',
      component: () => import('@/views/page1'),
      meta: {
        transitionInName: 'fadeIn',
        transitionOutName: 'fadeOut'
      }
    },

    {
      path: '/path2',
      name: 'page2',
      component: () => import('@/views/page2'),
      meta: {
        transitionInName: 'slideInLeft',
        transitionOutName: 'slideOutRight'
      }
    }
  ]
}

```

``` js
// App.vue 或者别的包含transition组件包括了router-view的文件

export default {
  name: 'App',
  data () {
    return {
      trsInName: 'fadeIn',
      trsOutName: 'fadeOut'
    }
  },
  watch: {
    '$route' (to) {

      let { transitionInName } = to.meta,
          { transitionOutName } = to.meta;

      transitionInName && (this.trsInName = transitionInName)
      transitionOutName && (this.trsOutName = transitionOutName)
    }
  }
}
```

## 参考资料
[Vue.js - Transition过渡动画的使用 系列文章](http://m.hangge.com/news/cache/detail_2134.html)

## 工具

**TOC** Created by [gh-md-toc](https://github.com/ekalinin/github-markdown-toc)
