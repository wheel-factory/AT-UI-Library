export default [
  {
    path: '/components/at-color',
    name: 'Color',
    group: 'global',
    component: () => import(
      /* webpackChunkName: "view-at-color" */
      '../views/AtColor/ViewAtColor.vue'
    ),
  },
  {
    path: '/components/at-step',
    name: 'Step',
    group: 'navigation',
    component: () => import(
      /* webpackChunkName: "view-at-step" */
      '../views/AtStep/ViewAtStep.vue'
    ),
  },
  {
    path: '/components/at-button',
    name: 'Button',
    group: 'interactive',
    component: () => import(
      /* webpackChunkName: "view-at-button" */
      '../views/AtButton/ViewAtButton.vue'
    ),
  },
  {
    path: '/components/at-Selection',
    name: 'Selection',
    group: 'interactive',
    component: () => import(
      /* webpackChunkName: "view-at-Selection" */
      '../views/AtSelection/ViewAtSelection.vue'
    ),
  },
  {
    path: '/components/at-input',
    name: 'Input',
    group: 'interactive',
    component: () => import(
      /* webpackChunkName: "view-at-input" */
      '../views/AtInput/ViewAtInput.vue'
    ),
  },
  {
    path: '/components/at-list',
    name: 'List',
    group: 'data display',
    component: () => import(
      /* webpackChunkName: "view-at-list" */
      '../views/AtList/ViewAtList.vue'
    ),
  },
  {
    path: '/components/at-table',
    name: 'Table',
    group: 'data display',
    component: () => import(
      /* webpackChunkName: "view-at-table" */
      '../views/AtTable/ViewAtTable.vue'
    ),
  },
];
