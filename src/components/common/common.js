//编写自己的公共组件库
import HeaderCompontent from './header.vue'
import LoginCompontent from './loginHeader.vue'
import FooterCompontent from './footer.vue'
import AsideCompontent from './aside.vue'
import CommonHeader from './commonHeader.vue'
import VueQArt from 'vue-qart'

export default {
  install(Vue) {
    Vue.component('app-header', HeaderCompontent),
      Vue.component('app-login', LoginCompontent),
      Vue.component('app-footer', FooterCompontent),
      Vue.component('app-aside', AsideCompontent),
      Vue.component('app-comhed', CommonHeader),
      Vue.component('VueQArt',VueQArt)
  }
};
