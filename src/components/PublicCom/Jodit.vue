<template>
  <Row>
    <textarea :id="joditId"></textarea>
  </Row>
</template>
<script lang="ts">
import 'jodit/build/jodit.min.css'
const { Jodit } = require('jodit/build/jodit.js')
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'JoditC',
  components: {},
})
export default class JoditC extends Vue {
  private joditId: string = `jodit${String(new Date().getTime())}` //富文本编辑器id
  private JoditEdt: any //jodit配置

  private mounted(): void {
    this.JoditEdt = new Jodit(`#${this.joditId}`, {
      height: '500px',
    })
  }
}
</script>
<style lang="less" scoped>
</style>