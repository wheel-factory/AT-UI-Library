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
  watch: {
    localRows() {
      // ------ ------ ------ ------ ------ ------ ------
      // console.log('5', 'AtTbody Watch "localRows"', performance.now());
      // ------ ------ ------ ------ ------ ------ ------
    },
  },
  updated() {
    // ------ ------ ------ ------ ------ ------ ------
    // console.log('10', 'at-table__tbody--update', performance.now(), '\n\n');
    // ------ ------ ------ ------ ------ ------ ------
  },
};
</script>

<style>

</style>
