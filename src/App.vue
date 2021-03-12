<template>
  <div id="app">
    <Index />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'App',
  components: {
    Index: () => import('@v/Main/Index.vue'),
  },
})
export default class App extends Vue {}
</script>

<style lang="less">
</style>
