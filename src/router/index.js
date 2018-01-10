import Vue from 'vue'
import Router from 'vue-router'

import LoginComponent from '../page/login/login.vue' //登录

import HomeComponent from '../page/home/home.vue' //首页
import PeisongCompnent from '../page/peisong/peisong.vue' //配送
import YichangComponent from '../page/yichang/yichang.vue' //异常
import TaskComponent from '../page/task/task.vue'
import CheckCompontent from '../page/check/check.vue' //查单页面
import WatchCompontent from '../page/task/watchDetail' //查看详情
import MeCompontent from '../page/me/me.vue' //我的

import LssueCompontent from '../page/peisong/lssue.vue' //签发页面
import SignCompontent from '../page/peisong/sign.vue' //签收页面
import UadeCompontent from '../page/peisong/uate.vue' //评价页面
// 侧边栏
import SetUpCompontent from '../page/setUp/set.vue' //设置页面
import HelpCompontent from '../page/help/help.vue' //帮助中心
import HistoryCompontent from '../page/history/history.vue' //历史记录
import WayBillCompontent from '../page/waybill/waybill.vue' //运单管理
import WayAllCompontent from '../page/waybill/wayall.vue' //全部运单
import NotWatCompontent from '../page/waybill/notsign.vue' //未签收
import ToSignCompontent from '../page/waybill/tosign.vue' //已签收
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
        },
        {
          path: '/usual',
          name: 'usual',
          component: YichangComponent //异常单
        },
        {
          path: '/task',
          name: 'task',
          component: TaskComponent //新任务
        }
      ]
    },
    {
      path: '/check',
      name: 'check',
      component: CheckCompontent
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
      component: SetUpCompontent //设置
    },
    {
      path: '/help',
      name: 'help',
      component: HelpCompontent //帮助中心
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryCompontent //历史任务
    },
    {
      path: '/waybill',
      name: 'waybill',
      component: WayBillCompontent, //运单管理
      children: [{
        path: '/wayall',
        name: 'wayall',
        component: WayAllCompontent
      }, {
        path: '/waynot',
        name: 'waynot',
        component: NotWatCompontent //未签收
      }, {
        path: '/wayyes',
        name: 'wayyes',
        component: ToSignCompontent //已签收
      }]
    },
    {
      path: '/watch',
      name: 'watchDetail',
      component: WatchCompontent //查看详情
    },
    {
      path: '/uate',
      name: 'uate',
      component: UadeCompontent //评价页面
    }
  ]
})
