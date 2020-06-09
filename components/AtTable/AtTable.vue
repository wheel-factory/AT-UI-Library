<template>
  <div
    :id="atId"
    :class="{
      [atId]: true,
      'at-table': true,
      'at-table--border': border,
      'at-table--fixed': fixed,
      'at-table--striped': striped,
      [`at-table--size-${size}`]: size !== 'normal',
      [`at-table--${runing}`]: runing,
    }"
  >
    <!-- <div class="at-table__wrap"> -->
    <table
      class="at-table__table"
      :style="{
        width: width ? `${width}px` : undefined,
      }"
    >
      <at-thead :is-selected-all="isSelectedAll" />
      <at-tbody :local-rows="localRows" />
      <at-tfoot v-if="false" />
    </table>
    <!-- </div> -->
  </div>
</template>

<script>
import uid from 'uid';

// import injectCss from '../utils/injectCss';

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

const selectionColumnWidth = 34;
const defaultFixedWidth = 100;

let performanceTimer = 0;

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
      // validator: (id) => /(?!-)^[a-z|-]+(?<!-)$/g.test(id),
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
    columns: {
      type: Array,
      required: true,
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
    size: {
      type: String,
      default: 'normal',
      validator: (size) => ['extra', 'large', 'normal', 'mini'].includes(size),
    },
    selection: {
      type: Boolean,
      default: false,
    },
  },
  provide() {
    const provide = {};
    Object.defineProperties(provide, {
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
      selection: {
        enumerable: true,
        get: () => this.selection,
      },
      selectAll: {
        enumerable: true,
        value: this.selectAll,
      },
      selectRow: {
        enumerable: true,
        value: this.selectRow,
      },
    });
    return provide;
  },
  data() {
    return {
      isSelectedAll: false,
      runing: false,
      localRows: {},
    };
  },
  computed: {
    cols() {
      let cols = this.columns;
      if (this.fixed) {
        let left = this.selection ? selectionColumnWidth : 0;
        let foundLastFixedRight = false;
        cols = cols.reduce((acc, cur) => {
          const col = cur;
          if (col.fixed === 'left') {
            col.left = left;
            if (col.width !== undefined) {
              left += col.width;
            } else {
              left += defaultFixedWidth;
              throw new Error('The width of fixed column is required.');
            }
          }
          if (!foundLastFixedRight && col.fixed === 'right') {
            foundLastFixedRight = true;
            col.lastFixedRight = true;
          }
          acc.push(col);
          return acc;
        }, []);
        let right = 0;
        let foundLastFixedLeft = false;
        cols = cols.reduceRight((acc, cur) => {
          const col = cur;
          if (col.fixed === 'right') {
            col.right = right;
            if (col.width !== undefined) {
              right += col.width;
            } else {
              right += defaultFixedWidth;
              throw new Error('The width of fixed column is required.');
            }
          }
          if (!foundLastFixedLeft && col.fixed === 'left') {
            foundLastFixedLeft = true;
            col.lastFixedLeft = true;
          }
          acc.push(col);
          return acc;
        }, []).reverse();
      }
      return cols;
    },
    width() {
      return this.cols.reduce((acc, cur) => (acc + Number(cur.width)), 0) || undefined;
    },
    selectedRows() {
      return Object.values(this.localRows).filter((row) => (row.isSelected === true));
    },
  },
  watch: {
    localRows() {
      // ------ ------ ------ ------ ------ ------ ------
      console.log('4', 'AtTable Watch "localRows"', performance.now());
      // ------ ------ ------ ------ ------ ------ ------
    },
  },
  beforeCreate() {
    performanceTimer = performance.now();
  },
  created() {
    // injectCss(this.atId, this.cols.reduce((css, col, index) => {
    //   Object.defineProperties(css, {
    //     [`#${this.atId} tr>*:nth-child(${index + 1})`]: {
    //       enumerable: true,
    //       value: {
    //         'text-align': col.align,
    //       },
    //     },
    //   });
    //   return css;
    // }, {}));
  },
  mounted() {
    console.log('Performance:', performance.now() - performanceTimer);
  },
  methods: {
    initLocalRows() {

    },
    selectAll(state) {
      console.time('Select All');
      this.isSelectedAll = state;
      this.runing = state ? 'selecting-all' : 'deselecting-all';
      this.$nextTick().then(() => {
        this.rows.forEach((row) => {
          if (this.localRows[row.id] === undefined) {
            this.$set(this.localRows, row.id, {
              pointer: row,
              isSelected: state,
            });
          }
          this.localRows[row.id].isSelected = state;
        });
      });
      this.$nextTick().then(() => { this.runing = false; });
      this.$emit('select-all');
      this.$emit('selection-change');
      console.timeEnd('Select All');
    },
    selectRow(row, state) {
      if (this.localRows[row.id] === undefined) {
        this.$set(this.localRows, row.id, {
          pointer: row,
          isSelected: state,
        });
      }
      this.localRows[row.id].isSelected = state;
      // ------ ------ ------ ------ ------ ------ ------
      // console.log('3', 'selectRow', performance.now());
      // ------ ------ ------ ------ ------ ------ ------
      this.$emit('select-row');
      this.$emit('selection-change');
      this.updateSelectAll();
    },
    updateSelectAll() {
      if (this.selectedRows.length === 0) {
        this.isSelectedAll = false;
      } else if (this.selectedRows.length === this.rows.length) {
        this.isSelectedAll = true;
      } else {
        this.isSelectedAll = 'indeterminate';
      }
    },
  },
};
</script>

<style lang="scss">
@import './AtTable.scss';
</style>
