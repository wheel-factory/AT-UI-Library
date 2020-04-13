<template>
  <tbody class="at-table__tbody">
    <at-tr
      v-for="(row, index) in rows"
      :key="`row-${index}`"
      :row="row"
    />
  </tbody>
</template>

<script>
import AtTr from './AtTr.vue';

export default {
  name: 'AtTbody',
  parent: 'AtTable',
  components: { AtTr },
  inject: ['cols', 'rows'],
};
</script>

<style>

</style>
