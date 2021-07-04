<template>
  <input type="checkbox" :checked="checked" @change="myChange">
  <!-- 1.这里的@change是监听input框的change事件 -->
</template>
<script lang="ts">
import { Component, Vue, Model, Emit } from 'vue-property-decorator'
@Component({
  name: 'BaseCheckbox',
  components: {},
})
export default class BaseCheckbox extends Vue {
  @Model('change', { type: Boolean }) readonly checked!: boolean //被 readonly 标记的属性只能在声明时或类的构造函数中赋值。
  @Emit('change') myChange(e: any) {
    return e.target.checked
  }
}
</script>
<style lang="less" scoped>
</style>