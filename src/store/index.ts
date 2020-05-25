import Vue from 'vue'
import Vuex from 'vuex'
import App from './modules/App'
import Home from './modules/Home'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    App,
    Home,
  },
})
