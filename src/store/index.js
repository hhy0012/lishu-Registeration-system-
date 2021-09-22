import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'

import user from './modules/user'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user
  },
  plugins: [
    createPersistedstate({
      key: 'lishu-client-pc-store',
      paths: ['user']
    })
  ]
})
