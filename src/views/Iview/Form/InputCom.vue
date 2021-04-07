<template>
  <Row>
    <Col span="6">
    <p>1.Input组件中的<span class="f-color-red">type="number"</span>属性，是限制只能输入数字，但是(- e . 等符号是可以输入的，但是可能只是视图层改变，真正绑定的变量是没有改变)</p><br>
    <p>2.iview表单规则中<span class="f-color-red">type: 'number'</span>属性，是检查该输入框中变量的类型是否为数字类型</p><br>
    <p>3.iview的Input组件，就算一开始就给其一个数字的类型，且给初始值，但是在改变内容的时候，其类型会自动变成字符串类型，所以在表单规则中使用<span class="f-color-red">type: 'number'</span>，就一定要确保绑定的变量类型为数字类型</p><br>
    <p>4.Input组件的<span class="f-color-red">number</span>属性，作用是将输入框的内容转为number类型</p><br>
    <p>5.iview2.x的Input组件不支持<span class="f-color-red">type="number"</span>，因为该版本中该组件type可选值没有number，只有（text、password、textarea、url、email、date）</p>
    </Col>
    <Col span="1">

    </Col>
    <Col span="17">
    <Form :model="form" :rules="formRules" ref="formRef" :label-width="150" inline @submit.native.prevent>
      <FormItem label="数字" prop="num">
        <Input v-model="form.num" placeholder="请输入数字" type="number" @on-change="ValidateNumber($event,'num',form)"></Input>
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

  //验证[0,1]且只能保留三位小数
  private ValidateNumber(Event: any, name: string, variable: any) {
    if (Event.data === 'e' || Event.data === '-') {
      this.$set(variable, name, 0)
      this.$nextTick(() => {
        this.$set(variable, name, '')
      })
    } else if (Number(Event.target.value >= 1)) {
      this.$set(variable, name, '')
      this.$nextTick(() => {
        this.$set(variable, name, 1)
      })
    } else if (Number(Event.target.value < 0)) {
      this.$nextTick(() => {
        this.$set(variable, name, 0)
      })
    } else if (
      Event.target.value.indexOf('0') !== Event.target.value.lastIndexOf('0') &&
      Event.target.value[0] === '0' &&
      Event.target.value[1] != '.'
    ) {
      this.$nextTick(() => {
        this.$set(variable, name, 0)
      })
    } else {
      if (
        Event.target.value.indexOf('.') > -1 &&
        Event.target.value.length - 2 > 3
      ) {
        let newStr =
          Math.floor(Number.parseFloat(Event.target.value) * 1000) / 1000 //Number.parseFloat(Event.target.value).toFixed(3)//保留三位小数的方法，目前使用的不四舍五入，注释的会四舍五入
        this.$nextTick(() => {
          this.$set(variable, name, Number(newStr))
        })
      }
    }
  }

  private form: Interface.InputComForm = new Interface.InputComForm()

  private formRules: any = {
    //由于该例子可能为字符串或数字类型，所以该字段不能用type的表单校验规则来校验是否为对应类型
    // num: [
    //   {
    //     required: true,
    //     type: 'number',
    //     message: '请输入[0,1]的数字，且最多保留3位小数',
    //     trigger: 'change',
    //   },
    // ],
  }
}
</script>