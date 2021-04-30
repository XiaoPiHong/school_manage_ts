<template>
  <Row>
    <Button type="primary" @click="test">点击请求</Button>
    <table border="1">
      <tr v-for="(item,index) in list" :key="index" draggable="true" @dragstart="dragstart(item)" @dragend="dragend(item)" @dragenter="dragenter(item)">
        <td class="pd10">{{item.title}}</td>
        <td class="pd10">{{item.sex}}</td>
      </tr>
    </table>
  </Row>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'AxiosCom',
  components: {},
})
export default class AxiosCom extends Vue {
  private oldItem: any
  private newItem: any
  private dragend(row: any): void {
    if (this.oldItem != this.newItem) {
      let oldIndex = this.list.indexOf(this.oldItem)
      let newIndex = this.list.indexOf(this.newItem)
      let newItems = [...this.list]
      // 删除老的节点
      newItems.splice(oldIndex, 1)
      // 在列表中目标位置增加新的节点
      newItems.splice(newIndex, 0, this.oldItem)

      newItems.findIndex((item) => item === newIndex)
      this.list = [...newItems]
    }
  }
  private dragstart(row: any): void {
    this.oldItem = row
  }
  private dragenter(row: any): void {
    this.newItem = row
  }

  private list: any = [
    {
      title: '1',
      sex: '男',
    },
    {
      title: '2',
      sex: '女',
    },
    {
      title: '3',
      sex: '男',
    },
    {
      title: '4',
      sex: 'gay',
    },
  ]
  private test(): void {
    ;(this as any).$erphttp
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