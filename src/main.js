import Vue from 'vue'
import 'animate.css'
import '@/scss/style'

import Components from './components'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(Components)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  ...App
}).$mount('#app')
