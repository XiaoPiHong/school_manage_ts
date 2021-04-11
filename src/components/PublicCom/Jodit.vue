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