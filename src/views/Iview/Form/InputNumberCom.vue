<template>
  <Row>
    <Col span="6">
    <p>1.这里一开始给其绑定的值为null，所以一开始typeof检验出的类型为object，这个是js历史遗留问题，将null作为object类型处理</p><br>
    <p>2.在iview的2.x中，InputNumber的on-change事件在数据改变后内容为空时是不会触发的，而且其值会默认变为null</p><br>
    <p>3.在iview的4.x中，InputNumber的on-change事件在数据改变后都会触发，要注意的是（- .）在输入的时候只会改变视图，但是绑定的值的不会改变的，而且不会触发on-change事件，但是（- .）在删除后会触发on-change事件</p>
    </Col>
    <Col span="1">

    </Col>
    <Col span="17">
    <Form :model="form" :rules="formRules" ref="formRef" inline @submit.native.prevent>
      <FormItem prop="num">
        <InputNumber @on-change="valChange" v-model="form.num"></InputNumber>
      </FormItem>
      <FormItem>
        {{`绑定的值为：${form.num}，类型为：${typeof(form.num)}`}}
      </FormItem>
      <FormItem>
        {{str}}
      </FormItem>
      <Button type="warning" @click="resetForm">重置</Button>
    </Form>
    </Col>
  </Row>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Interface from '@/assets/Interface/Iview'

@Component({
  name: 'InputNumberCom',
  components: {},
})
export default class InputNumberCom extends Vue {
  //重置
  private resetForm(): void {
    this.str = ''
    ;(this.$refs.formRef as any).resetFields()
  }

  private valChange(val: any): void {
    this.str += '触发了on-change  '
  }

  private form: Interface.InputNumberForm = new Interface.InputNumberForm()

  private str: string = '' //验证是否触发了InputNumber的on-change事件

  private formRules: any = {}
}
</script>