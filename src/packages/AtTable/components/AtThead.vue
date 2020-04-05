<template>
  <thead class="at-table__thead">
    <colgroup>
      <col
        v-for="(col, index) in cols"
        :key="`col-${index+1}`"
        :class="{
          [`${atId}__col-${col.key}`]: true,
        }"
      >
    </colgroup>
    <tr>
      <th
        v-for="(col, index) in cols"
        :key="`col-${index+1}`"
        :class="{
          'at--sticky': fixed,
          'at--sticky-top': fixed,
          'at--sticky-left': col.fixed === 'left',
          'at--sticky-right': col.fixed === 'right',
        }"
        :style="{
          width: col.width ? col.width + 'px' : undefined,
          left: col.fixed ? 0 : undefined,
          'z-index': col.fixed ? 4 : undefined,
        }"
      >
        <span class="at-cell">
          {{ col.label }}
        </span>
      </th>
    </tr>
  </thead>
</template>

<script>

export default {
  name: 'AtThead',
  parent: 'AtTable',
  inject: ['atId', 'cols', 'fixed'],
  methods: {
    // colClass(key) {

    // },
  },
};
</script>

<style>

</style>
