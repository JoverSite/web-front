import { RootState, NavigateBtn, GoRoute, IsNowRoute } from './index.d'
import { GetterTree, MutationTree } from 'vuex'
import $router from '@/router'

const state: RootState = {
  navigateBtns: [
    {
      text: 'Home',
      route: 'Home',
    }, {
      text: 'Blog',
      route: 'Blog',
    }, {
      text: 'Inline Tools',
      route: 'InlineTools',
    }, {
      text: 'Window',
      route: 'Window',
    },
  ] as Array<NavigateBtn>,
}

const getters: GetterTree<RootState, any> = {
  isNowRoute (): ({ name }: IsNowRoute) => boolean {
    return ({ name }) => name === $router.app.$route.name
  },
}

const mutations: MutationTree<RootState> = {
  goRoute (state: any, { name }: GoRoute): void {
    ($router.app.$route.name !== name) && $router.push({ name })
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
}
