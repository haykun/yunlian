import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  // 控制侧边栏导航
  toggleaside: false
}

const mutations = {

}

export default new Vuex.Store({
  state,
  mutations
})
