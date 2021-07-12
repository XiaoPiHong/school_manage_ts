<template>
  <Row class="pd10">
    <Col span="24">
    <p><a download href="http://localhost:3000/img/table_render_1.dd0bb72f.png">点击下载同源的图片</a></p>
    <p>1.a标签的download属性，只支持同源下载</p>
    <hr>
    <p><a download href="https://img0.baidu.com/it/u=2517394238,2890851596&fm=26&fmt=auto&gp=0.jpg">点击下载非同源的图片</a></p>
    <p>1.a标签的download属性，下载非同源图片，download属性会失效，从而变成跳转</p>
    <hr>
    <button @click="download('https://img0.baidu.com/it/u=2517394238,2890851596&fm=26&fmt=auto&gp=0.jpg')">通过Blob完成图片的下载</button>
    <p>1.Blob表示二进制类型的大对象（input框上传文件的File对象就是基于Blob实现的）</p>
    <p>2.Blob对象可以存储二进制数据，可以把他看成是一个存储二进制文件的容器</p>
    <p>3.通过Blob可实现下载文件</p>
    <p>4.生成Blob对象有两种方法，1.通过Blob构造函数；2.通过Blob的slice方法从一个Blob对象中切割出一个新的Blob对象</p>
    </Col>
  </Row>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'BlobCom',
  components: {},
})
export default class BlobCom extends Vue {
  private download(url: string) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.responseType = 'blob'
    xhr.send()
    xhr.onload = function () {
      const fileBlob = xhr.response
      console.log('获取到的blob二进制数据', fileBlob)
      //将Blob转成url地址
      const fileUrl = URL.createObjectURL(fileBlob)
      console.log('blob转成的url', fileUrl)
      const elementA = document.createElement('a')
      elementA.setAttribute('href', fileUrl)
      elementA.innerHTML = '下载'
      elementA.setAttribute('download', '')
      elementA.click()
    }
  }
}
</script>
<style lang="less" scoped>
</style>