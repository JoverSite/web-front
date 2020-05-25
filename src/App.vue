<template>
  <v-app>
    <v-app-bar
      class="toolbar"
      color="white"
      height="44px"
      app
      flat
    >
      <v-toolbar-title
        class="toolbar__title title black white--text"
        v-text="titleName"
        @click="() => goRouter('Home')"
      />

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn
          v-for="btn in navigateBtns"
          :key="btn.text"
          class="toolbar__btn text--secondary"
          :class="{'toolbar__btn--activate': isNowRoute(btn.router)}"
          color="white"
          :disabled="isNowRoute(btn.router)"
          :dark="isNowRoute(btn.router)"
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
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  titleName = 'Jover Zhang'

  navigateBtns: Array<NavigateBtn> = [
    {
      text: 'Home',
      router: 'Home',
    }, {
      text: 'Blog',
      router: 'Blog',
    }, {
      text: 'Inline Tools',
      router: 'InlineTools',
    }, {
      text: 'Window',
      router: 'Window',
    },
  ]

  get isNowRoute () {
    return (router: string) => router === this.$route.name
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
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -16px;
    height: 44px;
    width: 220px;
    text-align: center;
    cursor: pointer;
  }

  .toolbar__btn {
    font-weight: 600;

    &--activate div {
      color: grey !important;
    }
  }

}
</style>
