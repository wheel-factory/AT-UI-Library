// import guides from './guides';
import components from './components';

export default [
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
    // children: guides,
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
