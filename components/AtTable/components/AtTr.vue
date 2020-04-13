<template>
  <tr class="at-table__tr">
    <template
      v-for="(col, index) in cols"
    >
      <td
        v-if="!col.fixed"
        :key="`cell-${index}`"
      >
        <span class="at-cell">
          {{ row[col.key] }}
        </span>
      </td>
      <th
        v-else
        :key="`cell-${index}`"
        :class="{
          'at--sticky': col.fixed,
          'at--sticky-left': col.fixed === 'left',
          'at--sticky-right': col.fixed === 'right',
        }"
        :style="{
          left:0
        }"
      >
        <span class="at-cell">
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
