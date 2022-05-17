import Vue from 'vue'
import Vuex from 'vuex'
import bridge from '@/common/bridge'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    uid: 100068
  },
  mutations: {
    SET_UID (state, uid) {
      state.uid = uid
    }
  },
  actions: {
    setUid ({ commit }) {
      bridge.callhandler("getAppInfo", null, (data) => {
        console.log(data)
        commit('SET_UID', JSON.parse(data).uid)
      })
    }
  }
})

export default store
