import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pjtnews: 0,
    count: 0
  },
  mutations: {
    add(state, num) {
      state.count += num;
    },
  }
})
