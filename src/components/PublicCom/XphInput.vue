<template>
  <Input v-model="mV" @on-change="myChange($event)" :size="size" :placeholder="placeholder" :disabled="disabled"></Input>
</template>
<script lang="ts">
import { Component, Vue, Model, Prop, Emit, Watch, } from 'vue-property-decorator'
@Component({
  name: 'XphInput',
  components: {},
})
export default class XphInput extends Vue {
  private mV: any = ''
  @Model('change')
  @Prop()
  readonly value!: any

  @Prop({ type: Number, default: 99999999999 })
  readonly max!: number //最大值(默认最大百亿)

  @Prop({ type: Number, default: 0 })
  readonly accurate!: number //精确值

  @Prop({ type: String, default: 'default' })
  readonly size!: string

  @Prop({ type: String })
  readonly placeholder!: string

  @Prop({ type: Boolean, default: false })
  readonly disabled!: boolean

  @Emit('change')
  changeVal(val: any) {
    return val
  }
  get MyValue(): any {
    return this.mV
  }
  @Watch('MyValue')
  watchMyValue(val: any) {
    //更新父组件的值
    val === '' ? this.changeVal(val) : this.changeVal(Number(val))
  }
  @Watch('value')
  watchValue(val: any) {
    this.mV = String(val)
  }
  private myChange(e: any) {
    let val = e.target.value
    this.$nextTick(() => {
      if ( (isNaN(Number(e.data)) && e.data !== '.') || val.split('.').length - 1 > 1 || val === '.' ) {
        this.$set(this, 'mV', '')
      } else if ( Number(val < 0) || Number(val > 99999999999) || e.data === ' ' || isNaN(Number(val)) ) {
        this.$set(this, 'mV', '0')
      } else if (Number(val > this.max)) {
        this.$set(this, 'mV', String(this.max))
      } else if ( (val[0] === '.' && val[1] !== '.' && val.length > 1) || (val[0] === '0' && val[1] !== '.' && val.length > 1) ) {
        this.$set(this, 'mV', String(Number(val)).slice(0, 2 + this.accurate))
      } else if ( val.indexOf('.') > 0 && val.length - (val.indexOf('.') + 1) > this.accurate ) {
        this.$set( this, 'mV', val.slice(0, val.indexOf('.') + this.accurate + 1) )
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