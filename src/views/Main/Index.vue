<template>
  <div>
    <!-- 导航栏 -->
    <Nav />
    <!-- 页面路由占位符 -->
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Index',
  components: {
    Nav: () => import('@c/Main/Nav.vue'),
  },
})
export default class Index extends Vue {}
</script>