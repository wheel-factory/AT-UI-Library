export default [
  {
    path: '/guides/at-color',
    name: 'Color',
    component: () => import(
      /* webpackChunkName: "view-at-color" */
      '../views/AtColor/ViewAtColor.vue'
    ),
  },
];
