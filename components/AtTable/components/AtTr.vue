<template>
  <tr class="at-table__tr">
    <th
      v-if="selection"
      class="at-table__select at-table__th"
      :class="{
        'at-table__th--sticky': fixed,
        'at-table__th--sticky-left': fixed,
      }"
    >
      <span class="at-table__cell">
        <AtCheckbox
          class="at-table__select-row-checkbox"
          :checked="localRow && localRow.isSelected"
          @change="(state)=>{ selectRow(row, state); }"
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
    row: {
      type: Object,
      required: true,
    },
    localRow: {
      type: Object,
      default: () => (undefined),
    },
  },
};
</script>

<style>

</style>
