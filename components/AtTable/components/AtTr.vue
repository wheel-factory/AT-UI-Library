<template>
  <tr class="at-table__tr">
    <template
      v-for="(col, index) in cols"
    >
      <td
        v-if="!col.fixed"
        :key="`cell-${index}`"
        class="at-table__td"
      >
        <span class="at-table__cell">
          {{ row[col.key] }}
        </span>
      </td>
      <th
        v-else
        :key="`cell-${index}`"
        :class="{
          'at-table__th': true,
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
    </template>
  </tr>
</template>

<script>
export default {
  name: 'AtTr',
  inject: ['cols'],
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
