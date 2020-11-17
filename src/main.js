import Vue from 'vue'
import App from './App.vue'
/**
 * 引入路由生态
 */
import router from './router'
Vue.config.productionTip = false

/**
 * 事件总线
 */
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
