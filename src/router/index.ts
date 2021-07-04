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
  {
    path: '/Error404',
    name: 'Error404',
    component: () => import('@v/Main/404.vue')
  },
  //iview知识模块
  {
    path: '/Iview',
    redirect: '/Error404',
    component: () => import('@v/Main/Home.vue'),
    children: [{
      path: 'ValidateForm',
      name: 'ValidateForm',
      component: () => import('@v/Iview/Form/ValidateForm.vue')
    }, {
      path: 'SelectCom',
      name: 'SelectCom',
      component: () => import('@v/Iview/Form/SelectCom.vue')
    }, {
      path: 'InputCom',
      name: 'InputCom',
      component: () => import('@v/Iview/Form/InputCom.vue')
    }, {
      path: 'InputNumberCom',
      name: 'InputNumberCom',
      component: () => import('@v/Iview/Form/InputNumberCom.vue')
    }, {
      path: 'RenderCom',
      name: 'RenderCom',
      component: () => import('@v/Iview/Table/RenderCom.vue')
    }]
  },
  //插件模块
  {
    path: '/Plugins',
    redirect: '/Error404',
    component: () => import('@v/Main/Home.vue'),
    children: [{
      path: 'JoditCom',
      name: 'JoditCom',
      component: () => import('@v/Plugins/RichTextEditor/JoditCom.vue')
    }, {
      path: 'HistogramCom',
      name: 'HistogramCom',
      component: () => import('@v/Plugins/Echart/HistogramCom.vue')
    }, {
      path: 'AxiosCom',
      name: 'AxiosCom',
      component: () => import('@v/Plugins/Axios/AxiosCom.vue')
    }]
  },
  //JavaScript模块
  {
    path: '/JavaScript',
    redirect: '/Error404',
    component: () => import('@v/Main/Home.vue'),
    children: [{
      path: 'AsyncCom',
      name: 'AsyncCom',
      component: () => import('@v/JavaScript/ES7/AsyncCom.vue')
    }, {
      path: 'JudgmentTypeCom',
      name: 'JudgmentTypeCom',
      component: () => import('@v/JavaScript/ES5/JudgmentTypeCom.vue')
    }]
  },
  //Vue模块
  {
    path: '/Vue',
    redirect: '/Error404',
    component: () => import('@v/Main/Home.vue'),
    children: [{
      path: 'RouterPassCom',
      name: 'RouterPassCom',
      component: () => import('@v/Vue/VueRouter/RouterPassCom.vue')
    }, {
      path: 'VuexCom',
      name: 'VuexCom',
      component: () => import('@v/Vue/Vuex/VuexCom.vue')
    }, {
      path: 'VmodelCom',
      name: 'VmodelCom',
      component: () => import('@v/Vue/Instruction/VmodelCom.vue')
    }]
  },
  {//测试路由传参
    path: '/TestRouterParamsCom/:name/:age',
    name: 'TestRouterParamsCom',
    component: () => import('@v/Vue/VueRouter/TestRouterParamsCom.vue'),
    props: ($route) => ({
      myname: $route.params.name,
      myage: $route.params.age
    })
  },
  //404页面，写在最后
  {
    path: '*',
    redirect: '/Error404',
    component: () => import('@v/Main/404.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
