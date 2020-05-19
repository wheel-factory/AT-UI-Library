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
        <input
          type="checkbox"
        >
      </span>
    </th>
    <template
      v-for="(col, index) in cols"
    >
      <th
        v-if="col.fixed"
        :key="`cell-${index}`"
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
        :key="`cell-${index}`"
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
export default {
  name: 'AtTr',
  inject: [
    'cols',
    'fixed',
    'selection',
  ],
  props: {
    row: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
};
</script>

<style>

</style>
