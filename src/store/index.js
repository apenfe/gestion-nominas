import { createStore } from 'vuex'

export default createStore({
  state: {
    user: undefined,
  },
  getters: {
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
