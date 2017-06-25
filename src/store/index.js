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
    maskLock:false,
    showTarget:null,
    commentTarget:null
  },
  getters: {
    getEditTarget: ({editTarget}) => {
      return editTarget
    },
    getShadowTarget: ({shadowTarget}) => {
      return shadowTarget
    },
    getShowTarget: ({showTarget}) => {
      return showTarget
    },
    getMask: ({mask}) => {
      return mask
    },
    getMaskLock: ({maskLock}) => {
      return maskLock
    },
    getCommentTarget: ({commentTarget}) => {
      return commentTarget
    },
  },
  mutations: {
    setEditTarget(state,{value}){
      state.editTarget = value
    },
    setShadowTarget(state,{value}){
      state.shadowTarget = value
    },
    setShowTarget(state,{value}){
      state.showTarget = value
    },
    setMask(state,{value}){
      state.mask = value
    },
    setMaskLock(state,{value}){
      state.maskLock = value
    },
    setCommentTarget(state,{value}){
      state.commentTarget = value
    }
  },
  actions: {
    setEditTarget({ commit },value){
      commit('setEditTarget',value)
    },
    setShadowTarget({ commit },value){
      commit('setShadowTarget',value)
    },
    setShowTarget({ commit },value){
      commit('setShowTarget',value)
    },
    setMask({ commit },value){
      commit('setMask',value)
    },
    setMaskLock({ commit },value){
      commit('setMaskLock',value)
    },
    setCommentTarget({ commit },value){
      commit('setCommentTarget',value)
    }
  }
})

export default store
