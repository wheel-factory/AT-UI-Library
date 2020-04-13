import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/components/AtButton',
  },
  {
    path: '/guides',
    name: 'Guides',
    component: () => import(/* webpackChunkName: "guides" */ '../views/Guides/Guides.vue'),
  },
  {
    path: '/components',
    name: 'Components',
    component: () => import(/* webpackChunkName: "components" */ '../views/Components/Components.vue'),
    children: [
      {
        path: '/components/AtButton',
        name: 'AtButton',
        component: () => import(
          /* webpackChunkName: "example-at-button" */
          '../views/AtButton/AtButtonView.vue'
        ),
      },
      {
        path: '/components/AtTable',
        name: 'AtTable',
        component: () => import(/* webpackChunkName: "example-at-table" */ '../views/AtTable/AtTable.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
