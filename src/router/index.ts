import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/Index'
  },
  {
    path: '/Index',
    name: 'Index',
    component: () => import('@v/Main/Home.vue')
  },
  //iview知识模块
  {
    path: '/Iview',
    component: () => import('@v/Main/Home.vue'),
    children: [{
      path: '/ValidateForm',
      name: 'ValidateForm',
      component: () => import('@v/Iview/Form/ValidateForm.vue')
    }, {
      path: '/SelectCom',
      name: 'SelectCom',
      component: () => import('@v/Iview/Form/SelectCom.vue')
    }, {
      path: '/InputCom',
      name: 'InputCom',
      component: () => import('@v/Iview/Form/InputCom.vue')
    }, {
      path: '/InputNumberCom',
      name: 'InputNumberCom',
      component: () => import('@v/Iview/Form/InputNumberCom.vue')
    }]
  },
  //插件模块
  {
    path: '/Plugins',
    component: () => import('@v/Main/Home.vue'),
    children: [{
      path: '/JoditCom',
      name: 'JoditCom',
      component: () => import('@v/Plugins/RichTextEditor/JoditCom.vue')
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
