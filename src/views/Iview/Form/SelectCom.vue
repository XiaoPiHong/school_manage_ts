<template>
  <Row>
    <Col span="5">
    <p>1.下拉组件中绑定的值一定要是下拉数据中存在的值，否则清空后会变成undefined</p>
    <p>2.要想用表单的resetFields方法清空表单<span style="color:red;">并重置</span>（包括：下拉、输入框等），必须给FormItem绑定prop属性,且必须对应其绑定的变量名称</p>
    <p>3.下拉的clearable属性可以使其清空，但是清空后默认是''，因为下拉中没有该选项，所有会为undefined</p>
    </Col>
    <Col span="1">
    </Col>
    <Col span="18">
    <Form :model="form" ref="formRef" @submit.native.prevent inline>
      <FormItem prop="text">
        <Input v-model="form.text" placeholder="请输入内容"></Input>
      </FormItem>
      <FormItem prop="city">
        <Select v-model="form.city" clearable filterable placeholder="请选择城市">
          <Option v-for="item in list" :value="item.value" :key="item.key">{{item.key}}</Option>
        </Select>
      </FormItem>
      <br>
      <FormItem>
        {{'输入框绑定的值为：'+form.text}}
      </FormItem>
      <FormItem>
        {{'下拉组件绑定的值为：'+form.city}}
      </FormItem>
      <Button type="warning" @click="resetForm">重置</Button>
    </Form>
    </Col>
  </Row>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Interface from '@/assets/Interface/Iview'
import Pnterface from '@/assets/Interface/Public'

@Component({
  name: 'SelectCom',
  components: {},
})
export default class SelectCom extends Vue {
  //重置
  private resetForm(): void {
    ;(this.$refs.formRef as any).resetFields()
  }

  private form: Interface.SelectComForm = new Interface.SelectComForm()

  private list: Pnterface.KeyValue[] = [
    { key: '请选择城市', value: 0 },
    { key: '广州', value: 1 },
    { key: '佛山', value: 2 },
  ]
}
</script>
<style lang="less" scoped>
</style>