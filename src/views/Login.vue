<template>
  <div>
    <h1>登录组件</h1>
    <Button type="primary">登录</Button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'Login',
})
export default class Login extends Vue {}
</script>
<style lang="less" scoped>
</style>