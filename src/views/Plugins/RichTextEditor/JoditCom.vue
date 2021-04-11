<template>
  <div>
    <Jodit ref="joditRef" value=""></Jodit>
    <Row class="mt10">
      <Button class="mr10" type="primary" @click="setContent('by-小屁鸿')">设置内容</Button>
      <Button class="mr10" type="primary" @click="getContent">获取内容</Button>
      {{'现在内容为：'+content}}
    </Row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'JoditCom',
  components: {
    Jodit: () => import('@c/PublicCom/Jodit.vue'),
  },
})
export default class JoditCom extends Vue {
  private content: string = ''
  private setContent(val: string): void {
    ;(this.$refs.joditRef as any).setContent(val)
  }
  private getContent(): void {
    this.content = (this.$refs.joditRef as any).getContent()
  }
}
</script>