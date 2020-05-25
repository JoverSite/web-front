import { RootState, Sheet } from './index.d'
import { MutationTree, ActionTree } from 'vuex'

const state: RootState = {
  contents: [] as Array<Sheet>,
}

const mutations: MutationTree<RootState> = {
  updateContents (state: RootState, contents: Array<Sheet>) {
    state.contents = contents
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
  mutations,
  actions,
}
