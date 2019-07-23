import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/common/common.css'
import store from './store'

import '@/api/config'
import '@/lib/index'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
