import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Parse from 'parse';
import store from './store';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Carousel3d from 'vue-carousel-3d';
Vue.use(require('vue-cookies'))
Vue.use(Carousel3d);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
const ParsePlugin = {
  install(Vue) {
    console.log('[+]init parse server');
    Parse.initialize('myAppId'); // MyServe
    Parse.serverURL = 'http://shibasan.3bbddns.com:15294/parse'; //product
      //Parse.serverURL = 'http://localhost:1337/parse'; //dev

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
