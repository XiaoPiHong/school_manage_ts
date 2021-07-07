<template>
  <Row class="pd10">
    <Col span="10">
    <h1>1.v-model的原理</h1>
    <BaseInput v-model="baseValue"></BaseInput>
    <br>
    <BaseInput :value="baseValue" @input="baseValue=$event"></BaseInput>
    {{'BaseInput组件中的值为：'+baseValue}}
    <p>1.一个组件上的 v-model 默认会利用名为 value 的 prop 和名为 input 的事件，但是像单选框、复选框等类型的输入控件可能会将 value attribute 用于不同的目的。</p>
    <br>

    <h1>2.自定义组件的v-model</h1>
    <BaseCheckbox v-model="baseChecked"></BaseCheckbox>
    <br>
    <BaseCheckbox :checked="baseChecked" @change="baseChecked=$event"></BaseCheckbox>
    {{'BaseCheckbox组件中的值为：'+baseChecked}}
    <p>1.如果要自定义组件的v-model就要借助model属性来完成</p>
    <br>

    <h1>3.二次封装Input组件</h1>
    <XphInput style="width:200px;" v-model="xphValue" :accurate="1" :max="5"></XphInput>
    {{'XphInput组件中的值为：'+xphValue}}
    </Col>
    <Col span="2">

    </Col>
    <Col span="12">
    <h1>4.Vue在表单使用v-model注意点</h1>
    <h3>在{{}}中的内容无换行问题</h3>
    <textarea v-model="text"></textarea>
    <p>{{text}}</p>
    <p style="white-space:pre-line;" class="f-color-red">{{text}}</p>
    <p>1.上面在textarea中输入回车，而在第一个{{}}中的内容没有回车是一个样式的问题，只要加上white-space:pre-line;即可。</p>
    <hr>
    <h3>多选框的双向绑定</h3>
    <input type="checkbox" id="apple" value="苹果" v-model="checkboxVal">
    <label for="apple">苹果</label>
    <input type="checkbox" id="sydney" value="雪梨" v-model="checkboxVal">
    <label for="sydney">雪梨</label>
    <input type="checkbox" id="watermelon" value="西瓜" v-model="checkboxVal">
    <label for="watermelon">西瓜</label>
    <p>{{checkboxVal}}</p>
    <hr>
    <h3>单选框的双向绑定</h3>
    <input type="radio" id="watermelon1" value="西瓜" v-model="radioVal">
    <label for="watermelon1">西瓜</label>
    <input type="radio" id="sydney1" value="雪梨" v-model="radioVal">
    <label for="sydney1">雪梨</label>
    <p>{{radioVal}}</p>
    <hr>
    <h3>下拉框的双向绑定</h3>
    <select v-model="selectVal" multiple>
      <option disabled value="">请选择</option>
      <option>77</option>
      <option>88</option>
      <option>99</option>
    </select>
    <p>{{selectVal}}</p>
    <p>1.下拉选择框要给他一个空的默认值</p>
    <p>2.可以多选的话需给select添加multiple属性</p>
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

  private text: string = '测试'

  private checkboxVal: [] = []
  private radioVal: string = ''
  private selectVal: [] = []
}
</script>
<style lang="less" scoped>
</style>