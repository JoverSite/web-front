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
          @click="() => goRoute({ name: 'Home' })"
      />

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn
            v-for="btn in navigateBtns"
            :key="btn.text"
            class="toolbar__btn text--secondary"
            :class="{'toolbar__btn--activate': isNowRoute({ name:btn.route })}"
            color="white"
            :disabled="isNowRoute({ name:btn.route } )"
            :dark="isNowRoute({ name:btn.route })"
            depressed
            @click="() => goRoute({ name: btn.route})"
        >
          <div class="black--text text-none" v-text="btn.text" />
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view />
      <call />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { NavigateBtn, GoRoute, IsNowRoute } from '@/store/modules/App/index.d'

import Call from '@/components/Call/index.vue'

const {
  State,
  Getter,
  Mutation,
} = namespace('App')

@Component({
  components: { Call },
})
export default class App extends Vue {
  titleName = 'Jover Zhang'

  @State navigateBtns!: Array<NavigateBtn>

  @Getter isNowRoute!: (payload: IsNowRoute) => boolean

  @Mutation goRoute!: (payload: GoRoute) => void
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
