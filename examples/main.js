import Vue from 'vue';

// import VueI18n from 'vue-i18n';

import AtUI from '../components';

import './registerServiceWorker';

import router from './router';
import store from './store';
// import i18n from './i18n';

import Examples from './Examples.vue';

// Vue.use(VueI18n);

Vue.use(AtUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  // i18n,
  render: (h) => h(Examples),
}).$mount('#main');
