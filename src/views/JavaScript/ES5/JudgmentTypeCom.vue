<template>
  <Row class="pd10">
    <Col :span="24">
    <img src="../../../assets/Images/note/judgment_type_1.png" alt="">
    </Col>
    <Col :span="24">
    <h1 style="text-align:center;" class="f-color-red">1.typeof验证</h1>
    <div style="display:flex;">
      <div style="flex:1;">
        <p>typeof(str) =》 {{typeof(str)}} =》 <span class="f-color-red"> string 可有效验证</span></p>
        <p>typeof(num) =》 {{typeof(num)}} =》 <span class="f-color-red"> number 可有效验证</span></p>
        <p>typeof(date) =》 {{typeof(date)}} =》 <span class="f-color-red"> object 无效验证</span></p>
        <p>typeof(obj) =》 {{typeof(obj)}} =》 <span class="f-color-red"> object 无效验证</span></p>
        <p>typeof(arr) =》 {{typeof(arr)}} =》 <span class="f-color-red"> object 无效验证</span></p>
        <p>typeof(NUll) =》 {{typeof(NUll)}} =》 <span class="f-color-red"> object 无效验证</span></p>
        <p>typeof(UNDEFINED) =》 {{typeof(UNDEFINED)}} =》 <span class="f-color-red"> undefined 可有效验证</span></p>
        <p>typeof(boo) =》 {{typeof(boo)}} =》 <span class="f-color-red"> boolean 可有效验证</span></p>
        <p>typeof(SYMBOL) =》 {{typeof(SYMBOL)}} =》 <span class="f-color-red"> symbol 可有效验证</span></p>
        <p>typeof(func) =》 {{typeof(func)}} =》 <span class="f-color-red"> function 可有效验证</span></p>
        <p>typeof(REGEXP) =》 {{typeof(REGEXP)}} =》 <span class="f-color-red"> object 无效验证</span></p>
      </div>
      <div style="flex:1;">
        <h2>理解：</h2>
        <p>1.typeof 是一个操作符，其右侧跟一个一元表达式，并返回这个表达式的数据类型。返回的结果用该类型的字符串(全小写字母)形式表示，包括以下 7 种：number、boolean、symbol、string、object、undefined、function 等。</p>
        <p>2.null 有属于自己的数据类型 Null ， 引用类型中的 数组、日期、正则 也都有属于自己的具体类型，而 typeof 对于这些类型的处理，只返回了处于其原型链最顶端的 Object 类型，没有错，但不是我们想要的结果。</p>
      </div>
    </div>
    </Col>
    <Col :span="24">
    <h1 style="text-align:center;" class="f-color-red">2.instanceof验证</h1>
    <div style="display:flex;">
      <div style="flex:1;">
        <h2>理解：</h2>
        <img src="../../../assets/Images/note/judgment_type_2.png" alt="">
        <h2>认识：</h2>
        <img src="../../../assets/Images/note/judgment_type_3.png" alt="">
      </div>
    </div>
    </Col>
    <Col :span="24">
    <h1 style="text-align:center;" class="f-color-red">3.Object.prototype.toString.call()验证</h1>
    <div style="display:flex;">
      <div style="flex:1;">
        <h2>理解：</h2>
        <p>1.toString() 是 Object 的原型方法，调用该方法，默认返回当前对象的 [[Class]] 。这是一个内部属性，其格式为 [object Xxx] ，其中 Xxx 就是对象的类型。</p>
        <p>2.对于 Object 对象，直接调用 toString() 就能返回 [object Object] 。而对于其他对象，则需要通过 call / apply 来调用才能返回正确的类型信息。</p>
        <p>Object.prototype.toString.call(str) =》 {{Object.prototype.toString.call(str)}} =》 <span class="f-color-red"> [object String] 可有效验证</span></p>
        <p>Object.prototype.toString.call(num) =》 {{Object.prototype.toString.call(num)}} =》 <span class="f-color-red"> [object Number] 可有效验证</span></p>
        <p>Object.prototype.toString.call(date) =》 {{Object.prototype.toString.call(date)}} =》 <span class="f-color-red"> [object Date] 可有效验证</span></p>
        <p>Object.prototype.toString.call(obj) =》 {{Object.prototype.toString.call(obj)}} =》 <span class="f-color-red"> [object Object] 可有效验证</span></p>
        <p>Object.prototype.toString.call(arr) =》 {{Object.prototype.toString.call(arr)}} =》 <span class="f-color-red"> [object Array] 可有效验证</span></p>
        <p>Object.prototype.toString.call(NUll) =》 {{Object.prototype.toString.call(NUll)}} =》 <span class="f-color-red"> [object Null] 可有效验证</span></p>
        <p>Object.prototype.toString.call(UNDEFINED) =》 {{Object.prototype.toString.call(UNDEFINED)}} =》 <span class="f-color-red"> [object Undefined] 可有效验证</span></p>
        <p>Object.prototype.toString.call(boo) =》 {{Object.prototype.toString.call(boo)}} =》 <span class="f-color-red"> [object Boolean] 可有效验证</span></p>
        <p>Object.prototype.toString.call(SYMBOL) =》 {{Object.prototype.toString.call(SYMBOL)}} =》 <span class="f-color-red"> [object Symbol] 可有效验证</span></p>
        <p>Object.prototype.toString.call(func) =》 {{Object.prototype.toString.call(func)}} =》 <span class="f-color-red"> [object Function] 可有效验证</span></p>
        <p>Object.prototype.toString.call(REGEXP) =》 {{Object.prototype.toString.call(REGEXP)}} =》 <span class="f-color-red"> [object RegExp] 可有效验证</span></p>
      </div>
    </div>
    </Col>
    <Col :span="24">
    <h1 style="text-align:center;" class="f-color-red">4.constructor验证</h1>
    <p>1.per.__proto__.constructor == Person</p>
    <p>2.per.__proto__.constructor == Person.prototype.constructor</p>
    <p>3.per.constructor == Person</p>
    <p>4.constructor这种方式来检验不提倡，因为如果改变原型的指向后，构造器也会发生改变，而且还可以手动修改构造器，所以用构造器来判断不是很好</p>
    </Col>
  </Row>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'JudgmentTypeCom',
  components: {},
})
export default class JudgmentTypeCom extends Vue {
  private str: any = ''
  private num: any = 1
  private date: any = new Date()
  private obj: any = {}
  private arr: any = []
  private NUll: any = null
  private UNDEFINED: any = undefined
  private boo: any = true
  private SYMBOL: any = Symbol()
  private func: any = new Function()
  private REGEXP: any = new RegExp('\\w+')
}
</script>
<style lang="less" scoped>
</style>