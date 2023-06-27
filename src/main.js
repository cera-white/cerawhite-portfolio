import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faLinkedinIn,
  faTumblr,
  faTwitch,
  faYoutube,
  faFacebookF,
  faGithub,
  faVuejs,
  faItchIo,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// Install BootstrapVue
Vue.use(BootstrapVue);

// FontAwesome Icons
library.add(faLinkedinIn, faTumblr, faTwitch, faYoutube, faFacebookF, faGithub, faVuejs, faItchIo);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
