import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  // Github pages doesn't work with "history" mode
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
