<template>
  <Row class="pd10">
    <Col span="24">
    <h1>v-model的原理</h1>
    <BaseInput v-model="baseValue"></BaseInput>
    <br>
    <BaseInput :value="baseValue" @input="baseValue=$event"></BaseInput>
    {{'BaseInput组件中的值为：'+baseValue}}
    <p>1.一个组件上的 v-model 默认会利用名为 value 的 prop 和名为 input 的事件，但是像单选框、复选框等类型的输入控件可能会将 value attribute 用于不同的目的。</p>
    </Col>
    <Col span="24">
    <h1>自定义组件的v-model</h1>
    <BaseCheckbox v-model="baseChecked"></BaseCheckbox>
    <br>
    <BaseCheckbox :checked="baseChecked" @change="baseChecked=$event"></BaseCheckbox>
    {{'BaseCheckbox组件中的值为：'+baseChecked}}
    <p>1.如果要自定义组件的v-model就要借助model属性来完成</p>
    <h1>封装Input组件</h1>
    <XphInput style="width:200px;" v-model="xphValue" :placeholder="'请输入数字'" :size="'small'" :accurate="1" :max="5"></XphInput>
    {{'XphInput组件中的值为：'+xphValue}}
    </Col>
  </Row>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'VmodelCom',
  components: {
    BaseInput: () => import('@v/Vue/Instruction/BaseInput.vue'),
    BaseCheckbox: () => import('@v/Vue/Instruction/BaseCheckbox.vue'),
    XphInput: () => import('@c/PublicCom/XphInput.vue'),
  },
})
export default class VmodelCom extends Vue {
  private baseValue: string = 'xiaopihong'
  private baseChecked: boolean = true

  private xphValue: string | number = 0
}
</script>
<style lang="less" scoped>
</style>