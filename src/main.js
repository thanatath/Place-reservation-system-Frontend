import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Parse from 'parse';
import store from './store';

const ParsePlugin = {
  install(Vue) {
    console.log('[+]init parse server');
    Parse.initialize('myAppId'); // MyServe
    Parse.serverURL = 'http://shibasan.3bbddns.com:15294/parse';
    Vue.prototype.Parse = Parse;
  },
};

Vue.use(ParsePlugin);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
