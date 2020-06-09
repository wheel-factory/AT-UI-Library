<template>
  <tbody class="at-table__tbody">
    <at-tr
      v-for="(row, index) in rows"
      :key="`row-${index}`"
      :row-index="index"
      :row="row"
      :local-row="localRows[row.id]"
    />
  </tbody>
</template>

<script>
import AtTr from './AtTr.vue';

export default {
  name: 'AtTbody',
  parent: 'AtTable',
  components: { AtTr },
  props: {
    localRows: {
      type: Object,
      required: true,
    },
  },
  inject: ['cols', 'rows'],
};
</script>

<style>

</style>
