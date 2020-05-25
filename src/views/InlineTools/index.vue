<template>
  <developing :target-time="new Date(2020,5,12)" />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import Developing from '@/views/ThrowPages/Developing/index.vue'

@Component({
  components: {
    Developing,
  },
})
export default class InlineTools extends Vue {
}
</script>

<style lang="scss" scoped>

</style>
