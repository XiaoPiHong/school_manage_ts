<template>
  <Row>
    <div id="main" style="height:500px;width:600px;"></div>
  </Row>
</template>
<script lang="ts">
const echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/line')
require('echarts/lib/component/tooltip')
require('echarts/lib/chart/bar')
require('echarts/theme/macarons')
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'HistogramCom',
  components: {},
})
export default class HistogramCom extends Vue {
  //假数据
  private data: any = [
    {
      ReportDate: '2021-03-27',
      OrderCount: 2438,
      AmountCount: 27685.517,
    },
    {
      ReportDate: '2021-03-28',
      OrderCount: 1602,
      AmountCount: 20048.743,
    },
    {
      ReportDate: '2021-03-29',
      OrderCount: 1533,
      AmountCount: 21409.663,
    },
    {
      ReportDate: '2021-03-30',
      OrderCount: 1696,
      AmountCount: 25014.709,
    },
    {
      ReportDate: '2021-03-31',
      OrderCount: 1899,
      AmountCount: 29553.744,
    },
    {
      ReportDate: '2021-04-01',
      OrderCount: 1865,
      AmountCount: 28838.309,
    },
    {
      ReportDate: '2021-04-02',
      OrderCount: 1898,
      AmountCount: 29158.179,
    },
    {
      ReportDate: '2021-04-03',
      OrderCount: 1800,
      AmountCount: 27034.394,
    },
    {
      ReportDate: '2021-04-04',
      OrderCount: 2871,
      AmountCount: 38149.408,
    },
    {
      ReportDate: '2021-04-05',
      OrderCount: 2525,
      AmountCount: 40736.609,
    },
    {
      ReportDate: '2021-04-06',
      OrderCount: 2422,
      AmountCount: 39135.864,
    },
    {
      ReportDate: '2021-04-07',
      OrderCount: 2550,
      AmountCount: 42628.024,
    },
    {
      ReportDate: '2021-04-08',
      OrderCount: 2604,
      AmountCount: 42467.154,
    },
    {
      ReportDate: '2021-04-09',
      OrderCount: 2516,
      AmountCount: 42940.268,
    },
    {
      ReportDate: '2021-04-10',
      OrderCount: 2600,
      AmountCount: 41830.045,
    },
  ]
  //配置项
  private option: any = {
    color: ['rgb(85,193,195)', '#675bba'],
    tooltip: {
      trigger: 'axis',
    },
    title: {
      show: true,
      text:
        this.data[0].ReportDate.split('-').join('/') +
        ' - ' +
        this.data[this.data.length - 1].ReportDate.split('-').join('/'),
      y: 'bottom',
      x: 'center',
    },
    calculable: true,
    legend: {
      data: ['订单数', '销售金额（USD）'],
    },
    xAxis: [
      {
        type: 'category',
        data: this.data.map((item: any) =>
          item.ReportDate.slice(item.ReportDate.indexOf('-') + 1)
        ),
      },
    ],
    yAxis: [],
    series: [],
  }
  //绘制图表
  private chart(): void {
    const main = document.getElementById('main')
    const myChart = main ? echarts.init(main, 'macarons') : null
    if (myChart) myChart.setOption(this.option)
  }
  private setData(): any {
    //创建y轴
    //创建线条和柱状表
    let y = ['订单数', '销售金额（USD）'].map((item: any) => {
      return {
        type: 'value',
        name: item,
        axisLabel: {
          formatter: '{value}',
        },
      }
    })
    let content = [
      {
        name: ['订单数', '销售金额（USD）'][0],
        type: 'bar',
        data: this.data.map((item: any) => item.OrderCount),
      },
      {
        name: ['订单数', '销售金额（USD）'][1],
        type: 'line',
        yAxisIndex: 1,
        data: this.data.map((item: any) => item.AmountCount),
      },
    ]
    this.option.yAxis = y
    this.option.series = content
  }
  private mounted(): void {
    this.setData()
    this.chart()
  }
}
</script>
<style lang="less" scoped>
</style>