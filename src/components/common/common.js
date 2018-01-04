//编写自己的公共组件库
import HeaderCompontent from './header.vue'
import LoginCompontent from './loginHeader.vue'
import FooterCompontent from './footer.vue'
export default {
    install(Vue) {
        Vue.component('app-header',HeaderCompontent),
        Vue.component('app-login',LoginCompontent),
        Vue.component('app-footer',FooterCompontent)
    }
};