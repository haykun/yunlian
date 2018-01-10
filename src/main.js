import Vue from 'vue'
import App from './App'
import router from './router'

//引入第三方包
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import './css/reset.css';
import axios from 'axios';
//侧滑导航栏插件
import DrawerLayout from 'vue-drawer-layout'
//引入lib-flexible进行屏幕适配
import './js/flexible'
import "./components/stylus/mixins.styl";
//引用字体图标文件
import './css/icon/iconfont.css'
import './css/icon1/iconfont.css'
//手写签名插件
import vueSignature from "vue-signature"


//引入自己封装的组件,或第三方插件
import common from './components/common/common.js'
import store from './vuex/store.js'

//手动启用插件
Vue.use(Mint);
Vue.use(common);
Vue.use(DrawerLayout);
Vue.use(vueSignature);

//解决移动端点击300ms延迟
import FastClick from 'fastclick';
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body);
  }, false);
}

Vue.config.productionTip = false

//扩展实例成员
Vue.prototype.axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
