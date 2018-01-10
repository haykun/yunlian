import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  // 控制侧边栏导航
  toggleaside: false,
  // 底部图片的路径
  query: require("../assets/img/footer/foot_query_d.png"),
  my: require("../assets/img/footer/foot_my_d.png"),
  home: require('../assets/img/footer/foot_home_s.png'),
  messageBox: false,
  dropBox: false, //控制下拉弹框
  modifyBox: false, //控制修改货物弹框
  codeShow: false, //控制二维码弹框
}

const mutations = {

}

export default new Vuex.Store({
  state,
  mutations
})
