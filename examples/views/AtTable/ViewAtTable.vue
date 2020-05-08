<template>
  <div class="view view--at-table">
    <AtTableIntro />
    <h4>Examples</h4>
    <AtTableBase />
    <AtTableBorder />
    <AtTableStriped />
    <AtTableFixedHead />
    <AtTableFixedColumn />
  </div>
</template>

<script>
import AtTableIntro from './sections/0.AtTableIntro.vue';
import AtTableBase from './sections/1.AtTableBase.vue';
import AtTableBorder from './sections/2.AtTableBorder.vue';
import AtTableStriped from './sections/3.AtTableStriped.vue';
import AtTableFixedHead from './sections/4.AtTableFixedHead.vue';
import AtTableFixedColumn from './sections/5.AtTableFixedColumn.vue';

export default {
  name: 'ViewAtTable',
  components: {
    AtTableIntro,
    AtTableBase,
    AtTableBorder,
    AtTableStriped,
    AtTableFixedHead,
    AtTableFixedColumn,
  },
};
</script>

<style lang="scss">

</style>
