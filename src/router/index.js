import Vue from 'vue'
import Router from 'vue-router'

import LoginComponent from '../page/login/login.vue'

import HomeComponent from '../page/home/home.vue'
import PeisongCompnent from '../page/peisong/peisong.vue'
import YichangComponent from '../page/yichang/yichang.vue'
import TaskComponent from '../page/task/task.vue'

import MeCompontent from '../page/me/me.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginComponent
    },
    {
      path:'/home',
      name:'home',
      component:HomeComponent,
      children:[{
        path:'/estate',
        name:'esate',
        component:PeisongCompnent
      },{
        path:'/usual',
        name:'usual',
        component:YichangComponent
      },{
        path:'/task',
        name:'task',
        component:TaskComponent
      }]
    },
    {
      path:'/me',
      name:'me',
      component:MeCompontent
    }
  ]
})
