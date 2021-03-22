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
      // 刷新当前tabpane
      ;(this as any)[name] = false
      this.$nextTick(() => {
        ;(this as any)[name] = true
      })
      return
    }
    // 如果点击tabpane项是非当前，替换当前路由
    this.currentPane = name
    this.$router.replace(`/${name}`)
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
  private InputCom: boolean = false //Form校验规则
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