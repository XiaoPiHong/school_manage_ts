<template>
  <Row class="mt10 mb10">
    <Col :span="24" class="mt10">
    <Button type="primary" @click="test">点击获取表格数据</Button>
    </Col>
    <Col :span="24" class="mt10">
    <Table :columns="cols" :data="data" :height="400"></Table>
    </Col>
    <Col :span="24" class="mt10">
    <div style="display:flex;">
      <div style="flex:1;">
        <p>1.iview2.x在Table组件中使用render函数渲染Input或Select或InputeNumber组件,每当改变表格数据时，都会引发整个表格渲染（就会引发输入时失焦问题）</p>
        <p>2.<span class="f-color-red">解决上述问题的办法就是：</span>先更新params.row.xxx，再将tableData进行整行更新。这样就不会导致Table进行重新渲染。</p>
        <img src="../../../assets/Images/note/table_render_1.png" alt="">
      </div>
      <div style="flex:1;">
        <p>3.<span class="f-color-red">注意：</span>如果当用户需要对tableData进行监控，采用上面的方法会导致vue无法监控到tableData内数据的变化（实际上是发生了变化），这样我们不能通过常规的watch或者时computer对数据进行监控。<span
            class="f-color-red">解决方法：</span>采用html的失去焦点事件，当Input组件失去焦点时，对某个数据进行更新，从而达到数据一致。</p>
        <img src="../../../assets/Images/note/table_render_2.png" alt="">
      </div>
    </div>
    </Col>
    <Col :span="24">
    <p>4.iview4.x使用Table组件，改变表格数据时，不会发生整个表格重新渲染的问题，所以不会产生像2.x那样的问题</p>
    <p>5.以上问题可以观看文章：<a href="https://blog.csdn.net/weixin_38881817/article/details/85112887" target="_blank">点击跳转</a></p>
    </Col>
  </Row>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Interface from '@/assets/Interface/Iview'
import XphInput from '@c/PublicCom/XphInput.vue'
@Component({
  name: 'RenderCom',
  components: {},
})
export default class Com extends Vue {
  private mounted(): void {}
  private test(): void {
    console.log(this.data)
  }
  private data: Interface.RenderComList[] = [
    {
      Id: 1,
      cols2: 'test',
      cols3: '',
      cols4: '',
      cols5: '',
    },
    {
      Id: 1,
      cols2: 'test',
      cols3: '',
      cols4: '',
      cols5: '',
    },
    {
      Id: 1,
      cols2: 'test',
      cols3: '',
      cols4: '',
      cols5: '',
    },
    {
      Id: 1,
      cols2: 'test',
      cols3: '',
      cols4: '',
      cols5: '',
    },
    {
      Id: 1,
      cols2: 'test',
      cols3: '',
      cols4: '',
      cols5: '',
    },
    {
      Id: 1,
      cols2: 'test',
      cols3: '',
      cols4: '',
      cols5: '',
    },
    {
      Id: 1,
      cols2: 'test',
      cols3: '',
      cols4: '',
      cols5: '',
    },
    {
      Id: 1,
      cols2: 'test',
      cols3: '',
      cols4: '',
      cols5: '',
    },
    {
      Id: 1,
      cols2: 'test',
      cols3: '',
      cols4: '',
      cols5: '',
    },
    {
      Id: 1,
      cols2: 'test',
      cols3: '',
      cols4: '',
      cols5: '',
    },
  ]
  private cols: any[] = [
    { title: 'Id', key: 'Id' },
    //iview 2.x 在Table中使用Input=====================
    {
      title: '列2',
      key: 'cols2',
      render: (h: any, params: any) => {
        return h('Input', {
          props: {
            value: params.row.clos2,
            placeholder: '请输入内容',
          },
          on: {
            'on-change': (e: any) => {
              params.row.clos2 = e.target.value
              this.data[params.row._index] = params.row
            },
          },
        })
      },
    },
    //iview 4.x 在Table中使用Input=====================
    {
      title: '列3',
      key: 'cols3',
      render: (h: any, params: any) => {
        return h('Input', {
          props: {
            value: params.row.cols3,
          },
          on: {
            'on-change': (e: any) => {
              // e row name 最大值 允许最大位数
              this.validateNumber(
                e,
                this.data[params.row._index],
                'cols3',
                99,
                1
              )
            },
            input: (value: string) => {
              this.changeInput(value, params.row._index)
            },
            'on-blur': () => {
              if (this.data[params.row._index].cols3 === '') return
              this.$set(
                this.data[params.row._index],
                'cols3',
                parseFloat(this.data[params.row._index].cols3)
              )
            },
          },
        })
      },
    },
    //iview 4.x/2.x 在Table中使用Select===================
    {
      title: '列4',
      key: 'cols4',
      render: (h: any, params: any) => {
        return h(
          'Select',
          {
            props: {
              placeholder: '请选择内容',
              filterable: true,
              clearable: true,
              value: params.row.cols4,
            },
            on: {
              'on-change': (e: any) => {
                this.changeSelect(e, params.row._index)
              },
            },
          },
          [
            this.selectDropList.map((item) =>
              h(
                'Option',
                {
                  props: {
                    value: item.Value,
                  },
                },
                item.Key
              )
            ),
          ]
        )
      },
    },
    //iview 4.x/2.x 在Table中使用二次封装的Input组件
    {
      title: '列5',
      key: 'cols5',
      render: (h: any, params: any) => {
        return h(XphInput, {
          props: {
            value: params.row.cols5,
            accurate: 2,
            max: 9999.99,
          },
          on: {
            change: (e: any) => {
              params.row.cols5 = e
              this.data[params.row._index] = params.row
            },
          },
        })
      },
    },
  ]
  private selectDropList: any[] = [
    {
      Key: '测试1',
      Value: 1,
    },
    {
      Key: '测试2',
      Value: 2,
    },
    {
      Key: '测试3',
      Value: 3,
    },
  ]
  private changeInput(val: string, index: number): void {
    this.data[index].cols3 = val
  }
  private changeSelect(val: any, index: number) {
    this.data[index].cols4 = val
  }
  // [0,max(最大值为99999999999999)]的数字，最多[1,bitNumber]位小数
  private validateNumber(
    event: any,
    row: any,
    type: string,
    max: number,
    bitNumber: number
  ) {
    let val = event.target.value
    this.$nextTick(() => {
      if (
        (isNaN(Number(event.data)) && event.data !== '.') ||
        val.split('.').length - 1 > 1 ||
        val === '.'
      ) {
        this.$set(row == 1 ? this : row, type, '')
      } else if (
        Number(val < 0) ||
        Number(val > 99999999999999) ||
        event.data === ' ' ||
        isNaN(Number(val))
      ) {
        this.$set(row == 1 ? this : row, type, 0)
      } else if (Number(val > max)) {
        this.$set(row == 1 ? this : row, type, max)
      } else if (
        (val[0] === '.' && val[1] !== '.' && val.length > 1) ||
        (val[0] === '0' && val[1] !== '.' && val.length > 1)
      ) {
        this.$set(
          row == 1 ? this : row,
          type,
          String(Number(val)).slice(0, 2 + bitNumber)
        )
      } else if (
        val.indexOf('.') > 0 &&
        val.length - (val.indexOf('.') + 1) > bitNumber
      ) {
        this.$set(
          row == 1 ? this : row,
          type,
          val.slice(0, val.indexOf('.') + bitNumber + 1)
        )
      } else {
        this.$set(row == 1 ? this : row, type, val)
      }
    })
  }
}
</script>
<style lang="less" scoped>
</style>