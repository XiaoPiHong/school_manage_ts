<template>
  <div>
    <h1>测试路由params方式传参页</h1>
    <h1>{{'props获取到的参数：name='+myname+'，age='+myage}}</h1>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({
  name: 'TestRouterParamsCom',
  components: {},
})
export default class TestRouterParamsCom extends Vue {
  @Prop() myname!: string
  @Prop() myage!: string
}
</script>
<style lang="less" scoped>
</style>