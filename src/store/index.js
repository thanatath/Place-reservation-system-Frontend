import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: '',
  },
  mutations: {
    setsearch(state, value) {
      state.search = value;
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
  },
  modules: {},
});
