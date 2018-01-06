import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  // 控制侧边栏导航
  toggleaside: false,
  // 底部图片的路径
  query: require("../assets/img/footer/foot_query_d.png"),
  my: require("../assets/img/footer/foot_my_d.png"),
  home: require('../assets/img/footer/foot_home_s.png')
}

const mutations = {

}

export default new Vuex.Store({
  state,
  mutations
})
