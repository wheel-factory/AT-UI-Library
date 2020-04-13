import Vue from 'vue';

// import VueI18n from 'vue-i18n';

import AtUI from '../components';

import './registerServiceWorker';

import router from './router';
import store from './store';
// import i18n from './i18n';

// eslint-disable-next-line
import Main from './Main.vue';

// Vue.use(VueI18n);

Vue.use(AtUI);

Vue.config.devtools = true;
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  // i18n,
  render: (h) => h(Main),
}).$mount('#root');
