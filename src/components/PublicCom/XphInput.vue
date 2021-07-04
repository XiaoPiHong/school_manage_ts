<template>
  <Input v-model="mV" @on-change="myChange($event)"></Input>
</template>
<script lang="ts">
import {
  Component,
  Vue,
  Model,
  Prop,
  Emit,
  Watch,
} from 'vue-property-decorator'
@Component({
  name: 'XphInput',
  components: {},
})
export default class XphInput extends Vue {
  private mV: any = ''
  @Model('change')
  @Prop()
  value!: any
  @Emit('change') changeVal(val: any) {
    return val
  }
  get MyValue(): any {
    return this.mV
  }
  @Watch('MyValue')
  watchMyValue(val: any) {
    this.changeVal(val) //更新父组件的值
  }
  private myChange(e: any) {
    let val = e.target.value
    this.$nextTick(() => {
      if (
        (isNaN(Number(e.data)) && e.data !== '.') ||
        val.split('.').length - 1 > 1 ||
        val === '.'
      ) {
        this.$set(this, 'mV', '')
      } else if (
        Number(val < 0) ||
        Number(val > 10000000000000) ||
        e.data === ' ' ||
        isNaN(Number(val))
      ) {
        this.$set(this, 'mV', 0)
      } else if (
        (val[0] === '.' && val[1] !== '.' && val.length > 1) ||
        (val[0] === '0' && val[1] !== '.' && val.length > 1)
      ) {
        this.$set(this, 'mV', Number(val))
      } else if (
        val.indexOf('.') > 0 &&
        val.length - (val.indexOf('.') + 1) > 2
      ) {
        this.$set(this, 'mV', val.slice(0, val.indexOf('.') + 3))
      } else {
        this.$set(this, 'mV', val)
      }
    })
  }
  mounted() {
    this.mV = this.value
  }
}
</script>
<style lang="less" scoped>
</style>