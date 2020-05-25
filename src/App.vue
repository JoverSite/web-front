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
import { Vue, Component, Watch } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  titleName = 'Jover Zhang'

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
