<template>
  <Row>
    <Menu mode="horizontal" theme="primary" @on-select="topLevelMenu">
      <Submenu v-for="(item,index) in NavsTree" :name="index" :key="index">
        <template slot="title">{{item.ResourceName}}</template>
        <MenuGroup v-for="(itm,ind) in item.ChildNodes" :key="ind" :title="itm.ResourceName">
          <MenuItem v-for="(it,idx) in itm.ChildNodes" :key="idx" :name="it.ElementId">{{it.ResourceName}}</MenuItem>
        </MenuGroup>
      </Submenu>
    </Menu>
  </Row>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Nav',
  components: {},
})
export default class Nav extends Vue {
  // 选择菜单
  private topLevelMenu(name: string): void {
    this.$router.replace(`/${name}`)
  }

  // 导航栏数据
  private NavsTree: any[] = [
    {
      ResourceName: 'iview知识',
      ElementId: 'Iview',
      ChildNodes: [
        {
          ResourceName: '表单',
          ElementId: 'Form',
          ChildNodes: [
            {
              ResourceName: '表单验证',
              ElementId: 'ValidateForm',
            },
            {
              ResourceName: 'Select组件',
              ElementId: 'SelectCom',
            },
            {
              ResourceName: 'Input组件注意点',
              ElementId: 'InputCom',
            },
            {
              ResourceName: 'InputNumber组件注意点',
              ElementId: 'InputNumberCom',
            },
          ],
        },
      ],
    },
    {
      ResourceName: '插件',
      ElementId: 'Plugins',
      ChildNodes: [
        {
          ResourceName: '富文本编辑器',
          ElementId: 'RichTextEditor',
          ChildNodes: [
            {
              ResourceName: 'Jodit富文本编辑器',
              ElementId: 'JoditCom',
            },
          ],
        },
        {
          ResourceName: '图表',
          ElementId: 'Echart',
          ChildNodes: [
            {
              ResourceName: '柱状图',
              ElementId: 'HistogramCom',
            },
          ],
        },
      ],
    },
  ]
}
</script>
<style lang="less" scoped>
/deep/ .ivu-menu {
  width: calc(100%);
}
</style>