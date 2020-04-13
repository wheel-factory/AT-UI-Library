import Vue from 'vue';
import VueRouter from 'vue-router';

import components from './components';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/components/at-button',
  },
  {
    path: '/guides',
    name: 'Guides',
    component: () => import(
      /* webpackChunkName: "guides" */
      '../views/Guides/Guides.vue'
    ),
  },
  {
    path: '/components',
    name: 'Components',
    component: () => import(
      /* webpackChunkName: "components" */
      '../views/Components/Components.vue'
    ),
    children: components,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
