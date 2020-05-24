<template>
  <v-app>
    <v-app-bar
      class="toolbar"
      color="white"
      app
      flat
    >
      <v-toolbar-title
        class="toolbar__title display-1 black white--text"
        v-text="titleName"
        @click="() => goRouter('Home')"
      />

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn
          v-for="btn in navigateBtns"
          :key="btn.text"
          class="text--secondary"
          :class="{'toolbar__btn--activate': btn.isActive}"
          color="white"
          :disabled="btn.isActive"
          :dark="btn.isActive"
          depressed
          @click="() => goRouter(btn.router)"
        >
          <div class="black--text text-none" v-text="btn.text" />
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'

@Component({})
export default class App extends Vue {
  titleName = 'Jover'

  navigateBtns: Array<NavigateBtn> = []

  @Watch('$route.name')
  updateRoute () {
    this.updateNavigate()
  }

  updateNavigate () {
    this.navigateBtns = [
      {
        text: 'Home',
        router: 'Home',
        isActive: this.$route.name === 'Home',
      }, {
        text: 'Blog',
        router: 'Blog',
        isActive: this.$route.name === 'Blog',
      }, {
        text: 'Inline Tools',
        router: 'InlineTools',
        isActive: this.$route.name === 'InlineTools',
      }, {
        text: 'Window',
        router: 'Window',
        isActive: this.$route.name === 'Window',
      },
    ]
  }

  // Mounted
  mounted () {
    this.updateNavigate()
  }

  goRouter (router: string) {
    this.$router.push({ name: router })
  }
}
</script>

<style lang="scss" scoped>
.toolbar {
  &::v-deep .v-toolbar .v-toolbar__content {
    padding-left: 0;
  }

  .toolbar__title {
    font-family: "Noto Sans", "sans-serif", "微软雅黑";
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -8px;
    margin-left: -16px;
    height: 72px; // todo: auto calculus.
    width: 180px;
    text-align: center;
    cursor: pointer;
    user-select: none;
  }

  .toolbar__btn--activate div {
    color: grey !important;
  }

}
</style>
