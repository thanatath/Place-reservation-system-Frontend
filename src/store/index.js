import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: '',
    loginstate:'',
  },
  mutations: {
    setsearch(state, value) {
      state.search = value;
    },
    setloginstate(state, value) {
      state.loginstate = value;
    },
  },
  getters: {
    getsearch(state) {
      return state.search;
    },
  },
  actions: {
    searchAction(context, value) {
      context.commit('setsearch', value);
    },
    loginstateAction(context, value) {
      context.commit('setloginstate', value);
    },
  },
  modules: {},
});
