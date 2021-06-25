<template>
  <Row class="pd10">
    <Col span="24">
    <h1>$store.state.vueModule.count=：{{$store.state.vueModule.count}}</h1>
    <h1>$store.getters.increaseCount=：{{$store.getters.increaseCount}}</h1>
    <Button type="primary" @click="addNum">使用mutations实现count递增</Button>
    <Button type="primary" @click="actionsAddNum">使用actions异步的实现count递增</Button>
    <Button type="primary" @click="mutationsAddNum">使用mutations异步的实现count递增</Button>
    <p>1.修改状态，遵守使用mutations的方式修改状态</p>
    <p>2.mutations中修改状态只支持同步的方法，若是在mutations中异步的更新状态，vue是追踪不到的（用vue-devtools插件可以呈现出来，vue-devtools中store的内容没有发生改变）</p>
    <p>3.所以为了以后调试方便追踪到状态变化，必须遵循规范：1.action负责异步和业务代码；2.mutation负责同步提交state，单一职责，方便追踪状态变化</p>
    <p>4.用计算属性获取store中的状态，再用watch一起配合可监听到state的改变</p>
    </Col>
  </Row>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
@Component({
  name: 'GettersCom',
  components: {},
})
export default class GettersCom extends Vue {
  //=========================监听state/getters改变
  @Watch('count')
  private watchCount(val: number): void {
    console.log('store中的count变化,为：' + val)
  }
  get count(): number {
    // return this.$store.getters.increaseCount //也可以监听getters中的数据
    return this.$store.state.vueModule.count
  }
  //===========================
  private addNum(): void {
    //mutations修改状态，好处是可以追踪到哪里修改了状态
    this.$store.commit('increaseCount', {
      num: 1,
    })
  }
  private actionsAddNum(): void {
    //使用actions调用mutations中的方法修改状态
    this.$store.dispatch('increaseCount', {
      num: 1,
    })
  }
  private mutationsAddNum(): void {
    //注意：这个mutations中的asyncIncreaseCount是异步的，不规范的操作，vue是监听不到他何时改变的，在vue-devtools是看不到其数据的变化的
    this.$store.commit('asyncIncreaseCount', {
      num: 1,
    })
  }
}
</script>
<style lang="less" scoped>
</style>