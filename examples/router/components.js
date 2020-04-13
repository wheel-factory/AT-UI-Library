export default [
  {
    path: '/components/at-step',
    name: 'Step',
    group: 'navigation',
    component: () => import(
      /* webpackChunkName: "at-step-examples" */
      '../views/AtStep/AtStepExamples.vue'
    ),
  },
  {
    path: '/components/at-button',
    name: 'Button',
    group: 'interactive',
    component: () => import(
      /* webpackChunkName: "at-button-examples" */
      '../views/AtButton/AtButtonExamples.vue'
    ),
  },
  {
    path: '/components/at-input',
    name: 'Input',
    group: 'interactive',
    component: () => import(
      /* webpackChunkName: "at-input-examples" */
      '../views/AtInput/AtInputExamples.vue'
    ),
  },
  {
    path: '/components/at-list',
    name: 'List',
    group: 'data display',
    component: () => import(
      /* webpackChunkName: "at-list-examples" */
      '../views/AtList/AtListExamples.vue'
    ),
  },
  {
    path: '/components/at-table',
    name: 'Table',
    group: 'data display',
    component: () => import(
      /* webpackChunkName: "at-table-examples" */
      '../views/AtTable/AtTableExamples.vue'
    ),
  },
];
