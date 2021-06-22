<template>
  <Row class="pd10">
    <Col span="24">
    <h1>一、路由模式：</h1>
    <p>1.路由一共有两种模式：1.history模式；2.hash模式。</p>
    <p>2.两种路由最主要的区别是hash路由带一个#。</p>
    <p>3.而要使用history路由还需要后台的配合（如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面），否则会返回 404 错误。</p>
    <p>4.history利用的是 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法。</p>
    </Col>
    <Col span="24">
    <h1>二、路由传参的方式</h1>
    <p>1.query传参:<span class="f-color-red">/login?id=10&name=zs</span>，这种方式不用改变路由的path属性</p>
    <p>2.params传参:<span class="f-color-red">/login/12/ls</span>，这种方式需要改变路由的path属性，需要改写成：path: '/login/:id/:name'</p>
    <p>this.$router.push({name:'xxx',query:{}}),this.$route.query.xxx访问</p>
    <p>this.$router.push({path:'xxx',query:{}}),this.$route.query.xxx访问</p>
    <p>this.$router.push({name:'xxx',params:{}}),this.$route.params.xxx访问,使用params传参时只能使用name属性，不能使用path属性</p>
    </Col>
    <Col span="24">
    <h1>三、$router和$route</h1>
    <p>1.router是VueRouter的一个对象，通过Vue.use(VueRouter)和VueRouter构造函数得到一个router的实例对象，这个对象中是一个全局的对象，他包含了所有的路由包含了许多关键的对象和属性。</p>
    <p>2.route是一个跳转的路由对象，每一个路由都会有一个route对象，是一个局部的对象，可以获取对应的name,path,params,query等。</p>
    </Col>
  </Row>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'RouterPassCom',
  components: {},
})
export default class RouterPassCom extends Vue {}
</script>
<style lang="less" scoped>
</style>