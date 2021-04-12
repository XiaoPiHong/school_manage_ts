<template>
  <Button type="primary" @click="test">点击请求</Button>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'AxiosCom',
  components: {},
})
export default class AxiosCom extends Vue {
  private test(): void {
    ;(this as any).$http
      .post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone',
      })
      .then(function (response: any) {
        console.log(response)
      })
      .catch(function (error: any) {
        console.log(error)
      })
  }
}
</script>
<style lang="less" scoped>
</style>