<template>
  <Row class="pd10">
    <Col span="24">
    <h1>$store.state.vueModule.count=：{{$store.state.vueModule.count}}</h1>
    <h1>$store.getters.increaseCount=：{{$store.getters.increaseCount}}</h1>
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
}
</script>
<style lang="less" scoped>
</style>