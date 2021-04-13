<template>
  <Row>

    <Button type="primary" @click="test">点击请求</Button>

    <table>
      <tr v-for="(item,index) in list">
        <td class="pd10" :style="{'background-color':item.isSelect?'red':''}"><Input @mousedown.pervent.native="mouseDown(item,index,'title')" v-model="item.title"></Input></td>
        <td class="pd10"><Input v-model="item.sex"></Input></td>
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
  private mounted(): void {
    document.addEventListener('keydown', this.docKeyDown, false)
    document.addEventListener('keyup', this.docKeyUp, false)
  }
  private list: any = [
    {
      title: '1',
      sex: '男',
      isSelect: false,
    },
    {
      title: '1',
      sex: '男',
      isSelect: false,
    },
    {
      title: '1',
      sex: '男',
      isSelect: false,
    },
    {
      title: '1',
      sex: '男',
      isSelect: false,
    },
  ]
  private isShift: boolean = false
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
  private mouseDown(row: any, index: number, type: string): void {
    if (this.isShift == true) {
      if (this.firstClickTitle === '') {
        this.$set(row, 'isSelect', true)
        this.$set(this, 'firstClickTitle', `${index}`)
        return
      }
      if (this.firstClickTitle !== '') {
        if (index > Number(this.firstClickTitle)) {
          for (let i = 0; i < this.list.length; i++) {
            if (i >= Number(this.firstClickTitle) && i <= index) {
              this.$set(this.list[i], 'isSelect', true)
            } else {
              this.$set(this.list[i], 'isSelect', false)
            }
          }
        } else if (index == Number(this.firstClickTitle)) {
          for (let i = 0; i < this.list.length; i++) {
            this.$set(this.list[i], 'isSelect', false)
            this.$set(this, 'firstClickTitle', '')
          }
        } else if (index < Number(this.firstClickTitle)) {
          for (let i = 0; i < this.list.length; i++) {
            if (i <= Number(this.firstClickTitle) && i >= index) {
              this.$set(this.list[i], 'isSelect', true)
            } else {
              this.$set(this.list[i], 'isSelect', false)
            }
          }
        }
      }
    }
  }
  private firstClickTitle: string = ''
  private checkIsHasSelect(where: string, index: number, type: string): void {}
  private docKeyDown(e: any): void {
    this.isShift = true
    console.log(this.isShift)
  }
  private docKeyUp(e: any): void {
    this.isShift = false
    console.log(this.isShift)
  }
}
</script>
<style lang="less" scoped>
.pd10 {
  padding: 10px;
}
</style>