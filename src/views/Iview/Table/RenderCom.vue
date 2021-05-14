<template>
  <Row class="mt10">
    <Col :span="24" class="mt10">
    <Table :columns="cols" :data="data" :height="400"></Table>
    </Col>
    <Col :span="24" class="mt10">
    <Button type="primary" @click="test">test</Button>
    </Col>
  </Row>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'RenderCom',
  components: {},
})
export default class Com extends Vue {
  private mounted(): void {}
  private test(): void {
    console.log(this.data)
  }
  private data: any[] = [
    {
      Id: 1,
      cols2: 'test',
      cols3: '',
      cols4: '',
    },
    {
      Id: 1,
      cols2: 'test',
      cols3: '',
      cols4: '',
    },
    {
      Id: 1,
      cols2: 'test',
      cols3: '',
      cols4: '',
    },
    {
      Id: 1,
      cols2: 'test',
      cols3: '',
      cols4: '',
    },
    {
      Id: 1,
      cols2: 'test',
      cols3: '',
      cols4: '',
    },
    {
      Id: 1,
      cols2: 'test',
      cols3: '',
      cols4: '',
    },
    {
      Id: 1,
      cols2: 'test',
      cols3: '',
      cols4: '',
    },
    {
      Id: 1,
      cols2: 'test',
      cols3: '',
      cols4: '',
    },
    {
      Id: 1,
      cols2: 'test',
      cols3: '',
      cols4: '',
    },
    {
      Id: 1,
      cols2: 'test',
      cols3: '',
      cols4: '',
    },
  ]
  private cols: any[] = [
    { title: 'Id', key: 'Id' },
    { title: '列2', key: 'cols2' },
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
              this.validateNumber(e, this.data[params.row._index], 'cols3')
            },
            input: (value: string) => {
              this.changeInput(value, params.row._index)
            },
          },
        })
      },
    },
    {
      title: '列4',
      key: 'cols4',
      render: (h: any, params: any) => {
        return h(
          'Select',
          {
            props: {
              placeholder: '请选择刊登模板',
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
  private validateNumber(event: any, row: any, type: string) {
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
        Number(val > 10000000000000) ||
        event.data === ' ' ||
        isNaN(Number(val))
      ) {
        this.$set(row == 1 ? this : row, type, 0)
      } else if (
        (val[0] === '.' && val[1] !== '.' && val.length > 1) ||
        (val[0] === '0' && val[1] !== '.' && val.length > 1)
      ) {
        this.$set(row == 1 ? this : row, type, Number(val))
      } else if (
        val.indexOf('.') > 0 &&
        val.length - (val.indexOf('.') + 1) > 3
      ) {
        this.$set(
          row == 1 ? this : row,
          type,
          val.slice(0, val.indexOf('.') + 4)
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