// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import 'common/stylus/index.styl'
import axios from 'axios'
import store from './store'
import {AlertPlugin, LoadingPlugin} from 'vux'

Vue.use(AlertPlugin)
Vue.use(LoadingPlugin)
axios.defaults.timeout = 4000
axios.interceptors.request.use(conf => {
  Vue.$vux.loading.show({
    text: 'Loading'
  })
  return conf
})
axios.interceptors.response.use((response) => {
  Vue.$vux.loading.hide()
  return response
}, (error) => {
  Vue.$vux.loading.hide()
  Vue.$vux.alert.show({
    title: '警告',
    content: '请求失败!'
  })
  return Promise.reject(error)
})
Vue.prototype.$axios = axios

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  data: {
    loginInfo: {},
    state: {
      submit: {}
    }
  },
  store,
  router,
  render: h => h(App)
}).$mount('#app-box')
