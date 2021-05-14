<template>
  <Row class="mt10">
    <Col :span="12">
    <div>
      <img src="@/assets/Images/note/async_1.png" alt="async_1.png">
    </div>
    <div>
      <p>1.使用async的方法返回的是一个promise对象，如果该方法没有返回值，默认是undefined</p>
      <p>2.这里的原理涉及到了js的事件循环机制（Event Loop）</p>
      <p>3.await后面的代码，会等到其他的代码执行完了，再被（Event Loop）机制去执行</p>
      <p>4.用await可以解析promise对象，拿到它的值</p>
    </div>
    <div>
      <Button type="primary" @click="btn1_clickEvent">点击按钮,控制台查看输出顺序</Button>
    </div>
    </Col>
    <Col :span="12">
    <div>
      <img src="@/assets/Images/note/async_2.png" alt="async_2.png">
    </div>
    <div>
      <p>1.每一个await后的代码，都是等待前面所有的代码都执行完了，再被（Event Loop）机制去执行</p>
      <p>2. .then()里面的代码，就相当于是await后面的代码，也是被（Event Loop）机制去执行</p>
    </div>
    <div>
      <Button type="primary" @click="btn2_clickEvent">点击按钮,控制台查看输出顺序</Button>
    </div>
    </Col>
  </Row>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'AsyncCom',
  components: {},
})
export default class Com extends Vue {
  private async btn1_test() {
    console.log('test开始了') //2
    let result = await this.btn1_test2()
    console.log('result', result) //5
    console.log('test结束了') //6
  }
  private async btn1_test2() {
    console.log('test2 输出') //3
  }
  private btn1_clickEvent() {
    console.log('点击开始') //1
    this.btn1_test()
    console.log('点击结束') //4
  }
  //====================================

  private async btn2_test() {
    console.log('test开始了') //2
    let result = await this.btn2_test2()
    let result3 = await this.btn2_test3().then(
      (res) => console.log('.then()输出', res) //6
    )
    console.log('result', result) //7
    console.log('test结束了') //8
    console.log('result3', result3) //9
    console.log('test3结束了') //10
  }
  private async btn2_test2() {
    console.log('test2 输出') //3
  }
  private async btn2_test3() {
    console.log('test3 输出') //5
  }
  private btn2_clickEvent() {
    console.log('点击开始') //1
    this.btn2_test()
    console.log('点击结束') //4
  }
}
</script>
<style lang="less" scoped>
</style>