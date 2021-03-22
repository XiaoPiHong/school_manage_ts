<template>
  <Row>
    <Col span="6">
    <p>1.Input组件中的<span style="color:red;">type="number"</span>属性，是限制只能输入数字，但是(- e . 等符号是可以输入的，但是可能只是视图层改变，真正绑定的变量是没有改变)</p>
    <p>2.iview表单规则中<span style="color:red;">type: 'number'</span>属性，是检查该输入框中变量的类型是否为数字类型</p>
    <p>3.iview的Input组件，就算一开始就给其一个数字的类型，且给初始值，但是在改变内容的时候，其类型会自动变成字符串类型，所以在表单规则中使用<span style="color:red;">type: 'number'</span>，就一定要确保绑定的变量类型为数字类型</p>
    </Col>
    <Col span="1">

    </Col>
    <Col span="17">
    <Form :model="form" :rules="formRules" ref="formRef" :label-width="150" inline @submit.native.prevent>
      <FormItem label="数字" prop="num">
        <Input v-model="form.num" placeholder="请输入数字" type="number" @on-change="changeNum"></Input>
      </FormItem>
      <FormItem>
        <span>输入框值的类型为：{{typeof(form.num)}}</span>
        <span>输入框值为：{{form.num}}</span>
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
  name: 'InputCom',
  components: {},
})
export default class InputCom extends Vue {
  //重置
  private resetForm(): void {
    ;(this.$refs.formRef as any).resetFields()
  }

  private changeNum(e: any): void {
    if (e.data === 'e' || e.data === '-') {
      this.form.num = 0
      this.$nextTick(() => {
        this.form.num = ''
      })
      return
    } else if (
      (this.form.num as string).indexOf('0') !==
        (this.form.num as string).lastIndexOf('0') &&
      (this.form.num as string)[0] === '0'
    ) {
      this.form.num = ''
      this.$nextTick(() => {
        this.form.num = 0
      })
      return
    }
    this.form.num = this.form.num === '' ? '' : Number(this.form.num)
  }

  private form: Interface.InputComForm = new Interface.InputComForm()

  private formRules: any = {
    num: [
      {
        required: true,
        type: 'number',
        message: '请输入正数',
        trigger: 'change',
      },
    ],
  }
}
</script>