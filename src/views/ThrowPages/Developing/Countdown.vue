<template>
  <div class="countdown">
    <div class="timer" v-text="time" />
    <div class="text">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Countdown extends Vue {
  @Prop({ required: true, type: String })
  readonly time!: string
}
</script>

<style lang="scss" scoped>
.countdown {
  display: flex;
  flex-direction: column;
  align-items: center;

  .timer {
    color: white;
    letter-spacing: 5px;
    background: rgba(0, 0, 3, 0.37);
    font-size: 4rem;
    padding: .5rem .7rem;
    margin-bottom: .5rem;
  }

  .text {
    color: white;
    font-size: 1.1rem;
  }
}
</style>
