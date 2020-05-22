import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#000000',
        secondary: '#FFCDD2',
        accent: '#3F51B5',
      },
    },
  },
  icons: {
    iconfont: 'md',
  },
})
