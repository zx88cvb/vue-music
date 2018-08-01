import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import 'common/stylus/index.styl'

fastclick.attach(document.body)

Vue.config.productionTip = false

Vue.prototype.HOST = '/api'

/* Vue懒加载图片 */
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('common/image/error.jpg'),
  loading: require('common/image/loading.jpg'),
  attempt: 1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
