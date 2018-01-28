import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: {},
    tabbarShow: false,
    app: {
      tabbarFlag: false,
      badgeFlag: true
    }
  },
  getters: {},
  actions: {},
  mutations: {
    appBadgeFlagToggle (state, flag) {
      state.app.badgeFlag = !state.app.badgeFlag
    }
  }
})
