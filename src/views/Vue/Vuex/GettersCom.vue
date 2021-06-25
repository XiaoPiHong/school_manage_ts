<template>
  <Row class="pd10">
    <Col span="24">
    <h1>$store.state.vueModule.count=：{{$store.state.vueModule.count}}</h1>
    <h1>$store.getters.increaseCount=：{{$store.getters.increaseCount}}</h1>
    <Button type="primary" @click="addNum">使用mutations实现count递增</Button>
    <Button type="primary" @click="actionsAddNum">使用actions异步的实现count递增</Button>
    <Button type="primary" @click="mutationsAddNum">使用mutations异步的实现count递增</Button>
    </Col>
    <Col span="24">
    <p>1.修改状态，遵守使用mutations的方式修改状态</p>
    <p>2.mutations中修改状态只支持同步的方法，里面异步的操作vue监听不到的，用vue-devtools可以呈现出来</p>
    </Col>
  </Row>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'GettersCom',
  components: {},
})
export default class GettersCom extends Vue {
  private mounted(): void {
    console.log(this.$store)
  }
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