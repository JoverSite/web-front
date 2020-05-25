<template>
  <div class="home">
    <div class="home__title">
      <jump-text
        class="home__title__name"
        :text="titleName"
        mouse-evens
        auto-play
        animate-time="2000"
      />
    </div>

    <div class="home__content">
      <v-lazy v-for="item in contents" :key="item.url" class="home__content__sheet" :options="{ threshold: .5 }">
        <img class="home__content__sheet__img" :src="item.url" :alt="item.url"/>
      </v-lazy>
    </div>

    <v-footer class="home__footer" color="black">
      <div>
        <span>Copyright © 2020 JoverSite.</span>
      </div>
      <a href="http://www.beian.miit.gov.cn" />
    </v-footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { Sheet } from '@/store/modules/Home/index.d'
import JumpText from '@/components/JumpText.vue'

const {
  State,
  Action,
} = namespace('Home')

@Component({
  components: {
    JumpText,
  },
})
export default class Home extends Vue {
  titleName = 'Time to move on...'

  @State contents!: Array<Sheet>

  @Action queryContents!: () => void

  mounted () {
    this.queryContents()
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  .home__title {
    position: relative;
    display: flex;
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
    background: url(../../assets/images/home/home_bg.jpg) center no-repeat;
    background-size: 1920px;

    .home__title__name {
      z-index: 0;
      font-size: 6rem !important;
      font-weight: 600;
      color: white !important;
      margin-bottom: 72px;
    }
  }

  .home__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5rem;
    width: 100vw;
    background-color: black;
    color: white;

    .home__content__sheet {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 5rem;
      padding: 0 10vw;
      width: 80vw;
      height: 40vw;
      overflow: hidden;

      .home__content__sheet__img {
        width: 100%;
      }
    }
  }

  .home__footer {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 0 10vw;
    width: 100%;
    font-size: .8rem;

    > div {
      width: 100%;
      border-top: 1px solid #d2d2d7;
      padding-top: .4rem;

      > span {
        color: #86868b;
      }
    }

    > a {
      margin: 1rem 0;
      text-decoration: none;
      color: #666666;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
