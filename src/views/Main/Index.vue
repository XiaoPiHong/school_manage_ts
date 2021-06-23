<template>
  <div>
    <!-- 导航栏 -->
    <Nav v-if="isNav" />
    <!-- 页面路由占位符 -->
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { RouteConfig } from 'vue-router'

@Component({
  name: 'Index',
  components: {
    Nav: () => import('@c/Main/Nav.vue'),
  },
})
export default class Index extends Vue {
  get isNav(): boolean {
    return !['TestRouterParamsCom'].includes(
      (this.$route as RouteConfig).name || ''
    )
  }
}
</script>