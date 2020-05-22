<template>
  <div class="home">
    <div class="home__title">
      <h1>Time is move on.</h1>
    </div>
    <v-footer class="home__footer" color="white">
      <div>
        <span>Copyright © 2020 JoverSite.</span>
      </div>
      <a href="http://www.beian.miit.gov.cn">粤ICP备19028197号-1</a>
    </v-footer>
  </div>
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component({})
export default class Home extends Vue {
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  .home__title {
    display: flex;
    height: calc(100vh - 64px);
    align-items: center;
    justify-content: center;

    > h1 {
      font-family: 微软雅黑, "Noto Sans", "sans-serif";
      margin-bottom: 72px;
    }
  }

  .home__footer {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 0 20rem;
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
