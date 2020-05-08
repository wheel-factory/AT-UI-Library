<template>
  <thead class="at-table__thead">
    <colgroup>
      <col
        v-for="(col, index) in cols"
        :key="`col-${index+1}`"
        :class="{
          [`${atId}__col-${kebabCase(col.key)}`]: true,
        }"
        :style="{
          width: col.width ? col.width + 'px' : false,
        }"
        :width="col.width ? col.width : false"
      >
    </colgroup>
    <tr class="at-table__thead-tr">
      <th
        v-for="(col, index) in cols"
        :key="`col-${index+1}`"
        :class="{
          'at-table__thead-th': true,
          'at-table__th--sticky': fixed,
          'at-table__th--sticky-left': col.fixed === 'left',
          'at-table__th--sticky-right': col.fixed === 'right',
        }"
        :style="{
          width: col.width ? col.width + 'px' : undefined,
          top: fixed ? 0 : undefined,
          left: col.left && `${col.left}px`,
          right: col.right && `${col.right}px`,
          'z-index': col.fixed ? 4 : undefined,
        }"
      >
        <span class="at-table__cell">
          {{ col.label }}
        </span>
      </th>
    </tr>
  </thead>
</template>

<script>
import kebabCase from 'lodash/kebabCase';

export default {
  name: 'AtThead',
  parent: 'AtTable',
  inject: ['atId', 'cols', 'fixed'],
  computed: {
    atIdKebabCase() {
      return kebabCase(this.atId);
    },
  },
  methods: {
    kebabCase,
  },
};
</script>

<style>

</style>
