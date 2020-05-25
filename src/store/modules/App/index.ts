import { RootState, NavigateBtn, GoRoute, IsNowRoute } from './index.d'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
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
    $router.app.$router.push({ name })
  },
}

const actions: ActionTree<any, any> = {
  queryContents ({ commit }: any) {
    console.log(123)
    commit('updateContents',
      [
        { url: require('@/assets/images/home/b1.jpg') },
        { url: require('@/assets/images/home/b2.jpg') },
        { url: require('@/assets/images/home/b3.jpg') },
      ],
    )
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
