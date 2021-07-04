<template>
  <input type="text" :value="value" @input="myInput">
  <!-- 1.这里的@input是监听input输入框的改变事件 -->
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
@Component({
  name: 'BaseInput',
  components: {},
})
export default class BaseInput extends Vue {
  @Prop() value!: string
  @Emit('input') myInput(e: any) {
    return e.target.value
  }

  //本来可以这样写的，元素上就需要这样写：@input="handleInput"，@Emit()也可省略
  // private handleInput(e: any): void {
  //   this.$emit('input', e.target.value)
  // }
}
</script>
<style lang="less" scoped>
</style>