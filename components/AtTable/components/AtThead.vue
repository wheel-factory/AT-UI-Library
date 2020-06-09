<template>
  <thead class="at-table__thead">
    <colgroup>
      <col
        v-if="selection"
        style="width: 32px;"
        width="32"
      >
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
        v-if="selection"
        class="at-table__select at-table__select-all at-table__thead-th"
        :class="{
          'at-table__th--sticky': fixed,
          'at-table__th--sticky-left': fixed,
        }"
        :style="{
          width: '32px',
          top: fixed ? 0 : undefined,
          left: fixed ? 0 : undefined,
          'z-index': fixed ? 4 : undefined,
        }"
      >
        <span class="at-table__cell">
          <AtCheckbox
            :checked="isSelectedAll === true"
            :indeterminate="isSelectedAll === 'indeterminate'"
            @change="selectAll"
          />
        </span>
      </th>
      <th
        v-for="(col, index) in cols"
        :key="`col-${index+1}`"
        class="at-table__thead-th"
        :class="{
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
import AtCheckbox from '../../AtCheckbox/AtCheckbox.vue';

export default {
  name: 'AtThead',
  parent: 'AtTable',
  components: {
    AtCheckbox,
  },
  props: {
    isSelectedAll: {
      type: [Boolean, String],
      default: false,
      validator: (state) => ([false, 'indeterminate', true].includes(state)),
    },
  },
  inject: [
    'atId',
    'cols',
    'fixed',
    'selection',
    'selectAll',
  ],
  computed: {
    // atIdKebabCase() {
    //   return kebabCase(this.atId);
    // },
  },
  methods: {
    kebabCase,
  },
};
</script>

<style>

</style>
