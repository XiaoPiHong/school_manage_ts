<template>
  <Row class="mt10">
    <Col :span="24">
    <Table :columns="cols" :data="data"></Table>
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
  private data: any[] = [
    {
      Id: 1,
      cols2: 'test',
      cols3: 'test',
      cols4: '',
    },
    {
      Id: 1,
      cols2: 'test',
      cols3: 'test',
      cols4: '',
    },
    {
      Id: 1,
      cols2: 'test',
      cols3: 'test',
      cols4: '',
    },
    {
      Id: 1,
      cols2: 'test',
      cols3: 'test',
      cols4: '',
    },
    {
      Id: 1,
      cols2: 'test',
      cols3: 'test',
      cols4: '',
    },
  ]
  private cols: any[] = [
    { title: 'Id', key: 'Id' },
    { title: '列2', key: 'cols2' },
    { title: '列3', key: 'cols3' },
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
  private changeSelect(val: any, index: number) {
    this.data[index].col4 = val
  }
}
</script>
<style lang="less" scoped>
</style>