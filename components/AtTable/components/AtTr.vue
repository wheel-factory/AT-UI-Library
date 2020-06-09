<template>
  <tr class="at-table__tr">
    <th
      v-if="selection"
      class="at-table__select at-table__th"
      :class="{
        'at-table__th--sticky': fixed,
        'at-table__th--sticky-left': fixed,
      }"
      :style="{
        left: 0,
      }"
    >
      <span class="at-table__cell">
        <AtCheckbox
          class="at-table__select-row-checkbox"
          :checked="localRow && localRow.isSelected"
          @change="(state)=>{ handleCheckboxChange(row, state); }"
        />
      </span>
    </th>
    <template
      v-for="(col, colIndex) in cols"
    >
      <th
        v-if="col.fixed"
        :key="`cell-${colIndex}`"
        class="at-table__th"
        :class="{
          'at-table__th--sticky': col.fixed,
          'at-table__th--sticky-left': col.fixed === 'left',
          'at-table__th--sticky-right': col.fixed === 'right',
        }"
        :style="{
          left: col.left && `${col.left}px`,
          right: col.right && `${col.right}px`,
        }"
      >
        <span class="at-table__cell">
          {{ row[col.key] }}
        </span>
      </th>
      <td
        v-else
        :key="`cell-${colIndex}`"
        class="at-table__td"
      >
        <span class="at-table__cell">
          {{ row[col.key] }}
        </span>
      </td>
    </template>
  </tr>
</template>

<script>
import AtCheckbox from '../../AtCheckbox/AtCheckbox.vue';

export default {
  name: 'AtTr',
  inject: [
    'cols',
    'fixed',
    'selection',
    'selectRow',
  ],
  components: {
    AtCheckbox,
  },
  props: {
    rowIndex: {
      type: Number,
      required: true,
    },
    row: {
      type: Object,
      required: true,
    },
    localRow: {
      type: Object,
      default: () => (undefined),
    },
  },
  watch: {
    localRow() {
      // ------ ------ ------ ------ ------ ------ ------
      // console.log('6', 'AtTr Watch "localRow"', performance.now());
      // ------ ------ ------ ------ ------ ------ ------
    },
  },
  updated() {
    // ------ ------ ------ ------ ------ ------ ------
    // console.log('9', 'at-table__tr--updated', performance.now());
    // ------ ------ ------ ------ ------ ------ ------
  },
  methods: {
    handleCheckboxChange(row, state) {
      // ------ ------ ------ ------ ------ ------ ------
      // console.log('2', 'at-table__tr', performance.now());
      // ------ ------ ------ ------ ------ ------ ------
      this.selectRow(row, state);
    },
  },
};
</script>

<style>

</style>
