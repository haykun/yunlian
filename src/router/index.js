import Vue from 'vue'
import Router from 'vue-router'

import LoginComponent from '../page/login/login.vue'

import HomeComponent from '../page/home/home.vue'
import PeisongCompnent from '../page/peisong/peisong.vue'
import YichangComponent from '../page/yichang/yichang.vue'
import TaskComponent from '../page/task/task.vue'

import MeCompontent from '../page/me/me.vue'

import LssueCompontent from '../page/peisong/lssue.vue'
Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginComponent   //登录界面
    },
    {
      path:'/home',
      name:'home',
      component:HomeComponent,    //主页
      children:[{
        path:'/estate',
        name:'esate',
        component:PeisongCompnent   //配送中
      },{
        path:'/usual',
        name:'usual',
        component:YichangComponent    //异常单
      },{
        path:'/task',
        name:'task',
        component:TaskComponent     //新任务
      }]
    },
    {
      path:'/me',
      name:'me',
      component:MeCompontent  //我的
    },
    {
      path:'/lssue',
      name:'lssue',
      component:LssueCompontent
    }
  ]
})
