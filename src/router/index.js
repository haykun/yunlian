import Vue from 'vue'
import Router from 'vue-router'

import LoginComponent from '../page/login/login.vue'

import HomeComponent from '../page/home/home.vue'
import PeisongCompnent from '../page/peisong/peisong.vue'
import YichangComponent from '../page/yichang/yichang.vue'
import TaskComponent from '../page/task/task.vue'

import MeCompontent from '../page/me/me.vue'

import LssueCompontent from '../page/peisong/lssue.vue' //签发页面
import SignCompontent from '../page/peisong/sign.vue' //签收页面
import SetUpCompontent from '../page/setUp/set.vue' //设置页面
import HelpCompontent from '../page/help/help.vue' //帮助中心
import HistoryCompontent from '../page/history/history.vue' //历史记录
import WayBillCompontent from '../page/waybill/waybill.vue' //运单管理
Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [{
      path: '/',
      name: 'login',
      component: LoginComponent //登录界面
    },
    {
      path: '/home',
      name: 'home',
      component: HomeComponent, //主页
      children: [{
        path: '/estate',
        name: 'esate',
        component: PeisongCompnent //配送中
      }, {
        path: '/usual',
        name: 'usual',
        component: YichangComponent //异常单
      }, {
        path: '/task',
        name: 'task',
        component: TaskComponent //新任务
      }]
    },
    {
      path: '/me',
      name: 'me',
      component: MeCompontent //我的
    },
    {
      path: '/lssue',
      name: 'lssue',
      component: LssueCompontent //签发
    },
    {
      path: '/sign',
      name: 'sign',
      component: SignCompontent //签收
    },
    {
      path: '/setup',
      name: 'setup',
      component: SetUpCompontent
    },
    {
      path: '/help',
      name: 'help',
      component: HelpCompontent
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryCompontent
    },
    {
      path: '/waybill',
      name: 'waybill',
      component: WayBillCompontent,
      // children:[{

      // }]
    }
  ]
})
