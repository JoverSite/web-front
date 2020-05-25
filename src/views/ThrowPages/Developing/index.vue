<template>
  <div class="developing">
    <div class="developing__title">
      Flat Coming Soon Widget
    </div>

    <div class="developing__countdown">
      <countdown
        v-for="item in countdownTimes"
        :key="item.name"
        class="developing__countdown__days"
        :time="item.time"
      >{{item.name}}
      </countdown>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

import Countdown from './Countdown.vue'
import { CountdownTime } from '@/views/ThrowPages/Developing/index'

@Component({
  components: {
    Countdown,
  },
})
export default class Developing extends Vue {
  @Prop({ required: true, type: Date })
  targetTime!: Date

  countdownTimes: Array<CountdownTime> = []

  zeroPadding (time: string): string {
    if (time.toString().length === 1) {
      return '0' + time
    }
    return time
  }

  updateCountDownTimes () {
    const nowDate = new Date()
    const needTime = new Date(this.targetTime - nowDate)
    this.countdownTimes = [
      {
        name: 'DAYS',
        time: this.zeroPadding(needTime.getDate().toString()),
      }, {
        name: 'HOURS',
        time: this.zeroPadding(needTime.getHours().toString()),
      }, {
        name: 'MINUTES',
        time: this.zeroPadding(needTime.getMinutes().toString()),
      },
    ]
    // Use Months by more than one month.
    // Use Seconds by lees than one month.
    if (needTime.getMonth()) {
      this.countdownTimes.unshift({
        name: 'MONTHS',
        time: this.zeroPadding(needTime.getMonth().toString()),
      })
    } else {
      this.countdownTimes.push({
        name: 'SECONDS',
        time: this.zeroPadding(needTime.getSeconds().toString()),
      })
    }
  }

  mounted () {
    this.updateCountDownTimes()
    setInterval(() => {
      this.updateCountDownTimes()
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
.developing {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background: url(../../../assets/images/throwPages/bg.jpg) center no-repeat;
  background-size: cover;

  .developing__title {
    margin-top: 10rem;
    font-size: 3rem;
    color: #f1c004;
  }

  .developing__countdown {
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;
    width: 40vw;
  }
}
</style>
