<template>
  <div class="home">
    <Tabs type="card" :animated="false" closable ref="tabsRef" name="homeTabs" :value="currentPane" @on-click="changeRoute" @on-tab-remove="handleTabRemove" closable>
      <TabPane label="目录" name="Index" v-if="Index" :closable="false" tab="homeTabs">
        <Catalog v-if="Index"></Catalog>
      </TabPane>
      <TabPane label="表单验证" name="ValidateForm" v-if="ValidateForm" tab="homeTabs">
        <ValidateForm v-if="ValidateForm"></ValidateForm>
      </TabPane>
      <TabPane label="Select组件" name="SelectCom" v-if="SelectCom" tab="homeTabs">
        <SelectCom v-if="SelectCom"></SelectCom>
      </TabPane>
      <TabPane label="Input组件注意点" name="InputCom" v-if="InputCom" tab="homeTabs">
        <InputCom v-if="InputCom"></InputCom>
      </TabPane>
      <TabPane label="InputNumber组件注意点" name="InputNumberCom" v-if="InputNumberCom" tab="homeTabs">
        <InputNumberCom v-if="InputNumberCom"></InputNumberCom>
      </TabPane>
      <TabPane label="Jodit富文本编辑器" name="JoditCom" v-if="JoditCom" tab="homeTabs">
        <JoditCom v-if="JoditCom"></JoditCom>
      </TabPane>
      <TabPane label="柱状图" name="HistogramCom" v-if="HistogramCom" tab="homeTabs">
        <HistogramCom v-if="HistogramCom"></HistogramCom>
      </TabPane>
      <TabPane label="axios库测试页面" name="AxiosCom" v-if="AxiosCom" tab="homeTabs">
        <AxiosCom v-if="AxiosCom"></AxiosCom>
      </TabPane>
      <TabPane label="async await" name="AsyncCom" v-if="AsyncCom" tab="homeTabs">
        <AsyncCom v-if="AsyncCom"></AsyncCom>
      </TabPane>
      <TabPane label="render注意" name="RenderCom" v-if="RenderCom" tab="homeTabs">
        <RenderCom v-if="RenderCom"></RenderCom>
      </TabPane>
      <TabPane label="js类型验证" name="JudgmentTypeCom" v-if="JudgmentTypeCom" tab="homeTabs">
        <JudgmentTypeCom v-if="JudgmentTypeCom"></JudgmentTypeCom>
      </TabPane>
      <TabPane label="路由传参" name="RouterPassCom" v-if="RouterPassCom" tab="homeTabs">
        <RouterPassCom v-if="RouterPassCom"></RouterPassCom>
      </TabPane>
      <TabPane label="Getters的使用" name="GettersCom" v-if="GettersCom" tab="homeTabs">
        <GettersCom v-if="GettersCom"></GettersCom>
      </TabPane>
    </Tabs>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component({
  name: 'Home',
  components: {
    Catalog: () => import('@v/Main/Catalog.vue'),
    ValidateForm: () => import('@v/Iview/Form/ValidateForm.vue'),
    SelectCom: () => import('@v/Iview/Form/SelectCom.vue'),
    InputCom: () => import('@v/Iview/Form/InputCom.vue'),
    InputNumberCom: () => import('@v/Iview/Form/InputNumberCom.vue'),
    JoditCom: () => import('@v/Plugins/RichTextEditor/JoditCom.vue'),
    HistogramCom: () => import('@v/Plugins/Echart/HistogramCom.vue'),
    AxiosCom: () => import('@v/Plugins/Axios/AxiosCom.vue'),
    AsyncCom: () => import('@v/JavaScript/ES7/AsyncCom.vue'),
    RenderCom: () => import('@v/Iview/Table/RenderCom.vue'),
    JudgmentTypeCom: () => import('@v/JavaScript/ES5/JudgmentTypeCom.vue'),
    RouterPassCom: () => import('@v/Vue/VueRouter/RouterPassCom.vue'),
    GettersCom: () => import('@v/Vue/Vuex/GettersCom.vue'),
  },
})
export default class Home extends Vue {
  @Watch('$route')
  // 监听路由改变，打开对应的页面
  private watchRoute(route: any, oldRoute: any): void {
    this.handleShowCurrent()
  }

  private mounted(): void {
    this.handleShowCurrent()
  }

  // 打开对应页面
  private handleShowCurrent(): void {
    let currentRoute = this.$route
    this.openTabPane(currentRoute.name as string)
  }

  //打开对应页面tabpane
  private openTabPane(name: string): void {
    ;(this as any)[name] = true
    this.currentPane = name
  }

  // 切换tabpane
  private changeRoute(name: string): void {
    // 如果点击的tabpane项是当前，则刷新当前页面
    if (name == this.$route.name) {
      if (name === 'Index') {
        return
      }
      // 刷新当前tabpane
      ;(this as any)[name] = false
      this.$nextTick(() => {
        ;(this as any)[name] = true
      })
      return
    }
    // 如果点击tabpane项是非当前，跳转到指定的 url（浏览器还可以通过前进和后退回到之前的url）
    this.currentPane = name
    this.$router.push({ name: name })
  }

  // 关闭tabpane
  private handleTabRemove(name: string): void {
    ;(this as any)[name] = false
    if (name === this.$route.name) {
      this.$nextTick(() => {
        this.changeRoute((this.$refs.tabsRef as any).activeKey)
      })
    }
  }

  private currentPane: string = ''

  private Index: boolean = true //目录(该页面代表的路由是'/Index')
  // iview知识模块
  private ValidateForm: boolean = false //验证表单
  private SelectCom: boolean = false //Select组件
  private InputCom: boolean = false //Input组件
  private InputNumberCom: boolean = false //InputNumber组件
  private RenderCom: boolean = false //表格中render
  // 插件模块
  private JoditCom: boolean = false //Jodit富文本编辑器
  private HistogramCom: boolean = false //柱状图
  private AxiosCom: boolean = false //axios
  //JavaScript模块
  private AsyncCom: boolean = false //async和await
  private JudgmentTypeCom: boolean = false //js类型验证
  //Vue模块
  private RouterPassCom: boolean = false //路由传参
  private GettersCom: boolean = false //Vuex的Getters的使用
}
</script>
<style lang="less" scoped>
.home {
  padding: 10px 12px 0;

  /deep/ .ivu-tabs-bar {
    margin-bottom: 0px;
  }
}
</style>