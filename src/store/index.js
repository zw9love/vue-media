/**
 * Created by Administrator on 2017/6/24.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    editTarget:null,
    shadowTarget:null,
    mask:null,
    maskLock:false
  },
  getters: {
    getEditTarget: ({editTarget}) => {
      return editTarget
    },
    getShadowTarget: ({shadowTarget}) => {
      return shadowTarget
    },
    getMask: ({mask}) => {
      return mask
    },
    getMaskLock: ({maskLock}) => {
      return maskLock
    },
  },
  mutations: {
    setEditTarget(state,{value}){
      state.editTarget = value
    },
    setShadowTarget(state,{value}){
      state.shadowTarget = value
    },
    setMask(state,{value}){
      state.mask = value
    },
    setMaskLock(state,{value}){
      state.maskLock = value
    }
  },
  actions: {
    setEditTarget({ commit },value){
      commit('setEditTarget',value)
    },
    setShadowTarget({ commit },value){
      commit('setShadowTarget',value)
    },
    setMask({ commit },value){
      commit('setMask',value)
    },
    setMaskLock({ commit },value){
      commit('setMaskLock',value)
    }
  }
})

export default store
