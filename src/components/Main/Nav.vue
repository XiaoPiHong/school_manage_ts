<template>
  <Row>
    <Menu mode="horizontal" theme="primary" @on-select="topLevelMenu" :active-name="$route.name">
      <Submenu v-for="(item,index) in NavsTree" :name="index" :key="item.ElementId">
        <template slot="title">{{item.ResourceName}}</template>
        <MenuGroup v-for="(itm,ind) in item.ChildNodes" :key="itm.ElementId" :title="itm.ResourceName">
          <!-- to属性路由跳转时：使用router对象name属性跳转，如果没有该name属性对应的路由，抛出警告后不会验证404的路由 -->
          <!-- to属性路由跳转时：使用router对象path属性跳转，如果没有该path属性对应的路由，会跳转到404的路由 -->
          <MenuItem v-for="(it,idx) in itm.ChildNodes" :key="it.ElementId" :name="it.ElementId" :to="{path:`/${item.ElementId}/${it.ElementId}`}">{{it.ResourceName}}</MenuItem>
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
  private topLevelMenu(name: string): void {}

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
        {
          ResourceName: '表格',
          ElementId: 'Table',
          ChildNodes: [
            {
              ResourceName: 'render注意',
              ElementId: 'RenderCom',
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
        {
          ResourceName: 'axios库',
          ElementId: 'Axios',
          ChildNodes: [
            {
              ResourceName: 'axios测试',
              ElementId: 'AxiosCom',
            },
          ],
        },
      ],
    },
    {
      ResourceName: 'JavaScript',
      ElementId: 'JavaScript',
      ChildNodes: [
        {
          ResourceName: 'ES7',
          ElementId: 'ES7',
          ChildNodes: [
            {
              ResourceName: 'async',
              ElementId: 'AsyncCom',
            },
          ],
        },
        {
          ResourceName: 'ES5',
          ElementId: 'ES5',
          ChildNodes: [
            {
              ResourceName: 'js类型验证',
              ElementId: 'JudgmentTypeCom',
            },
            {
              ResourceName: 'Blob对象',
              ElementId: 'BlobCom',
            },
          ],
        },
      ],
    },
    {
      ResourceName: 'Vue',
      ElementId: 'Vue',
      ChildNodes: [
        {
          ResourceName: '路由',
          ElementId: 'VueRouter',
          ChildNodes: [
            {
              ResourceName: '路由传参',
              ElementId: 'RouterPassCom',
            },
          ],
        },
        {
          ResourceName: '状态管理',
          ElementId: 'Vuex',
          ChildNodes: [
            {
              ResourceName: 'Vuex的使用',
              ElementId: 'VuexCom',
            },
          ],
        },
        {
          ResourceName: '指令',
          ElementId: 'Instruction',
          ChildNodes: [
            {
              ResourceName: 'v-model指令原理',
              ElementId: 'VmodelCom',
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