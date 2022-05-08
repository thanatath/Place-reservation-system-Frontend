import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Parse from 'parse';
import store from './store';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Carousel3d from 'vue-carousel-3d';
import VueSimpleAlert from "vue-simple-alert";

Vue.use(require('vue-cookies'))
Vue.use(Carousel3d);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueSimpleAlert, { reverseButtons: true });

const ParsePlugin = {
  install(Vue) {
    console.log('[+]init parse server');
 

    Parse.initialize(process.env.VUE_APP_ENV_KEY); 
    
    Parse.serverURL = process.env.VUE_APP_ENV_BACKENDHOST; 
 
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
