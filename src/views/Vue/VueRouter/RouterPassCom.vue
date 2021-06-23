<template>
  <Row class="pd10">
    <Col span="24">
    <h1>一、路由模式</h1>
    <p>1.路由一共有两种模式：1.history模式；2.hash模式。</p>
    <p>2.两种路由最主要的区别是hash路由带一个#。</p>
    <p>3.而要使用history路由还需要运维的配合（如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，也就是说匹配任何路由都应该返回的是index.html页面，这个页面就是你 app 依赖的页面），否则会返回 404 错误。</p>
    <p>4.history利用的是 HTML5 History Interface 中新增的 【pushState()】 和 【replaceState()】 和 【onpopstate()监听浏览器前进后退】方法来进行视图渲染。</p>
    <p>5.hash模式路由原理是利用了浏览器的【onhashchange()监听浏览器location.hash的变化】方法来进行视图渲染。</p>
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
    <Col span="24">
    <h1>四、路由跳转</h1>
    <router-link :to="{name:'JoditCom',query:{name:'test',age:11}}" tag="Button">router-link跳转(query传参)</router-link>
    <router-link :to="{name:'TestRouterParamsCom',params:{name:'test',age:11}}" tag="Button">router-link跳转(params传参)</router-link>
    <router-link :to="{name:'JoditCom',query:{name:'test',age:11}}" replace tag="Button">router-link replace 跳转(query传参)</router-link>
    <br>
    <Button type="primary" @click="goOtherPage(1)">push的query传参跳转</Button>
    <Button type="primary" @click="goOtherPage(2)">push的params传参跳转</Button>
    <br>
    <Button type="success" @click="goOtherPage(3)">replace的query传参跳转</Button>
    <Button type="success" @click="goOtherPage(4)">replace的params传参跳转</Button>
    </Col>
    <Col span="24">
    <h1>五、路由参数获取</h1>
    <p>1.query方式传递的参数可以直接在页面中：this.$route.query.xxx来获取</p>
    <p>2.params方式传递的参数可以直接在页面中：this.$route.params.xxx来获取</p>
    <div>
      3.在router对象中使用props属性：
      <div class="ml10">
        1、在路由中设置：
        <div class="ml10">
          (1)props:true；
          <br>
          (2)props:{键名1:true,键名2:false}; 当true时传递对应参数；
          <br>
          (3)props:($route)=>( {接收键名:$route.query.参数键名 })；
        </div>
        2、在路由对应组件中：
        <p class="ml10">props:['键名']；</p>
        3、调用：
        <p class="ml10">直接使用键名,和组件参数使用一样；</p>
      </div>
    </div>
    </Col>
  </Row>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'RouterPassCom',
  components: {},
})
export default class RouterPassCom extends Vue {
  private goOtherPage(index: number): void {
    switch (index) {
      case 1:
        this.$router.push({
          name: 'JoditCom',
          query: { name: 'test', age: '11' },
        })
        break
      case 2:
        this.$router.push({
          name: 'TestRouterParamsCom',
          params: { name: 'test', age: '11' },
        })
        break
      case 3:
        this.$router.replace({
          name: 'JoditCom',
          query: { name: 'test', age: '11' },
        })
        break
      case 4:
        this.$router.replace({
          name: 'TestRouterParamsCom',
          params: { name: 'test', age: '11' },
        })
        break
    }
  }
}
</script>
<style lang="less" scoped>
</style>