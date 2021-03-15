<template>
  <Row>
    <Col span="4">
    <h2>需求：值一改变触发表单验证</h2>
    <p>注意：</p>
    <p>1.校验规则formRules中的校验目标一定要有对应的prop与其匹配，不然会报错</p>
    <p>2.表单的resetFields方法可以清空表单的内容还有之前的校验信息（下拉框需要特别对待）</p>
    <p>3.表单的validate方法是验证整个表单，验证部分表单用validateField方法</p>
    </Col>
    <Col span="20">
    <Form :model="form" :rules="formRules" ref="formRef" @submit.native.prevent>
      <FormItem prop="startTime">
        <DatePicker v-model="form.startTime" type="datetime" format="yyyy-MM-dd HH:mm:ss" @on-change="changeTime" confirm placeholder="开始时间" />
      </FormItem>
      <FormItem prop="endTime">
        <DatePicker v-model="form.endTime" type="datetime" format="yyyy-MM-dd HH:mm:ss" @on-change="changeTime" confirm placeholder="结束时间" />
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
  name: 'ValidateForm',
  components: {},
})
export default class ValidateForm extends Vue {
  //重置
  private resetForm(): void {
    ;(this.$refs.formRef as any).resetFields()
  }

  private validateTime(rule: any, value: string, callback: any): void {
    let startTime = +new Date(this.form.startTime)
    let endTime = +new Date(this.form.endTime)
    let currentTime = +new Date()
    if (startTime > endTime) {
      callback(new Error('开始时间不能晚于结束时间'))
    }

    if (startTime > currentTime) {
      callback(new Error('开始时间不能晚于当前时间'))
    }

    if ((startTime && !endTime) || (endTime && !startTime)) {
      callback(new Error('请选择开始时间和结束时间'))
    }
    callback()
  }

  //监听时间改变
  private changeTime(): void {
    ;(this.$refs.formRef as any).validate()
  }

  private form: Interface.ValidateForm = new Interface.ValidateForm()

  private formRules: any = {
    startTime: [{ validator: this.validateTime, trigger: 'change' }],
    endTime: [{ validator: this.validateTime, trigger: 'change' }],
  }
}
</script>