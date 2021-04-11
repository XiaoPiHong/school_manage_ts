<template>
  <Row class="mt10">
    <textarea :id="joditId"></textarea>
  </Row>
</template>
<script lang="ts">
import 'jodit/build/jodit.min.css'
const { Jodit } = require('jodit/build/jodit.js')
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'JoditC',
  components: {},
})
export default class JoditC extends Vue {
  @Prop() domHeight?: number //高度
  @Prop() readOnly?: boolean //只读
  private joditId: string = `jodit${String(new Date().getTime())}` //编辑器id
  private JoditEdt: any //jodit配置
  private mounted(): void {
    this.JoditEdt = new Jodit(`#${this.joditId}`, {
      width: '100%',
      height: this.domHeight || 500,
      toolbarAdaptive: false, //工具栏是否自适应，默认true
      language: 'zh_cn',
      minHeight: 500,
      readonly: this.readOnly,
      maxHeight: this.domHeight || 500,
      //其中图片上传默认是以base64编码的形式存储的,这样的话,在一边文档中有许多图片,就会使得文档变大,不利于存储及显示,我们要改成路径存储在文档中（更多的配置看源码config_1.Config.prototype.uploader对象）
      // uploader: {
      //   url: 'http://localhost:8181/index-test.php?action=fileUpload', //一般是oss文件上传服务器的地址，设置了该属性才能支持文件拖拽上传
      //   headers: null, //请求头设置
      //   isSuccess: function () {}, //请求成功的方法
      //   getMessage: function () {}, //获取图片转换后的路径方法
      //   defaultHandlerSuccess: function () {}, //编辑器中插入图片url图片的方法
      // },
    })
  }
  //设置内容
  private setContent(text: string): void {
    this.JoditEdt.value = text
  }
  //获得内容
  private getContent(): void {
    return this.JoditEdt.value
  }
}
</script>
<style lang="less" scoped>
</style>