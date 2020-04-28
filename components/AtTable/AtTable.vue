<template>
  <div
    :id="atId"
    :class="{
      [atId]: true,
      'at-table': true,
      'at-table--border': border,
      'at-table--fixed': fixed,
      'at-table--striped': striped
    }"
  >
    <table
      :style="{
        width: width ? `${width}px` : undefined,
      }"
      :width="width ? width : undefined"
    >
      <at-thead />
      <at-tbody />
      <at-tfoot
        v-if="false"
      />
    </table>
  </div>
</template>

<script>
import uid from 'uid';

import injectCss from '../utils/injectCss';

import AtThead from './components/AtThead.vue';
import AtTbody from './components/AtTbody.vue';
import AtTfoot from './components/AtTfoot.vue';

// const colClass = (atId, cols) => cols.reduce((css, col, index) => {
//   Object.defineProperties(css, {
//     [`#${atId} tr td:nth-child(${index})`]: {
//       enumerable: true,
//       value: {
//         align: col.align,
//       },
//     },
//   });
//   return css;
// }, {});

export default {
  name: 'AtTable',
  components: {
    AtThead,
    AtTbody,
    AtTfoot,
  },
  props: {
    atId: {
      type: String,
      required: true,
      default: `at-${uid(6)}`,
      validator: (id) => /(?!-)^[a-z|-]+(?<!-)$/g.test(id),
    },
    rows: {
      type: Array,
      required: true,
      default: () => ([]),
      // validator: (rows) => {
      //   console.log('AtTable Data:', rows);
      //   return true;
      // },
    },
    cols: {
      type: Array,
      required: true,
      default: () => ([]),
      // validator: (cols) => {
      //   console.log('AtTable columns:', cols);
      //   return true;
      // },
    },
    border: {
      type: Boolean,
      default: false,
    },
    fixed: {
      type: Boolean,
      default: false,
    },
    striped: {
      type: Boolean,
      default: false,
    },
  },
  provide() {
    const store = {};
    Object.defineProperties(store, {
      atId: {
        enumerable: true,
        get: () => this.atId,
      },
      rows: {
        enumerable: true,
        get: () => this.rows,
      },
      cols: {
        enumerable: true,
        get: () => this.cols,
      },
      fixed: {
        enumerable: true,
        get: () => this.fixed,
      },
    });
    return store;
  },
  computed: {
    width() {
      return this.cols.reduce((acc, cur) => (acc + Number(cur.width)), 0) || undefined;
    },
  },
  created() {
    injectCss(this.atId, this.cols.reduce((css, col, index) => {
      Object.defineProperties(css, {
        [`#${this.atId} tr>*:nth-child(${index + 1})`]: {
          enumerable: true,
          value: {
            'text-align': col.align,
          },
        },
      });
      return css;
    }, {}));
  },
};
</script>

<style lang="scss">
@import './styles/AtTable.scss';
</style>
