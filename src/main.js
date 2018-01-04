import Vue from 'vue'
import App from './App'
import router from './router'

//引入第三方包
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import './css/reset.css';
import axios from 'axios';
//引入lib-flexible进行屏幕适配
import './js/flexible'
import "./components/stylus/mixins.styl";



//引入自己封装的组件
import common from './components/common/common.js'


//手动启用插件
Vue.use(Mint);
Vue.use(common);


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
  template: '<App/>',
  components: { App }
})
