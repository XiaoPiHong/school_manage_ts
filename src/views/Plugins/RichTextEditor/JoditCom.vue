<template>
  <Jodit></Jodit>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'JoditCom',
  components: {
    Jodit: () => import('@c/PublicCom/Jodit.vue'),
  },
})
export default class JoditCom extends Vue {}
</script>