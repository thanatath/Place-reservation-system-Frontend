import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: '',
    loginstate:'',
    searchfilter:'',
  },
  mutations: {
    setsearch(state, value) {
      state.search = value;
    },
    setsearchfilter(state, value) {
      state.searchfilter = value;
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
    search_filterAction(context,value){
      context.commit('setsearchfilter', value);
    }
  },
  modules: {},
});
