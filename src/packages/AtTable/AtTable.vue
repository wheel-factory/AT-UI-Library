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
import AtThead from './components/AtThead.vue';
import AtTbody from './components/AtTbody.vue';
import AtTfoot from './components/AtTfoot.vue';

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
      validator: (id) => /(?!-)^[a-z|-]+(?<!-)$/g.test(id),
    },
    rows: {
      type: Array,
      required: true,
      default: () => ([]),
      validator: (rows) => {
        console.log('AtTable Data:', rows);
        return true;
      },
    },
    cols: {
      type: Array,
      required: true,
      default: () => ([]),
      validator: (cols) => {
        console.log('AtTable columns:', cols);
        return true;
      },
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

};
</script>

<style lang="scss">
@import './styles/AtTable.scss';
</style>
