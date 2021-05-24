<template>
  <Row>
    <Button type="primary" @click="test">点击请求</Button>
    <div class="box">
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>sex</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in list" :key="index" draggable="true" @dragstart="dragstart(item)" @dragend="dragend(item)" @dragenter="dragenter(item)">
            <td class="pd10"><Input v-model="item.sex"></Input></td>
            <td class="pd10"><Input v-model="item.title"></Input></td>
          </tr>
        </tbody>
      </table>
    </div>
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
    {
      title: '4',
      sex: 'gay',
    },
    {
      title: '4',
      sex: 'gay',
    },
    {
      title: '4',
      sex: 'gay',
    },
    {
      title: '4',
      sex: 'gay',
    },
    {
      title: '4',
      sex: 'gay',
    },
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
    {
      title: '4',
      sex: 'gay',
    },
    {
      title: '4',
      sex: 'gay',
    },
    {
      title: '4',
      sex: 'gay',
    },
    {
      title: '4',
      sex: 'gay',
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
.box {
  border: 1px solid #dcdee2;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
  height: 500px;
}

table {
  border-spacing: 0;
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
  text-align: center;

  td,
  th {
    padding: 6px;
    min-width: 100px;
  }
  td {
    border: 1px solid #dcdee2;
  }

  thead tr th {
    position: sticky;
    top: 0;
    z-index: 2;
    background-color: #dcdee2;
  }

  thead tr:nth-child(1) {
    // 禁止拖拽
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
}
</style>