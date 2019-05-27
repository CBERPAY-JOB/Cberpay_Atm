import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import i18n from './locales'

//  全局样式
import './assets/styles/global.scss'
import './assets/iconfont/iconfont.css'

// 引入elementUI
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/display.css'

import './plugins/flexible.js'

// 引入请求方法
import { post, fetch, patch, put } from './utils/http'
Vue.prototype.$post = post
Vue.prototype.$fetch = fetch
Vue.prototype.$patch = patch
Vue.prototype.$put = put

Vue.config.productionTip = false

const router = new Router()

new Vue({
  router,
  i18n,
  render: h => h(App),
  mounted () {
    // Prevent blank screen in Electron builds
    this.$router.push('/')
  }
}).$mount('#app')
